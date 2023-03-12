let movie_area = document.querySelector("#movie-area");
let movie_sub_area = document.querySelector("#movie-sub-area");

fetch("./file js/film2.json")
  .then((response) => response.json())
  .then((data) => {
     console.log(data);
    for (i = 0; i < data.length; i++) {
      movie_area.innerHTML += `<div class="col-md-3">
      <div class="card actor" style="width: 18rem; margin-bottom: 20px;">
        <img src="${data[i].img_url}" class="card-img-top" alt="..." id="movie-img" height="300px" width="200px">
        <div class="card-body">
          <h5 class="card-title" id="movie-name">${data[i].Name}</h5>
          <p class="card-text" id="movie-description">Character: ${data[i].Character}</p>
        </div>
      </div>
    </div>`
    }
  })

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}