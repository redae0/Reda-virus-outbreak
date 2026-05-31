
let lives=10, score=0, q=0;

const questions=[
["What process creates identical daughter cells?",["mitosis","cell division","mitotic division"]],
["What organ pumps blood?",["heart","the heart"]],
["Where does gas exchange occur?",["alveoli","alveolus"]],
["What connects muscle to bone?",["tendon","tendons"]],
["Which system transports oxygen?",["circulatory system","circulatory","blood system"]],
["Symbol for Sodium?",["na","sodium"]],
["Neutral pH value?",["7","seven"]],
["Mass cannot be created or destroyed. Which law?",["law of conservation of mass","conservation of mass","mass conservation"]],
["HCl is an acid or base?",["acid","an acid"]],
["NaOH is an acid or base?",["base","a base"]],
["Main greenhouse gas?",["carbon dioxide","co2"]],
["Name one renewable energy source.",["solar","solar energy","wind","wind energy","hydro","hydroelectric"]],
["Human activity causing climate change?",["burning fossil fuels","fossil fuels","burning coal","burning oil"]],
["What absorbs atmospheric carbon?",["trees","plants","forests"]],
["What effect traps heat in the atmosphere?",["greenhouse effect"]],
["What is reflection?",["bouncing of light","light bouncing","reflection of light"]],
["What is refraction?",["bending of light","light bending"]],
["Convex lenses do what to light?",["converge light","focus light","bring light together"]],
["What part of the eye focuses light?",["lens","eye lens"]],
["Camera lenses mimic which organ?",["eye","human eye"]]
];

function loadQ(){
 if(q>=questions.length){
 document.body.innerHTML="<div style='text-align:center;color:white;background:#111;height:100vh;padding-top:100px'><h1>🎉 YOU SAVED THE SCHOOL!</h1><h2>Score: "+score+"</h2><h3>Made by Reda Elbagoury</h3></div>";
 return;
 }
 document.getElementById("question").innerText=(q+1)+"/20 - "+questions[q][0];
 document.getElementById("progress").innerText="Progress: "+("█".repeat(q))+("░".repeat(20-q));
}

function submitAnswer(){
 let ans=document.getElementById("answer").value.trim().toLowerCase();
 let accepted=questions[q][1];

 let correct=accepted.some(a =>
   ans.includes(a.toLowerCase()) || a.toLowerCase().includes(ans)
 );

 if(correct){
   score+=100;
   q++;
   document.getElementById("score").innerText="🏆 Score: "+score;
   document.getElementById("message").innerText="✅ Correct!";
 } else {
   lives--;
   document.getElementById("lives").innerText="❤️ Lives: "+lives;
   document.getElementById("message").innerText="❌ Try again!";
   if(lives<=0){
      document.body.innerHTML="<div style='text-align:center;color:white;background:#111;height:100vh;padding-top:100px'><h1>☠️ GAME OVER</h1><h3>Made by Reda Elbagoury</h3></div>";
      return;
   }
 }
 document.getElementById("answer").value="";
 loadQ();
}
loadQ();
