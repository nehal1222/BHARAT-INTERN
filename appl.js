const quiz = [
    {
        question: "What is the launch date for Chandrayaan 3 mission?",
        ans1text: "24 July 2023",
        ans2text: "20 July 2023",
        ans3text: "14 July 2023",
        ans4text: "4 July 2023",
        answer: "14 July 2023",
    },
    {
        question: "The Chandrayaan 3 mission’s rover is known as",
        ans1text: "Vikram",
        ans2text: "Bheem",
        ans3text: "Pragyaan",
        ans4text: "Dhruv",
        answer: "Pragyaan",
    },{
        question: "Which launcher is used for Chandrayaan-3?",
        ans1text: "GSLV",
        ans2text: "LVSM",
        ans3text: "GSLV-Mk3",
        ans4text: "PSLV",
        answer: "GSLV-Mk3",
    },{
        question: "How much did the Chandrayaan 3 mission cost?",
        ans1text: "1200 Crores",
        ans2text: "600 Crores",
        ans3text: "25 Crores",
        ans4text: "1 Crores",
        answer: "600 Crores",
        
    },{
        question: "What is the total weight of Chandrayaan 3?",
        ans1text: "3200 KG",
        ans2text: "3600 KG",
        ans3text: "3900 KG",
        ans4text: "4000 KG",
        answer: "3900 KG",
    },{
        question: "What is that one thing in Chandrayaan 3 and not in Chandrayaan 2?",
        ans1text: "Laser Doppler Velocimeter (LDV)",
        ans2text: "Laser-based Interferometry",
        ans3text: "Ultrasonic Doppler methods",
        ans4text: "Molecular Tagging Velocimetry",
        answer: "Laser Doppler Velocimeter (LDV)",
    },{
        question: "Which of the following is missing in Chandrayaan 3?",
        ans1text: "Rover",
        ans2text: "Lander",
        ans3text: "Orbiter",
        ans4text: "Rotator",
        answer: "Orbiter",
    },{
        question: "What will be the design of the Propulsion Module?",
        ans1text: "Box-like structure with a solar panel on the side with a cylinder on top",
        ans2text: "Rectangular structure with solar panels on all sides",
        ans3text: "Cube with a sphere on top",
        ans4text: "Box-like structure",
        answer: "Box-like structure with a solar panel on the side with a cylinder on top",
    },{
        question: "Who is the director of the Chandrayaan 3 mission?",
        ans1text: "Veeramuthuvel",
        ans2text: "M Vanitha",
        ans3text: "Ritu Karidhal",
        ans4text: "K. Sivan",
        answer: "Ritu Karidhal",
    },{
        question: "What are the scientific instruments that will be carried by the lander and rover in Chandrayaan 3?",
        ans1text: " Surface science instruments",
        ans2text: "Atmospheric science instruments",
        ans3text: "Water science instruments",
        ans4text: "All of the Above",
        answer: "All of the Above",
    }

]
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);  
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    // console.log(checkedAns.nextElementSibling.textContent);
    if( checkedAns === null){
        alert("Please select an answer");
    }else{
        if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        if( currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
});