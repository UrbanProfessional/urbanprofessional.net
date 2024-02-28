// Main Menu Disclaimer
function rmWarn() {
    document.getElementById("warning").style.display = "none";
    document.getElementById("music").play();
}
// Main Menu Tutorial, Audio, and Credits Window Logic
function tutorial() {
    document.getElementById("tutorial").style.display = "block";
    document.getElementById("tutorial").scrollTop = '0';
    document.getElementById("mB").style.pointerEvents = "none";
    }
function tutorialClose() {
    document.getElementById("tutorial").style.display = "none";
    document.getElementById("mB").style.pointerEvents = "all";
}

function credits() {
    document.getElementById("credits").style.display = "block";
    document.getElementById("credits").scrollTop = '0';
    document.getElementById("mB").style.pointerEvents = "none";
}
function creditsClose() {
    document.getElementById("credits").style.display = "none";
    document.getElementById("mB").style.pointerEvents = "all";
}

function audio() {
    document.getElementById("audioC").innerHTML = '...';
    document.getElementById("audio").style.display = "block";
    document.getElementById("audio").scrollTop = '0';
    document.getElementById("mB").style.pointerEvents = "none";
    countdown = 5;
    interval = setInterval(function() {
        document.getElementById("audioC").innerHTML = countdown;
        countdown--;
        if (countdown < 0) {
            clearInterval(interval);
            countdown = 'Play Again';
            document.getElementById("audioC").innerHTML = countdown;
            audioTest = document.createElement("audio");
            audioTest.src = "audio/pistol.mp3";
            audioTest.toggleAttribute('autoplay');
            // gunshot();
        }
    }, 1000);
    }
function audioClose() {
    document.getElementById("audio").style.display = "none";
    document.getElementById("mB").style.pointerEvents = "all";
}


// Functions for Ambience Audio Test Page
function ambience() {
    window.location.href="audio.html";    
}

function ambienceStart() {
    document.getElementById('outdoor').play();    
}

function ambienceClose() {
    window.location.href="main.html";    
}

// Game Over Function
function gameOver() {
    window.location.href="over.html";
}
function over() {
    gunshot();
}

// Game Start Init
function init() {
    window.location.href="start.html";
    //Sequences Variables Init
    localStorage.setItem('paperclip', 0)
    localStorage.setItem('clipfound', 0);
    localStorage.setItem('c1locked', 1);
    localStorage.setItem('crowbar', 0);
    localStorage.setItem('audiBoarded', 1);
    localStorage.setItem('stairLock', 1);
    localStorage.setItem('stairKey', 0);
    localStorage.setItem('lockerLock', 1);

// First Visit Variables
    localStorage.setItem('hallwayFirst', 1);   
    localStorage.setItem('lobbyFirst', 1);
    localStorage.setItem('class1First', 1);
    localStorage.setItem('audiFirst' , 1);
    localStorage.setItem('bossFirst' , 1);
}


// Item Icon Load Check Per New Scene
function itemLoad() {
    if (parseInt(localStorage.getItem('paperclip')) == 1) {
        document.getElementById("paperclip").style.display = "block";
    }
    if (parseInt(localStorage.getItem('crowbar')) == 1) {
        document.getElementById("crowbar").style.display = "block";
    }
    if (parseInt(localStorage.getItem('stairKey')) == 1) {
        document.getElementById("key").style.display = "block";
        document.getElementById("keyV").style.display = "block";
    }
}

// Scripted Sequences for the Pages - - - - - - - - - - /

// Sequence Management Init
active = 0;

// Start Page Sequence
seq = 0;

function seqStart() {
    document.getElementById('outdoor').play();
    seq = 0;
    document.getElementById("chatbox").style.display = "block";
    document.getElementById("chatboxinner").innerText = "The nightmares, the yearning, the insanity, all lead to here...";
}

function seqClick() {
    if (active == 0) {
    seq++;
    switch(seq) {
        case 0:
            break;
        case 1:
            document.getElementById("chatboxinner").innerText = "I was of the last students to be at this wretched school before it closed many years ago...";      
            break;  
        case 2:
            document.getElementById("chatboxinner").innerText = "I don't want to remember what happened then. This was a horrible place that deserved to be shutdown for good...";      
            break;  
        case 3:
            document.getElementById("chatboxinner").innerText = "But...ever since I left I've had a worsening pain in my mind...";      
            break;  
        case 4:
            document.getElementById("chatboxinner").innerText = "I've tried to ignore it, but now the pain is too much to bear...";      
            break;  
        case 5:
            document.getElementById("chatboxinner").innerText = "All I know is that it has something to do with this place, my old school.";      
            break; 
        case 6:
            document.getElementById("chatboxinner").innerText = "*You walk towards the main entrance*";  
            document.getElementById("chatboxinner").style.fontStyle = "Italic";
            break; 
        case 7:
            document.getElementById("chatbox").style.display = "none";
            window.location.href="entrance.html";
            break; 
    }
    }
}


// Entrance Page Sequences - - - - - - - - - - - - 

// Sequence 1
seq1 = 0;

function seq1Start() {
    document.getElementById('outdoor2').play();
    active = 1;
    document.getElementById("chatbox").style.display = "block";
    document.getElementById("chatboxinner").innerText = "So this is it... the entrance is right there...";
}

function seq1Click() {
    if (active == 1) {
    seq1++;
    switch(seq1) {
        case 0:
            break;
        case 1:
            document.getElementById("chatboxinner").innerText = "Seems some lights are on inside, I've heard it's because of some legal stuff...";      
            break;  
        case 2:
            document.getElementById("chatboxinner").innerText = "There are rumors about many squatters and lowlifes residing in the building now, seems fairly believable...";      
            break;  
        case 3:
            document.getElementById("chatboxinner").innerText = "So I brought a handgun... (Click the 'Suicide' Button to shoot yourself and restart)";      
            break;  
        case 4:
            document.getElementById("chatboxinner").innerText = "Time to finally end my nightmares.";      
            break;  
        case 5:
            document.getElementById("chatboxinner").innerText = "(Actionable elements are highlighted in red when hovering with the cursor, click while hovering to interact. Use the scroll wheel to view the whole scene.)";   
            document.getElementById("chatboxinner").style.fontStyle = "Italic";   
            break; 
        case 6:
            document.getElementById("chatbox").style.display = "none"; 
            document.getElementById("mainentrance").style.display = "block";
            active = 2;
            break;
    }
    }
}


// Sequence 2
seq2 = 0;

function seq2Click() {
    if (active == 2) {
    seq2 = 0;
    seq2++;
    switch(seq2) {
        case 0:
            break;
        case 1:
            document.getElementById("chatboxinner").style.fontStyle = "normal"; 
            document.getElementById("mainentrance").style.display = "none";
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").innerText = "It's the main entrance, somehow unlocked, should I go in?"; 
            document.getElementById("yes").style.display = "block";
            document.getElementById("no").style.display = "block";
            break;  
    }
    }  
}

// Hall Page Sequences - - - - - - - - - - - - -

// Sequence 3
seq3 = 0;

function seq3Start() {
    seq3 = 0;
    active = 3;
    itemLoad();
    document.getElementById('sndHall').play();
    document.getElementById("chatbox").style.display = "block";
    document.getElementById("bin").style.display = "none"; 
    document.getElementById("toLobby").style.display = "none"; 
    document.getElementById("bulletin").style.display = "none";
    document.getElementById("classroom1").style.display = "none";
    document.getElementById("chatboxinner").style.fontStyle = "Italic";
    document.getElementById("chatboxinner").innerText = "*You arrive at the first floor hallway*";
}

