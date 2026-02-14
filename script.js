const quotes = [
    { text: "It’s not my machine, it’s your code.", author: "Anonymous" },
    { text: "Software is like sex: it's better when it's free.", author: "Linus Torvalds" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
    { text: "Optimism is an occupational hazard of programming: feedback is the treatment.", author: "Kent Beck" },
    { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
    { text: "Make it work, make it right, make it fast.", author: "Kent Beck" }
];

const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Function to get a random quote
function getQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteText.innerText = `"${quote.text}"`;
    authorText.innerText = `- ${quote.author}`;
}

// Event listener for new quote button
newQuoteBtn.addEventListener('click', getQuote);

// Theme Toggle Logic
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    let theme = 'light';
    if (body.classList.contains('dark-mode')) {
        theme = 'dark-mode';
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    localStorage.setItem('theme', theme);
});

// Initial quote load
getQuote();