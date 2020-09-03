"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("../../../entities");
const typeorm_1 = require("typeorm");
exports.companySubQuery = {
    Company: {
        async employees(company, { name, sortOption }) {
            let findCondition = {
                where: { company }
            };
            if (name) {
                findCondition.where.name = typeorm_1.Like(`%${name}%`);
            }
            if (sortOption) {
                findCondition.order = Object.assign({}, sortOption);
            }
            return await entities_1.Employee.find(findCondition);
        }
    }
};
//# sourceMappingURL=company-sub-query.js.map