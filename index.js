function findLongestWord(sentence) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const words = sentence.split(" ");

  let longestWord = "";
  let maxVowels = 0;

  for (let word of words) {
    //Filter only english letters
    const filteredWord = word.split("").filter((w) => /^[a-zA-Z]+$/.test(w));

    //Find number of vowels
    const vows = filteredWord.filter((w) => vowels.includes(w));

    if (
      filteredWord.length > longestWord.length ||
      (filteredWord.length === longestWord.length && vows.length > maxVowels)
    ) {
      longestWord = filteredWord.join("");
      maxVowels = vows.length;
    }
  }

  return longestWord;
}
