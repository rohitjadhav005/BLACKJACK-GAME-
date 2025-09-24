
let firstCard = 10
let secondCard =11
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false

let isAlive = true
let message = ""
let messageel = document.getElementById("message-el")
 let sumEL = document.getElementById("sumel")
 let cardel = document.getElementById("cards-el")
console.log(sumEL)

function startgame(){
    sumEL.textContent = "Sum: "+sum
    cardel.textContent = "Card: "+cards[0] +" + "+ cards[1]
    if (sum <=20){
        message = "Do you want to draw a new card ? "
        
    } else if (sum ==  21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }
    else{
        message = "You are out of game!"
        isAlive = false
      }
      messageel.textContent= message
}
function newcard(){

    let card = 8
    sum += card

}
function endgame(){

}

  
console.log(message)
