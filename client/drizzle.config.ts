import type { Config } from 'drizzle-kit'
import { config } from 'dotenv'

// anthing outside source cannot parse .env
config({ path: '.env' });

export default {
    driver: 'pg',
    schema: './src/lib/database/schema.ts',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!,
    },
} satisfies Config