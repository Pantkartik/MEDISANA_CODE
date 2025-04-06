import cv2
import pytesseract
from PIL import Image
import numpy as np

def preprocess_image(image_path):
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)  # Convert to grayscale
    img = cv2.threshold(img, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1]  # Apply thresholding
    return img

def extract_text(image_path):
    img = preprocess_image(image_path)
    text = pytesseract.image_to_string(img)
    return text.strip()

# Test one image
test_image = "backend/images/sample.jpg"  # Change with real path
print("Extracted Text:", extract_text(test_image))

