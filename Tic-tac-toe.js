let boxes = document.querySelectorAll('.btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let reset = document.querySelector('#reset');
let newBtn = document.querySelector("#new-game");

turn_X = true; // playerX and playerO
const arr = [[0,1,2],[4,5,3],[7,8,6],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
let Count=0;

const check_winner= ()=>{
    for(let pattern of arr){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3){
                DisableBox();
                ShowWinner(pos1);
                return true;
            }
        }
    }
}

// ----------Reset----------------
const Reset = ()=>{
    msgContainer.classList.add("hide");
    turn_X=true;
    Count=0;
    EnableBox();  
}


// -------------game on --------------
let game_on = (box)=>{
    if(turn_X===true){
        box.innerText ='X'; 
        turn_X = false;    
    }
    else{
        box.innerText = 'O';
        turn_X = true;
    }
    box.disabled=true;
    Count = Count +1;
   
}
// -------------------------------------

// ------------Draw check---------------
check_draw = ()=>{
    msg.innerText="It's a Draw";
    msgContainer.classList.remove('hide');
    DisableBox()
}
// ------------------------------------

// --------to disable boxes-----------
DisableBox =()=>{
    for(box of boxes){
        box.disabled = true;
    }
}
// --------------------------------------
// --------to enable boxes-----------
EnableBox =()=>{
    for(box of boxes){
        box.disabled = false;  
        box.innerText =""; 
    }
}
// --------------------------------------



// -----------------Showing winner msg---
ShowWinner =(pos)=>{
    msg.innerText=`Congratulation! Winner is ${pos}`;
    msgContainer.classList.remove('hide');
    DisableBox();
}
// ------------------------------------------


//============================================Main Fn===========================================
boxes.forEach((box) => {
    box.addEventListener('click',()=>{
        
        game_on(box);
        let isWinner= check_winner();

        if(isWinner!=true && Count===9){
            check_draw();
        }
    }
)})

reset.addEventListener('click',Reset);
newBtn.addEventListener('click',Reset)

// =========================================================================================