function seq3Click() {
    if (active == 3) {
        seq3++;
        if (parseInt(localStorage.getItem('hallwayFirst'))) {
            switch(seq3) {
                case 0:
                    break;
                case 1:
                    document.getElementById("chatboxinner").style.fontStyle = "normal"; 
                    document.getElementById("chatboxinner").innerText = "I've heard the first floor of this building is still patrolled and maintained by the city, no wonder it's so tidy..."; 
                    break;
                case 2:
                    document.getElementById("chatboxinner").innerText = "Most staircases to the upper floors seem to be sealed. I am not sure what's up there now, and I'm sure the city doesn't know either..."; 
                    break;
                case 3:
                    document.getElementById("chatboxinner").innerText = "Most of these classroom doors are sealed shut as well, I won't even try to open those..."; 
                    break;      
                case 4:
                    document.getElementById("chatboxinner").innerText = "I... feel it, whatever I need to do is somewhere up on the next floors."; 
                    break; 
                case 5:
                    localStorage.setItem('hallwayFirst', 0);
                    document.getElementById("chatbox").style.display = "none"; 
                    document.getElementById("bin").style.display = "block"; 
                    document.getElementById("toLobby").style.display = "block"; 
                    document.getElementById("bulletin").style.display = "block";
                    document.getElementById("classroom1").style.display = "block";
                    break; 
            }
        } else {
            switch(seq3) {
                case 0:
                    break;
                case 1:
                    document.getElementById("chatbox").style.display = "none"; 
                    document.getElementById("bin").style.display = "block"; 
                    document.getElementById("toLobby").style.display = "block"; 
                    document.getElementById("bulletin").style.display = "block";
                    document.getElementById("classroom1").style.display = "block";
                    break; 
            }
        }
    }
}


// Sequence 4
seq4 = 0;
function seq4Start() {
    active = 4;
    seq4 = 0;
    seq4++
    switch(seq4) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("bin").style.display = "none"; 
            document.getElementById("toLobby").style.display = "none"; 
            document.getElementById("bulletin").style.display = "none";
            document.getElementById("classroom1").style.display = "none";
            document.getElementById("chatboxinner").innerText = "It's a recycling bin..."; 
            break;       
    }
}

function seq4Click() {
    if (active == 4) {
        if (parseInt(localStorage.getItem('paperclip')) == 0 && parseInt(localStorage.getItem('clipfound')) == 0) {
    seq4++;
    switch(seq4) {
        case 2:
            document.getElementById("chatboxinner").innerText = "Among the random garbage there is several legal papers binded by a paperclip..."; 
            break;
        case 3:
            document.getElementById("chatboxinner").innerText = "The papers seem to outline a building audit that occured around the time the school closed down..."; 
            break;
        case 4:
            document.getElementById("chatboxinner").innerText = "Seems to be nothing notable in the outline, just some talk about how deteriorated the building was..."; 
            break;
        case 5:
            document.getElementById("chatboxinner").innerText = "Although, the papers do mention something about a secret compartment found in a 5th floor classroom..."; 
            break;
        case 6:
            document.getElementById("chatboxinner").style.fontStyle = "Italic"; 
            document.getElementById("chatboxinner").innerText = "*You put the papers back in the bin and take the paperclip*";
            localStorage.setItem('paperclip', 1); 
            localStorage.setItem('clipfound', 1); 
            document.getElementById('equipPaperclip').play();
            document.getElementById("paperclip").style.display = "block";
            break;
        case 7:
            seq4 = 0;
            document.getElementById("chatbox").style.display = "none"; 
            document.getElementById("bin").style.display = "block"; 
            document.getElementById("toLobby").style.display = "block"; 
            document.getElementById("bulletin").style.display = "block";
            document.getElementById("classroom1").style.display = "block";
            break;
        }
    }
    else {
        document.getElementById("chatbox").style.display = "none"; 
        document.getElementById("bin").style.display = "block"; 
        document.getElementById("toLobby").style.display = "block"; 
        document.getElementById("bulletin").style.display = "block";
        document.getElementById("classroom1").style.display = "block";
        seq4 = 0;
    }
    }
}

// Sequence 5
seq5 = 0; 

function seq5Start() {
    seq5 = 0;
    active = 5;
    seq5++
    switch(seq5) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("bin").style.display = "none"; 
            document.getElementById("toLobby").style.display = "none"; 
            document.getElementById("bulletin").style.display = "none";
            document.getElementById("classroom1").style.display = "none";
            document.getElementById("chatboxinner").innerText = "Down this hallway would be the main lobby, should I continue?"; 
            document.getElementById("yes").style.display = "block";
            document.getElementById("no").style.display = "block"; 
            break;       
    }
}

// Sequence 6
seq6 = 0; 

function seq6Start() {
    active = 6;
    seq6++
    switch(seq6) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block"; 
            document.getElementById("bin").style.display = "none"; 
            document.getElementById("toLobby").style.display = "none"; 
            document.getElementById("bulletin").style.display = "none";
            document.getElementById("classroom1").style.display = "none";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "It's a bulletin board assorted with old assignments and notices..."; 
            break;       
    }
}

function seq6Click() {
    if (active == 6) {
        seq6++
        switch(seq6) {
            case 2:
                document.getElementById("chatboxinner").innerText = "Some of these old papers bring me back to simpler times..."; 
                break;
            case 3:
                document.getElementById("chatboxinner").innerText = "There is one paper that sits above the rest, dating to the final weeks of the school..."; 
                break;
            case 4:
                document.getElementById("chatboxinner").innerText = "It's a faculty notice, stating that the auditorium will be permanently close due to an incident backstage..."; 
                break;
            case 5:
                document.getElementById("chatboxinner").innerText = "I wonder what happened there."; 
                break;
            case 6:
                document.getElementById("chatbox").style.display = "none"; 
                document.getElementById("bin").style.display = "block"; 
                document.getElementById("toLobby").style.display = "block"; 
                document.getElementById("bulletin").style.display = "block";
                document.getElementById("classroom1").style.display = "block";
                seq6 = 0;
                break;
        }
    }
}

// Sequence 7
seq7 = 0; 

function seq7Start() {
    active = 7;
    seq7 = 0;
    seq7++
    switch(seq7) {
        case 0:
            break;
        case 1:
            if (parseInt(localStorage.getItem('c1locked')) == 1) {
                document.getElementById("chatbox").style.display = "block";
                document.getElementById("bin").style.display = "none"; 
                document.getElementById("toLobby").style.display = "none"; 
                document.getElementById("bulletin").style.display = "none";
                document.getElementById("classroom1").style.display = "none";
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "This is the only door in this hallway that isn't sealed shut, but it's locked..."; 
                break;   
            }   
            else {
                document.getElementById("chatbox").style.display = "block";
                document.getElementById("bin").style.display = "none"; 
                document.getElementById("toLobby").style.display = "none"; 
                document.getElementById("bulletin").style.display = "none";
                document.getElementById("classroom1").style.display = "none";
                document.getElementById("chatboxinner").innerText = "Should I head into the classroom?"; 
                document.getElementById("yes").style.display = "block";
                document.getElementById("no").style.display = "block"; 
                break;      
            } 
    }
}

