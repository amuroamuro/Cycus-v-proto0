//변수선언1
const input = document.querySelector("input");
const output = document.querySelector("header+div+div");
//변수선언2
let doKeyDown = false;
//이벤트리스너 함수
function mainFunction(event) {
    var Key = event.key;
    if(Key=="Enter") {
        if(!doKeyDown) {
            process();
            doKeyDown = true;
        }
    }
}
function unMainFunction(event) {
    var Key = event.key;
    if(Key=="Enter") {
        if(doKeyDown) {
            doKeyDown = false;
        }
    }
}
function process() {
    console.log("오케이.확인!");
}
//이벤트리스너. 젠장 제일귀찮아!!
input.addEventListener('keydown', mainFunction);
input.addEventListener('keyup', unMainFunction);