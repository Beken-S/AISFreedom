import { Request } from 'express';
import { UploadedFile } from 'express-fileupload';

import { UserData } from '../models';

type PaginateOutput<T> = {
  items: T[];
  page_count: number;
};

type PaginationParams = {
  page: number;
  items_on_page: number;
};

function isPaginationParams(obj: unknown): obj is PaginationParams {
  if (obj == null) return false;
  if (typeof obj !== 'object') return false;
  if (!('page' in obj) || !('items_on_page' in obj)) return false;
  if (typeof (obj as PaginationParams).page != 'number') return false;
  if (typeof (obj as PaginationParams).items_on_page != 'number') return false;

  return true;
}

type PaginationOptions = {
  limit?: number;
  offset?: number;
};

type IdParam = {
  id: number;
};

function isIdParam(obj: unknown): obj is IdParam {
  if (obj == null) return false;
  if (typeof obj !== 'object') return false;
  if (!('id' in obj)) return false;
  if (typeof (obj as IdParam).id !== 'number') return false;

  return true;
}

type ProgramSearchOptions = {
  q: string;
  _in: ProgramSearchInOptions | ProgramSearchInOptions[];
  operation_system_id: number;
  program_type_id: number;
} & PaginationParams;

type ProgramSearchInOptions =
  | 'name'
  | 'description'
  | 'proprietary_counterparts';

const PROGRAM_SEARCH_IN_OPTIONS: ProgramSearchInOptions[] = [
  'name',
  'description',
  'proprietary_counterparts',
];

function isProgramSearchInOption(
  options: unknown
): options is ProgramSearchInOptions | ProgramSearchInOptions[] {
  if (Array.isArray(options)) {
    for (const option of options) {
      if (!PROGRAM_SEARCH_IN_OPTIONS.includes(option as ProgramSearchInOptions))
        return false;
    }
    return true;
  }
  return PROGRAM_SEARCH_IN_OPTIONS.includes(options as ProgramSearchInOptions);
}

type ProgramImages = {
  images: UploadedFile | UploadedFile[];
};

type AddProgramRequestStatus = 'current' | 'expired' | 'completed' | 'rejected';

function isAddProgramRequestStatus(
  status: unknown
): status is AddProgramRequestStatus {
  return (
    ['current', 'completed', 'rejected', 'expired'] as AddProgramRequestStatus[]
  ).includes(status as AddProgramRequestStatus);
}

type AddProgramRequestFilterParams = {
  status: AddProgramRequestStatus;
  created_from: Date;
  created_to: Date;
  processed_from: Date;
  processed_to: Date;
} & PaginationParams;

type Grade = {
  grade: number;
};

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

interface AuthRequest extends Request {
  user?: UserData;
}

export {
  PaginateOutput,
  PaginationOptions,
  PaginationParams,
  isPaginationParams,
  IdParam,
  isIdParam,
  ProgramSearchOptions,
  ProgramSearchInOptions,
  isProgramSearchInOption,
  ProgramImages,
  AddProgramRequestFilterParams,
  AddProgramRequestStatus,
  isAddProgramRequestStatus,
  Grade,
  Tokens,
  AuthRequest,
};
