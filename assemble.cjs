const fs = require('fs');
const path = require('path');

const parts = [
  'part1.tmp',
  'part2.tmp',
  'part3.tmp',
  'part4a.tmp',
  'part4b.tmp',
  'part4c.tmp',
  'part5a.tmp',
  'part5b.tmp',
  'part6.tmp',
  'part7.tmp'
];

let fullHtml = '';
for (const p of parts) {
  if (fs.existsSync(p)) {
    fullHtml += fs.readFileSync(p, 'utf8');
    fs.unlinkSync(p); // clean up temp file
  }
}

// Clean up helper generator files
const genFiles = ['gen_part1.cjs', 'gen_part2.cjs', 'gen_part3.cjs', 'gen_part4a.cjs', 'gen_part4b.cjs', 'gen_part4c.cjs', 'gen_part5a.cjs', 'gen_part5b.cjs', 'gen_part6.cjs', 'gen_part7.cjs'];
for (const gf of genFiles) {
  if (fs.existsSync(gf)) fs.unlinkSync(gf);
}

fs.writeFileSync('portfolio.html', fullHtml, 'utf8');
console.log('portfolio.html created successfully! Total bytes: ' + fullHtml.length);
