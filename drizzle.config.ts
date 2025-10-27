import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	out: './drizzle',
	schema: './src/db/schema.ts',
	dialect: 'mysql',
	dbCredentials: {
		url: "mysql://root:vdTeBGfmnmQAJjfWFZSQYUEnlNRMYQlr@turntable.proxy.rlwy.net:15407/railway"
	},
});