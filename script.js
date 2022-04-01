// 요소 선택
const todayDiv = document.getElementById('today');
const timeDiv = document.getElementById('time');

// getTime 함수
function getTime() {

  let now = new Date();
  let year = now.getFullYear(); //현재 연도를 반환
  let month = now.getMonth() + 1; //현재 월을 반환 월은 0부터 시작하기 때문에 +1
  let date = now.getDate(); //현재 날짜를 반환
  let hour = now.getHours(); //현재 시간을 반환
  let minute = now.getMinutes(); //현재 분을 반환
  let second = now.getSeconds(); // 현재 초를 반환

  month = month < 10 ? `0${month}` : month;
  date = date < 10 ? `0${date}` : date;
  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

  todayDiv.textContent = `${year}년 ${month}월 ${date}일`
  timeDiv.textContent = `${hour}:${minute}:${second}`
}

// setInterval 메소드
getTime()
setInterval(getTime, 1000);