# backend/add_test_reminders.py

import sqlite3

# Connect to the SQLite database
conn = sqlite3.connect("backend/data/reminders.db")
cursor = conn.cursor()

# Create the table if not exists
cursor.execute('''
CREATE TABLE IF NOT EXISTS reminders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    medicine_name TEXT NOT NULL,
    dosage TEXT,
    time TEXT NOT NULL
)
''')

# Sample test reminders
sample_data = [
    ("ABCIXIMAB", "1 tablet", "08:00"),
    ("VOMILAST", "1 tablet", "21:00"),
    ("ZOCLAR", "1 capsule", "07:00"),
]

# Insert data
cursor.executemany("INSERT INTO reminders (medicine_name, dosage, time) VALUES (?, ?, ?)", sample_data)
conn.commit()

print("✅ Test reminders added to the database.")

conn.close()
