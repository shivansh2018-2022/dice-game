var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1);
randomNumber1 += 1;
var name = "./images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src" , name);
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2);
randomNumber2 += 1;
var name = "./images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" , name);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "player 1 wins!";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "player 2 wins!";
}
else document.querySelector("h1").innerHTML = "both wins!";