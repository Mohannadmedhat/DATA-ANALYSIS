import re

with open('src/data/slidesData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

for sid in [33, 34, 35]:
    print(f"=== SLIDE {sid} ===")
    matches = list(re.finditer(rf'id:\s*{sid},', text))
    for idx, m in enumerate(matches):
        lang = 'AR' if idx == 0 else 'EN'
        start = m.start()
        end = text.find(f'id: {sid+1},', start)
        print(f"--- {lang} ---")
        print(text[start:end])
