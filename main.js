// 1. 1~100까지의 랜덤 숫자를 뽑는다.
// 2. 입력숫자가 랜덤숫자보다 작으면 up!이라고 표기하고 입력숫자가 랜덤숫자보다 크면 down!로 표기한다.
// 3. 맞췄으면 맞췄다고 표기한다.
// 4. 위에 남은 찬스를 표기해준다.
// 5. 리셋 버튼을 누르면 정답도 초기화 한다. 찬스가 다시 초기화되고 입력한 숫자도 초기화 시켜준다.

let Num = 0

function pickRandomNum(){
    Num = Math.floor(Math.random()*100)+1
    console.log("정답 : ", Num)
}

pickRandomNum()