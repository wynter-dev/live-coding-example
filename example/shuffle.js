function shuffle(s) {
  if (s.length === 1) return [s];

  const result = [];
  for (let i = 0; i < s.length; i++) {
    const fixed = s[i];
    const rest = s.slice(0, i) + s.slice(i + 1);
    const restShuffle = shuffle(rest);

    for (const word of restShuffle) {
      result.push(fixed + word);
    }
  }
  return result;
}

console.log(shuffle('abc'));