function seq7Click() {
    if (active == 7) {
        seq7++
        if (parseInt(localStorage.getItem('c1locked')) == 0) {
            switch(seq7) {
                case 2:
                    document.getElementById("chatbox").style.display = "block";
                    document.getElementById("chatboxinner").innerText = "Should I head into the classroom?"; 
                    document.getElementById("yes").style.display = "block";
                    document.getElementById("no").style.display = "block"; 
                    break;
            }
        } else {
            if (parseInt(localStorage.getItem('paperclip')) == 1) {
                switch(seq7) {
                    case 2:
                        document.getElementById("chatboxinner").innerText = "I have a paperclip on hand, perhaps I could try to pick this lock..."; 
                        break;
                    case 3:
                        document.getElementById("chatboxinner").innerText = "*You insert the paper clip into the lock and after a couple of minutes...*"; 
                        break;
                    case 4:
                        document.getElementById("chatboxinner").innerText = "I did it! Should I head in?";
                        document.getElementById("yes").style.display = "block";
                        document.getElementById("no").style.display = "block";
                        break;
                }
            } else {
                switch(seq7) {
                    case 2:
                        document.getElementById("chatboxinner").innerText = "Maybe I could break into this lock with something."; 
                        break;
                    case 3:
                        document.getElementById("chatbox").style.display = "none"; 
                        document.getElementById("bin").style.display = "block"; 
                        document.getElementById("toLobby").style.display = "block"; 
                        document.getElementById("bulletin").style.display = "block";
                        document.getElementById("classroom1").style.display = "block";
                        seq7 = 0;
                        break;
                }
            }
        }
        
    }
}

// Sequence 8
seq8 = 0;

function seq8Start() {
    if (parseInt(localStorage.getItem('audiBoarded')) == 1) {
        document.getElementById("audiBoard").style.display = "block";
        document.getElementById("audiBoard2").style.display = "block";
    } else {
        document.getElementById("audiBoard3").style.display = "block";
        document.getElementById("audiBoard4").style.display = "block";
    }
    active = 8;
    seq8 = 0;
    seq8++
    itemLoad();
    document.getElementById('sndLobby').play();
    switch(seq8) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "Italic";
            document.getElementById("chatboxinner").innerText = "*You arrive at the main lobby*"; 
            break;   
    }
}
function seq8Click() {
    if (active == 8) {
        seq8++
        if (parseInt(localStorage.getItem('lobbyFirst')) == 1) {
            switch(seq8) {
                case 2:
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatboxinner").innerText = "I remember this lobby, it used to be bustling with students every hour of the day..."; 
                    break;
                case 3:
                    document.getElementById("chatboxinner").innerText = "Now it's so weird seeing it empty."; 
                    break; 
                case 4:
                    document.getElementById("chatbox").style.display = "none"; 
                    document.getElementById("audiDoor").style.display = "block"; 
                    document.getElementById("display").style.display = "block"; 
                    document.getElementById("staircase").style.display = "block";
                    localStorage.setItem('lobbyFirst', 0);
                    break; 
            }
        } else {
            switch(seq8) {
                case 2:
                    document.getElementById("chatbox").style.display = "none"; 
                    document.getElementById("audiDoor").style.display = "block"; 
                    document.getElementById("display").style.display = "block"; 
                    document.getElementById("staircase").style.display = "block"; 
                    break;
            }
        }
    }
}


// Sequence 9
seq9 = 0;

function seq9Start() {
    active = 9;
    seq9 = 0;
    seq9++
    document.getElementById("audiDoor").style.display = "none"; 
    document.getElementById("display").style.display = "none"; 
    document.getElementById("staircase").style.display = "none";
    switch(seq9) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "This is the main entrance to the auditorium..."; 
            break;   
    }
}
function seq9Click() {
    if (active == 9) {
        seq9++
        if (parseInt(localStorage.getItem('crowbar')) == 0 && parseInt(localStorage.getItem('audiBoarded')) == 1) {
            switch(seq9) {
                case 2:
                    document.getElementById("chatboxinner").innerText = "It's boarded up with planks, I could probably use some pry tool to remove them...";
                    break; 
                case 3:
                    document.getElementById("chatboxinner").innerText = "No clue where I would find such a tool though.";
                    break; 
                case 4:
                    document.getElementById("chatbox").style.display = "none";
                    document.getElementById("audiDoor").style.display = "block"; 
                    document.getElementById("display").style.display = "block"; 
                    document.getElementById("staircase").style.display = "block"; 
                    break; 
            }
        } else if (parseInt(localStorage.getItem('crowbar')) == 1 && parseInt(localStorage.getItem('audiBoarded')) == 1) {
            switch(seq9) {
                case 2:
                    document.getElementById("chatboxinner").innerText = "It's boarded up with planks, I could use this crowbar to remove them...";
                    break; 
                case 3:
                    document.getElementById("chatboxinner").style.fontStyle = "Italic";
                    document.getElementById("chatboxinner").innerText = "*You wedge the crowbar and pry the planks off*";
                    document.getElementById("audiBoard").style.display = "none";
                    document.getElementById("audiBoard2").style.display = "none";
                    document.getElementById("audiBoard3").style.display = "block";
                    document.getElementById("audiBoard4").style.display = "block";
                    break; 
                case 4:
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatboxinner").innerText = "The doors seem to budge now, should I head into the auditorium?";
                    document.getElementById("yes").style.display = "block";
                    document.getElementById("no").style.display = "block";
                    break; 
            }
        } else {
            switch(seq9) {
                case 2:
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatboxinner").innerText = "Should I head into the auditorium?";
                    document.getElementById("yes").style.display = "block";
                    document.getElementById("no").style.display = "block";
                    break; 
            }
        }
    }
}

// Sequence 10
seq10 = 0;

function seq10Start() {
    active = 10;
    seq10 = 0;
    seq10++
    document.getElementById("audiDoor").style.display = "none"; 
    document.getElementById("display").style.display = "none"; 
    document.getElementById("staircase").style.display = "none"; 
    switch(seq10) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "These are the school's award displays..."; 
            break;   
    }
}
function seq10Click() {
    if (active == 10) {
        seq10++
        switch(seq10) {
            case 2:
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "Surprising that they are still here untouched..."; 
                break;
            case 3:
                document.getElementById("chatboxinner").innerText = "Must be preserved for the city's criminal investigation..."; 
                break; 
            case 4:
                document.getElementById("chatboxinner").innerText = "Nothing but generic academic awards in these..."; 
                break; 
            case 5:
                document.getElementById("chatboxinner").innerText = "One award is to the coding team, for their advisor, Mr. Nielsen..."; 
                break;
            case 6:
                document.getElementById("chatboxinner").innerText = "For some reason that name sends chills down my spine."; 
                break;
            case 7:
                document.getElementById("chatbox").style.display = "none";
                document.getElementById("audiDoor").style.display = "block"; 
                document.getElementById("display").style.display = "block"; 
                document.getElementById("staircase").style.display = "block"; 
                break;
        }
    }
}

// Sequence 11
seq11 = 0;

function seq11Start() {
    active = 11;
    seq11 = 0;
    seq11++
    document.getElementById("audiDoor").style.display = "none"; 
    document.getElementById("display").style.display = "none"; 
    document.getElementById("staircase").style.display = "none";
    switch(seq11) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "This seems to be the only unsealed staircase to the next floor..."; 
            break;   
    }
}

