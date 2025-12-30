const rules: Record<string, Record<string, string>> = {
  iso9984_1996: {
    'ა': 'a',
    'ბ': 'b',
    'გ': 'g',
    'დ': 'd',
    'ე': 'e',
    'ვ': 'v',
    'ზ': 'z',
    'ჱ': 'ē',
    'თ': 't̕',
    'ი': 'i',
    'კ': 'k',
    'ლ': 'l',
    'მ': 'm',
    'ნ': 'n',
    'ჲ': 'y',
    'ო': 'o',
    'პ': 'p',
    'ჟ': 'ž',
    'რ': 'r',
    'ს': 's',
    'ტ': 't',
    'ჳ': 'w',
    'უ': 'u',
    'ფ': 'p̕',
    'ქ': 'k̕',
    'ღ': 'ḡ',
    'ყ': 'q',
    'შ': 'š',
    'ჩ': 'č̕',
    'ც': 'c̕',
    'ძ': 'j',
    'წ': 'c',
    'ჭ': 'č',
    'ხ': 'x',
    'ჴ': 'ẖ',
    'ჯ': 'ǰ',
    'ჰ': 'h',
    'ჵ': 'ō'
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
