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