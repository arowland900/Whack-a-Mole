//1. timer should start at 30 seconds 
//2. when the user clicks on the start game button, the timer should start decreasing by one second
//3. once the timer starts, the mole needs to appear 
//4. the mole should apprear in a random hole every one second
//5. if the user clicks the mole, increment the score by 1 
//6. when the time runs out, a popup message should appear with users score
//7. reset game board

// set interval, add event listener, Math.random
// document.addEventListener('DOMContentLoaded', function(){
    // global variables
    const button = document.getElementById('start-button')
    
    const timer = document.getElementById('timer')
    
    const score = document.getElementById('score')
    mole = document.getElementById('mole')
    holes = document.getElementsByClassName('hole')
    var difficulty = document.getElementById('difficulty')
    
    var timeLeft = 10
    var scoreBoard = 0

    var moleTime = 1000

    function gameDifficulty (){
        if (difficulty.innertext === "Easy"){
            moleTime = 1000
        }
        else if (difficulty.innertext === "Medium"){
            moleTime = 700
        }
        if (difficulty.innertext === "Hard"){
            moleTime = 500
        }
    }

    function incrementer (){
        scoreBoard += 1 
        score.innerText = scoreBoard
    }

    function moleMover(){
        holes[Math.floor(Math.random() * 9)].appendChild(mole)
    }

    function enableMole () {
        mole.addEventListener("click", moleMover);
    }
    
    function disableMole () {
        mole.removeEventListener('click', moleMover)
    }
    function myAlert () {
        alert(`Times up! Score: ${scoreBoard}`)
    }

    function startGame () {
        // get the value of the select tag and store in variable
        mole.style.display = "initial"
        enableMole()
        mole.addEventListener("click", incrementer)
        var movingMole = setInterval(moleMover, moleTime)
        var myTimer = setInterval(function(){
            timeLeft -= 1
            timer.innerText = timeLeft
            if (timeLeft === 0){
                disableMole()
                clearInterval(myTimer)
                myAlert()
                mole.style.display = "none"
                // debugger
                timeLeft = 10
                timer.innerText = timeLeft
                scoreBoard = 0
                score.innerText = scoreBoard
                debugger
            }
        },1000);
        
    }

    button.addEventListener("click", startGame)
// });











// var carsList = document.querySelector("#cars");

// var carData = [
//     {make: "Honda", model: "Civic", year: 2017},
//     {make: "BMW", model: "Aplina", year: 2009},
//     {make: "Toyota", model: "Prius", year: 2012}
// ]

// function addData(dataObject){
//     var listItem = document.createElement('li');
//     listItem.innerText = dataObject.year + " " + dataObject.model + " " + dataObject.make
//     listItem.addEventListener("click", function(){
        
//         setTimeout(function(){ 
//             alert("you just clicked on a " + dataObject.make); 
//         }, 1000);
//     })
//     carsList.appendChild(listItem);
// };

// carData.forEach(addData)


