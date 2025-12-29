const rules: Record<string, Record<string, string>> = {
  iso9_1995: {
    'А': 'A', 'а': 'a',
    'Б': 'B', 'б': 'b',
    'В': 'v', 'в': 'v',
    'Г': 'g', 'г': 'g',
    'Ґ': 'G̀', 'ґ': 'g̀',
    'Д': 'D', 'д': 'd',
    'Е': 'e', 'е': 'e',
    'Є': 'Ê', 'є': 'ê',
    'Ж': 'Ž', 'ж': 'ž',
    'З': 'Z', 'з': 'z',
    'И': 'I', 'и': 'i',
    'І': 'Ì', 'і': 'ì',
    'Ї': 'Ï', 'ї': 'ï',
    'Й': 'J', 'й': 'j',
    'К': 'K', 'к': 'k',
    'Л': 'L', 'л': 'l',
    'М': 'M', 'м': 'm',
    'Н': 'N', 'н': 'n',
    'О': 'O', 'о': 'o',
    'П': 'P', 'п': 'p',
    'Р': 'R', 'р': 'r',
    'С': 'S', 'с': 's',
    'Т': 'T', 'т': 't',
    'У': 'U', 'у': 'u',
    'Ф': 'F', 'ф': 'f',
    'Х': 'H', 'х': 'h',
    'Ц': 'C', 'ц': 'c',
    'Ч': 'Č', 'ч': 'č',
    'Ш': 'Š', 'ш': 'š',
    'Щ': 'Ŝ', 'щ': 'ŝ',
    'Ь': 'ʹ', 'ь': 'ʹ',
    'Ю': 'Û', 'ю': 'û',
    'Я': 'Â', 'я': 'â'
  }
}

function transliterate(rule: { [key: string]: string }, text: string): string {
  return text
    .split('')
    .map((char) => {
      return rule[char] || char;
    })
    .join('')
    .normalize('NFC');
}

export default function (type: string, text: string) {
  if (rules[type]) {
    return transliterate(rules[type], text);
  } else {
    return `This rule doesn't exist: ${type}`;
  }
}
