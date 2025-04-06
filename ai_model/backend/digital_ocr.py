import cv2
import pytesseract
import os

# Function to extract text from image using OCR
def extract_text(image_path):
    # Check if the image exists
    if not os.path.exists(image_path):
        print(f"❌ ERROR: File not found at {image_path}")
        return ""

    image = cv2.imread(image_path)  # Read the image using OpenCV

    if image is None:  # Check if the image was read successfully
        print(f"❌ ERROR: Could not open {image_path}. Check file format and permissions.")
        return ""

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)  # Convert the image to grayscale
    text = pytesseract.image_to_string(gray)  # Extract text using Tesseract OCR
    return text

# Define the image path (full path)
image_path = "C:/Users/rajaa/Desktop/medisana/data/prescriptions/prescription.jpg"

# Extract text from the image
extracted_text = extract_text(image_path)

# Check if text was successfully extracted
if extracted_text.strip():
    print("✅ Extracted Text:\n", extracted_text)

    # Save the extracted text into a file (prescription_text.txt)
    output_file_path = "C:/Users/rajaa/Desktop/medisana/data/prescription_text.txt"
    with open(output_file_path, "w", encoding="utf-8") as file:
        file.write(extracted_text)

    print(f"✅ Extracted text has been saved to '{output_file_path}'")
else:
    print("⚠️ No text extracted. Please check the image.")
