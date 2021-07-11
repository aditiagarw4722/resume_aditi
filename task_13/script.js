let num_memes=document.querySelector('#input_field')
let memes_background=document.querySelector('.memes');

function show(){
   let numbers=num_memes.value;
    console.log(numbers);
    num_memes.value="";
   memes_background.innerHTML=""
    fetch(`https://meme-api.herokuapp.com/gimme/${numbers}`)
        .then(res => res.json())
        .then(data => {
            data.memes.forEach((memes) => {
                let src = "" + memes.preview[2]
                let image = document.createElement("img")
                image.src = src
               memes_background.appendChild(image)
            })
        })
        .catch(error => console.log(error))
}