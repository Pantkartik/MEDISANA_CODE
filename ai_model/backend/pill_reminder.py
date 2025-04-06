import sqlite3
import time
from datetime import datetime
import pyttsx3

# Initialize the TTS engine
engine = pyttsx3.init()
engine.setProperty('rate', 160)  # Adjust speed if needed

def speak(text):
    engine.say(text)
    engine.runAndWait()

# Connect to the SQLite database
conn = sqlite3.connect("backend/data/reminders.db")
cursor = conn.cursor()

def check_reminders():
    now = datetime.now().strftime('%H:%M')
    cursor.execute("SELECT medicine_name, dosage, time FROM reminders WHERE time = ?", (now,))
    results = cursor.fetchall()
    for medicine_name, dosage, reminder_time in results:
        message = f"It's {reminder_time}. Please take {dosage} of {medicine_name}."
        print(f"🔔 {message}")
        speak(message)

if __name__ == "__main__":
    print("⏳ Reminders Scheduled. Running in the background...")
    while True:
        check_reminders()
        time.sleep(60)
