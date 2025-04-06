import sqlite3

conn = sqlite3.connect("backend/data/reminders.db")
cursor = conn.cursor()

cursor.execute("PRAGMA table_info(reminders)")
columns = cursor.fetchall()

print("📊 Current 'reminders' table columns:")
for col in columns:
    print(f"- {col[1]} ({col[2]})")

conn.close()
