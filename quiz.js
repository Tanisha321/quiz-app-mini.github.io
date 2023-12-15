

const myquiz = [
    {
        question: "Q1:Who is credited as the developer of Express.js? ",
        a: "Larry wall",
        b: "Rich Hickey",
        c: "TJ Holowaychuk",
        d: "Rob Pike",
        ans: "ans3",
    },
    {
        question: "Q2: Which of the following are the core features of the Express framework?",
        a: "It allows us to set up middleware to respond to HTTP Requests ",
        b: "It defines a routing table that can work as per HTTP Method and URL ",
        c: "It is used to render the HTML pages dynamically ",
        d: " All of the above",
        ans: "ans4",
    },
    {
        question: "Q3:In which of the following year was Express.js initially released? ",
        a: "November 2010 ",
        b: " November 2011",
        c: "December 2010 ",
        d: " December 2011",
        ans: "ans1",
    },
    {
        question: "Q4:What is the way to store local variables that can be accessed within the application? ",
        a: " Using Config file",
        b: "Using database ",
        c: "Using app.locals ",
        d: " Using app.storage",
        ans: "ans3",
    },
    {
        question: "Q5:In combination with a request method, root paths define the endpoints at which requests can be made. Which of the following are valid forms of route path? ",
        a: "strings ",
        b: " string patterns",
        c: "regular expressions ",
        d: "All of the above ",
        ans: "ans4",
    },
    {
        question: "Q6: Where are the captured values populated regarding the route parameters?",
        a: "req.data ",
        b: "app.locals",
        c: " req.params",
        d: "All of the above",
        ans: "ans3",
    },
    {
        question: "Q7: How is it possible to create chainable route handlers for a route path in Express.js?",
        a: "Using app.route() ",
        b: " Using app.routes()",
        c: "Using app.router() ",
        d: "Using app.routing()",
        ans: "ans1",
    },
    {
        question: "Q8: Which of the following function arguments are available to Express.js Route handlers?",
        a: "req - the request object ",
        b: " res - the response object",
        c: "next ",
        d: " All of the above",
        ans: "ans4",
    },
    {
        question: "Q9: Which of the following is the Scaffolding in Express.js?",
        a: "Yeoman ",
        b: " Express application generato",
        c: "Handler functions ",
        d: "Both A & B ",
        ans: "ans4",
    },
    {
        question: "Q10: In Express.js, the method app.all(path, callback [, callback ...]) can accept all HTTP methods:",
        a: " True",
        b: "False ",
        c: " Insufficient data",
        d: "None of the above",
        ans: "ans1",
    },
    {
        question: "Q11:Which of the following is a middleware in Express.js? ",
        a: "function(req){ } ",
        b: " method(req){ }",
        c: "function(req,res,next){ } ",
        d: "method(req,res,next){ } ",
        ans: "ans3",
    },
    {
        question: "Q12: Which of the following is the correct statement in the context of Express.js?",
        a: "Express is a minimal and flexible Node.js web application framework ",
        b: "Express is a minimal and flexible React.js web application framework ",
        c: "Express is a minimal and flexible Redux.js web application framework ",
        d: " Express is a minimal and flexible Angular.js web application framework",
        ans: "ans1",
    },
    {
        question: "Q13:Which of the following is the correct syntax to use Express.js in Node? ",
        a: "var = require('express')(); ",
        b: " var_require('express')();",
        c: " var app = require('express')();",
        d: "None of the above ",
        ans: "ans3",
    },
    {
        question: "Q14:What is the meaning of templating in Express.js? ",
        a: " Pug",
        b: "EJS ",
        c: " Mustache",
        d: "All of the above ",
        ans: "ans4",
    },
    {
        question: "Q15:To use Mongo with Express.js, we need a client API for node ",
        a: "TRUE ",
        b: "FALSE ",
        c: "Can be true or false ",
        d: "Cannot say ",
        ans: "ans1",
    },
    {
        question: "Q16: Which of the following facilitates us to create a skeleton for a web application easily?",
        a: "Authentication ",
        b: " APIs",
        c: " Debugging",
        d: "Scaffolding ",
        ans: "ans4",
    },
    {
        question: "Q17: Which of the following is a middleware that parses cookies attached to the client request object?",
        a: " cookie",
        b: "cookies ",
        c: " cookie-parser",
        d: "None of the above",
        ans: "ans3",
    },
    {
        question: "Q18: The method of using values is called?",
        a: "filters ",
        b: " interpolation",
        c: "inheritance ",
        d: "includes ",
        ans: "ans2",
    },
    {
        question: "Q19: Which of the following command is used to check the current version of NPM? ",
        a: "nmp --ver ",
        b: " npm --version",
        c: "npm help ",
        d: "None of the above ",
        ans: "ans2",
    },

]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const previous = document.querySelector('#previous');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let score = 0;


let questionCount = 0;
const loadQuestion = () => {
    // question.innerText= myquiz [0].question ;
    const questionList = myquiz[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();


const getAnswerCheck = () => {
    let answer2;
    answers.forEach((currElement) => {
        if (currElement.checked) {
            answer2 = currElement.id;
        }

    });
    return answer2;
}

const disSelectAll = () => {
    answers.forEach((currElement) => currElement.checked = false)
}


submit.addEventListener('click', () => {
    const checkedAnswer = getAnswerCheck();
    console.log(checkedAnswer)
    if (checkedAnswer === myquiz[questionCount].ans) {
        score++;
    }
    questionCount++;
    disSelectAll();
    q_left.innerText = `${questionCount}/19`
    if (questionCount < myquiz.length) {
        loadQuestion();
    } else {
        question.style.display = "none"
        option1.style.display = "none"
        option2.style.display = "none"
        option3.style.display = "none"
        option4.style.display = "none"
        submit.style.display = "none"
        answers.forEach((ele) => {
            ele.style.display = "none"
        })

        showScore.innerHTML = `
            <div class="last" >
            <div class="msg container" style="font-weight:bold;font-size:5vh;" >COMPLETED!!</div>
            
        <button class="enter" onclick="location.reload()" > Play Again </button>
        <div class="add ">
       <button class="enter"> Your Score Of The Quizz Is 13/19</button>
        </div>
        </div>
       
        `;
        showScore.classList.remove('scoreArea');
    }


});













var timeInSecs;
var ticker;

function startTimer(secs) {
    timeInSecs = parseInt(secs);
    ticker = setInterval("tick()", 1000);
}

function tick() {
    var secs = timeInSecs;
    if (secs > 0) {
        timeInSecs--;
    }
    else {
        clearInterval(ticker);
        startTimer(50 * 60); // 4 minutes in seconds
    }

    var days = Math.floor(secs / 86400);
    secs %= 86400;
    var hours = Math.floor(secs / 3600);
    secs %= 3600;
    var mins = Math.floor(secs / 60);
    secs %= 60;
    var pretty = ((days < 10) ? "0" : "") + days + ":" + ((hours < 10) ? "0" : "") + hours + ":" + ((mins < 10) ? "0" : "") + mins + ":" + ((secs < 10) ? "0" : "") + secs;

    document.getElementById("countdown").innerHTML = pretty;
}

startTimer(50 * 60); // 4 minutes in seconds

//Credits to Philip M from codingforum