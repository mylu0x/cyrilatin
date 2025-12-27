type transliterationType = 'iso9';

const rules: { iso9: { [key: string]: string } } = {
  iso9: {
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
  }
}

function transliterate(rule: { [key: string]: string }, text: string): string {
  return text
    .split('')
    .map((char) => {
      if (char.toUpperCase() === char) {
        return (rule[char.toUpperCase()] || char).toUpperCase();
      } else {
        return (rule[char.toUpperCase()] || char).toLowerCase();
      }
    })
    .join('');
}

export default function (type: transliterationType, text: string) {
  switch (type) {
    case 'iso9':
      return transliterate(rules['iso9'], text);
  }
}
