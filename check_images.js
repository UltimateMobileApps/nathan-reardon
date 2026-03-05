const fs = require('fs');
const patents = JSON.parse(fs.readFileSync('data/patents.json', 'utf8'));
const publicPath = 'public/patents';
const missingImages = [];

patents.forEach(patent => {
  const imagePath = patent.image.replace('/patents/', '');
  const fullPath = `${publicPath}/${imagePath}`;
  if (!fs.existsSync(fullPath)) {
    missingImages.push({ id: patent.id, title: patent.title, expected: patent.image });
  }
});

console.log('Patents without images (' + missingImages.length + '):');
missingImages.forEach(m => console.log(`  ${m.id}. ${m.title} -> ${m.expected}`));
