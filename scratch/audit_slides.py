import re
import json

with open('scratch/all_pdf_slides.txt', 'r', encoding='utf-8') as f:
    pdf_text = f.read()

with open('src/data/slidesData.ts', 'r', encoding='utf-8') as f:
    app_text = f.read()

# Parse PDF slides
pdf_slides = {}
for m in re.finditer(r'=== SLIDE (\d+) ===\n(.*?)(?=\n={50}|$)', pdf_text, re.DOTALL):
    s_id = int(m.group(1))
    content = m.group(2).strip()
    pdf_slides[s_id] = content

# Print summary comparison
with open('scratch/slide_audit_report.txt', 'w', encoding='utf-8') as out:
    for i in range(1, 45):
        p_text = pdf_slides.get(i, 'NOT FOUND')
        p_lines = [l.strip() for l in p_text.split('\n') if l.strip()]
        out.write(f"=== SLIDE {i:02d} ===\n")
        out.write("PDF LINES:\n")
        for pl in p_lines[:8]:
            out.write(f"  • {pl}\n")
        out.write("\n")

print("Slide audit report written to scratch/slide_audit_report.txt")
