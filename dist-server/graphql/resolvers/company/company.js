"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("../../../entities");
const typeorm_1 = require("typeorm");
exports.companyResolver = {
    async companies(_, { id, name, sortOption }) {
        let findCondition = {};
        let whereCondition;
        findCondition.order = { createdAt: 'ASC' };
        if (id) {
            return await entities_1.Company.findByIds([id]);
        }
        if (name) {
            whereCondition = Object.assign(Object.assign({}, whereCondition), { name: typeorm_1.Like(`${name}%`) });
        }
        if (whereCondition) {
            findCondition.where = whereCondition;
        }
        if (sortOption) {
            findCondition.order = sortOption;
        }
        // const qb = await Company.createQueryBuilder()
        // qb
        //   .select('*')
        //   .addSelect('lowercase(name) as lower_name')
        //   .orderBy('lower_name', 'ASC')
        return await entities_1.Company.find(findCondition);
    }
};
// order: { name: 'ASC' }
//# sourceMappingURL=company.js.map