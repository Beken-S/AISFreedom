import {
  AddProgramsRequest,
  AddProgramsRequestAttributes,
  AddProgramsRequestCreationAttributes,
  Department,
} from '../models';
import { BadRequestError, NotFoundError } from '../modules/error';
import {
  PaginateOutput,
  PaginationParams,
  AddProgramRequestFilterParams,
} from '../types';
import { getPageCount, getReport } from '../utils';

async function create(
  attributes: AddProgramsRequestCreationAttributes
): Promise<AddProgramsRequest> {
  return AddProgramsRequest.create(attributes);
}

async function getAll({
  page,
  items_on_page,
}: PaginationParams): Promise<
  AddProgramsRequest[] | PaginateOutput<AddProgramsRequest>
> {
  if (page != null && items_on_page != null) {
    const addProgramRequest = await AddProgramsRequest.scope([
      'orderById',
      { method: ['paginate', page, items_on_page] },
    ]).findAndCountAll();

    return {
      items: addProgramRequest.rows,
      page_count: getPageCount(items_on_page, addProgramRequest.count),
    };
  }
  return AddProgramsRequest.scope('orderById').findAll();
}

async function getById(id: number): Promise<AddProgramsRequest> {
  const addProgramRequest = await AddProgramsRequest.findByPk(id);

  if (addProgramRequest == null) {
    throw new NotFoundError(`Заявка с id=${id} не найдена.`);
  }

  return addProgramRequest;
}

async function reject(
  id: number,
  { comment }: AddProgramsRequestAttributes
): Promise<AddProgramsRequest> {
  const addProgramRequest = await getById(id);

  const { is_rejected, is_completed } = addProgramRequest.get({ plain: true });

  if (is_rejected) {
    throw new BadRequestError('Заявка уже отклонена.');
  }
  if (is_completed) {
    throw new BadRequestError(
      'Заявка выполнена и не может быть отклонена. Сначала сбросьте статус заявки.'
    );
  }

  addProgramRequest.set({
    is_rejected: true,
    processed_date: new Date(),
    comment,
  });

  return addProgramRequest.save();
}

async function complete(id: number): Promise<AddProgramsRequest> {
  const addProgramRequest = await getById(id);

  const { is_rejected, is_completed } = addProgramRequest.get({ plain: true });

  if (is_completed) {
    throw new BadRequestError('Заявка уже выполнена.');
  }
  if (is_rejected) {
    throw new BadRequestError(
      'Заявка отклонена и не может быть выполнена. Сначала сбросьте статус заявки.'
    );
  }

  addProgramRequest.set({
    is_completed: true,
    processed_date: new Date(),
  });

  return addProgramRequest.save();
}

async function reset(id: number): Promise<AddProgramsRequest> {
  const addProgramRequest = await getById(id);

  addProgramRequest.set({
    is_rejected: false,
    is_completed: false,
    processed_date: null,
    comment: null,
  });

  return addProgramRequest.save();
}

async function filter({
  status,
  created_from,
  created_to,
  processed_from,
  processed_to,
  page,
  items_on_page,
}: AddProgramRequestFilterParams): Promise<
  AddProgramsRequest[] | PaginateOutput<AddProgramsRequest>
> {
  if (page != null && items_on_page != null) {
    const addProgramRequest = await AddProgramsRequest.scope([
      'orderByStatus',
      'orderByCreationDate',
      { method: ['filterByStatus', status] },
      { method: ['filterByCreationDate', created_from, created_to] },
      { method: ['filterByProcessingDate', processed_from, processed_to] },
      { method: ['paginate', page, items_on_page] },
    ]).findAndCountAll();

    return {
      items: addProgramRequest.rows,
      page_count: getPageCount(items_on_page, addProgramRequest.count),
    };
  }
  return AddProgramsRequest.scope([
    'orderByStatus',
    'orderByCreationDate',
    { method: ['filterByStatus', status] },
    { method: ['filterByCreationDate', created_from, created_to] },
    { method: ['filterByProcessingDate', processed_from, processed_to] },
  ]).findAll();
}

async function report(filterParams: AddProgramRequestFilterParams) {
  const [requests, departments] = await Promise.all([
    filter(filterParams),
    Department.findAll(),
  ]);

  if (!Array.isArray(requests)) {
    throw new Error('requests должен быть массивом.');
  }

  return getReport(requests, departments, filterParams);
}

export { create, getAll, getById, reject, complete, reset, filter, report };
