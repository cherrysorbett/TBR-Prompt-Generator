const genres = ["Mystery/ thriller", "Contemporary romance", "Romantasy/ fantasy", "General/ literary fiction","Misc. (wild card)","Science fiction/ dystopia"];
const mystropes = [" Murder mystery", "Set on an island", "Book-to-screen adaptation", "Character disappearance","Limited time","'Cozy' mystery","Set at a boarding school"];
const romtropes = ["Enemies/rivals-to-lovers","Friends-to-lovers", "Sports romance", "Fake Dating","Opposites attract", "Small-town romance", "Forced proximity", "Workplace romance"];
const fantropes = ["Standalone","Enemies/rivals-to-lovers", "Includes fae/fairies","Flowers on the cover","Purple cover","'Cozy' fantasy", "Character(s) on a journey","Includes sirens/mermaids"];
const littropes = ["Historical fiction","Magical realism aspect", "Presumably sad book","Blue cover","By a not American author","Book in first person","Dual timeline","Short story collection"];
const scitropes = ["Green cover","Something to do with space","Includes robots/humanoids","Mentions a specific year","Inlcudes rebellion against government","Blue cover", "Book to screen adaptation","Post-apocalyptic"];
const misctropes = ["Memoir", "Over 500 pages", "Horror/ horror adjacent","Part of a series you need to finish","An author you've never heard of","Reccomended by someone you know","Very colourful cover","Animal(s) on the cover"];
let currentsciindex=-1;
let currentmiscindex=-1;
let currentlitindex=-1;
let currentfanindex=-1;
let currentromindex=-1;
let currentmysindex=-1;
let currentindex=-1;
let imageSrc="";

/* random genre generated*/ 
function randomgenres(){
    currentindex =Math.floor(Math.random()*genres.length);
    const randomgenre = genres[currentindex];
    document.getElementById("output1").textContent = randomgenre;
    document.getElementById("output2").textContent = "";
    document.getElementById("image").style.display = "none";   
}

function gettheTrope(){
    if (currentindex===-1){
        document.getElementById("output2").textContent = "Pick the genre first!";
        return;
    }
    else if (currentindex===0){
        randommystropes();
    }

    else if (currentindex===1){
        randomromtropes();
    }

    else if (currentindex===2){
        randomfantropes();
    }
    else if (currentindex===3){
        randomlittropes();
    }

    else if (currentindex===4){
        randommisctropes();
    }
    else if (currentindex===5){
        randomscifitropes();
    }
}

/* random contemporary romance trope generated*/ 
function randomromtropes(){
    currentromindex = Math.floor(Math.random()*romtropes.length);
    const randomromtrope=romtropes[currentromindex];
    document.getElementById("output2").textContent =randomromtrope;
    
    if (currentromindex==0){
        imageSrc ="romimages/romenemies.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentromindex==1){
        imageSrc ="romimages/friends.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentromindex==2){
        imageSrc ="romimages/sports.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentromindex==3){
        imageSrc ="romimages/fakedating.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentromindex==4){
        imageSrc ="romimages/opposites.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentromindex==5){
        imageSrc ="romimages/smalltown.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentromindex==6){
        imageSrc ="romimages/forced.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentromindex==7){
        imageSrc ="romimages/workplace.png";
        document.getElementById("image").style.display = "block";
    }
    document.getElementById("image").src = imageSrc;
}

function randomfantropes(){

    currentfanindex = Math.floor(Math.random()*fantropes.length);
    const randomfantrope = fantropes[currentfanindex];
    document.getElementById("output2").textContent =randomfantrope;

    if (currentfanindex==0){
        imageSrc ="fanimages/standalone.png";
        document.getElementById("image").style.display = "block";
    }
    if (currentfanindex==1){
        imageSrc ="fanimages/fanenemies.png";
        document.getElementById("image").style.display = "block";
    }
    if (currentfanindex==2){
        imageSrc ="fanimages/fae.png";
        document.getElementById("image").style.display = "block";
    }
    if (currentfanindex==3){
        imageSrc ="fanimages/flowers.png";
        document.getElementById("image").style.display = "block";
    }
    if (currentfanindex==4){
        imageSrc ="fanimages/purple.png";
        document.getElementById("image").style.display = "block";
    }
    if (currentfanindex==5){
        imageSrc ="fanimages/cozyfan.png";
        document.getElementById("image").style.display = "block";
    }
    if (currentfanindex==6){
        imageSrc ="fanimages/journey.png";
        document.getElementById("image").style.display = "block";
    }
    if (currentfanindex==7){
        imageSrc ="fanimages/mermaid.png";
        document.getElementById("image").style.display = "block";
    }
    document.getElementById("image").src = imageSrc;
}

