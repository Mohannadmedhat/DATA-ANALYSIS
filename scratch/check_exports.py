import sys

with open('src/data/slidesData.ts', encoding='utf-8') as f:
    text = f.read()

# Check what presentations are exported
import re
exports = re.findall(r'export const (\w+)', text)
print("Exports in slidesData.ts:", exports)
