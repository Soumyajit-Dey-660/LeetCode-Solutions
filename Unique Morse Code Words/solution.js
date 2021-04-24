/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let unique_count = {};
  let morse_code_map = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };
  words.map((word) => {
    let transformed_word = "";
    for (let i = 0; i < word.length; i++) {
      transformed_word += morse_code_map[word[i]];
    }
    if (unique_count[transformed_word]) {
      unique_count[transformed_word] += 1;
    } else {
      unique_count[transformed_word] = 1;
    }
  });
  return Object.keys(unique_count).length;
};
