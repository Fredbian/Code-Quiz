// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score



// get elements
let start_btn = document.querySelector('.start_btn')
let clock = document.querySelector('.clock')
let start = document.querySelector('.start')
let question1 = document.querySelector('.question1')
let question2 = document.querySelector('.question2')
let question3 = document.querySelector('.question3')
let question4 = document.querySelector('.question4')
let question = document.querySelector('.question')
let end = document.querySelector('.end')
let timeScore = document.querySelector('.timeScore')
let cards_header = document.querySelector('.cards_header')
let quiz1_btns = document.querySelectorAll('.quiz1_btns')
let quiz1_btn1 = document.querySelector('#quiz1_btn1')
let quiz1_btn2 = document.querySelector('#quiz1_btn2')
let quiz1_btn3 = document.querySelector('#quiz1_btn3')
let quiz1_btn4 = document.querySelector('#quiz1_btn4')
let quiz2_btn1 = document.querySelector('#quiz2_btn1')
let quiz2_btn2 = document.querySelector('#quiz2_btn2')
let quiz2_btn3 = document.querySelector('#quiz2_btn3')
let quiz2_btn4 = document.querySelector('#quiz2_btn4')
let quiz3_btn1 = document.querySelector('#quiz3_btn1')
let quiz3_btn2 = document.querySelector('#quiz3_btn2')
let quiz3_btn3 = document.querySelector('#quiz3_btn3')
let quiz3_btn4 = document.querySelector('#quiz3_btn4')
let quiz4_btn1 = document.querySelector('#quiz4_btn1')
let quiz4_btn2 = document.querySelector('#quiz4_btn2')
let quiz4_btn3 = document.querySelector('#quiz4_btn3')
let quiz4_btn4 = document.querySelector('#quiz4_btn4')
let correct = document.querySelector('.correct')
let wrong = document.querySelector('.wrong')
let finalScore = document.querySelector('.finalScore')
let initials = document.querySelector('#initials')
let score_list = document.querySelector('.score_list')
let score_page = document.querySelector('#score_page')
let end_button = document.querySelector('.end_button')
let goBack_btn = document.querySelector('.goBack_btn')
let clearList_btn = document.querySelector('.clearList_btn')
let highScoresList = document.querySelector('.highScoresList')
let i = 0






// After click the start btn, the timer will start and show first question card, when time is up, jump to 'end' card
start_btn.addEventListener('click', function () {
    start.style.display = 'none'
    score_list.style.display = 'none'
    question1.style.display = 'block'
    i = 100
    timer = setInterval(function () {
        i--
        clock.innerHTML = i
        if (i === 0) {
            clearInterval(timer)
            question1.style.display = 'none'
            question2.style.display = 'none'
            question3.style.display = 'none'
            question4.style.display = 'none'
            correct.style.display = 'none'
            wrong.style.display = 'none'
            score_list.style.display = 'none'
            end.style.display = 'block'
        }
    }, 1000)
})

/* this is Question1, when click buttom '1,2,4', marks will show 'wrong', when click 'button3', will show 'correct', when click 'next', will go to next question */
// wrong answers q1
quiz1_btn1.addEventListener('click', function () {
    wrong.style.display = 'block'
    clock.innerHTML -= 15
    i = clock.innerHTML
    question1.style.display = 'none'
    question2.style.display = 'block'
})

quiz1_btn2.addEventListener('click', function () {
    wrong.style.display = 'block'
    clock.innerHTML -= 15
    i = clock.innerHTML
    question1.style.display = 'none'
    question2.style.display = 'block'
})

quiz1_btn4.addEventListener('click', function () {
    wrong.style.display = 'block'
    clock.innerHTML -= 15
    i = clock.innerHTML
    question1.style.display = 'none'
    question2.style.display = 'block'
})

// correct answer q1
quiz1_btn3.addEventListener('click', function () {
    correct.style.display = 'block'
    question1.style.display = 'none'
    question2.style.display = 'block'
})

/* this is Question2, when click buttom '1,2,3', marks will show 'wrong', when click 'button4', will show 'correct', click any button, it will go to next question */
// wrong answers q2
quiz2_btn1.addEventListener('click', function () {
    correct.style.display = 'none'
    wrong.style.display = 'block'
    clock.innerHTML -= 15
    i = clock.innerHTML
    question2.style.display = 'none'
    question3.style.display = 'block'
})

quiz2_btn2.addEventListener('click', function () {
    correct.style.display = 'none'
    wrong.style.display = 'block'
    clock.innerHTML -= 15
    i = clock.innerHTML
    question2.style.display = 'none'
    question3.style.display = 'block'
})

