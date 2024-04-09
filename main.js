import { renderMenuItems, renderButtons } from "./scripts/ui.js";

// html'den gelenler
const menuList = document.querySelector('#menu-list');
const buttonsArea = document.getElementById('buttons');

//! sayfanin yüklenme  anini izleme
document.addEventListener('DOMContentLoaded', () => {
    renderButtons();
    fetchMenu();
});

// datayi global scope'da tanimlama
let data;

// Menu verilerini json dosyasindan ceker
async function fetchMenu(){
    const res = await fetch('./db.json');
    data = await res.json();
    console.log(data);
    renderMenuItems(data.menu, menuList);
}

//tiklanilan kategoriyi belirleme
buttonsArea.addEventListener('click', (e)=> {
    if(e.target.id !== 'buttons'){
        renderButtons(e.target.innerText);
        //secili kategoriye erisme
        const selected = e.target.dataset.category;

        if (selected === 'all'){
            //filtreleme yapmadana api den gelen verileri ekrana bas
            renderMenuItems(data.menu, menuList)
        }else {
            //secili kategoriye göre filtrele
            const filtred = data.menu.filter(
                (i) => i.category === selected
            );
            //filtrelenmis veriyi ekrana basma
            renderMenuItems(filtred, menuList);
        }
    }
});

