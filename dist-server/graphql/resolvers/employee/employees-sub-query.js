"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("../../../entities");
exports.employeesSubQuery = {
    Employee: {
        async company(employee) {
            if (employee.companyId)
                return await entities_1.Company.findOne(employee.companyId);
        }
    }
};
//# sourceMappingURL=employees-sub-query.js.map