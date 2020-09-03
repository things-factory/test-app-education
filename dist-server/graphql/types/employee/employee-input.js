"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_koa_1 = require("apollo-server-koa");
exports.EmployeeInput = apollo_server_koa_1.gql `
  input EmployeeInput {
    id: String
    name: String
    age: Int
    email: String
    companyId: String
    department: String
  }
`;
//# sourceMappingURL=employee-input.js.map