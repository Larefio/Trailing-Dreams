const fs = require('fs');

let css = fs.readFileSync('Css/style.css', 'utf8');

css = css.replace(/\.site-header-premium\s*\{[\s\S]*?position:\s*sticky;/, 
`.site-header-premium {
  position: fixed;`);

css = css.replace(/\.logo-premium\s*\{[\s\S]*?height:\s*60px;[\s\S]*?width:\s*auto;/, 
`.logo-premium {
  width: 150px;
  height: auto;`);

css = css.replace(/(@media\s*\(min-width:\s*1024px\)\s*\{[\s\S]*?\.menu-button-premium\s*\{\s*display:\s*none;\s*\})/, 
`$1
  .logo-premium {
    width: 220px;
  }`);

fs.writeFileSync('Css/style.css', css);
console.log("Fixed logo size and navbar position.");
