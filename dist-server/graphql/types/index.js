"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const company_1 = require("./company/company");
const company_input_1 = require("./company/company-input");
const employee_1 = require("./employee/employee");
const employee_input_1 = require("./employee/employee-input");
const company_sort_type_1 = require("./company/company-sort-type");
const employee_sort_type_1 = require("./employee/employee-sort-type");
// -------------------------------------------------
// import * as CommonCode from './common-code'
// import * as CommonCodeDetail from './common-code-detail'
// export const queries = [
//   CommonCode.Query,
//   CommonCodeDetail.Query
// ]
// export const mutations = [
//   CommonCode.Mutation,
//   CommonCodeDetail.Mutation
// ]
// export const types = [
//   ...CommonCode.Types,
//   ...CommonCodeDetail.Types
// ]
// ------------------------------------------
exports.queries = [
    /* GraphQL */ `
  employees(ids:[String], name: String, sortOption: EmployeeSortType): [Employee]
  companies(id: String, name: String, sortOption: CompanySortType): [Company]
  `
];
exports.mutations = [
    /* GraphQL */ `
  createOrUpdateEmployee(employee: EmployeeInput): Employee
  deleteEmployee(ids: [String]): [Employee]
  createCompany(company: CompanyInput): Company
  `
];
exports.types = [
    company_1.Company,
    company_input_1.CompanyInput,
    company_sort_type_1.CompanySortType,
    company_sort_type_1.CompanySortDirection,
    employee_1.Employee,
    employee_input_1.EmployeeInput,
    employee_sort_type_1.EmployeeSortType,
    employee_sort_type_1.EmployeesSortDirection
];
//# sourceMappingURL=index.js.map