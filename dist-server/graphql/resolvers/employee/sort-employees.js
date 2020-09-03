"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("../../../entities");
exports.sortEmployeesResolver = {
    async sortEmployees(_, { sortOption }) {
        let sortCondition;
        sortCondition = Object.assign(Object.assign({}, sortCondition), { order: Object.assign({}, sortOption) });
        return await entities_1.Employee.find(sortCondition);
    }
};
//# sourceMappingURL=sort-employees.js.map