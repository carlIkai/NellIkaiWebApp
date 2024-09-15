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

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')))

let htmlTop = `
    <!DOCTYPE html>
    <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Nell Ikai</title>
                <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
            </head>
            <body>
            <header>
                <h1>
                    <!-- <img src="android-chrome-80x80.png" alt="Nell Ikai" /> -->
                    Nell Ikai
                </h1>
            </header>
            <nav>
                <a href="index.html">Home</a>
                <a href="clinic.html">Clinic</a>
                <a href="contact.html">Contact</a>
            </nav>

            <main>
            `;    

let htmlBottom = `
    </main>
        <footer>
            <p>&copy; 2024 Nell Ikai</p>
        </footer>
    </body>
    </html>
    `;

app.post("/present", (req, res) => {
    const { firstLast, email, comments, day, hour, treatment, engagement} = req.body;
    res.send(`
        ${htmlTop}
        <section>
            <h2>Response</h2>
            <article>
                <h3>Hello, ${firstLast}.</h3>
                <p>Thank you for reaching out! You indicated that you are seeking
                <strong>${engagement}</strong> counselling for <strong>${treatment}</strong>. 
                I will contact you to let you know if <strong>${day}</strong> at <strong>${hour}</strong> 
                will work with my schedule. Thank you for the message that you left me 
                <strong>"${comments}"</strong>. I will contact you at <strong>${email}</strong>
                 to move forward.

            </article>
        </section>
        ${htmlBottom}`);
})

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '/views'))

// app.get('/', (req, res) => {
//     res.render('home.ejs')
// })

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