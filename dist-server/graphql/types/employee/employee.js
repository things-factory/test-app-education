"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_koa_1 = require("apollo-server-koa");
exports.Employee = apollo_server_koa_1.gql `
  type Employee {
    id: String
    name: String
    age: Int
    email: String
    departmant: String
    company: Company
  }
`;
//# sourceMappingURL=employee.js.map