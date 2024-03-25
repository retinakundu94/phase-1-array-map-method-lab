const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
    let temp = "";
    let i = 0;
    tutorials.map(sentence => {
      temp += sentence[0].toUpperCase();
      for (let j=1; j<sentence.length; j++) {
        temp += sentence[j];
        if (sentence[j] === " ")
          temp += sentence[++j].toUpperCase();
      }
      tutorials[i++] = temp;
      temp = "";
    })
    return tutorials;
  }
  console.log(titleCased());
  