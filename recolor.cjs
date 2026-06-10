const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Color mapping dictionaries based on "Cute Premium" rules
const colorMap = {
  // --- ROOT VARIABLES ---
  '#fbfaf7': '#F0F8FF', // bg-primary to AliceBlue
  '#1c291e': '#4A4A7A', // text-primary to Deep Periwinkle
  '#5a6b4a': '#666699', // text-secondary to Muted Periwinkle
  '#d37c59': '#FFB6C1', // accent-terracotta to Pink
  '#b86949': '#FF9EAB', // hover-terracotta to Deeper Pink
  '#455438': '#B3B3E6', // hover-olive to Darker Periwinkle

  // --- BACKGROUNDS & SURFACES ---
  '#f4f8f1': '#F0F8FF', // about/contact hero bg
  '#dde8cf': '#E6E6FA', // about hero gradient to Lilac
  '#fcfdf9': '#FFFFFF', // values card bg to White
  '#f8fbf5': '#FFFFFF', // quantity selector to White
  '#eef5e7': '#F0F8FF', // contact image overlay p
  
  // --- TEXT COLORS ---
  '#36523c': '#4A4A7A', // Dark green headings to Deep Periwinkle
  '#4b6f44': '#FFB6C1', // Medium green subheadings to Pink
  '#5f6d5b': '#70709C', // Gray-green text to Muted Periwinkle
  '#7b5e3b': '#CCCCFF', // Brown prices to Periwinkle
  '#74806f': '#8E8EA6', // Gray text
  '#7c8c74': '#8E8EA6', // Gray text
  '#667264': '#70709C', // Gray text
  '#6d7868': '#70709C', // Gray text
  '#9aa59b': '#B3B3E6', // Cart remove button to Darker Periwinkle
  '#a64545': '#FF9EAB', // Cart remove button hover to Pink
  
  // --- ACCENTS & BUTTONS ---
  '#6e8b3d': '#CCCCFF', // Buttons, active borders to Periwinkle
  '#8bb04f': '#B3B3E6', // Button hover to Darker Periwinkle
  '#c9dfb8': '#E6E6FA', // Summary text to Lilac
  '#a4c982': '#98FB98', // Footer links hover / Summary total to Soft Green
  
  // --- GRADIENTS / DARK ---
  '#2f4f3e': '#CCCCFF', // Summary card gradient start -> Periwinkle
  '#1a2c22': '#E6E6FA', // Summary card gradient end -> Lilac
  
  // --- SPECIFIC RGBA REPLACEMENTS ---
  'rgba(75, 111, 68, 0.04)': 'rgba(204, 204, 255, 0.2)', // borders
  'rgba(75, 111, 68, 0.03)': 'rgba(204, 204, 255, 0.15)',
  'rgba(75, 111, 68, 0.12)': 'rgba(204, 204, 255, 0.4)',
  'rgba(75, 111, 68, 0.06)': 'rgba(204, 204, 255, 0.25)',
  'rgba(122, 156, 84, 0.18)': 'rgba(255, 182, 193, 0.3)', // hover button bg -> Pink
  'rgba(122, 156, 84, 0.45)': 'rgba(204, 204, 255, 0.6)', // border hover
  'rgba(122, 156, 84, 0.2)': 'rgba(204, 204, 255, 0.3)',
  'rgba(139, 176, 79, 0.4)': 'rgba(204, 204, 255, 0.5)',
  'rgba(20, 40, 25, 0.9)': 'rgba(74, 74, 122, 0.8)', // Dark overlay
  'rgba(30, 50, 35, 0.4)': 'rgba(74, 74, 122, 0.4)'
};

// Case-insensitive replacement
for (const [oldColor, newColor] of Object.entries(colorMap)) {
  const regex = new RegExp(oldColor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  css = css.replace(regex, newColor);
}

// Write the modified CSS back
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Color replacement completed successfully!');