/* random mystery trope generated*/ 
function randommystropes(){
    currentmysindex = Math.floor(Math.random()*mystropes.length);
    const randommystrope = mystropes[currentmysindex];
    document.getElementById("output2").textContent = randommystrope;
    
    
    if (currentmysindex==0){
        imageSrc ="mysimages/murdermystery.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentmysindex==1){
        imageSrc ="mysimages/setonisland.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentmysindex==2){
        imageSrc ="mysimages/mysmovtoboo.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentmysindex==3){
        imageSrc ="mysimages/missing.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentmysindex==4){
        imageSrc ="mysimages/limitedtime.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentmysindex==5){
        imageSrc ="mysimages/cozymys.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentmysindex==6){
        imageSrc ="mysimages/boarding.png";
        document.getElementById("image").style.display = "block";
    }
    document.getElementById("image").src = imageSrc;
    

    
}


function randomlittropes(){
    currentlitindex = Math.floor(Math.random()*littropes.length);
    const randomlittrope = littropes[currentlitindex];
    document.getElementById("output2").textContent = randomlittrope;

    if (currentlitindex==0){
        imageSrc ="litimages/historical.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentlitindex==1){
        imageSrc ="litimages/magical.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentlitindex==2){
        imageSrc ="litimages/sad.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentlitindex==3){
        imageSrc ="litimages/litblue.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentlitindex==4){
        imageSrc ="litimages/foreign.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentlitindex==5){
        imageSrc ="litimages/firstperson.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentlitindex==6){
        imageSrc ="litimages/dual.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentlitindex==7){
        imageSrc ="litimages/short.png";
        document.getElementById("image").style.display = "block";
    }
    document.getElementById("image").src = imageSrc;

}

function randommisctropes(){
    currentmiscindex = Math.floor(Math.random()*misctropes.length);
    const randommisctrope=misctropes[currentmiscindex];
    document.getElementById("output2").textContent = randommisctrope;

    if (currentmiscindex==0){
        imageSrc ="miscimages/memoir.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentmiscindex==1){
        imageSrc ="miscimages/500.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentmiscindex==2){
        imageSrc ="miscimages/horror.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentmiscindex==3){
        document.getElementById("image").style.display = "none";
    }
    else if (currentmiscindex==4){
        document.getElementById("image").style.display = "none";
    }
    else if (currentmiscindex==5){
        document.getElementById("image").style.display = "none";
    }
    else if (currentmiscindex==6){
        imageSrc ="miscimages/colourful.png";
        document.getElementById("image").style.display = "block";
    }
    else if (currentmiscindex==7){
        imageSrc ="miscimages/animals.png";
        document.getElementById("image").style.display = "block";
    }
    document.getElementById("image").src = imageSrc;

}

function randomscifitropes(){
    currentsciindex = Math.floor(Math.random()*scitropes.length);
    const randomscitrope = scitropes[currentsciindex];
    document.getElementById("output2").textContent = randomscitrope;

    if (currentsciindex==0){
        imageSrc ="sciimages/green.png";
        document.getElementById("image").style.display = "block";
    } 
    else if (currentsciindex==1){
        imageSrc ="sciimages/space.png";
        document.getElementById("image").style.display = "block";
    } 
    else if (currentsciindex==2){
        imageSrc ="sciimages/robots.png";
        document.getElementById("image").style.display = "block";
    } 
    else if (currentsciindex==3){
        imageSrc ="sciimages/year.png";
        document.getElementById("image").style.display = "block";
    } 
    else if (currentsciindex==4){
        imageSrc ="sciimages/gov.png";
        document.getElementById("image").style.display = "block";
    } 
    else if (currentsciindex==5){
        imageSrc ="sciimages/sciblue.png";
        document.getElementById("image").style.display = "block";
    } 
    else if (currentsciindex==6){
        imageSrc ="sciimages/scimovie.png";
        document.getElementById("image").style.display = "block";
    } 
    else if (currentsciindex==7){
        imageSrc ="sciimages/post.png";
        document.getElementById("image").style.display = "block";
    } 
    document.getElementById("image").src=imageSrc;


}
