let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector("#resetbtn");
let newgamebtn = document.querySelector("#newgamebtn");
let msgcontainer = document.querySelector(".winner-container");
let msgpara = document.querySelector("#msg");


let turn0 = true;

const resetGame = () => {
    turn0 = true;
    enabledboxes();
    msgcontainer.classList.add("hide");

}


const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("box clicked");
        if (turn0) {
            box.innerHTML = "O";
            turn0 = false;
        } else {
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkwinner();
    })
})
const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }

}
const enabledboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }

}
const showewinner = (winner) => {
    msg.innerText = ` Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();

}
const checkwinner = () => {
    for (let pattern of winpatterns) {

        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val && pos3val) {
                console.log("winner", pos1val);
                showewinner(pos1val);

            }
        }

    }
}

newgamebtn.addEventListener('click', resetGame);
resetbtn.addEventListener('click', resetGame);