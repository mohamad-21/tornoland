import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	out: './drizzle',
	schema: './src/db/schema.ts',
	dialect: 'mysql',
	dbCredentials: {
		host: "localhost",
		user: "root",
		port: 3306,
		database: "tornoland"
	},
});
