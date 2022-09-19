import * as validateAddProgramRequest from './AddProgramRequests.validators';
import * as validateArticle from './Articles.validators';
import checkFilesExist from './checkFiles';
import checkValidKey from './checkValidKey';
import * as validateDepartment from './Departments.validators';
import * as validateLicense from './Licenses.validators';
import * as validateNormativeDocument from './NormativeDocument.validators';
import * as validateOperationSystem from './OperationSystem.validators';
import * as validateProgram from './Programs.validators';
import * as validateProgramType from './ProgramTypes.validators';
import * as validateSource from './Sources.validators';
import * as validateUser from './Users.validator';
import validateIdParam from './validateIdParams';
import validatePaginationQuery from './validatePaginationQuery';

export {
  checkFilesExist,
  checkValidKey,
  validatePaginationQuery,
  validateIdParam,
  validateProgram,
  validateLicense,
  validateOperationSystem,
  validateProgramType,
  validateSource,
  validateDepartment,
  validateAddProgramRequest,
  validateNormativeDocument,
  validateArticle,
  validateUser,
};