function seq11Click() {
    if (active == 11) {
        seq11++;
        if (parseInt(localStorage.getItem('stairKey')) == 0 && parseInt(localStorage.getItem('stairLock')) == 1 && parseInt(localStorage.getItem('paperclip')) == 0) {
            switch(seq11) {
                case 2:
                    document.getElementById("chatboxinner").innerText = "It looks to be locked by a complex key lock..."; 
                    break;
                case 3:
                    document.getElementById("chatboxinner").innerText = "After all these years I wonder where its key could be."; 
                    break;
                case 4:
                    document.getElementById("chatbox").style.display = "none";
                    document.getElementById("audiDoor").style.display = "block"; 
                    document.getElementById("display").style.display = "block"; 
                    document.getElementById("staircase").style.display = "block"; 
                    break;            
            }
        } else if (parseInt(localStorage.getItem('stairKey')) == 1 && parseInt(localStorage.getItem('stairLock')) == 1) {
            switch(seq11) {
                case 2:
                    document.getElementById("chatboxinner").innerText = "It looks to be locked by a complex key lock..."; 
                    break;
                case 3:
                    document.getElementById("chatboxinner").innerText = "Perhaps this key I found backstage is the right one..."; 
                    break;
                case 4:
                    document.getElementById("chatboxinner").style.fontStyle = "Italic";
                    document.getElementById("chatboxinner").innerText = "*You insert the key into the lock and...*";
                    break;
                case 5:
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatboxinner").innerText = "It clicked open! Should I head up to the next floor?"; 
                    document.getElementById("yes").style.display = "block";
                    document.getElementById("no").style.display = "block";
                    break;          
            }
        } else if (parseInt(localStorage.getItem('stairLock')) == 0) {
            switch(seq11) {
                case 2:
                    document.getElementById("chatboxinner").innerText = "Should I head up to the next floor?"; 
                    document.getElementById("yes").style.display = "block";
                    document.getElementById("no").style.display = "block";
                    break;
            }
        } else if (parseInt(localStorage.getItem('stairKey')) == 0 && parseInt(localStorage.getItem('stairLock')) == 1 && parseInt(localStorage.getItem('paperclip')) == 1) {
            switch(seq11) {
                case 2:
                    document.getElementById("chatboxinner").innerText = "It looks to be locked by a complex key lock..."; 
                    break;
                case 3:
                    document.getElementById("chatboxinner").innerText = "Maybe this paperclip will work..."; 
                    break;
                case 4:
                    document.getElementById("chatboxinner").style.fontStyle = "Italic";
                    document.getElementById("chatboxinner").innerText = "*You insert the paperclip into the lock and after 10 or so minutes...*"; 
                    break;   
                case 5:
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatboxinner").innerText = "I give up, this lock is clearly out of my league."; 
                    break;  
               case 6:
                    document.getElementById("chatboxinner").style.fontStyle = "Italic";
                    document.getElementById("chatboxinner").innerText = "*You put the paperclip back into your pocket*"; 
                    break;  
               case 7:
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatbox").style.display = "none";
                    document.getElementById("audiDoor").style.display = "block"; 
                    document.getElementById("display").style.display = "block"; 
                    document.getElementById("staircase").style.display = "block"; 
                    break;    
            }
        }

    }
}

// Sequence 12
seq12 = 0;

function seq12Start() {
    active = 12;
    seq12 = 0;
    seq12++
    itemLoad();
    document.getElementById('silence').play();
    document.getElementById("backstage").style.display = "none"; 
    document.getElementById("exit1").style.display = "none"; 
    document.getElementById("exit2").style.display = "none";
    switch(seq12) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "Italic";
            document.getElementById("chatboxinner").innerText = "*You arrive in the auditorium...*"; 
            break;   
    }
}

function seq12Click() {
    if (active == 12) {
        seq12++
        if (parseInt(localStorage.getItem('audiFirst')) == 1) {
            switch(seq12) {
                case 2:
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatboxinner").innerText = "I remember all the concerts that happened here..."; 
                    break; 
                case 3:
                    document.getElementById("chatboxinner").innerText = "Now, all I hear is a deafening silence."; 
                    break; 
                case 4:
                    document.getElementById("chatbox").style.display = "none"; 
                    document.getElementById("backstage").style.display = "block"; 
                    document.getElementById("exit1").style.display = "block"; 
                    document.getElementById("exit2").style.display = "block"; 
                    localStorage.setItem('audiFirst', 0);
                    break; 
            }
        } else {
            switch(seq12) {
                case 2:
                    document.getElementById("chatbox").style.display = "none"; 
                    document.getElementById("backstage").style.display = "block"; 
                    document.getElementById("exit1").style.display = "block"; 
                    document.getElementById("exit2").style.display = "block"; 
                    break;
            }
        }
    }
}


// Sequence 13
seq13 = 0;

function seq13Start() {
    active = 13;
    seq13 = 0;
    seq13++
    document.getElementById("backstage").style.display = "none"; 
    document.getElementById("exit1").style.display = "none"; 
    document.getElementById("exit2").style.display = "none";
    switch(seq13) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "It's the auditorium stage, covered in darkness..."; 
            break;   
    }
}

function seq13Click() {
    if (active == 13) {
        seq13++
        switch(seq13) {
            case 2:
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "Behind those curtains would be the backstage..."; 
                break; 
            case 3:
                if (parseInt(localStorage.getItem('bossFirst')) == 1) {
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatboxinner").innerText = "For some reason, I shudder just thinking what could be back there..";
                } else {
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatboxinner").innerText = "I'm not going back there again...";
                } 
                break;
            case 4:
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                if (parseInt(localStorage.getItem('bossFirst')) == 1) {    
                    document.getElementById("chatboxinner").innerText = "Should I head in?"; 
                    document.getElementById("yes").style.display = "block";
                    document.getElementById("no").style.display = "block"; 
                } else {
                    document.getElementById("chatbox").style.display = "none"; 
                    document.getElementById("backstage").style.display = "block"; 
                    document.getElementById("exit1").style.display = "block"; 
                    document.getElementById("exit2").style.display = "block"; 
                }
                break;
            }
    }
}


// Sequence 14
seq14 = 0;

function seq14Start() {
    active = 14;
    seq14 = 0;
    seq14++
    document.getElementById("backstage").style.display = "none"; 
    document.getElementById("exit1").style.display = "none"; 
    document.getElementById("exit2").style.display = "none";
    switch(seq14) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "It's an emergency exit..."; 
            break;   
    }
}

function seq14Click() {
    if (active == 14) {
        seq14++
        switch(seq14) {
            case 2:
                document.getElementById("chatboxinner").style.fontStyle = "Italic";
                document.getElementById("chatboxinner").innerText = "*You push against the doors... they don't budge*"; 
                break; 
            case 3:
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "It seems the doors are boarded up from the other side."; 
                break; 
            case 4:
                document.getElementById("chatbox").style.display = "none"; 
                document.getElementById("backstage").style.display = "block"; 
                document.getElementById("exit1").style.display = "block"; 
                document.getElementById("exit2").style.display = "block"; 
                break; 
            }
    }
}


// Sequence 15
seq15 = 0;

function seq15Start() {
    active = 15;
    seq15 = 0;
    seq15++
    document.getElementById("backstage").style.display = "none"; 
    document.getElementById("exit1").style.display = "none"; 
    document.getElementById("exit2").style.display = "none";
    switch(seq15) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "It's an emergency exit..."; 
            break;   
    }
}

function seq15Click() {
    if (active == 15) {
        seq15++
        switch(seq15) {
            case 2:
                document.getElementById("chatboxinner").style.fontStyle = "Italic";
                document.getElementById("chatboxinner").innerText = "*You push against the doors... they don't budge*"; 
                break; 
            case 3:
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "It seems the doors are boarded up from the other side."; 
                break; 
            case 4:
                document.getElementById("chatbox").style.display = "none"; 
                document.getElementById("backstage").style.display = "block"; 
                document.getElementById("exit1").style.display = "block"; 
                document.getElementById("exit2").style.display = "block"; 
                break; 
            }
    }
}



