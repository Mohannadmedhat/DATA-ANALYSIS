with open('scratch/all_pdf_slides.txt', 'r', encoding='utf-8') as f:
    text = f.read()

with open('scratch/target_slides_debug.txt', 'w', encoding='utf-8') as out:
    for target in [7, 20, 21, 24, 29, 38]:
        start_tag = f'=== SLIDE {target} ==='
        end_tag = f'=== SLIDE {target+1} ===' if target < 44 else 'THANK YOU'
        s_idx = text.find(start_tag)
        e_idx = text.find(end_tag) if end_tag in text else len(text)
        out.write(text[s_idx:e_idx].strip())
        out.write('\n' + '#'*60 + '\n\n')

print("Target slides written to scratch/target_slides_debug.txt")
