const searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchGiphs);

function searchGiphs(e) {
  e.preventDefault();
  const searchTerm = document.querySelector(".search").value;

  fetch(`https://api.giphy.com/v1/gifs/search?&q=${searchTerm}&limit=12&api_key=M4oq1u88pRtoDZOu4uH4ILNDW6hgYZRc`)
    .then(response => {
      return response.json();
    })
    .then(resp => {
      console.log(resp);
      let dataArray = resp.data;
      showGiphs(dataArray);
    })
    .catch(err => console.log(err));
}

function showGiphs(dataArray) {
  const results = document.querySelector(".results");
  let output = '<div class="results">';
  dataArray.forEach(imgData => {
    output += `<a href="${imgData.images.original.url}"><img src="${imgData.images.original.url}"></a>`;
  });

  document.querySelector(".results").innerHTML = output;
}
