const fs = require('fs');
const files = ['src/pages/About.jsx', 'src/pages/CareGuide.jsx', 'src/pages/Contact.jsx'];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/src="\/img\//g, 'src="img/');
  fs.writeFileSync(f, content, 'utf8');
  console.log('Fixed ' + f);
});