// Sequence 16
seq16 = 0;

function seq16Start() {
    active = 16;
    seq16 = 0;
    seq16++
    itemLoad();
    document.getElementById('sndClass').play();
    document.getElementById("locker1").style.display = "none"; 
    document.getElementById("locker2").style.display = "none"; 
    document.getElementById("locker3").style.display = "none";
    switch(seq16) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "Italic";
            document.getElementById("chatboxinner").innerText = "*You arrive in the classroom...*"; 
            break;   
    }
}

function seq16Click() {
    if (active == 16) {
        seq16++
        if (parseInt(localStorage.getItem('class1First')) == 1) {
            switch(seq16) {
                case 2:
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatboxinner").innerText = "This view makes me feel like a kid again..."; 
                    break; 
                case 3:
                    document.getElementById("chatboxinner").innerText = "I wonder how things would be if the incidents never happened."; 
                    break; 
                case 4:
                    document.getElementById("chatbox").style.display = "none"; 
                    document.getElementById("locker1").style.display = "block"; 
                    document.getElementById("locker2").style.display = "block"; 
                    document.getElementById("locker3").style.display = "block";
                    localStorage.setItem('class1First', 0); 
                    break; 
            }
        } else {
            switch(seq16) {
                case 2:
                    document.getElementById("chatbox").style.display = "none"; 
                    document.getElementById("locker1").style.display = "block"; 
                    document.getElementById("locker2").style.display = "block"; 
                    document.getElementById("locker3").style.display = "block"; 
                    break;
            }
        }
    }
}

// Sequence 17
function seq17Start() {
    active = 17;
    seq17 = 0;
    seq17++
    document.getElementById("locker1").style.display = "none"; 
    document.getElementById("locker2").style.display = "none"; 
    document.getElementById("locker3").style.display = "none";
    switch(seq17) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "It's a random students locker, its unlocked..."; 
            break;   
    }
}

function seq17Click() {
    if (active == 17) {
        seq17++
        switch(seq17) {
            case 2:
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "There's a gym uniform here, and some assorted textbooks..."; 
                break;
            case 3:
                document.getElementById("chatboxinner").innerText = "After all that has happened, I wonder why these are still here"; 
                break; 
            case 4:
                document.getElementById("chatbox").style.display = "none";
                document.getElementById("locker1").style.display = "block"; 
                document.getElementById("locker2").style.display = "block"; 
                document.getElementById("locker3").style.display = "block"; 
                break;
        }
    }
}

// Sequence 18
function seq18Start() {
    active = 18;
    seq18 = 0;
    seq18++
    document.getElementById("locker1").style.display = "none"; 
    document.getElementById("locker2").style.display = "none"; 
    document.getElementById("locker3").style.display = "none";
    switch(seq18) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "It's a generic locker, missing its lock..."; 
            break;   
    }
}

function seq18Click() {
    if (active == 18) {
        seq18++
        switch(seq18) {
            case 2:
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "There are some boxes and assorted papers here..."; 
                break;
            case 3:
                document.getElementById("chatboxinner").innerText = "Among them are random worksheets and assignments..."; 
                break; 
            case 4:
                document.getElementById("chatboxinner").innerText = "There is one paper, ripped in half unlike the rest..."; 
                break; 
            case 5:
                document.getElementById("chatboxinner").innerText = "It titles as a notice for the backstage crew, dated to a few weeks before closing..."; 
                break;
            case 6:
                document.getElementById("chatboxinner").innerText = "Besides the title the notice reads..."; 
                break;  
            case 7:
                document.getElementById("chatboxinner").innerText = "'Due to security locking up after 5pm, we will store a copy of the...'"; 
                break; 
            case 8:
                document.getElementById("chatboxinner").innerText = "Then it cuts off at the rip..."; 
                break; 
            case 9:
                document.getElementById("chatbox").style.display = "none";
                document.getElementById("locker1").style.display = "block"; 
                document.getElementById("locker2").style.display = "block"; 
                document.getElementById("locker3").style.display = "block"; 
                break;
        }
    }
}

// Sequence 19
function seq19Start() {
    active = 19;
    seq19 = 0;
    seq19++
    document.getElementById("locker1").style.display = "none"; 
    document.getElementById("locker2").style.display = "none"; 
    document.getElementById("locker3").style.display = "none";
    switch(seq19) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "It's a teacher's locker, it has a name tag on it..."; 
            break;   
    }
}

function seq19Click() {
    if (active == 19) {
        seq19++
        switch(seq19) {
            case 2:
                document.getElementById("chatboxinner").innerText = "The old tag is peeling off at multiple points..."; 
                break;
            case 3:
                document.getElementById("chatboxinner").innerText = "I can only see the last few letters of their name..."; 
                break;
            case 4:
                document.getElementById("chatboxinner").innerText = "It reads 'sen'..."; 
                break;
        }
        if (parseInt(localStorage.getItem('paperclip')) == 1 && parseInt(localStorage.getItem('lockerLock')) == 1) {
            switch(seq19) {
                case 5:
                    document.getElementById("chatboxinner").innerText = "It's locked, I could try to open this locker with the paperclip"; 
                    break;  
                case 6:
                    document.getElementById("chatboxinner").style.fontStyle = "Italic";
                    document.getElementById("chatboxinner").innerText = "*You insert the paperclip into the lock and after 10 or so minutes..."; 
                    break;  
                case 7:
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatboxinner").innerText = "It clicked! Perhaps I am not as bad at lockpicking as I think..."; 
                    break; 
                case 8:
                    document.getElementById("chatboxinner").style.fontStyle = "Italic";
                    document.getElementById("chatboxinner").innerText = "*You creak open the locker and look inside*"; 
                    break;
                case 9:
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatboxinner").innerText = "There's a crowbar in here! This could definitely come in handy..."; 
                    document.getElementById('equipCrowbar').play();
                    document.getElementById("crowbar").style.display = "block";
                    break;
                case 10:
                    document.getElementById("chatboxinner").innerText = "Seems the crowbar has some old blood on it, the whole locker reeks of iron..."; 
                    break;
                case 11:
                    document.getElementById("chatboxinner").innerText = "Am I holding a murder weapon? How did the investigation miss this?"; 
                    break;
                case 12:
                    document.getElementById("chatbox").style.display = "none";
                    document.getElementById("locker1").style.display = "block"; 
                    document.getElementById("locker2").style.display = "block"; 
                    document.getElementById("locker3").style.display = "block"; 
                    localStorage.setItem('crowbar', 1);
                    localStorage.setItem('lockerLock', 0);
                    break;

            }
        }
        else if (parseInt(localStorage.getItem('paperclip')) == 0 && parseInt(localStorage.getItem('lockerLock')) == 1) {
            switch(seq19) {
                case 5:
                    document.getElementById("chatboxinner").innerText = "It's locked by an old school lock, I could probably pick this with something."; 
                    break; 
                case 6:
                    document.getElementById("chatbox").style.display = "none";
                    document.getElementById("locker1").style.display = "block"; 
                    document.getElementById("locker2").style.display = "block"; 
                    document.getElementById("locker3").style.display = "block"; 
                    break;
            }
        } else {
            switch(seq19) {
                case 5:
                    document.getElementById("chatboxinner").innerText = "It still reeks of blood in this locker."; 
                    break; 
                case 6:
                    document.getElementById("chatbox").style.display = "none";
                    document.getElementById("locker1").style.display = "block"; 
                    document.getElementById("locker2").style.display = "block"; 
                    document.getElementById("locker3").style.display = "block"; 
                    break;
                }
            }
        
    }
}

