const fs = require('fs');
const path = require('path');

function replaceFileContent(filePath, regex, replacement) {
  const fullPath = path.join(__dirname, filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  content = content.replace(regex, replacement);
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Updated ${filePath}`);
}

// 1. Fix plants.js absolute paths
replaceFileContent(
  'src/data/plants.js',
  /"\/img\//g,
  '"img/'
);

// 2. Fix Home.jsx absolute paths
replaceFileContent(
  'src/pages/Home.jsx',
  /url\('\/img\//g,
  "url('img/"
);

// 3. Fix CareGuide.jsx absolute paths
replaceFileContent(
  'src/pages/CareGuide.jsx',
  /url\('\/img\//g,
  "url('img/"
);

// 4. Fix index.css missing hero-bg.png and absolute paths if any
replaceFileContent(
  'src/index.css',
  /url\('\.\.\/img\/hero-bg\.png'\)/g,
  "url('../img/fondo.jpg')"
);

console.log("All fixes applied.");
