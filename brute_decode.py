import json
import re

def brute_force_decode(text):
    if not text:
        return ""
    
    # We'll try shifts from -20 to +20 and see which one produces the most 'e' or ' ' (spaces)
    # Actually, as discovered, different characters might have different shifts.
    # Let's try to map the most frequent characters.
    
    # Common mappings we found:
    # # (35) -> ' ' (32)  [-3]
    # = (61) -> 'B' (66)  [+5]
    # H (72) -> 'M' (77)  [+5]
    # D (68) -> 'I' (73)  [+5]
    # V (86) -> 'a' (97)  [+11]
    # X (88) -> 'c' (99)  [+11]
    # ] (93) -> 'h' (104) [+11]
    # Z (90) -> 'e' (101) [+11]
    
    decoded = ""
    for char in text:
        o = ord(char)
        if o == ord('#'):
            decoded += ' '
        elif o == ord(','):
            decoded += '/'
        elif 60 <= o <= 85: # Uppercase-ish range
            decoded += chr(o + 5)
        elif 86 <= o <= 122: # Lowercase-ish range
            decoded += chr(o + 11)
        elif 45 <= o <= 58: # Number/Symbol range
            # Based on 0/ -> 10 and -.eY -> 12th
            if char == '-': decoded += '1'
            elif char == '.': decoded += '2'
            elif char == '/': decoded += '0'
            else: decoded += chr(o + 1)
        else:
            decoded += char
    return decoded

# Let's try to decode the index and some content
with open('pdf_content.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print("--- DECODED CONTENT SAMPLES ---")
for entry in data[3:15]: # Pages 4-15
    print(f"\nPAGE {entry['page']}:")
    decoded = brute_force_decode(entry['content'])
    print(decoded[:1000])
    print("-" * 50)
