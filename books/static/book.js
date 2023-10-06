function stringToList(inputString) {
    const wordsArray = inputString.replace(/\*/g, '').match(/\S+/g) || [];
    return wordsArray;
}

function replaceBrTag(wordsList) {
    return wordsList.map((word) => (word === 'br' ? '<br>' : word));
}

const next_page = document.querySelector('#next-page');
const previous_page = document.querySelector('#previous-page');

// Get the text container element
const textContainer = document.getElementById('hidden');
const page = document.querySelector('#page');
const page_number_el = document.querySelector('#page-number');

// Replace new lines with <br> elements
const book = textContainer.innerHTML.replace(/\n\n/g, '<br><br>');
const words = stringToList(book);
const final_words = replaceBrTag(words);
console.log(final_words);

// make a script that appends a div named page to the html so that the book is like an ebook

let max_word = 200;
let min_word = 0;
let page_number = 1;
let clickInProgress = false;

function show_page_func() {
    if (clickInProgress) return;
    clickInProgress = true;

    max_word += 200;
    min_word += 200;

    page.innerHTML = final_words.slice(min_word, max_word).join(' ');

    change_page_number(true);
    check_for_text();

    setTimeout(() => {
        clickInProgress = false;
    }, 500); // Adjust the delay (in milliseconds) as needed
}

function previous_page_func() {
    if (clickInProgress) return;
    clickInProgress = true;

    max_word = min_word;
    min_word -= 200;

    page.innerHTML = final_words.slice(min_word, max_word).join(' ');
    change_page_number(false);
    check_for_text();

    setTimeout(() => {
        clickInProgress = false;
    }, 500); // Adjust the delay (in milliseconds) as needed
}

function check_for_text() {
    if (page.innerHTML === '' || min_word < 0) {
        console.log('empty');
        max_word = 200;
        min_word = 0;

        page.innerHTML = final_words.slice(min_word, max_word).join(' ');
        reset_page_number();
    }
}

function change_page_number(add) {
    if (add) {
        page_number += 1;
        page_number_el.innerHTML = page_number;
    } else {
        page_number -= 1;
        page_number_el.innerHTML = page_number;
    }
}

function reset_page_number() {
    page_number = 0;
    page_number_el.innerHTML = page_number;
}

let is_full = false;

function requestFullscreen() {
    const docElement = document.documentElement;

    if (is_full == false) {
        if (docElement.requestFullscreen) {
            docElement.requestFullscreen();
        } else if (docElement.mozRequestFullScreen) { // For Firefox
            docElement.mozRequestFullScreen();
        } else if (docElement.webkitRequestFullscreen) { // For Chrome, Safari, and Opera
            docElement.webkitRequestFullscreen();
        } else if (docElement.msRequestFullscreen) { // For IE/Edge
            docElement.msRequestFullscreen();
        }
        is_full = true;
    }

}

next_page.addEventListener('click', function () {
    show_page_func();
    requestFullscreen();
});

previous_page.addEventListener('click', function () {
    previous_page_func();
});

check_for_text();
