// const btn = document.querySelector('#submit');

// function submitClientData() {
//     console.log("it worked");
// }


// btn.addEventListener('click', function submitClientData() {
//     console.log("it worked");
// });
const express = require("express");
const app = express()
const PORT = 3000
const path = require("path")

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home.ejs')
})

// app.get('/r/:phish', (req, res) => {
//     const { phish } = req.params;
//     res.render('home', { phish })
// })

app.use((req, res) => {
    console.log("Request made")
    
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})

// const form = document.querySelector("#contactForm");
// const message = document.querySelector("#subMessage");
// const nameInput = document.querySelector("#firstLast");
// const emailInput = document.querySelector("#email")
// form.addEventListener("submit", function (evt) {
//     evt.preventDefault();
//     const name = nameInput.value;
//     const email = emailInput.value;
//     const p = document.createElement("p");
//     p.innerHTML = (`Thank you for your submission ${name}. Confirmation email will be sent to ${email}.`)
//     message.append(p);
// })