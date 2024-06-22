import badWords from "./badWords";
// For the single bad word
export function isBadWord(word: string): boolean {
    return badWords.includes(word.toLowerCase());
}

// For detecting the bad word in a senetence
export function containsBadWords(sentence: string): boolean {
    const words: string[] = sentence.split(' ');
    return words.some(word => isBadWord(word.toLowerCase()));
}
