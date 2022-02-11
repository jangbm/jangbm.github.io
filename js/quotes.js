const quotes = [
    {
        title: "just do it",
        name: "nike",
    },
    {
        title: "impossible",
        name: "adidas",
    },
    {
        title: "don't give up",
        name: "me",
    },
    {
        title: "hello jang",
        name: "hello bot",
    },
    {
        title: "we are hero",
        name: "hero man bot",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomNum = Math.floor(Math.random() * quotes.length);
const todaysQuotes = quotes[randomNum];

quote.innerText = todaysQuotes.title;
author.innerText = todaysQuotes.name;
