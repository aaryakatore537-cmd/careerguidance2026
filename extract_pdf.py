import PyPDF2
import json

# Open the PDF file
pdf_path = "Career Handbook.pdf"
text_content = []

try:
    with open(pdf_path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        num_pages = len(pdf_reader.pages)
        
        print(f"Total pages: {num_pages}\n")
        print("="*80)
        
        for page_num in range(num_pages):
            page = pdf_reader.pages[page_num]
            text = page.extract_text()
            text_content.append({
                'page': page_num + 1,
                'content': text
            })
            print(f"\n--- PAGE {page_num + 1} ---\n")
            print(text)
            print("\n" + "="*80)
        
        # Save to JSON file
        with open('pdf_content.json', 'w', encoding='utf-8') as json_file:
            json.dump(text_content, json_file, indent=2, ensure_ascii=False)
        
        print("\n\nContent saved to pdf_content.json")
        
except Exception as e:
    print(f"Error: {e}")
