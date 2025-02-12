import { pgTable, integer, uuid, varchar, text, pgEnum, date, timestamp } from 'drizzle-orm/pg-core'

export const STATUS = pgEnum('status', ['PENDING', 'APPROVED', 'REJECTED'])
export const ROLE = pgEnum('role', ['ADMIN', 'USER'])
export const BORROW_STATUS = pgEnum('borrow_status', ['BORROWED', 'RETURNED'])

export const users = pgTable('users', {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar('full_name', { length: 255 }).notNull(),
  email: text('email').unique().notNull(),
  universityId: integer('university_id').unique().notNull(),
  password: text('password').notNull(),
  universityCard: text('university_card').notNull(),
  status: STATUS('status').default('PENDING'),
  role: ROLE('role').default('USER'),
  lastActive: date('last_activity_date').defaultNow(),
  createdAt: timestamp('created_at', {
    withTimezone: true,
  }).defaultNow(),
})
