{
  //Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
  

  const countWordOccurrences = (sentence : string , word : string) : number=> {
      const convertSentence = sentence.toLocaleLowerCase();
      const convertWord = word.toLocaleLowerCase();
      const spliteWord = convertSentence.split(' ');
      return spliteWord.filter(w => w === convertWord).length;
  };
 
  const numberOfSentance = countWordOccurrences('I love ts','ts')

}