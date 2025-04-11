const api_key = "AIzaSyDvlR_ZhDrZTmpiSmOSPrHJEzaDo2NpYU4";
const pid = "PLCnC6XcXem90DKJt20wOFhZLkYiXXZtG0";
const base_url = "https://www.googleapis.com/youtube/v3/playlistItems";
const num = 3;
const req_url = `${base_url}?part=snippet&playlistId=${pid}&key=${api_key}&maxResults=${num}`;

const frame = document.querySelector(".frame");

fetch(req_url)
  .then((data) => {
    return data.json();
  })
  .then((json) => {
    const youtubeData = json.items;

    let tags = "";

    youtubeData.forEach((data, index) => {
      console.log(data);

      let tit = "";
      let desc = "";

      if (data.snippet.title.length > 40) {
        tit = data.snippet.title.substring(0, 40) + "...";
      } else {
        tit = data.snippet.title;
      }

      data.snippet.description.length > 120
        ? (desc = data.snippet.description.substring(0, 120) + "...")
        : (desc = data.snippet.description);

      tags += `
        <article>
          <h2>${tit}</h2>
          <figure>
            <img src=${data.snippet.thumbnails.high.url} />
          </figure>
          <p>${desc}</p>
          <span>${data.snippet.publishedAt
            .split("T")[0]
            .split("-")
            .join(".")}</span>
        </article>      
      `;
    });

    frame.innerHTML = tags;
  });
