//Write Javascript to create a game of Snake, Water and Gun.The game should ask you to enter S, W or G. The Computer should be able to generate a random S,W or G and declare win or loss using alert.Use prompt or confirm wherever needed.

let word = ['S','W','G'];
alert("Welcome to the Game!");
alert('Here are the Instructions!\n1.There is a Snake,Water and Gun.\n2.The Snake can drink Water\n3.The Gun can shoot Snake\n4.The Water can drown Gun.');
let game = true;
while (game) {
    let guess = prompt("Choose the SNAKE(S), WATER(W) or GUN(G).");
    let comp = word[Math.floor(Math.random()*3)];

    if (guess == comp) {
        alert('Match Draw.');
    }
    else if(guess == 'G' && comp == 'S')
    {
        alert('You Won')
    }
    else if(guess == 'G' && comp == 'W')
    {
        alert('Computer Won')
    }
    else if(guess == 'S' && comp == 'G')
    {
        alert('Computer Won')
    }
    else if(guess == 'S' && comp == 'W')
    {
        alert('You Won')
    }
    else if(guess == 'W' && comp == 'G')
    {
        alert('You Won')
    }
    else if(guess == 'W' && comp == 'S')
    {
        alert('Computer Won')
    }
    else{
        alert('Invalid Input')
    }
    game = confirm('Do you wnat to play again?');
}