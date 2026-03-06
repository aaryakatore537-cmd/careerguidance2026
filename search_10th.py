import json
import re

def brute_force_decode(text):
    if not text:
        return ""
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
            if char == '-': decoded += '1'
            elif char == '.': decoded += '2'
            elif char == '/': decoded += '0'
            else: decoded += chr(o + 1)
        else:
            decoded += char
    return decoded

with open('pdf_content.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

full_content = ""
for entry in data:
    decoded = brute_force_decode(entry['content'])
    full_content += f"PAGE {entry['page']}\n{decoded}\n\n"

# Search for After 10th
matches = re.findall(r"(?i).*after 10th.*", full_content)
print("--- MATCHES FOR 'AFTER 10th' ---")
for match in matches:
    print(match)

# Check for Polytechnic
matches_poly = re.findall(r"(?i).*polytechnic.*", full_content)
print("\n--- MATCHES FOR 'POLYTECHNIC' ---")
for match in matches_poly:
    print(match)

# Save the full decoded content for reference
with open('full_decoded_content.txt', 'w', encoding='utf-8') as f:
    f.write(full_content)
