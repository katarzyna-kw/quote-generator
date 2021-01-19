var quotes = [
    'Fill yourself up first.',
    'Your mistakes will make you better.',
    'A tiny tugboat can pull a gigantic ship all on its own.',
    'It is free to be kind.',
    'Everything in moderation, even moderation.',
    'There is still a lot of you waiting to come out.',
    'Delight in all you can.',
    'Enjoy the process.',
    'Be generous today.',
    'There is always more to learn.',
    'Enjoy today. Everything changes. One day, you will miss right now.',
    'Your speed does not matter. Forward is forward.',
    'Be who you needed when you were younger.',
    'Make yourself proud.',
    'Know yourself, know your worth.',
    'Invest in people who invest in you.',
    'You never know who needs you. Good energy is contagious.',
    'Too many people undervalue what they are, and overvalue what they are not.',
    'Creativity is intelligence having fun.'
]


function newQuote() {
    var randomNumber = Math.floor(Math.random()* (quotes.length));
    document.getElementById('displayQuote').innerText = quotes [randomNumber];
}