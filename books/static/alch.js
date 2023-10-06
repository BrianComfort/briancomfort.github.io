function stringToList(inputString) {
    const wordsArray = inputString.replace(/\*/g, '').match(/\S+/g) || [];
    return wordsArray;
}

function replaceBrTag(wordsList) {
    return wordsList.map((word) => (word === 'br' ? '<br>' : word));
}

const textContainer = document.getElementById('hidden');
const book = textContainer.innerHTML.replace(/\n\n/g, '<br><br>');
const words = stringToList(book);
const final_words = replaceBrTag(words);
console.log(final_words);

const page = document.querySelector('.show')
page.innerHTML = final_words.slice(0, final_words.length).join(' ');