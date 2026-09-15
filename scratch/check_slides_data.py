with open('src/data/slidesData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

import re

for slide_id in [7, 20, 21, 24, 29, 38]:
    print(f"***** SLIDE {slide_id} IN slidesData.ts *****")
    # find occurrences of id: {slide_id},
    matches = [m.start() for m in re.finditer(rf'id:\s*{slide_id},', text)]
    for i, idx in enumerate(matches):
        lang = "AR" if idx < text.find('export const presentationEN') else "EN"
        snippet = text[idx:idx+1500]
        # find end of object
        end_brace = snippet.find('\n    },')
        if end_brace != -1:
            snippet = snippet[:end_brace+7]
        print(f"--- {lang} (id: {slide_id}) ---")
        print(snippet[:600] + "\n...")
