const { PDFParse } = require('pdf-parse');
const p = new PDFParse();
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(p)));

