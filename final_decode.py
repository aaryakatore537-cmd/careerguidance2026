import json

def get_real_char(c):
    o = ord(c)
    # Mapping discovered:
    # Extracted -> Decoded
    # # (35) -> ' ' (32)  [-3]
    # C (67) -> H (72)    [+5]
    # = (61) -> B (66)    [+5]
    # d (100) -> o (111)  [+11]
    # i (105) -> t (116)  [+11]
    # Z (90) -> e (101)   [+11]
    # a (97) -> l (108)   [+11]
    # ^ (94) -> i (105)   [+11]
    # V (86) -> a (97)    [+11]
    
    if c == '#': return ' '
    if c == ',': return '/'
    
    # Numbers: 0/ -> 10, -.eY -> 12th
    # 0(48)->1(49), /(47)->0(48) [+1]
    # -(45)->1(49), .(46)->2(50) [+4]
    
    if ord('0') <= o <= ord('9'):
        # Usually numbers are shifted by +1 or +4 or similar
        # Let's try +1 first
        return chr(o + 1)
        
    # Heuristic for the rest:
    # If uppercase-ish extracted, try +5. If lowercase-ish extracted, try +11.
    if 60 <= o <= 85: # A-U ish
        return chr(o + 5)
    if 86 <= o <= 122: # V-z ish
        return chr(o + 11)
        
    return c

def smart_decode(text):
    if not text: return ""
    res = ""
    for char in text:
        res += get_real_char(char)
    return res

with open('pdf_content.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

with open('decoded_handbook.txt', 'w', encoding='utf-8') as f:
    for entry in data:
        f.write(f"--- PAGE {entry['page']} ---\n")
        f.write(smart_decode(entry['content']))
        f.write("\n\n")

print("Decoding complete. Check decoded_handbook.txt")
