console.log("hitesh");

// Select all color buttons
const buttons = document.querySelectorAll('.button');

// Select body
const body = document.querySelector('body');

// Add click event to every button
buttons.forEach(function (button) {

    console.log(button);

    button.addEventListener('click', function (e) {

        console.log(e);
        console.log(e.target);

        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }

    });

});

