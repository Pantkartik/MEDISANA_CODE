# backend/reminder_db.py

import sqlite3

def init_db():
    conn = sqlite3.connect("backend/data/reminders.db")
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS reminders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            medicine TEXT,
            dosage TEXT,
            timing TEXT
        )
    ''')
    conn.commit()
    conn.close()

def add_reminder(medicine, dosage, timing):
    conn = sqlite3.connect("backend/data/reminders.db")
    c = conn.cursor()
    c.execute("INSERT INTO reminders (medicine, dosage, timing) VALUES (?, ?, ?)", (medicine, dosage, timing))
    conn.commit()
    conn.close()

def get_all_reminders():
    conn = sqlite3.connect("backend/data/reminders.db")
    c = conn.cursor()
    c.execute("SELECT medicine, dosage, timing FROM reminders")
    rows = c.fetchall()
    conn.close()
    return rows
