const quoteContainer = document.getElementById('quotes');

let quotes = [];

fetch('quotes.json')
    .then((response) => response.json())
    .then((data) => {
        quotes = data.quotes;
        get_random_quotes();
    })
    .catch((error) => console.error('Error fetching quotes:', error));

// Function to display a random quote
function get_random_quotes() {

    for (let i = 0; i < quotes.length; i++) {
        quoteContainer.innerHTML = quoteContainer.innerHTML + `
    <a href="../books/${quotes[i].link}"class="quotes">
    <div class="quotes-grid">
      <span class="quote-span">${quotes[i].text}</span>
      <div class="under-quote">
      <span class="quote-book">${quotes[i].book}</span>
      <span class="quote-author">${quotes[i].author}</span>
      </div>
      </div
    </a>
  `;
    }


}
