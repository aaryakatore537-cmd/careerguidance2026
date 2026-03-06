import pdfplumber
import json

# Open the PDF file
pdf_path = "Career Handbook.pdf"
text_content = []

try:
    with pdfplumber.open(pdf_path) as pdf:
        num_pages = len(pdf.pages)
        print(f"Total pages: {num_pages}")
        
        for i, page in enumerate(pdf.pages):
            text = page.extract_text()
            text_content.append({
                'page': i + 1,
                'content': text
            })
            print(f"\n--- PAGE {i + 1} ---\n")
            # Print first 200 chars to check legibility
            if text:
                print(text[:500] + "...")
            else:
                print("[No text found on this page]")
            print("\n" + "="*80)
            
    # Save to JSON file
    with open('pdf_content_plumber.json', 'w', encoding='utf-8') as json_file:
        json.dump(text_content, json_file, indent=2, ensure_ascii=False)
    
    print("\n\nContent saved to pdf_content_plumber.json")
    
except Exception as e:
    print(f"Error: {e}")
