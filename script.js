// Quotes collection
const quotes = [
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { quote: "That it will never come again is what makes life so sweet.", author: "Emily Dickinson" },
    { quote: "It is never too late to be what you might have been.", author: "George Eliot" },
    { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { quote: "Pain is inevitable. Suffering is optional.", author: "Haruki Murakami" },
    { quote: "All the world's a stage, and all the men and women merely players.", author: "William Shakespeare" },
    { quote: "Be kind, for everyone you meet is fighting a hard battle.", author: "Plato" },
    { quote: "Unable are the loved to die for love is immortality.", author: "Emily Dickinson" },
    { quote: "Let me live, love, and say it well in good sentences.", author: "Sylvia Plath" },
    { quote: "Don't let your happiness depend on something you may lose.", author: "C.S. Lewis" },
    { quote: "We are all broken, that's how the light gets in.", author: "Ernest Hemingway" },
    { quote: "Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.", author: "Voltaire" },
    { quote: "Life is tough my darling, but so are you.", author: "Stephanie Bennett Henry" },
    { quote: "Self-awareness and self-love matter. Who we are is how we lead.", author: "Brene Brown" },
    { quote: "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.", author: "Stephen King" },
];

function getRandomQuote() {
    const quoteContainer = document.getElementById('quoteContainer');
    const quoteText = document.getElementById('quoteText');

    // Get a random quote from the collection
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Display the quote
    quoteText.innerHTML = `"${randomQuote.quote}" – ${randomQuote.author}`;
}

// Fetch a random quote on page load
getRandomQuote();
