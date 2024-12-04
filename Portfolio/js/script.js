let htmlcss = document.querySelector(".html-css"),
    html = document.querySelector(".html"),
    javascript = document.querySelector(".javascript-main"),
    javascript1 = document.querySelector(".javascript-main-1"),
    react = document.querySelector(".react-1"),
    react1 = document.querySelector(".react-2"),
    mongo = document.querySelector(".mongodb"),
    mongo1 = document.querySelector(".mongodb-1"),
    mysql = document.querySelector(".mysql"),
    mysql1 = document.querySelector(".mysql-1"),
    node = document.querySelector(".node"),
    node1 = document.querySelector(".node-1");

let startvalue = 0,
    endvalue = 90,
    speed = 100;
        
let progress = setInterval(() => {

    startvalue++;

    html.textContent = `${startvalue }%`
    htmlcss.style.background = `conic-gradient(yellow ${ startvalue * 3.6}deg,white 0deg)`
   
    if(startvalue == endvalue ){
        startvalue = 0;
                clearInterval(progress);
    } 
   
    

},speed);

// for javascript
let startvaluejavascript = 0,
    endvaluejavascript = 60;

 let progressjavascript = setInterval(()=>{

    startvaluejavascript++;

    javascript1.textContent = `${startvaluejavascript }%`
    javascript.style.background = `conic-gradient(yellow ${ startvaluejavascript * 3.6}deg,white 0deg)`

    if(startvaluejavascript ==  endvaluejavascript ){
        clearInterval(progressjavascript);
}

 },speed);   

//  for react js

let startvaluereact = 0,
    endvaluereact = 80;

let progressreact = setInterval(()=>{
    startvaluereact++;

     react1.textContent =  `${startvaluereact }%`
     react.style.background = `conic-gradient(yellow ${  startvaluereact * 3.6}deg,white 0deg)`

     if(startvaluereact ==   endvaluereact ){
        clearInterval(progressreact);
}


},speed);   

// for mongodb


let startvaluemongo = 0,
    endvaluemongo = 70;

let progressmongo = setInterval(()=>{
    startvaluemongo++;

     mongo1.textContent =  `${startvaluemongo }%`
     mongo.style.background = `conic-gradient(yellow ${  startvaluemongo * 3.6}deg,white 0deg)`

     if(startvaluemongo ==   endvaluemongo ){
        clearInterval(progressmongo);
}


},speed); 

// for Mysql


let startvaluemysql= 0,
    endvaluemysql = 85;

let progressmysql = setInterval(()=>{
    startvaluemysql++;

     mysql1.textContent =  `${startvaluemysql }%`
     mysql.style.background = `conic-gradient(yellow ${  startvaluemysql * 3.6}deg,white 0deg)`

     if(startvaluemysql ==   endvaluemysql ){
        clearInterval(progressmysql);
}


},speed);

// for nodejs


let startvaluenode= 0,
    endvaluenode = 60;

let progressnode = setInterval(()=>{
    startvaluenode++;

     node1.textContent =  `${startvaluenode }%`
     node.style.background = `conic-gradient(yellow ${  startvaluenode * 3.6}deg,white 0deg)`

     if(startvaluenode ==   endvaluenode ){
        clearInterval(progressnode);
}


},speed);