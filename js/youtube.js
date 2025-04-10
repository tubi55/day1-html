const api_key = "AIzaSyDvlR_ZhDrZTmpiSmOSPrHJEzaDo2NpYU4";
const pid = "PLCnC6XcXem90DKJt20wOFhZLkYiXXZtG0";
const base_url = "https://www.googleapis.com/youtube/v3/playlistItems";
const num = 3;
const req_url = `${base_url}?part=snippet&playlistId=${pid}&key=${api_key}&maxResults=${num}`;

//요청 url을 인자로 전달해서 서버에 데이터 요청후 가져오기
fetch(req_url)
  .then((data) => {
    //모든 데이터가 받아지면 data라는 매개변수로 전달됨
    //js로 가공가능한 json형태로 변환시킴
    return data.json();
  })
  .then((json) => {
    //json데이터 변환이 완료되면 최종 데이터 콘솔로 확인
    console.log(json);
  });
