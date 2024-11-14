//임포트
import { 토큰화, 간략화 } from "./token.js";
//모듈용 변수 정의
export const input = document.querySelector("input");
export const output = document.querySelector("#chating");
//그냥 이 모듈에서만 쓰는 쌈봉한 상수 정의
const comma = " ,.!";
//함수 정의
export function 문장처리() {
    var inputedValue = input.value;
    var inputedValuesRealTokens = 토큰화(inputedValue, comma);
    var inputedValueSameTokens = 간략화(inputedValue, comma);
    //console.log(inputedValuesRealTokens+"<--토큰화/간략화-->"+inputedValueSameTokens);

}
export function firstProcess() {
    문장처리();
}