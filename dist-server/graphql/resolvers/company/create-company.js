"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("../../../entities");
exports.createCompanyResolver = {
    async createCompany(_, { company }) {
        const { toLowerName } = company;
        let updateCompany;
        // create employee
        updateCompany = new entities_1.Company();
        updateCompany.toLowerName = toLowerName;
        Object.assign(updateCompany, company);
        return await updateCompany.save();
    }
};
//# sourceMappingURL=create-company.js.map