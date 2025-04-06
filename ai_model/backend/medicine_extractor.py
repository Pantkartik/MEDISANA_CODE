import os
import json
import re

# ✅ Step 1: Read extracted text from prescription_text.txt
text_file_path = "C:/Users/rajaa/Desktop/medisana/data/prescription_text.txt"

if not os.path.exists(text_file_path):
    print(f"❌ ERROR: Prescription text file not found at {text_file_path}.")
    exit()

with open(text_file_path, "r", encoding="utf-8") as file:
    extracted_text = file.read()  # Read full text

# ✅ Step 2: Extract medicine details using advanced regex patterns
medicine_pattern = re.findall(
    r"([A-Za-z\s.-]+)\s+([\d]+(?:mg|tablet|cap|ml)?)\s+([\w\s]+(?:\d+ hours|\d+ times a day|once a day)?)",
    extracted_text
)

medicines = []
for match in medicine_pattern:
    medicine_name = match[0].strip()
    dosage = match[1].strip()
    frequency = match[2].strip()

    medicines.append({
        "medicine": medicine_name,
        "dosage": dosage,
        "frequency": frequency
    })

# ✅ Step 3: Save extracted medicines to JSON file
output_path = "C:/Users/rajaa/Desktop/medisana/data/medicine_data.json"
os.makedirs("C:/Users/rajaa/Desktop/medisana/data", exist_ok=True)

with open(output_path, "w", encoding="utf-8") as f:
    json.dump(medicines, f, indent=4)

# ✅ Debugging Output
if medicines:
    print(f"✅ Medicines extracted and saved to '{output_path}'\n")
    for med in medicines:
        print(f"- {med['medicine']} | {med['dosage']} | {med['frequency']}")
else:
    print("⚠ No medicines extracted. Please check OCR text format.")
