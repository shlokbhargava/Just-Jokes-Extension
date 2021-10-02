document.getElementById("emoji").style.display = "none"

fetch('https://icanhazdadjoke.com/slack')
    .then(response => response.json()) 
    .then(joke => {
        const jokeText = joke.attachments[0].text
        const textArea = document.getElementById("text-area")
        textArea.innerHTML = jokeText
        document.getElementById("emoji").style.display = "block"
    })