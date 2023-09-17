import { integer, numeric, pgEnum, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core"

// chat table / chat db
// FIXME: This feature is for all members, but free version only get to have only 1 at a time.
// FIXME: Possibly only save data for 30 days if inactive

export const userSystemEnum = pgEnum("user_system_enum", ['system', 'user']);
const tierEnum = pgEnum("user_tier", ['free', 'premium']);

export const chats = pgTable("chats", {
    id: serial("id").primaryKey(),
    pdfName: text("pdf_name").notNull(),
    pdfUrl: text("pdf_url").notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    userId: varchar("user_id", { length: 256 }).notNull(),
    
    // fileKey = S3 key that keeps the uploaded file
    fileKey: text("file_key").notNull(),
})

export const messages = pgTable("messages", {
    id: serial("id").primaryKey(),
    chatId: integer("chat_id").references(() => chats.id).notNull(),
    content: text("content").notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    role: userSystemEnum('role').notNull()
});

// FIXME: take a better look later
// FIXME: Look into how to get the userId from chats to this db
// schema for api count for free tier users
export const projectCount = pgTable("projects", {
    id: serial("id").primaryKey(),
    tier: tierEnum('tier').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    userId: varchar('user_id', { length: 256 }).notNull(),
    projects: numeric('projects').notNull()
})


// drizzle-kit makes sure that all databases are synced up with drizzle-orm

