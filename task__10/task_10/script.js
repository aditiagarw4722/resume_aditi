const grid = document.querySelector('.grid');
const demoCard = document.querySelector('.card');

let cardsSeed = [];

for (let i = 0; i < 8; ++i) {
    let seed = makeid(4);
    cardsSeed.push(seed);
    cardsSeed.push(seed);
}

shuffle(cardsSeed);

for (let i = 0; i < 16; ++i) {
    demoCard.getElementsByTagName('img')[0].src = `https://picsum.photos/seed/${cardsSeed[i]}/150`;
    demoCard.setAttribute('seed', cardsSeed[i]);
    let newCard = demoCard.cloneNode(true);
    newCard.style.display = "block";
    newCard.addEventListener('click', rotateStart)
    grid.appendChild(newCard);
}

cardQ = []

function rotateStart() {
    console.log(cardQ.length);
    if (parseInt(cardQ.length) >= 2 || this.classList.contains('rotateStart')) {
        return;
    }
    this.classList.remove('rotateEnd');
    this.classList.add('rotateStart');
    this.getElementsByTagName('img')[0].style.visibility = 'visible';
    console.log(this.getAttribute('seed'));
    cardQ.push(this);
    check();
}

function check() {
    console.log('length of ', cardQ.length)
    if (parseInt(cardQ.length) <= 1) return;
    let first = cardQ[0];
    let second = cardQ[1];
    console.log(first, second);
    if (first.getAttribute('seed') === second.getAttribute('seed')) {
        cardQ.pop();
        cardQ.pop();
        return;
    }
    setTimeout(() => {
        cardQ.pop();
        cardQ.pop();
        first.classList.remove('rotateStart');
        first.classList.add('rotateEnd');
        second.classList.remove('rotateStart');
        second.classList.add('rotateEnd');
        first.getElementsByTagName('img')[0].style.visibility = 'hidden';
        second.getElementsByTagName('img')[0].style.visibility = 'hidden';
    }, 1000)

}

/* utility functions */
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

// shuffle array
function shuffle(array) {
    var currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}