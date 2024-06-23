
# Bad Words Detector 🚀🚀


# Description

A lightweight JavaScript package to detect and filter out bad words from text.
.

# Installation
- npm i detect-profanity


# Usage
- Import the isBadWord and containsBadWords functions from the package to check for bad words in your application.

git clone https://github.com/s21sd/Profanity

2. Navigate into the project directory:

cd webbuilder

3. Install dependencies:
npm install

4. Run the development server:

npm start
## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Usage/Examples

```javascript
import { isBadWord, containsBadWords } from 'bad-words-detector';

// Check if a word is a bad word
const word = 'xyz'; // Replace with your word
if (isBadWord(word)) {
    console.log(`${word} is a bad word!`);
} else {
    console.log(`${word} is safe.`);
}

// Check if a sentence contains bad words
const sentence = 'This is a test sentence with xyz bad word.'; // Replace with your sentence
if (containsBadWords(sentence)) {
    console.log('The sentence contains bad words.');
} else {
    console.log('The sentence is clean.');
}

```


## API

- isBadWord(word: string): boolean


# Returns:

- true if the word is a bad word, false otherwise.
## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for bug fixes, feature requests, or improvements.

