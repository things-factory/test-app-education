"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("../../../entities");
exports.createOrUpdateEmployeeResolver = {
    async createOrUpdateEmployee(_, { employee }) {
        const { id, companyId } = employee;
        let updateUser;
        if (id) {
            // update employee
            updateUser = await entities_1.Employee.findOne(id);
        }
        else {
            // create employee
            updateUser = new entities_1.Employee();
            updateUser.companyId = companyId;
        }
        Object.assign(updateUser, employee);
        return await updateUser.save();
    }
};
//# sourceMappingURL=create-or-update-employee.js.map