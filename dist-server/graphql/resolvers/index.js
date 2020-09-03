"use strict";
// import * as CommonCode from './common-code'
// import * as CommonCodeDetail from './common-code-detail'
//
// export const queries = [
//   CommonCode.Query,
//   CommonCodeDetail.Query
// ]
Object.defineProperty(exports, "__esModule", { value: true });
// export const mutations = [
//   CommonCode.Mutation,
//   CommonCodeDetail.Mutation
// ]
const employees_1 = require("./employee/employees");
const create_or_update_employee_1 = require("./employee/create-or-update-employee");
const delete_employee_1 = require("./employee/delete-employee");
const company_1 = require("./company/company");
const company_sub_query_1 = require("./company/company-sub-query");
const employees_sub_query_1 = require("./employee/employees-sub-query");
const create_company_1 = require("./company/create-company");
exports.queries = [employees_1.employeesResolver, company_1.companyResolver, company_sub_query_1.companySubQuery, employees_sub_query_1.employeesSubQuery];
exports.mutations = [create_or_update_employee_1.createOrUpdateEmployeeResolver, delete_employee_1.deleteEmployeeResolver, create_company_1.createCompanyResolver];
//# sourceMappingURL=index.js.map