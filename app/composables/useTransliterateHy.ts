const rules: Record<string, Record<string, string>> = {
  iso9985_1996: {
    'Ա': 'A', 'ա': 'a',
    'Բ': 'B', 'բ': 'b',
    'Գ': 'G', 'գ': 'g',
    'Դ': 'D', 'դ': 'd',
    'Ե': 'E', 'ե': 'e',
    'Զ': 'Z', 'զ': 'z',
    'Է': 'Ē', 'է': 'ē',
    'Ը': '', 'ը': 'ë',
    'Թ': '', 'թ': 'tʼ',
    'Ժ': '', 'ժ': 'ž',
    'Ի': 'I', 'ի': 'i',
    'Լ': 'L', 'լ': 'l',
    'Խ': 'X', 'խ': 'x',
    'Ծ': '', 'ծ': 'ç',
    'Կ': 'K', 'կ': 'k',
    'Հ': 'H', 'հ': 'h',
    'Ձ': 'J', 'ձ': 'j',
    'Ղ': '', 'ղ': 'ġ',
    'Ճ': '', 'ճ': 'č̣',
    'Մ': 'M', 'մ': 'm',
    'Յ': 'Y', 'յ': 'y',
    'Ն': 'N', 'ն': 'n',
    'Շ': '', 'շ': 'š',
    'Ո': 'O', 'ո': 'o',
    'Չ': '', 'չ': 'č',
    'Պ': 'P', 'պ': 'p',
    'Ջ': '', 'ջ': 'ǰ',
    'Ռ': '', 'ռ': 'ṙ',
    'Ս': 'S', 'ս': 's',
    'Վ': 'V', 'վ': 'v',
    'Տ': 'T', 'տ': 't',
    'Ր': 'R', 'ր': 'r',
    'Ց': '', 'ց': 'cʼ',
    'Ւ': 'W', 'ւ': 'w',
    'Փ': '', 'փ': 'pʼ',
    'Ք': '', 'ք': 'kʼ',
    'Օ': '', 'օ': 'ò',
    'Ֆ': 'F', 'ֆ': 'f'
  }
}

function transliterate(rule: { [key: string]: string }, text: string): string {
  text = text
    .replace(/ՈՒ/g, 'OW').replace(/Ու/g, 'Ow').replace(/ոՒ/g, 'oW').replace(/ու/g, 'ow')
    .replace(/ԵՎ/g, 'EW').replace(/Եվ/g, 'Ew').replace(/եՎ/g, 'eW').replace(/և/g, 'ew');

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
