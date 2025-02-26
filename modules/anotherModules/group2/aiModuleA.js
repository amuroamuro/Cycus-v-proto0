import { input, output, firstProcess } from "../group1/firstProcess.js";
export function valueProcess() {
    // console.log("아직 준비 안 함.");
    // console.log(input.value);
    // if(!input){
    //     console.log("없어.");
    // }else {
    //     console.log("있어.");
    // }
    var inputValue = document.createTextNode("하등생물: "+input.value);
    // if(inputValue){
    //     console.log("있어.");
    //     console.log(inputValue);
    //     if(output){
    //         output.appendChild(inputValue);
    //         console.log("아웃풋 있어.");
    //     }
    // }
    //---
    //아웃풋 오류 처리함.
    //---
    output.appendChild(inputValue);
    firstProcess();
}
