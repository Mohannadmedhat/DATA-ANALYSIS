import re
import json

with open('src/data/slidesData.ts', encoding='utf-8') as f:
    code = f.read()

# Let's check presentationAR slides vs presentationEN slides
# We can run a node script that imports presentationAR and presentationEN and dumps their slide titles and structures.
node_script = """
import { presentationAR, presentationEN } from './src/data/slidesData.ts';

console.log('presentationAR slides:', presentationAR.slides.length);
console.log('presentationEN slides:', presentationEN.slides.length);

for (let i = 0; i < 44; i++) {
  const ar = presentationAR.slides[i];
  const en = presentationEN.slides[i];
  console.log(`[Slide ${i+1}] AR: ${ar?.mainTitle} | EN: ${en?.mainTitle} | Type AR: ${ar?.type} | Type EN: ${en?.type}`);
}
"""

with open('scratch/compare.ts', 'w', encoding='utf-8') as f:
    f.write(node_script)
