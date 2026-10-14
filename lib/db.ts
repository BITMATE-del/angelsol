import postgres from "postgres";
let sql:ReturnType<typeof postgres>|undefined;
export function database(){if(!process.env.DATABASE_URL)throw new Error("DATABASE_NOT_CONFIGURED");if(!sql)sql=postgres(process.env.DATABASE_URL,{max:5,connect_timeout:10});return sql;}
