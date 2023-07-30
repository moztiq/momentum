const quotes = [{
  quote: "Like fire across the galaxy the Clone Wars spread. In league with the wicked Count Dooku, more and more planets slip. Against this threat, upon the Jedi Knights falls the duty to lead the newly formed army of the Republic. And as the heat of war grows, so, to, grows the prowess of one most gifted student of the Force.",
  author: "Yoda"
}, {
  quote: "Oh, my God. They found me. I don't know how, but they found me. Run for it, Marty!", author: "B2tf"
}, {
  quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.", author: "Potter"
},]

const quote = document.querySelector("#quote #message")
const author = document.querySelector("#quote #author")

const idx = Math.floor(Math.random() * quotes.length)
quote.innerText = quotes[idx].quote
author.innerText = `- ${quotes[idx].author}`
