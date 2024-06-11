/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:nKPRV1eBWyQ2@ep-delicate-fog-a1l2rjrx.ap-southeast-1.aws.neon.tech/prep-n-hire?sslmode=require',
    }
  };
  