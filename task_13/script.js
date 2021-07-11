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
document.getElementById('imgURL').oninput = function(ev) {
    image.src = this.value;
  };
  
  document.getElementById('imgFile').onchange = function(ev) {
    var reader = new FileReader();
    reader.onload = function(ev) {
      image.src = reader.result;
    };
    reader.readAsDataURL(this.files[0]);
  };
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  