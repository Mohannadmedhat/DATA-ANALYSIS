# -*- coding: utf-8 -*-
import re

with open('src/data/slidesData.ts', encoding='utf-8') as f:
    text = f.read()

# Separate presentationAR and presentationEN
parts = text.split('export const presentationEN: ChapterPresentation =')
ar_text = parts[0]
en_text = parts[1] if len(parts) > 1 else ""

def parse_slides(section_text):
    # Find all slide blocks
    slides_raw = re.split(r'//\s*Slide\s+(\d+)', section_text)
    slides = []
    for i in range(1, len(slides_raw), 2):
        s_num = int(slides_raw[i])
        block = slides_raw[i+1]
        
        m_title = re.search(r'mainTitle:\s*[\'"`](.*?)[\'"`]', block)
        m_sub = re.search(r'subtitle:\s*[\'"`](.*?)[\'"`]', block)
        m_type = re.search(r'type:\s*[\'"`](.*?)[\'"`]', block)
        
        title = m_title.group(1) if m_title else "N/A"
        subtitle = m_sub.group(1) if m_sub else "N/A"
        stype = m_type.group(1) if m_type else "N/A"
        
        slides.append({
            'num': s_num,
            'title': title,
            'subtitle': subtitle,
            'type': stype,
            'raw': block[:200]
        })
    return slides

ar_slides = parse_slides(ar_text)
en_slides = parse_slides(en_text)

print(f"AR count: {len(ar_slides)}, EN count: {len(en_slides)}")

with open('scratch/comparison_report.txt', 'w', encoding='utf-8') as out:
    out.write(f"{'#':<3} | {'PDF / Topic':<35} | {'AR Title':<45} | {'EN Title':<40} | {'Type AR':<15} | {'Type EN':<15}\n")
    out.write("-" * 160 + "\n")
    for i in range(max(len(ar_slides), len(en_slides))):
        ar = ar_slides[i] if i < len(ar_slides) else {}
        en = en_slides[i] if i < len(en_slides) else {}
        out.write(f"{i+1:0>2}  | {'':<35} | {ar.get('title','N/A'):<45} | {en.get('title','N/A'):<40} | {ar.get('type','N/A'):<15} | {en.get('type','N/A'):<15}\n")

print("Report generated in scratch/comparison_report.txt")
