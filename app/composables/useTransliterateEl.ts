const rules: Record<string, Record<string, string>> = {
  iso843_1997: {
    'Α': 'A', 'α': 'a',
    'Ά': 'Á', 'ά': 'á',
    'Β': 'V', 'β': 'v',
    'Γ': 'G', 'γ': 'g',
    'Δ': 'D', 'δ': 'd',
    'Ε': 'E', 'ε': 'e',
    'Έ': 'É', 'έ': 'é',
    'Ζ': 'Z', 'ζ': 'z',
    'Η': 'Ī', 'η': 'ī',
    'Ή': 'Ī́', 'ή': 'ī́',
    'Θ': 'Th', 'θ': 'th',
    'Ι': 'I', 'ι': 'i',
    'Ί': 'Í', 'ί': 'í',
    'Ϊ': 'Ï', 'ϊ': 'ï',
    'ΐ': 'ḯ',
    'Κ': 'K', 'κ': 'k',
    'Λ': 'L', 'λ': 'l',
    'Μ': 'M', 'μ': 'm',
    'Ν': 'N', 'ν': 'n',
    'Ξ': 'X', 'ξ': 'x',
    'Ο': 'O', 'ο': 'o',
    'Ό': 'Ó', 'ό': 'ó',
    'Π': 'P', 'π': 'p',
    'Ρ': 'R', 'ρ': 'r',
    'Σ': 'S', 'σ': 's', 'ς': 's',
    'Τ': 'T', 'τ': 't',
    'Υ': 'Y', 'υ': 'y',
    'Ύ': 'Ý', 'ύ': 'ý',
    'Ϋ': 'Ÿ', 'ϋ': 'ÿ',
    'ΰ': 'ÿ́',
    'Φ': 'F', 'φ': 'f',
    'Χ': 'Ch', 'χ': 'ch',
    'Ψ': 'Ps', 'ψ': 'ps',
    'Ω': 'Ō', 'ω': 'ō',
    'Ώ': 'Ṓ', 'ώ': 'ṓ',
  }
}

function transliterate(rule: { [key: string]: string }, text: string): string {
  text = text
    // αυ
    .replace(/ΑΥ/g, 'AU').replace(/Αυ/g, 'Au').replace(/αΥ/g, 'aU').replace(/αυ/g, 'au')
    .replace(/ΑΎ/g, 'AÚ').replace(/Αύ/g, 'Aú').replace(/αΎ/g, 'aÚ').replace(/αύ/g, 'aú')
    // ευ
    .replace(/ΕΥ/g, 'EU').replace(/Ευ/g, 'Eu').replace(/εΥ/g, 'eU').replace(/ευ/g, 'eu')
    .replace(/ΕΎ/g, 'EÚ').replace(/Εύ/g, 'Eú').replace(/εΎ/g, 'eÚ').replace(/εύ/g, 'eú')
    // ου
    .replace(/ΟΥ/g, 'OU').replace(/Ου/g, 'Ou').replace(/οΥ/g, 'oU').replace(/ου/g, 'ou')
    .replace(/ΟΎ/g, 'OÚ').replace(/Ού/g, 'Oú').replace(/οΎ/g, 'oÚ').replace(/ού/g, 'oú');

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
