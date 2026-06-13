const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// Colors to CSS Variables Mapping
// Text colors
css = css.replace(/#4A4A7A/gi, 'var(--text-primary)');
css = css.replace(/#70709C/gi, 'var(--text-secondary)');

// Background colors
css = css.replace(/background-color:\s*#F0F8FF/gi, 'background-color: var(--bg-primary)');
css = css.replace(/background-color:\s*#FFFFFF/gi, 'background-color: var(--bg-card)');
css = css.replace(/background-color:\s*#FFF\b/gi, 'background-color: var(--bg-card)');
css = css.replace(/background:\s*#ffffff/gi, 'background: var(--bg-card)');
css = css.replace(/background:\s*white/gi, 'background: var(--bg-card)');
css = css.replace(/background-color:\s*white/gi, 'background-color: var(--bg-card)');

// Background shorthands that use F0F8FF
css = css.replace(/background:\s*#F0F8FF/gi, 'background: var(--bg-primary)');

// Specific cases like the linear-gradient in about-page
// background: linear-gradient(135deg, #F0F8FF 0%, #E6E6FA 100%);
css = css.replace(/linear-gradient\(135deg,\s*#F0F8FF\s*0%,\s*#E6E6FA\s*100%\)/gi, 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-card) 100%)');

fs.writeFileSync('src/index.css', css);
console.log('Replacements complete.');
