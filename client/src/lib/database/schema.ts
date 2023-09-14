import { integer, pgEnum, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core"

// chat table / chat db
// FIXME: This feature is for all members, but free version only get to have only 1 or 3 project(s) at a time.
// FIXME: Possibly only save data for 30 days if inactive

export const userSystemEnum = pgEnum("user_system_enum", ['system', 'user']);

export const chats = pgTable("chats", {
    id: serial("id").primaryKey(),
    pdfName: text("pdf_name").notNull(),
    pdfUrl: text("pdf_url").notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    usreId: varchar("user_id", { length: 256 }).notNull(),
    
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


// drizzle-kit makes sure that all databases are synced up with drizzle-orm

