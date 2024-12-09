// in src/api/index.ts
import createClient from "openapi-fetch";
import type { paths } from "./strapi";

const client = createClient<paths>({
    baseUrl: process.env.NEXT_PUBLIC_API_DOMAIN + '/api',
    headers: {
        Accept: "application/json",
    },
});
export { client };
