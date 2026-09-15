import json
import re

with open('scratch/pdf_slides.json', 'r', encoding='utf-8') as f:
    pdf_slides = json.load(f)

for s in pdf_slides:
    num = s['slide_number']
    text = s['text']
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    header = ' | '.join(lines[:3]) if lines else '--- NO TEXT ---'
    print(f"PDF Slide {num:02d}: {header[:120]}")
