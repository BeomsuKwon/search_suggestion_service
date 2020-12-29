// main.js
document.addEventListener("DOMContentLoaded", function () {
  let searchBar = document.getElementById('search-bar');
  searchBar.addEventListener('keyup', (e) => {
    const datalist = document.getElementById('product-names');
    datalist.innerHTML = '';

    let keyWord = searchBar.value;

    fetch(`http://localhost:8080/api/products/${keyWord}`)
      .then(res => res.json())
      .then(data => {
        if(!data.length) return;
        data.forEach(element => {
          let option = document.createElement('option');
          option.setAttribute("value", element);
          datalist.appendChild(option);
        });
      })
      .catch((e) => {
        console.error(e);
      });
  })
});
