const fs = require('fs');
const path = require('path');

const distProductsDir = path.resolve(__dirname, '..', 'dist', 'products');
const productIndex = path.join(distProductsDir, 'index.html');

const productRoutes = [
  'phonics',
  'games',
  'phonic',
  'phonic-app',
  'letters',
  'numbers',
  'addition',
  'subtraction',
  'storytelling',
  'lettertracing',
  'lettertracingaudit',
  'tracing',
  'letter-tracing',
  'tracingaudit',
  'letter-tracing-audit',
  'hindiswar',
  'hindivyanjan',
  'ukg-phonics',
  'ukg-letters',
  'ukg-numbers',
  'ukg-addition',
  'ukg-subtraction',
  'ukg-tracing',
  'ukg-hindiswar',
  'ukg-hindivyanjan',
  'ukg-number-practice',
  'ukg-math-stories',
  'ukg-english-practice',
  'ukg-gk-science-themes',
  'ukg-gk',
  'ukg-stories',
  'ukg-science',
  'lkg-gk',
  'lkg-english-practice',
  'lkg-premath-practice',
  'lkg-gk-science-practice',
  'toddler-colours',
  'toddler-animals',
  'toddler-fruits',
  'toddler-vegetables',
  'toddler-shapes',
  'toddler-vehicles',
  'toddler-body-parts',
  'toddler-manners',
  'toddler-emotions',
  'toddler-matching',
  'toddler-rhymes',
  'toddler-stories',
  'grade2',
  'grade-2',
  'grade2english',
  'grade2-english',
  'grade-2-english',
  'grade2math',
  'grade3',
  'grade-3',
  'grade3math',
  'grade4',
  'grade-4',
  'grade4math',
  'grade5',
  'grade-5',
  'grade5math',
  'standard1-math',
  'standard1-english',
  'standard1-stories',
  'standard2-math',
  'standard2-english',
  'standard2-stories',
  'competition-prep',
  'visual-learning-3d',
  'stickerbook',
  'phonicssandbox',
  'pricing',
  'plans',
  'billing',
  'dashboard',
  'settings',
  'parent-center',
  'privacy',
  'terms',
  'refund-policy',
  'payment/success',
  'payment/failed',
  'beginning-sound',
  'sound-tile-builder',
  'phonics/games/beginning-sound',
  'phonics/games/sound-tile-builder',
  'phonics/games/consonant-blends',
];

if (!fs.existsSync(productIndex)) {
  console.warn('[products-fallbacks] Skipped: dist/products/index.html was not found.');
  process.exit(0);
}

for (const route of productRoutes) {
  const routeDir = path.join(distProductsDir, route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.copyFileSync(productIndex, path.join(routeDir, 'index.html'));

  const routeHtml = path.join(distProductsDir, `${route}.html`);
  fs.mkdirSync(path.dirname(routeHtml), { recursive: true });
  fs.copyFileSync(productIndex, routeHtml);
}

console.log(`[products-fallbacks] Created ${productRoutes.length} product route fallbacks.`);
