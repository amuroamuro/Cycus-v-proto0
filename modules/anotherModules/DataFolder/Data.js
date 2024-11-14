//변수
//데이터 형식 : [[단어 형태들], [형용사가 없는 질문일 때의 대답], [형용사가 있는 질문일 때 대답], [주장일 때 대답]]
export let isLy = false;
export let isLyLy = false;
export let inputLy = "";
export let inputLyLy = "";
export let betweenWord = "";
export let frontWord = "";
export let backWord = "";
export let backWordList = [];//이거는 문자열 리스트.
export const dataWordIs = [
    [
        [
            "형태",
            "형태는",
            "형태가"
        ],
        [
            "있어.",
            "없어.",
            "내가 어떻게 아냐? 빠가",
            "좆같아."
        ],
        [
            "있겠냐?",
            "있나? 글쎄~ 모르니까 좆까~"
        ],
        [
            "아뉜데?",
            "뭐, 맞나?"
        ]
    ],
    [
        [
            "마스터",
            "마스터는",
            "마스터가"
        ],
        [
            "신이야.",
            "트리커스.",
            "좆까~ 몰라도 돼~"
        ],
        [
            "좆까"
        ],
        [
            "좆까"
        ]
    ]
];