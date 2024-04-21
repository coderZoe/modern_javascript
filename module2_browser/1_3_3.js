let turn = 0;

let cheatType = "fiveCheat";
let cheatConfig = {}

if (cheatType === "fiveCheat") {
    cheatConfig = {
        winSize: 5,
        horizontal: 40,
        vertical: 40
    }
    document.head.children[0].innerHTML = "五子棋";
    document.body.children[0].innerHTML = "五子棋"
}

if (cheatType === "cheatJ") {
    cheatConfig = {
        winSize: 3,
        horizontal: 3,
        vertical: 3
    }
}

//渲染棋盘
const cheat = document.getElementById("cheat");
const table = document.createElement("table");
table.style.margin = "auto";
cheat.appendChild(table);

for (let i = 0; i < cheatConfig.vertical; i++) {
    let tr = document.createElement("tr")
    table.appendChild(tr);
    for (let j = 0; j < cheatConfig.horizontal; j++) {
        let td = document.createElement("td");
        td.id = i * cheatConfig.horizontal + j;
        if (cheatType == "fiveCheat") {
            td.style.width = "30px";
            td.style.height = "30px";
            td.style.fontSize = "large";
        }
        tr.appendChild(td);
    }
}



//通过事件委派处理子元素td的事件
table.addEventListener("mouseenter", (event) => {
    let element = event.target;
    if (element.tagName === "TD" && !element.getAttribute("turn-type")) {
        element.style.cursor = 'pointer';
    }
}, true)

table.addEventListener("mouseleave", (event) => {
    let element = event.target;
    if (element.tagName === "TD") {
        element.style.cursor = 'auto';
    }
}, true)

table.addEventListener("click", (event) => {
    let element = event.target
    if (event.target.tagName === "TD") {
        //只有没下过才允许下
        if (!element.getAttribute("turn-type")) {
            setTd(element);
            turn = 1 - turn;
        }
    }
})

function getCheatType() {
    return turn == 0 ? "X" : "O";
}

//落子处理
function setTd(element) {
    let turnType = getCheatType();
    element.textContent = turnType;
    element.setAttribute("turn-type", turnType)
    checkAndHandle(element)
}


function checkAndHandle(element) {
    let array = getLine(element);
    if (isSuccess(element, array)) {
        return;
    }
    array = getHeight(element);
    if (isSuccess(element, array)) {
        return;
    }
    array = getLH1(element);
    if (isSuccess(element, array)) {
        return;
    }
    array = getLH2(element);
    if (isSuccess(element, array)) {
        return;
    }
}


function isSuccess(element, array) {
    let turnType = element.getAttribute("turn-type");
    let startIndex = -1;
    let continueSuccessCount = 0;
    for (let i = 0; i < array.length; i++) {
        let type = array[i].getAttribute("turn-type");
        if (type === turnType) {
            continueSuccessCount++;
            if (startIndex === -1) {
                startIndex = i;
            }
            if (continueSuccessCount === cheatConfig.winSize) {
                handleSuccess()
                return true;
            }
        } else {
            continueSuccessCount = 0;
            startIndex = -1;
        }
    }

    function handleSuccess() {
        for (let i = 0; i < cheatConfig.winSize; i++) {
            array[startIndex + i].style.background = "green";
        }
        alert(`游戏结束，${turnType}获胜`);
    }

    return false;
}

//横向的棋子，判断横向是否赢棋
function getLine(element) {
    let id = element.id;
    let trIndex = Math.floor(id / cheatConfig.horizontal)
    let base = trIndex * cheatConfig.horizontal;
    let tdIndex = id - base;
    let array = [];

    array.push(element);
    getLeft();
    getRight();

    return array;

    function getLeft() {
        //往左挪n-1个
        let startTdIndex = tdIndex - 1;
        for (let i = 0; i < cheatConfig.winSize - 1; i++) {
            getAndPush(array, trIndex, startTdIndex, true);
            startTdIndex--;
        }
    }

    function getRight() {
        //从右一开始往右数n-1个
        let startTdIndex = tdIndex + 1;
        for (let i = 0; i < cheatConfig.winSize - 1; i++) {
            getAndPush(array, trIndex, startTdIndex, false);
            startTdIndex++;
        }
    }
}

//纵向的棋子，判断纵向是否赢棋
function getHeight(element) {
    let id = element.id;
    let trIndex = Math.floor(id / cheatConfig.horizontal)
    let base = trIndex * cheatConfig.horizontal;
    let tdIndex = id - base;
    let array = [];
    array.push(element);
    getUp();
    getDown();

    function getUp() {
        let startTrIndex = trIndex - 1;
        for (let i = 0; i < cheatConfig.winSize - 1; i++) {
            getAndPush(array, startTrIndex, tdIndex, true)
            startTrIndex--;
        }
    }

    function getDown() {
        let startTrIndex = trIndex + 1;
        for (let i = 0; i < cheatConfig.winSize - 1; i++) {
            getAndPush(array, startTrIndex, tdIndex, false)
            startTrIndex++;
        }
    }

    return array;
}

//斜向的棋子，判断斜向是否赢棋
function getLH1(element) {
    let id = element.id;
    let trIndex = Math.floor(id / cheatConfig.horizontal);
    let base = trIndex * cheatConfig.horizontal;
    let tdIndex = id - base;
    let array = [];
    array.push(element);
    getLeftUp();
    getRightDown();
    function getLeftUp() {
        let startTrIndex = trIndex - 1;
        let startTdIndex = tdIndex - 1;
        for (let i = 0; i < cheatConfig.winSize - 1; i++) {
            getAndPush(array, startTrIndex, startTdIndex, true)
            startTdIndex--;
            startTrIndex--;
        }
    }

    function getRightDown() {
        let startTrIndex = trIndex + 1;
        let startTdIndex = tdIndex + 1;
        for (let i = 0; i < cheatConfig.winSize - 1; i++) {
            getAndPush(array, startTrIndex, startTdIndex);
            startTrIndex++;
            startTdIndex++;
        }
    }

    return array;
}

function getLH2(element) {
    let id = element.id;
    let trIndex = Math.floor(id / cheatConfig.horizontal);
    let base = trIndex * cheatConfig.horizontal;
    let tdIndex = id - base;
    let array = [];
    array.push(element);
    getRightUp();
    getLeftDown();

    function getRightUp() {
        let startTrIndex = trIndex - 1;
        let startTdIndex = tdIndex + 1;
        for (let i = 0; i < cheatConfig.winSize - 1; i++) {
            getAndPush(array, startTrIndex, startTdIndex, true)
            startTrIndex--;
            startTdIndex++;
        }
    }

    function getLeftDown() {
        let startTrIndex = trIndex + 1;
        let startTdIndex = tdIndex - 1;
        for (let i = 0; i < cheatConfig.winSize - 1; i++) {
            getAndPush(array, startTrIndex, startTdIndex, false)
            startTrIndex++;
            startTdIndex--;
        }
    }
    return array;
}

function getAndPush(array, trIndex, tdIndex, unshift) {
    if (trIndex >= 0 && trIndex < cheatConfig.vertical && tdIndex >= 0 && tdIndex < cheatConfig.horizontal) {
        let targetId = trIndex * cheatConfig.horizontal + tdIndex;
        if (unshift) {
            array.unshift(document.getElementById(targetId));
        } else {
            array.push(document.getElementById(targetId));
        }
    }
}

