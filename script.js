let apiQuotes = [];
//show me the quote
function newQuote() {
    //pick a random quote from Apiquotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}


//get quotes from API
async function getQuotes() {
    const apiUrl ='https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch(error) {
        alert(error);
        //catch error here
    }
}
getQuotes();