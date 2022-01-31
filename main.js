// alert('Hello World !');

// Récupérer le 1er élément
let h1 = document.querySelector('h1');
console.log(h1);
h1.style.backgroundColor = 'yellow';

// Récupérer tous les éléments
let paras = document.querySelectorAll('p');
console.log(paras);

for (let i = 0; i < paras.length; ++i) {
    paras[i].style.color = 'pink';
}

let alertButton = document.getElementById('alertButton');
let inputNumber = document.getElementById('inputNumber');
alertButton.addEventListener("click", function(){
    alert('Valeur ' + inputNumber.value)
});

let inputTextList = document.getElementById('inputTextList');
let htmlList = document.getElementById('htmlList');
let listButton = document.getElementById('listButton');
listButton.addEventListener("click", function () {
    const newListElem = document.createElement('li');
    const newListElemTexte = document.createTextNode(inputTextList.value);

    newListElem.appendChild(newListElemTexte);

    htmlList.appendChild(newListElem);
})

let paragrapheButton = document.getElementById('paragrapheButton');
let inputText = document.getElementById('inputText');
let paragrapheDynamique = document.getElementById('paragrapheDynamique');
paragrapheButton.addEventListener("click", function (){
    paragrapheDynamique.insertAdjacentHTML('beforeend', inputText.value + "</br>")
})

function setParagrapheButtonBlue() {
    paragrapheButton.style.backgroundColor = "blue";
}
function setParagrapheButtonGreen() {
    paragrapheButton.style.backgroundColor = "green";
}