
const express = require("express");
const app = express()
const PORT = 3000
const path = require("path")
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid');
uuid();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');


const comments = [
    {
        id: uuid(),
        userName: 'John',
        text: 'PTSD is a common diagnosis.'
    },
    {
        id: uuid(),
        userName: 'Alfonzo',
        text: 'I like feeling free.'
    },
    {
        id: uuid(),
        userName: 'Lyra',
        text: 'I have attachment issues.'
    },
    {
        id: uuid(),
        userName: 'Screamer',
        text: 'Don\'t mess with me'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/new', (req, res) => {
    res.render('comments/new')
})

app.post('/comments', (req,res) => {
    const { username, usercomment } = req.body;
    comments.push({ userName: username, text: usercomment, id: uuid() })
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find( c => c.id === id);
    res.render('comments/show', { comment })
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find( c => c.id === id);
    res.render('comments/edit', { comment })
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.text;
    const foundComment = comments.find( c => c.id === id);
    foundComment.text =newCommentText;
    res.redirect('/comments')
})

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
                <a href="/new">Leave A Comment</a>
                <a href="/comments">Community Message Board</a>
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