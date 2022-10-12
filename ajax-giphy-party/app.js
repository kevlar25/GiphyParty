console.log("Let's get this party started!");

const cont = document.querySelector('#container');

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}


async function getGiphy(term){
    const url= `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
    const res = await axios.get(url);

    console.log(res.data.data[getRandomInt((res.data.data.length))]);
    
    const img = document.createElement('img');
    img.src = res.data.data[getRandomInt((res.data.data.length))].images.original.url;
    cont.append(img);
}

const form = document.querySelector('#searchform');
const input = document.querySelector('#search');
const search = document.querySelector('#searchbttn')

search.addEventListener("click", function(e){
    e.preventDefault();
    getGiphy(input.value);
    input.value='';
})

const $cont = $('#container');

$("#remove").on("click", function() {
    $cont.empty();
  });

