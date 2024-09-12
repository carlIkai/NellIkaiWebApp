// const btn = document.querySelector('#submit');

// function submitClientData() {
//     console.log("it worked");
// }


// btn.addEventListener('click', function submitClientData() {
//     console.log("it worked");
// });

const form = document.querySelector("#contactForm");
const message = document.querySelector("#subMessage");
const nameInput = document.querySelector("#firstLast");
const emailInput = document.querySelector("#email")
form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    const p = document.createElement("p");
    p.innerHTML = (`Thank you for your submission ${name}. Confirmation email will be sent to ${email}.`)
    message.append(p);
})