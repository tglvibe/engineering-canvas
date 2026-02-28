const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src', 'i18n', 'locales');
const enFile = path.join(localesDir, 'en.json');

const enData = JSON.parse(fs.readFileSync(enFile, 'utf8'));

function pseudolocalize(obj, prefix) {
    if (typeof obj === 'string') {
        return `[${prefix}] ${obj}`;
    }
    if (Array.isArray(obj)) {
        return obj.map(item => pseudolocalize(item, prefix));
    }
    if (typeof obj === 'object' && obj !== null) {
        const newObj = {};
        for (const key in obj) {
            newObj[key] = pseudolocalize(obj[key], prefix);
        }
        return newObj;
    }
    return obj;
}

const targetLanguages = ['fr', 'de', 'es'];
// Update existing 'hi.json' and create new ones
targetLanguages.push('hi');

targetLanguages.forEach(lang => {
    const prefix = lang.toUpperCase();
    const newData = pseudolocalize(enData, prefix);
    const outFile = path.join(localesDir, `${lang}.json`);
    fs.writeFileSync(outFile, JSON.stringify(newData, null, 2));
    console.log(`Generated pseudolocalization for ${lang}.json`);
});
