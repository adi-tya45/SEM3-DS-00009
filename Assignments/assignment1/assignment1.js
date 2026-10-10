let timerInterval;
let timeLeft = 30;
let currentQuestion = 1;
const totalQuestions = 5;

function startQuiz() {
    const page1 = document.getElementById('page1');
    const requiredInputs = page1.querySelectorAll('[required]');
    
    for (let input of requiredInputs) {
        if (!input.checkValidity()) {
            input.reportValidity(); 
            return; 
        }
    }

    document.getElementById('page1').style.display = "none";
    document.getElementById('page2').style.display = "block";

    startTimer();
}

function nextQuestion() {
    clearInterval(timerInterval);

    document.getElementById(`q${currentQuestion}_container`).style.display = "none";
    
    currentQuestion++;

    if (currentQuestion <= totalQuestions) {
        document.getElementById(`q${currentQuestion}_container`).style.display = "block";
        document.getElementById("questionNumberDisplay").innerText = currentQuestion;
        
        startTimer();
    } else {
        document.getElementById('page2').style.display = "none";
        document.getElementById('page3').style.display = "block";
    }
}

function startTimer() {
    timeLeft = 30; 
    document.getElementById("timeDisplay").innerText = "Time Remaining: " + timeLeft + "s";
    
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timeDisplay").innerText = "Time Remaining: " + timeLeft + "s";
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            nextQuestion(); 
        }
    }, 1000);
}

function submitForm(event) {
    event.preventDefault(); 
    
    let score = 0;

    // Correct Answers Map
    const answers = {
        q1: "A", // Hyper Text Markup Language
        q2: "B", // CSS
        q3: "A", // React
        q4: "B", // Cascading Style Sheets
        q5: "A"  // <script>
    };

    // Check each question dynamically
    for (let i = 1; i <= totalQuestions; i++) {
        let selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption && selectedOption.value === answers[`q${i}`]) {
            score++;
        }
    }

    // Inject the final score into Page 4
    document.getElementById("scoreDisplay").innerText = score;
    
    // Hide Declaration (Page 3) and show Results (Page 4)
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "block";
}