import re

with open('src/data/slidesData.ts', 'r', encoding='utf-8') as f:
    ts_code = f.read()

en_start = ts_code.find('export const presentationEN')
ar_code = ts_code[:en_start]
en_code = ts_code[en_start:]

# Let's inspect slide 2, 3, 4, 5, 8, 12, 13, 14, 17, 21, 24, 29, 33, 34, 35, 37, 38, 40, 41
for s_id in [2, 3, 4, 5, 8, 12, 13, 14, 17, 20, 21, 24, 29, 33, 34, 35, 37, 38, 40, 41]:
    m_ar = re.search(rf'id:\s*{s_id}\b.*?(?=\n    \{{\s*id:|\n  \]\s*\}})', ar_code, re.DOTALL)
    m_en = re.search(rf'id:\s*{s_id}\b.*?(?=\n    \{{\s*id:|\n  \]\s*\}})', en_code, re.DOTALL)
    
    ar_keys = set(re.findall(r'(\w+):', m_ar.group(0))) if m_ar else set()
    en_keys = set(re.findall(r'(\w+):', m_en.group(0))) if m_en else set()
    
    print(f"Slide {s_id:02d}:")
    print(f"  AR keys: {sorted(list(ar_keys))}")
    print(f"  EN keys: {sorted(list(en_keys))}")
