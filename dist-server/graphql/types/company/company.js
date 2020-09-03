"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_koa_1 = require("apollo-server-koa");
exports.Company = apollo_server_koa_1.gql `
  type Company {
    id: String
    name: String
    description: String
    toLowerName: String
    employees(name: String, sortOption: EmployeeSortType): [Employee]
    createdAt: String
    updatedAt: String
  }
`;
//# sourceMappingURL=company.js.map