// Sequence 21
seq21 = 0;

function seq21Start() {
    active = 21;
    seq21 = 0;
    seq21++
    localStorage.setItem('stairKey', 0);
    localStorage.setItem('bossFirst', 1);
    itemLoad();
    document.getElementById("static").style.display = "none";
    switch(seq21) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("back").style.display = 'none'; 
            document.getElementById("chatboxinner").innerText = "I've been stumbling through darkness for several minutes now..."; 
            break;   
    }
}

function seq21Click() {
    if (active == 21) {
        seq21++
        switch(seq21) {
            case 2:
                document.getElementById("chatboxinner").innerText = "..."; 
                break; 
            case 3:
                document.getElementById("chatboxinner").innerText = "What the hell am I doing..."; 
                break; 
            case 3:
                document.getElementById("chatboxinner").innerText = "..."; 
                break;
            case 4:
                document.getElementById("chatboxinner").innerText = "I don't see or hear a damn thing..."; 
                break; 
            case 5:
                document.getElementById("chatboxinner").innerText = "I..."; 
                break;
            case 6:
                document.getElementById("chatboxinner").style.fontStyle = "Italic";
                document.getElementById("chatboxinner").innerText = "*You hear a harsh clock begin to tick...*"; 
                document.getElementById("clock").volume = 0.5;
                document.getElementById("clock").play();
                break; 
            case 7:
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "..."; 
                break; 
            case 8:
                document.getElementById("chatboxinner").innerText = "Am I alive?..."; 
                break; 
            case 9:
                document.getElementById("chatboxinner").style.fontStyle = "Italic";
                document.getElementById("chatboxinner").innerText = "*You put your hand on your chest...*"; 
                break; 
            case 10:
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "I feel it...beating..."; 
                break;
            case 11:
                document.getElementById("chatboxinner").innerText = "Every tick of the clock, I feel my heart beat..."; 
                break;   
            case 12:
                document.getElementById("chatboxinner").innerText = "Every other tick I blink..."; 
                break; 
            case 13:
                document.getElementById("chatboxinner").innerText = "Every 3 ticks, I breath..."; 
                break; 
            case 14:
                document.getElementById("chatboxinner").innerText = "..."; 
                break; 
            case 15:
                document.getElementById("chatboxinner").innerText = "Every tick I inch closer to it..."; 
                break; 
            case 16:
                document.getElementById("chatboxinner").innerText = "..."; 
                break; 
            case 17:
                document.getElementById("chatboxinner").innerText = "Wh- What if I don't finish it..."; 
                break; 
            case 18:
                document.getElementById("chatboxinner").innerText = "..."; 
                break;
            case 19:
                document.getElementById("chatboxinner").style.fontStyle = "Italic";
                document.getElementById("chatboxinner").innerText = "*You take out your handgun...*"; 
                break; 
            case 20:
                document.getElementById("chatboxinner").innerText = "*You feel its cold metal, its complex form, its power...*"; 
                break; 
            case 21:
                document.getElementById("chatboxinner").innerText = "..."; 
                break;
            case 22:
                document.getElementById("chatboxinner").innerText = "*You point the barrel directly to your forehead...*"; 
                break;
            case 23:
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "The more I hold down this trigger, the quieter the ticking gets..."; 
                break;
            case 24:
                document.getElementById("chatboxinner").innerText = "The ticking... do I end it?"; 
                document.getElementById("yes").style.display = "block";
                document.getElementById("no").style.display = "block"; 
                break;
            }
    }
}

// Sequence 22
seq22 = 0;

function seq22Start() {
    active = 22;
    seq22 = 0;
    seq22++
    switch(seq22) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").innerText = "*You fire the gun towards the darkness...*"; 
            break;   
    }
}

function seq22Click() {
    if (active == 22) {
        seq22++
        switch(seq22) {
            case 2:
                document.getElementById("chatboxinner").innerText = "*For the briefest of a tick, the flash of the gun lights the area...*"; 
                break; 
            case 3:
                document.getElementById("chatboxinner").innerText = "I am somewhere...";
                break; 
            case 4:
                document.getElementById("darkness2").style.display = "none"; 
                document.getElementById("chatbox").style.display = "none";
                light1 = 1;
                break;
            }
    }
}

// Sequence 23

function seq23Start() {
    active = 23;
    seq23 = 0;
    seq23++
    light1 = 0;
    light2 = 1;
    switch(seq23) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "This feeling..."; 
            break;   
    }
}

function seq23Click() {
    if (active == 23) {
        seq23++
        switch(seq23) {
            case 2:
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "I am closer to finishing what I need to..."; 
                break; 
            case 3:
                document.getElementById("chatboxinner").innerText = "Something I need is in this room..."; 
                break; 
            case 4:
                document.getElementById("chatbox").style.display = "none"; 
                document.getElementById("blood").style.display = "block";
                break; 
            }
    }
}

function seq24Start() {
    active = 24;
    seq24 = 0;
    seq24++
    document.getElementById("blood").style.display = "none";
    switch(seq24) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "What the hell..."; 
            break;   
    }
}

function seq24Click() {
    if (active == 24) {
        seq24++
        switch(seq24) {
            case 2:
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "This is a whole lot of blood, and it's fresh..."; 
                break; 
            case 3:
                document.getElementById("chatboxinner").innerText = "..."; 
                break; 
            case 4:
                document.getElementById("chatboxinner").innerText = "I don't want to think about it..."; 
                break; 
            case 5:
                document.getElementById("chatbox").style.display = "none"; 
                setTimeout(seq25Start, 10000);
                break; 
            }
    }
}

// Final Minigame Sequences - - - - - - - - - - - - 

// Sequence 25
function seq25Start() {
    active = 25;
    seq25 = 0;
    seq25++
    document.getElementById("blood").style.display = "none";
    document.getElementById("darkness").style.display = "block";
    document.getElementById("trim2").style.display = "block";
    document.getElementById("light").src = "img/off.png";
    setTimeout(seq25Start2, 500);
}
function seq25Start2() {
    active = 25;
    seq25 = 0;
    seq25++
    switch(seq25) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "What the hell happened to the lights, the switch isn-"; 
            break;   
    }   
}

function seq25Click() {
    if (active == 25) {
        seq25++
        switch(seq25) {
            case 2:
                document.getElementById("chatboxinner").style.color = 'rgb(225, 0, 0)';
                document.getElementById("chatboxinner").style.fontStyle = "Italic";
                document.getElementById("chatboxinner").innerText = "Professor is that you?"; 
                document.getElementById("song").volume = 0.1;
                document.getElementById("song").play();
                break; 
            case 3:
                document.getElementById("chatboxinner").innerText = "Professor I hate the dark..."; 
                break; 
            case 4:
                document.getElementById("chatboxinner").innerText = "When I see dark you ███████████████████ me..."; 
                break; 
            case 5:
                document.getElementById("chatboxinner").innerText = "You taught me to be still to make it easier..."; 
                break; 
            case 6:
                document.getElementById("chatboxinner").innerText = "Professor I love the light..."; 
                break; 
            case 7:
                document.getElementById("chatboxinner").innerText = "When I see light you give me new friends to play with..."; 
                break; 
            case 8:
                document.getElementById("chatboxinner").innerText = "I give my friends love and they give me their ████ Professor!"; 
                break; 
            case 9:
                document.getElementById("chatboxinner").innerText = "One day I will finish my assignment professor!"; 
                break; 
            case 10:
                document.getElementById("chatboxinner").innerText = "You burned my ████ away, so I could make a new one!"; 
                break; 
            case 11:
                document.getElementById("chatboxinner").innerText = "Professor do I get 100? PROFESSOR...P R O F E S S O R..."; 
                document.getElementById("sndKey").play();
                break;
            case 12:
                document.getElementById("chatboxinner").innerText = "Have I been a good student?"; 
                break;  
            case 13:
                document.getElementById("chatbox").style.display = "none";
                setTimeout(seq26Start, 2000); 
                break; 
            }
    }
}


