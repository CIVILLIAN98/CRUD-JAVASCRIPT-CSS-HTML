
// Создать div
const div = document.createElement('div');
// Добавить к нему класс wrapper
div.classList.add('wrapper');
// Поместить его внутрь тэга body
const body = document.body;
body.appendChild(div);
// Создать заголовок H1 "DOM (Document Object Model)"
const h1 = document.createElement('h1');
h1.textContent = 'DOM project text';
// Добавить H1 перед DIV с классом wrapper
div.insertAdjacentElement('beforebegin',h1)
// Создать список <ul></ul>
const ul  = `
<ol>
<li>ONE</li>
<li>TWO</li>
<li>THREE</li>
</ol>
`;
// Добавить в него 3 элемента с текстом "один, два, три"


// Поместить список внутрь элемента с классом wrapper
div.innerHTML = ul;
// =================================================
// Создать изображение
const img = document.createElement('img');
// Добавить следующие свойства к изображению
// 1. Добавить атрибут source
img.src = './IMG_3758.jpg';
// 2. Добавить атрибут width со значением 240
img.width = 144;
// 3. Добавить класс super
img.classList.add('super');
// 4. Добавить свойство alt со значением "Super Man"
img.alt = "Super Man";
// Поместить изображение внутрь элемента с классом wrapper
div.appendChild(img);
// Используя HTML строку, создать DIV с классом 'pDiv' + c 2-мя параграфами
const HTML = `
<div class="pDIV">
<p>ABDULAZIZ</p>
<p>AZ</p>
</div>`;
// Поместить этот DIV до элемента <ul></ul>
let ullist = div.querySelector('ol');
ullist.insertAdjacentHTML('beforebegin',HTML)
// Добавить для 2-го параграфа класс text
const pDIV = document.querySelector('.pDIV');
pDIV.children[1].classList.add('text')
// Удалить 1-й параграф
pDIV.firstElementChild.remove();
// Создать функцию generateAutoCard, 
// которая принимает 3 аргумента: brand, color, year
function generateAutoCard(brand,color,year){
    const eHTML = `
    <div class="autoCard">
    <h2>BRAND YEAR</h2>
    <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
    </div>
    `;
    return eHTML
}
generateAutoCard('BMW','red',1999)
// Функция должна возвращать разметку HTML:
{/* <div class="autoCard">
  <h2>BRAND YEAR</h2>
  <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
</div> */}

// Создать новый DIV с классом autos

// Создать 3 карточки авто, используя функцию generateAutoCard
const carsList = [
    {brand: 'Tesla', year: 2015, color: 'Красный'},
    {brand: 'Lexus', year: 2016, color: 'Серебристый'},
    {brand: 'Nissan', year: 2012, color: 'Черный'},
];

// Поместить эти 3 карточки внутрь DIV с классом autos

// Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper

// Добавить кнопку Удалить на каждую карточку авто

// При клике на кнопку - удалять карточку из структуры DOM
// 1. Выбрать все кнопки
// 2. Создать функцию удаления
// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку