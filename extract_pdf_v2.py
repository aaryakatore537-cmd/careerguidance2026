import PyPDF2
import json

def decode_text(text):
    if not text:
        return ""
    decoded = ""
    for char in text:
        # Based on the discovery that i]Z -> the (shift of +11)
        # We apply the shift to all characters except common whitespace
        if char in ['\n', '\r', '\t', ' ']:
            decoded += char
        else:
            decoded += chr(ord(char) + 11)
    return decoded

# Open the PDF file
pdf_path = "Career Handbook.pdf"
text_content = []

try:
    with open(pdf_path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        num_pages = len(pdf_reader.pages)
        
        print(f"Total pages: {num_pages}\n")
        
        for page_num in range(num_pages):
            page = pdf_reader.pages[page_num]
            text = page.extract_text()
            # Check if text seems encoded (contains many special chars like #, ^, etc.)
            # If so, decode it. If it's already legible (like page 2), keep it.
            if "#" in text or "^" in text or "[" in text:
                decoded_text = decode_text(text)
            else:
                decoded_text = text
                
            text_content.append({
                'page': page_num + 1,
                'content': decoded_text
            })
            print(f"\n--- PAGE {page_num + 1} (Decoded) ---\n")
            print(decoded_text)
            print("\n" + "="*80)
        
        # Save to JSON file
        with open('pdf_content_decoded.json', 'w', encoding='utf-8') as json_file:
            json.dump(text_content, json_file, indent=2, ensure_ascii=False)
        
        print("\n\nContent saved to pdf_content_decoded.json")
        
except Exception as e:
    print(f"Error: {e}")