// Sequence 26
function seq26Start() {
    active = 26;
    seq26 = 0;
    seq26++
    switch(seq26) {
        case 0:
            break;
        case 1:
            document.getElementById("chatboxinner").style.color = 'rgb(225, 255, 255)';
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "..."; 
            break;   
    }   
}

function seq26Click() {
    if (active == 26) {
        seq26++
        switch(seq26) {
            case 2:
                document.getElementById("chatboxinner").style.fontStyle = "Italic";
                document.getElementById("chatboxinner").innerText = "*You pull out your gun and aim it towards the voice...*"; 
                break; 
            case 3:
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "..."; 
                break; 
            case 4:
                document.getElementById("chatboxinner").innerText = "I can't pull this trigger..."; 
                break; 
            case 5:
                document.getElementById("chatboxinner").innerText = "For some reason it feels like I'm about to kill an old friend..."; 
                break; 
            case 6:
                document.getElementById("chatboxinner").innerText = "Their voice...could it be..."; 
                break;
            case 7:
                document.getElementById("chatboxinner").innerText = "..."; 
                break;  
            case 8:
                document.getElementById("chatboxinner").innerText = "I think it would be smarter to not interact with that thing for now..."; 
                break;
            case 9:
                document.getElementById("chatboxinner").innerText = "I need to find what I came here for..."; 
                break;
            case 10:
                timerInit();
                document.getElementById("chatboxinner").innerText = "I don't think I have a lot of time before things get ugly..."; 
                break;   
            case 11:
                document.getElementById("keyF").style.display = "block";
                document.getElementById("keyFV").style.display = "block";  
                document.getElementById("light").style.pointerEvents = "all";
                document.getElementById("chatbox").style.display = "none"; 
                break; 
            }
    }
}

// Sequence 27
function seq27Start() {
    active = 27;
    seq27 = 0;
    seq27++
    switch(seq27) {
        case 0:
            break;
        case 1:
            document.getElementById("chatboxinner").style.color = 'rgb(225, 255, 255)';
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "..."; 
            break;   
    }   
}

function seq27Click() {
    if (active == 27) {
        seq27++
        switch(seq27) {
            case 2:
                document.getElementById("chatboxinner").style.color = 'rgb(225, 0, 0)';
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "Professor..."; 
                break; 
            case 3:
                document.getElementById("chatboxinner").innerText = "Please answer me..."; 
                break; 
            case 4:
                document.getElementById("chatboxinner").innerText = "You know what my parents do to me when you give Z E R O..."; 
                break; 
            case 5:
                document.getElementById("chatboxinner").innerText = "Professor?"; 
                break; 
            case 6:
                document.getElementById("light").style.pointerEvents = "all";
                document.getElementById("chatbox").style.display = "none"; 
                break; 
            }
    }
}

// Sequence 28
function seq28Start() {
    active = 28;
    seq28 = 0;
    seq28++
    switch(seq28) {
        case 0:
            break;
        case 1:
            document.getElementById("chatboxinner").style.color = 'rgb(225, 255, 255)';
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "..."; 
            break;   
    }   
}

function seq28Click() {
    if (active == 28) {
        seq28++
        switch(seq28) {
            case 2:
                document.getElementById("chatboxinner").style.color = 'rgb(225, 0, 0)';
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "P R O F E S S O R ?"; 
                break; 
            case 3:
                document.getElementById("chatboxinner").innerText = "That not professor is it..."; 
                break; 
            case 4:
                document.getElementById("chatboxinner").innerText = "A Friend?"; 
                break; 
            case 5:
                document.getElementById("light").style.pointerEvents = "all";
                document.getElementById("chatbox").style.display = "none"; 
                break; 
            }
    }
}


// Once key is found
function key() {
    document.getElementById('equipKey').play();
    localStorage.setItem('stairKey', 1);
    document.getElementById("key").style.display = "block";
    document.getElementById("keyV").style.display = "block";
    localStorage.setItem('bossFirst' , 0);
    document.getElementById("back").style.display = "block";
}

// When Back button is pressed *Key was found*
function seq29Start() {
    document.getElementById("darkness2").style.display = "block";
    pauseTimer();
    document.getElementById("clock").pause();
    document.getElementById("song").pause();
    active = 29;
    seq29 = 0;
    seq29++
    switch(seq29) {
        case 0:
            break;
        case 1:
            document.getElementById("chatboxinner").style.color = 'rgb(225, 255, 255)';
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "Italic";
            document.getElementById("chatboxinner").innerText = "*You quicky exit backstage through the curtains*";
            break;   
    }   
}

function seq29Click() {
    if (active == 29) {
        seq29++
        switch(seq29) {
            case 2:
                document.getElementById("chatboxinner").style.color = 'rgb(225, 255, 255)';
                document.getElementById("chatboxinner").style.fontStyle = "Italic";
                document.getElementById("chatboxinner").innerText = "*and after 5 or so minutes of frantic sprinting...*"; 
                break; 
            case 3:
                document.getElementById("chatbox").style.display = "none";
                window.location.href="auditorium.html"; 
                break; 
            }
    }
}



// Jumpscare Functions - - - - - - - - - - - - - - 
function jumpscare() {
    document.getElementById("jumpscare").play();
    document.getElementById("hud").style.display = "none";
    document.getElementById("static").style.display = "none";
    document.getElementById("monster").style.display = "none";
    document.getElementById("monsterScare").style.display = "block";
    document.getElementById("blood1").style.display = "block";
    document.getElementById("blood4").style.display = "block";
    setTimeout(jumpscareFlash, 2000);
    setTimeout(jumpscareUnflash, 2100);
    setTimeout(gameOver, 5000);
}

function jumpscareFlash() {
    gunshot();
    document.getElementById("darkness2").style.display = "none";
    document.getElementById("darkness").style.display = "none";
}

function jumpscareUnflash() {
    document.getElementById("darkness2").style.display = "block";
    document.getElementById("darkness").style.display = "block";
    document.getElementById("blood2").style.display = "block";
    document.getElementById("blood3").style.display = "block";
}

// Extra Sequences - - - - - - - - - 
seq20 = 0;
function seq20Start() {
    seq20 = 0;
    active = 20;
    seq20++
    switch(seq20) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block"; 
            document.getElementById("bin").style.display = "none"; 
            document.getElementById("toLobby").style.display = "none"; 
            document.getElementById("bulletin").style.display = "none";
            document.getElementById("classroom1").style.display = "none";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "I can't leave, I need to finish this... My sanity depends on it."; 
            break;       
    }
}

