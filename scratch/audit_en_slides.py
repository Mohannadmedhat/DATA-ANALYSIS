import json
import re

with open('src/data/slidesData.ts', 'r', encoding='utf-8') as f:
    ts_code = f.read()

en_start = ts_code.find('export const presentationEN')
en_code = ts_code[en_start:]

with open('scratch/all_pdf_slides.txt', 'r', encoding='utf-8') as f:
    pdf_text = f.read()

# Extract EN slide titles and subtitles
print("=== AUDIT OF ALL 44 SLIDES IN presentationEN ===")
for i in range(1, 45):
    m = re.search(rf'id:\s*{i}\b.*?(?=\n    \{{\s*id:|\n  \]\s*\}})', en_code, re.DOTALL)
    if not m:
        print(f"Slide {i}: NOT FOUND IN EN!")
        continue
    s_block = m.group(0)
    title_m = re.search(r'mainTitle:\s*[\'"`](.*?)[\'"`]', s_block)
    subtitle_m = re.search(r'subtitle:\s*[\'"`](.*?)[\'"`]', s_block)
    type_m = re.search(r'type:\s*[\'"`](.*?)[\'"`]', s_block)
    title = title_m.group(1) if title_m else 'NO TITLE'
    subtitle = subtitle_m.group(1) if subtitle_m else 'NO SUBTITLE'
    stype = type_m.group(1) if type_m else 'NO TYPE'
    print(f"Slide {i:02d} [{stype}]: {title}")
