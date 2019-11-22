'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    async find(ctx) {
        let countries;
        console.log(`APP_NAME=${process.env.APP_NAME}`);
        console.log("country.find query=", ctx.query);
        if (ctx.query._q) {
            countries = await strapi.services.country.search(ctx.query);
        } else {
            countries = await strapi.services.country.find(ctx.query);
        }
        return countries;
        // const countriesSanitized = countries.map(country =>
        //     sanitizeEntity(country, { model }));
        // return countriesSanitized;
    }
 };

// module.exports = { };
