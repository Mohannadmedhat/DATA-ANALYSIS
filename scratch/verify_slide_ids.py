import re

with open('src/data/slidesData.ts', 'r', encoding='utf-8') as f:
    code = f.read()

ar_start = code.find('export const presentationAR')
en_start = code.find('export const presentationEN')

code_ar = code[ar_start:en_start]
code_en = code[en_start:]

print("AR length:", len(code_ar), "EN length:", len(code_en))

# Check for all slide IDs 1..44 in AR and EN
missing_ar = []
missing_en = []

for i in range(1, 45):
    if not re.search(rf'id:\s*{i}\b', code_ar):
        missing_ar.append(i)
    if not re.search(rf'id:\s*{i}\b', code_en):
        missing_en.append(i)

print("Missing in AR:", missing_ar)
print("Missing in EN:", missing_en)
