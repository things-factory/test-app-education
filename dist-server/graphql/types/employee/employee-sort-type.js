"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_koa_1 = require("apollo-server-koa");
exports.EmployeesSortDirection = apollo_server_koa_1.gql `
  enum EmployeesSortDirection {
    ASC
    DESC
  }
`;
exports.EmployeeSortType = apollo_server_koa_1.gql `
  input EmployeeSortType {
    name: EmployeesSortDirection
    age: EmployeesSortDirection
  }
`;
//# sourceMappingURL=employee-sort-type.js.map