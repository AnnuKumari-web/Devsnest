// const backgrd = document.getElementById('bg')
const input = document.getElementById('search')
const grid = document.getElementsByClassName('container')[0];
const button = document.getElementById('btn')

btn.addEventListener('click',loadImg);

function loadImg() {
  removeImages();
  const url = 'https://api.unsplash.com/search/photos/?query=' + input.value + '&per_page=9&client_id=FNc-ApEXrAAtTi0UucOjbG_5xRO_FQ_iurVNjOGKxMM';
  
  // SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo 
  fetch(url)

    .then(response => {

      if (response.ok){  
        return response.json();
      }
      else {
        alert(response.status + ' Error' + ". Try something else.")
      }
    })
    .then(data => {
      const imageNodes = [];

      for (let i = 0; i < data.results.length; i++) {
        imageNodes[i] = document.createElement('div');
        imageNodes[i].className = 'img';
        imageNodes[i].style.backgroundImage = 'url(' + data.results[i].urls.small + ')';
        grid.appendChild(imageNodes[i])
      }
    })
  }

  function removeImages() {
    grid.innerHTML = '';
  }
