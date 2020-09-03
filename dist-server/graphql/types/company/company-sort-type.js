"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_koa_1 = require("apollo-server-koa");
exports.CompanySortDirection = apollo_server_koa_1.gql `
  enum CompanySortDirection {
    ASC
    DESC
  }
`;
exports.CompanySortType = apollo_server_koa_1.gql `
  input CompanySortType {
    name: CompanySortDirection
    createdAt: CompanySortDirection
    toLowerName: CompanySortDirection
  }
`;
//# sourceMappingURL=company-sort-type.js.map