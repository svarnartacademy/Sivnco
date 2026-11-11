const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/Shiva/.gemini/antigravity/brain/4081f7e0-8a58-4ba7-8df2-80fd1a65b793/unified_audit';
const destDir = 'C:/Users/Shiva/.gemini/antigravity/brain/4081f7e0-8a58-4ba7-8df2-80fd1a65b793/unified_optimized';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

async function convert() {
  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.png'));
  for (const f of files) {
    const base = f.replace('.png', '');
    const inPath = path.join(srcDir, f);
    const outPath = path.join(destDir, `${base}.jpg`);
    await sharp(inPath)
      .resize({ width: 1400, withoutEnlargement: true })
      .jpeg({ quality: 82 })
      .toFile(outPath);
    console.log(`✓ Optimized ${f} -> ${base}.jpg`);
  }
}

convert().catch(console.error);
