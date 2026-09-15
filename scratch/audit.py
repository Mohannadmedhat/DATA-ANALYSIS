import re
import json

with open('src/data/slidesData.ts', encoding='utf-8') as f:
    text = f.read()

# Let's inspect slide by slide
# Split by "// Slide"
slide_blocks = re.split(r'//\s*Slide\s+(\d+)', text)

print(f"Number of sections: {len(slide_blocks)}")
for i in range(1, len(slide_blocks), 2):
    slide_num = slide_blocks[i]
    block = slide_blocks[i+1]
    
    title_match = re.search(r'mainTitle:\s*[\'"`](.*?)[\'"`]', block)
    subtitle_match = re.search(r'subtitle:\s*[\'"`](.*?)[\'"`]', block)
    type_match = re.search(r'type:\s*[\'"`](.*?)[\'"`]', block)
    
    title = title_match.group(1) if title_match else "NO TITLE"
    subtitle = subtitle_match.group(1) if subtitle_match else "NO SUBTITLE"
    stype = type_match.group(1) if type_match else "NO TYPE"
    
    print(f"Slide {slide_num:0>2}: [{stype}] {title}")
