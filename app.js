let cards=[
    {
        id: 1,
        question: "What is the sum of 2 + 2?",
        a: 2,
        b: 31,
        c: 4,
        d: 5,
        correct: 4
    },
    {
        id: 2,
        question: "Which of the following is a JavaScript framework?",
        a: "Laravel",
        b: "Django",
        c: "React",
        d: "Ruby on Rails",
        correct: "React"
    },
    {
        id: 3,
        question: "What does `typeof []` return in JavaScript?",
        a: "array",
        b: "object",
        c: "null",
        d: "undefined",
        correct: "object"
    },
    {
        id: 4,
        question: "Which method is used to add an element to the end of an array?",
        a: "push()",
        b: "pop()",
        c: "shift()",
        d: "push",
        correct: "a"
    },
    {
        id: 5,
        question: "How do you declare a constant in JavaScript?",
        a: "let",
        b: "var",
        c: "const",
        d: "constant",
        correct: "const"
    },
    {
        id: 6,
        question: "Which symbol is used for comments in JavaScript?",
        a: "//",
        b: "/* */",
        c: "#",
        d: "Both A and B",
        correct: "Both A and B"
    },
    {
        id: 7,
        question: "What is the output of `console.log(2 == '2')`?",
        a: "true",
        b: "false",
        c: "TypeError",
        d: "undefined",
        correct: "true"
    },
    {
        id: 8,
        question: "What is the correct syntax to write an arrow function?",
        a: "() => {}",
        b: "function() {}",
        c: "{} => ()",
        d: "None of the above",
        correct: "() => {}"
    },
    {
        id: 9,
        question: "Which keyword is used to define an object in JavaScript?",
        a: "let",
        b: "var",
        c: "new",
        d: "{}",
        correct: "{}"
    },
    {
        id: 10,
        question: "Which of the following is NOT a JavaScript data type?",
        a: "String",
        b: "Number",
        c: "Boolean",
        d: "Character",
        correct: "Character"
    }
]

//quiz card generate
function generateCard(){
    let container= document.getElementById("quiz");
    container.innerHTML=""

    cards.map(( card)=>{
        let createDiv= document.createElement("div");
        createDiv.className="card";
    createDiv.innerHTML=`
    <h3>${card.question}</h3>
    <label>Option A: </label> 
    <input type="radio" name="answer${card.id}" class="ans" value="${card.a}">
      <label>${card.a}</label><br>
      <label>Option B: </label>
      <input type="radio" name="answer${card.id}" class="ans"  value="${card.b}">
      <label>${card.b}</label><br>
      <label>Option C: </label>
      <input type="radio" name="answer${card.id}" class="ans"  value="${card.c}">
      <label>${card.c}</label><br>
      <label>Option D: </label>
      <input type="radio" name="answer${card.id}" class="ans"  value="${card.d}">
      <label>${card.d}</label><br><br>
    `
    container.appendChild(createDiv)
        
    }) 
    

    
}
 
 
 // submit functionality
function submit() {
    let score= 0;

    for(let i=0; i<cards.length;i++){
        let radio = document.querySelector(`input[name="answer${i+1}"]:checked`);
        if( radio.value == cards[i].correct){
            score++;
        }
    }
    // clearInterval(interval); 
     
    submited.style.display="block"

    let displayScore=document.getElementById("score")
    displayScore.innerHTML=`<h1>Your score is ${score} out of ${cards.length}</h1>`
  
    clearInterval(interval)
 
     clear1()
}


 
// clear functionality

 function clear1(){
     let radios = document.querySelectorAll(".ans");
    for(let i=0; i<radios.length;i++){
       
        radios[i].checked=false;
         

    }
 }
    
// }
 
 
//  timer
 function timer(){
    let display= document.getElementById("timer")
    let totalTime= 1*60;
    let interval = setInterval(function(){
        let minutes = Math.floor(totalTime/60);
        let seconds = totalTime % 60;
        display.textContent = `${minutes}:${seconds}`;
        totalTime--;
        if(minutes===0 && seconds===0){
             timesUp.style.display="block"
            clearInterval(interval); 
            // clear 
            
        }
        
         
    },1000);
   

 }  

 timer()
 
// ok buttn
 function ok(){
    timesUp.style.display="none"
    
    clear1()
 }
// submit ok
 function submitOk(){
    submited.style.display="none"
    
    clear1()
 }

 // quiz cancel
 
generateCard()
