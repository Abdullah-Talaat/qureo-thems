let consoleE=document.getElementById("console");
function matrix(){
document.body.style =`
background:#000;
letter-spacing: 1px;
font-weight: 500;

-webkit-font-smoothing: antialiased;
`
document.head.innerHTML+=`
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
`

consoleE.style =`

font-family: "JetBrains Mono", monospace;
font-weight: 400;
color: #00e676;
text-shadow:
    0 0 1px #00ff41,
    0 0 2px rgba(0,255,65,.8),
    0 0 5px rgba(0,255,65,.45),
    0 0 10px rgba(0,255,65,.2);
    
`
};matrix();
