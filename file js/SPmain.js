let movie_area = document.querySelector("#movie-area");
let movie_sub_area = document.querySelector("#movie-sub-area");

fetch("./file js/SP.json")
  .then((response) => response.json())
  .then((data) => {
     console.log(data);
    for (i = 0; i < data.length; i++) {
      movie_area.innerHTML += `<div class="col-md-3">
      <div class="card" style="width: 18rem; margin-bottom: 20px;">
        <img src="${data[i].img_url}" class="card-img-top" alt="..." id="movie-img" height="400px">
        <div class="card-body">
          <h5 class="card-title" id="movie-name">${data[i].name.substr(0,20)}...</h5>
          <p class="card-text" id="movie-description">${data[i].description.substr(0,80)}...</p>
          <p class="card-text" id="movie-duration"><i class="fa fa-clock"></i> ${data[i].duration}m</p>
          <a href="${data[i].link}" class="btn btn-primary">review</a>
        </div>
      </div>
    </div>`
    }
  })

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


