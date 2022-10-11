let score1 = 0
let score2 = 0
document.getElementById("homescore").textContent = score1
document.getElementById("awayscore").textContent = score2
let homescores = document.getElementById("homescore")
let awayscores = document.getElementById("awayscore")

function homePlusOne() {
    score1 += 1
    console.log(score1)
    homescores.textContent = score1
}

function homePlusTwo() {
    score1 += 2
    console.log(score1)
    homescores.textContent = score1
}

function homePlusThree() {
    score1 += 3
    console.log(score1)
    homescores.textContent = score1
}

function awayPlusOne() {
    score2 += 1
    console.log(score1)
    awayscores.textContent = score2
}

function awayPlusTwo() {
    score2 += 2
    console.log(score1)
    awayscores.textContent = score2
}

function awayPlusThree() {
    score2 += 3
    console.log(score1)
    awayscores.textContent = score2
}