// You need to calculate the central letter(s) of a word.

// 	Workflow:

// 1.	User inputs a word. (Use “prompt” function).

// 2.	For cancelled input show “Canceled.”

// 3.	You need to trim spaces at the edges of the entered string (use .trim()).

// 4.	You need to validate the input data: after trimming the string must be non-empty and must contain no spaces inside (single words only).

// 5.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).

// 6.	If the word length is odd — alert the single central character. If the word length is even — alert the two central characters.

// 7.	Show message (example). Use ”alert” function

// Word:  hello

// Result:  l

const wordInput = prompt('Enter a word:');

if (wordInput === null) {
  alert('Canceled.');
} else {
  const word = wordInput.trim();

  const isValid =
    word.length > 0 &&
    !word.includes(' ');

  if (!isValid) {
    alert('Invalid input data');
  } else {
    const len = word.length;
    let result;

    if (len % 2 === 1) {
      // odd length
      result = word[Math.floor(len / 2)];
    } else {
      // even length
      result = word[len / 2 - 1] + word[len / 2];
    }

    alert(
      `Word: ${word}
Result: ${result}`
    );
  }
}
