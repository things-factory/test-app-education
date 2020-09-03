"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_koa_1 = require("apollo-server-koa");
exports.CompanyInput = apollo_server_koa_1.gql `
  input CompanyInput {
    name: String!
    description: String
    toLowerName: String
  }
`;
//# sourceMappingURL=company-input.js.map