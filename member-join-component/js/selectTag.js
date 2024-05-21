
// 생년월이 영역
const selectJumin = document.getElementById('jumin')
const selectMonth = document.getElementById('month')
const selectDay = document.getElementById('day')

for(var i=1920; i <= 2024; i++) {
    const option = document.createElement('option')
    option.text = i
    option.value = i
    selectJumin.appendChild(option)
}
for(var i=1; i <= 12; i++) {
    const option = document.createElement('option')
    option.text = i
    option.value = i
    selectMonth.appendChild(option)
}
for(var i=1; i <= 31; i++) {
    const option = document.createElement('option')
    option.text = i
    option.value = i
    selectDay.appendChild(option)
}



// Email value값이동
function emailchoice() {
    const emailInput = document.getElementById('email')
    const elist = document.getElementById('elist')
    emailInput.value =  elist.value
}

// 취소함수
const cencel=function() {
    window.location.href='index.html'
}