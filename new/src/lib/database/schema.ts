import { integer, numeric, pgEnum, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core"

export const userSYstemEnum = pgEnum("user_system_enum", ['system', 'user']);

export const chats = pgTable('chats', {
    id: serial('id').primaryKey(),
    pdfName: text("pdf_name").notNull(),
    pdfUrl: text("pdf_url").notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    userId: varchar('user_id', { length: 256 }).notNull(),
    fileKey: text("file_key").notNull(),
});

export const messages = pgTable('messages', {
    id: serial('id').primaryKey(),
    chatId: integer("chat_id").references(() => chats.id).notNull(),
    content: text("content").notNull(),
    cratedAt: timestamp('creatd_at').notNull().defaultNow(),
    role: userSYstemEnum("role").notNull()
})