function seq20Click() {
    if (active == 20) {
        seq20++
        switch(seq20) {
            case 2:
                document.getElementById("chatbox").style.display = "none"; 
                document.getElementById("bin").style.display = "block"; 
                document.getElementById("toLobby").style.display = "block"; 
                document.getElementById("bulletin").style.display = "block";
                document.getElementById("classroom1").style.display = "block"; 
                break;  
        }
    }
}

function seq21Flash() {
    document.getElementById("darkness").style.display = "none";
    document.getElementById("darkness2").style.display = "none";
}

function seq21Unflash() {
    document.getElementById("darkness").style.display = "block";
    document.getElementById("darkness2").style.display = "block";
}


// Utility Functions
function gunshot() {
    document.getElementById("gunshot").play();
}
function gunshot2() {
    document.getElementById("gunshot2").play();
}

function seqReset() {
    seq = 0;
    seq1 = 0;
    seq2 = 0;
    seq3 = 0;
    seq4 = 0;
}

function mainClick() {
    seqClick();
    seq1Click();
    seq3Click();
    seq4Click();
    seq6Click();
    seq7Click();
    seq8Click();
    seq9Click();
    seq10Click();
    seq11Click();
    seq12Click();
    seq13Click();
    seq14Click();
    seq15Click();
    seq16Click();
    seq17Click();
    seq18Click();
    seq19Click();
    seq20Click();
    seq21Click();
    seq22Click();
    seq23Click();
    seq24Click();
    seq25Click();
    seq26Click();
    seq27Click();
    seq28Click();
    seq29Click();
}

// Timer
function timerInit() {
elapsedTime = 30000;
document.getElementById("countdown").style.display = "block";
document.getElementById("trim").style.display = "block";
document.getElementById("arrow1").style.display = "block";
document.getElementById("blood").style.display = "none";
document.getElementById("countdown").innerHTML = (elapsedTime / 1000).toFixed(3);
document.getElementById("clock").volume = 0.1;
document.getElementById("song").volume = 0.1;
}

Stage2 = false;
Stage3 = false;
function startTimer() {
    interval = setInterval(function() {
        elapsedTime = elapsedTime - 11;
        document.getElementById("countdown").innerHTML = (elapsedTime / 1000).toFixed(3);
        if (elapsedTime <= 0) {
            pauseTimer();
            document.getElementById("clock").pause();
            document.getElementById("song").pause();
            document.getElementById("countdown").innerHTML = '0.000';
            document.getElementById("darkness").style.display = "block"; 
            document.getElementById("darkness2").style.display = "block"; 
            setTimeout(jumpscare, 5000);
        } else if (elapsedTime <= 10000 && !Stage3) {
            Stage3 = true;
            pauseTimer();
            document.getElementById("clock").pause();
            document.getElementById("clock").volume = 0.6;
            document.getElementById("static").style.opacity = "0.5";
            document.getElementById("countdown").innerHTML = '10.000';
            document.getElementById("light").style.pointerEvents = "none";
            document.getElementById("light").src = "img/off.png";
            document.getElementById("trim2").style.display = "block";
            document.getElementById("monster").classList.add('stage3');
            document.getElementById("trim").classList.add('stage3');
            document.getElementById("dave").classList.add('stage3');
            document.getElementById("trim2").classList.add('stage3');
            document.getElementById("darkness").style.display = "block";
            document.getElementById("arrow3").style.display = "block";
            setTimeout(seq28Start, 2000);
        } else if (elapsedTime <= 20000 && !Stage2) {
            Stage2 = true;
            pauseTimer();
            document.getElementById("clock").pause();
            document.getElementById("clock").volume = 0.3;
            document.getElementById("static").style.opacity = "0.3";
            document.getElementById("countdown").innerHTML = '20.000';
            document.getElementById("light").style.pointerEvents = "none";
            document.getElementById("light").src = "img/off.png";
            document.getElementById("dave").src = "img/dave2.jpeg";
            document.getElementById("trim2").style.display = "block";
            document.getElementById("monster").classList.add('stage2');
            document.getElementById("trim").classList.add('stage2');
            document.getElementById("dave").classList.add('stage2');
            document.getElementById("trim2").classList.add('stage2');
            document.getElementById("darkness").style.display = "block"; 
            document.getElementById("arrow2").style.display = "block";
            setTimeout(seq27Start, 2000);
        }
    }, 11);
}

function pauseTimer() {
    clearInterval(interval);
}

// Light Switch Function
function lightSwitch() {
    if (document.getElementById("darkness").style.display == "block") {
        document.getElementById("darkness").style.display = "none";
        document.getElementById("trim2").style.display = "none"; 
        document.getElementById("light").src = "img/on.png";
        if (light1) {
            document.getElementById("light").style.pointerEvents = "none";
            setTimeout(seq23Start, 1000);
        } else if (light2) {
            document.getElementById("static").style.display = "block";
            startTimer();
            document.getElementById("clock").play();
        }
    } else if (document.getElementById("darkness").style.display == "none") {
        document.getElementById("darkness").style.display = "block"; 
        document.getElementById("trim2").style.display = "block";
        document.getElementById("light").src = "img/off.png";
        pauseTimer();
        document.getElementById("clock").pause();
    }
}


// Yes No Prompt Functions - - - - - - - - 
function yes2() {
    switch(active) {
        case 2:
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            window.location.href="hall.html";
            break;
        case 5:
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            window.location.href="lobby.html";
            break;
        case 7: 
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            window.location.href="class1.html";
            seq7 = 0;
            localStorage.setItem('c1locked', 0)
            break;
        case 9:
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            window.location.href="auditorium.html";
            localStorage.setItem('audiBoarded', 0)
            break;
        case 11:
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            localStorage.setItem('stairLock', 0)
            window.location.href="win.html";
            break;
        case 13:
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            window.location.href="backstage.html";
            break;
        case 21:
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            window.location.href="over.html";
            document.getElementById("oText").innerText = "The clock ticks as your corpse rots away.";
            break;
    }
}

function no2() {
    switch(active) {
        case 2:
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            document.getElementById("mainentrance").style.display = "block";
            seq2 = 0;
            break;
        case 5:
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none"; 
            document.getElementById("bin").style.display = "block"; 
            document.getElementById("toLobby").style.display = "block"; 
            document.getElementById("bulletin").style.display = "block";
            document.getElementById("classroom1").style.display = "block";
            break;
        case 7: 
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none"; 
            document.getElementById("bin").style.display = "block"; 
            document.getElementById("toLobby").style.display = "block"; 
            document.getElementById("bulletin").style.display = "block";
            document.getElementById("classroom1").style.display = "block";
            seq7 = 0;
            localStorage.setItem('c1locked', 0)
            break;
        case 9:
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            document.getElementById("audiDoor").style.display = "block"; 
            document.getElementById("display").style.display = "block"; 
            document.getElementById("staircase").style.display = "block";
            localStorage.setItem('audiBoarded', 0)
            break;
        case 11:
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            document.getElementById("audiDoor").style.display = "block"; 
            document.getElementById("display").style.display = "block"; 
            document.getElementById("staircase").style.display = "block"; 
            localStorage.setItem('stairLock', 0)
            break;
        case 13:
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            document.getElementById("backstage").style.display = "block"; 
            document.getElementById("exit1").style.display = "block"; 
            document.getElementById("exit2").style.display = "block";
            break;
        case 21:
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            setTimeout(gunshot, 490);
            setTimeout(seq21Flash, 500);
            setTimeout(seq21Unflash, 510);
            setTimeout(seq22Start, 3000);
            document.getElementById("clock").pause();
            break;
    }
}