quiz2_btn3.addEventListener('click', function () {
    correct.style.display = 'none'
    wrong.style.display = 'block'
    clock.innerHTML -= 15
    i = clock.innerHTML
    question2.style.display = 'none'
    question3.style.display = 'block'
})

// correct answer q2
quiz2_btn4.addEventListener('click', function () {
    wrong.style.display = 'none'
    correct.style.display = 'block'
    question2.style.display = 'none'
    question3.style.display = 'block'
})

/* this is Question3, when click buttom '1,2,3', marks will show 'wrong', when click 'button4', will show 'correct', click any button, it will go to next question */
// wrong answers q3
quiz3_btn1.addEventListener('click', function () {
    correct.style.display = 'none'
    wrong.style.display = 'block'
    clock.innerHTML -= 15
    i = clock.innerHTML
    question3.style.display = 'none'
    question4.style.display = 'block'
})

quiz3_btn2.addEventListener('click', function () {
    correct.style.display = 'none'
    wrong.style.display = 'block'
    clock.innerHTML -= 15
    i = clock.innerHTML
    question3.style.display = 'none'
    question4.style.display = 'block'
})

quiz3_btn3.addEventListener('click', function () {
    correct.style.display = 'none'
    wrong.style.display = 'block'
    clock.innerHTML -= 15
    i = clock.innerHTML
    question3.style.display = 'none'
    question4.style.display = 'block'
})

// correct answer q3
quiz3_btn4.addEventListener('click', function () {
    wrong.style.display = 'none'
    correct.style.display = 'block'
    question3.style.display = 'none'
    question4.style.display = 'block'
})

/* this is Question4, when click buttom '1,2,4', marks will show 'wrong', when click 'button3', will show 'correct', click any button, it will go to next question */
// wrong answers q4
quiz4_btn1.addEventListener('click', function () {
    correct.style.display = 'none'
    wrong.style.display = 'none'
    clock.innerHTML -= 15
    i = clock.innerHTML
    question4.style.display = 'none'
    end.style.display = 'block'
    finalScore.innerHTML = i
    clearInterval(timer)

})

quiz4_btn2.addEventListener('click', function () {
    correct.style.display = 'none'
    wrong.style.display = 'none'
    clock.innerHTML -= 15
    i = clock.innerHTML
    question4.style.display = 'none'
    end.style.display = 'block'
    finalScore.innerHTML = i
    clearInterval(timer)
})

quiz4_btn4.addEventListener('click', function () {
    correct.style.display = 'none'
    wrong.style.display = 'none'
    clock.innerHTML -= 15
    i = clock.innerHTML
    question4.style.display = 'none'
    end.style.display = 'block'
    finalScore.innerHTML = i
    clearInterval(timer)
})

// correct answer q4
quiz4_btn3.addEventListener('click', function () {
    wrong.style.display = 'none'
    correct.style.display = 'none'
    question4.style.display = 'none'
    end.style.display = 'block'
    finalScore.innerHTML = i
    clearInterval(timer)
})

// this is score_list at left top
score_list.addEventListener('click', function () {
    timeScore.style.display = 'none'
    start.style.display = 'none'
    score_list.style.display = 'none'
    score_page.style.display = 'block'
})

// this is initials input area on last page
initials.addEventListener('input', function () {
    end_button.disabled = false
    end_button.disabled = !initials.value
})

// this is submit initial and final score button on last page
end_button.addEventListener('click', function () {
    end.style.display = 'none'
    timeScore.style.display = 'none'
    score_page.style.display = 'block'

    // setp 1 store highscores to localstorage
    let highScores = JSON.parse(localStorage.getItem('highScores')) || []

    let MAX_HIGH_SCORES = 5

    let score = {
        score: finalScore.innerHTML,
        name: initials.value
    }

    highScores.push(score)

    highScores.sort( (a,b) => b.score - a.score)

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    // step 2 get value from localstorage and write it to the high scores page under 'ul'
    highScoresList.innerHTML = highScores.map(score => {
        return `<li class="high_score">${score.name}-${score.score}</li>`
    })
    .join("")
    initials.value = ''
})

// this is the 'go back' button on last page
goBack_btn.addEventListener('click', function () {
    score_page.style.display = 'none'
    timeScore.style.display = 'block'
    score_list.style.display = 'block'
    start.style.display = 'block'
    clock.innerHTML = 100
})

// this is the 'clear high scores' button on last page
clearList_btn.addEventListener('click', function () {
    localStorage.clear()
    highScoresList.innerHTML = ''
})
