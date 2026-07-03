import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

function getAllImages(dir) {
  let results = [];
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      results = results.concat(getAllImages(full));
    } else if (/\.(jpg|jpeg|avif|png)$/i.test(file)) {
      results.push(full);
    }
  }
  return results;
}

const images = getAllImages('./src/assets/images');
console.log('Total:', images.length, 'images');

for (const img of images) {
  const out = img.replace(/\.(jpg|jpeg|avif|png)$/i, '.webp');
  const metadata = await sharp(img).metadata();
  
  let width = Math.min(metadata.width, 1920);
  let quality = 85;
  let buffer;
  let attempts = 0;

  do {
    buffer = await sharp(img)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality, effort: 3 })
      .toBuffer();

    if (buffer.length > 102400) {
      width = Math.round(width * 0.85);
      if (quality > 70) quality -= 5;
    }
    attempts++;
  } while (buffer.length > 102400 && width > 300 && attempts < 20);

  fs.writeFileSync(out, buffer);
  fs.unlinkSync(img);
  console.log('✓', path.basename(out), Math.round(buffer.length/1024)+'KB', 'q:'+quality, width+'px');
}

console.log('All done!');