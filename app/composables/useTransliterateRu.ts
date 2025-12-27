const rules: Record<string, Record<string, string>> = {
  'iso9': {
    'А': 'A',
    'Б': 'B',
    'В': 'V',
    'Г': 'G',
    'Д': 'D',
    'Е': 'E',
    'Ё': 'Ë',
    'Ж': 'Ž',
    'З': 'Z',
    'И': 'I',
    'Й': 'J',
    'К': 'K',
    'Л': 'L',
    'М': 'M',
    'Н': 'N',
    'О': 'O',
    'П': 'P',
    'Р': 'R',
    'С': 'S',
    'Т': 'T',
    'У': 'U',
    'Ф': 'F',
    'Х': 'H',
    'Ц': 'C',
    'Ч': 'Č',
    'Ш': 'Š',
    'Щ': 'Ŝ',
    'Ъ': 'ʺ',
    'Ы': 'Y',
    'Ь': 'ʹ',
    'Э': 'È',
    'Ю': 'Û',
    'Я': 'Â'
  },
  'gost7.79-2000b': {
    'А': 'A',
    'Б': 'B',
    'В': 'V',
    'Г': 'G',
    'Д': 'D',
    'Е': 'E',
    'Ё': 'Yo',
    'Ж': 'Zh',
    'З': 'Z',
    'И': 'I',
    'Й': 'J',
    'К': 'K',
    'Л': 'L',
    'М': 'M',
    'Н': 'N',
    'О': 'O',
    'П': 'P',
    'Р': 'R',
    'С': 'S',
    'Т': 'T',
    'У': 'U',
    'Ф': 'F',
    'Х': 'Kh',
    'Ц': 'C',
    'Ч': 'Ch',
    'Ш': 'Sh',
    'Щ': 'Shh',
    'Ъ': 'ʺ',
    'Ы': 'y\'',
    'Ь': 'ʹ',
    'Э': 'e\'',
    'Ю': 'Yu',
    'Я': 'Ya'
  }
}

function transliterate(rule: { [key: string]: string }, text: string): string {
  return text
    .split('')
    .map((char) => {
      if (char === char.toUpperCase() && char.toLowerCase() !== char.toUpperCase()) {
        return (rule[char.toUpperCase()] || char).toUpperCase() + (rule[char.toUpperCase()] || char).slice(1);
      } else {
        return (rule[char.toUpperCase()] || char).toLowerCase();
      }
    })
    .join('');
}

export default function (type: string, text: string) {
  if (rules[type]) {
    return transliterate(rules[type], text);
  } else {
    return `This rule doesn't exist: ${type}`;
  }
}
