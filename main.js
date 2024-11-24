import './src/assets/03.css';
import { heading as headingFontSize } from './src/assets/04a.module.css';
import { heading as headingColor } from './src/assets/04b.module.css';
console.log('module 02');

document.querySelector('.heading').className = `${headingFontSize} ${headingColor}`;