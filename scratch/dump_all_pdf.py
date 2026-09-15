import json

with open('scratch/pdf_slides.json', 'r', encoding='utf-8') as f:
    pdf_slides = json.load(f)

with open('scratch/all_pdf_slides.txt', 'w', encoding='utf-8') as out:
    for s in pdf_slides:
        out.write(f"=== SLIDE {s['slide_number']} ===\n")
        out.write(s['text'])
        out.write("\n" + "="*50 + "\n\n")

print("Wrote all 44 slides to scratch/all_pdf_slides.txt")
