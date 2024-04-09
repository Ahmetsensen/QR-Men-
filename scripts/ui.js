import { buttonData } from "./constants.js";
const buttonArea = document.getElementById('buttons');

//ekrana menü elemanlarini basar
export function renderMenuItems(menuItems, menuList){
    //dizideki her bir eleman icin
    //bir menu html'i olusturup bunu
    //ekrana basar
    menuList.innerHTML= menuItems
    .map((item) => `
    <a id="card" href="/detail.html?id=${item.id} " class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3 ">
      <img class="rounded shadow img-fluid" src="${item.img}"/>
    <div>
        <div class="d-flex justify-content-between">
            <h5>${item.title} </h5>
            <p class="text-success fw-bold">${(item.price * 30).toFixed(2)} &#8378;</p>
        </div>
        <p class="lead">${item.desc.slice(0,80) + '...'} </p>
    </div>
</a>
    ` ) .join(' ');
}

//ekrana butonlari basar
export function renderButtons(activeText){
    //eski eklenen butonlari  html den temizle
    buttonArea.innerHTML = '';
    //yeni butonlari olusturma
    buttonData.forEach((btn) =>{
        //button elementi olusturma
        const buttonEle = document.createElement('button');
        //class belirleme
        buttonEle.className = 'btn btn-outline-dark';

        // data.id belirleme
        buttonEle.dataset.category = btn.value;

        //eger eleman aktifse bu class i ver
        if(btn.text === activeText) {
            buttonEle.classList.add('btn-dark', 'text-white')
        }
        //icindeki yaziyi belirleme
        buttonEle.innerText = btn.text;
        //buttonu html e gönderme
        buttonArea.appendChild(buttonEle);
    });
}

