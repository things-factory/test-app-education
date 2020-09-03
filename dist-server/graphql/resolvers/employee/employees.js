"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("../../../entities");
const typeorm_1 = require("typeorm");
exports.employeesResolver = {
    async employees(_, { ids, name, sortOption }) {
        let findCondition;
        if (name) {
            findCondition = { name: typeorm_1.Like(`%${name}%`) };
        }
        if (ids) {
            return await entities_1.Employee.findByIds(ids);
        }
        if (sortOption) {
            findCondition = Object.assign(Object.assign({}, findCondition), { order: Object.assign({}, sortOption) });
        }
        let result = await entities_1.Employee.find(findCondition);
        return result;
    }
};
//# sourceMappingURL=employees.js.map