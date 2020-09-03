"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("../../../entities");
exports.deleteEmployeeResolver = {
    async deleteEmployee(_, { ids }) {
        let employees = await entities_1.Employee.findByIds(ids);
        return await entities_1.Employee.remove(employees);
    }
};
//# sourceMappingURL=delete-employee.js.map