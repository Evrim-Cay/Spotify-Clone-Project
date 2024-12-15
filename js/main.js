
//API classini import et
import {API} from "./api.js";
//UI classini import et
import {UI} from "./ui.js";

//UI clasinin ornegini aldik
const ui = new UI()

//Api Clasin ornegini aldik
const api = new API();

document.addEventListener("DOMContentLoaded", () => {
  
//Loader render et
 ui.renderLoader()

//Api'a istek at ve gelen verilerle ekrana kart rendder et

  
    // Apı a istek at ve gelen verilerle ekrana kart render et
    api
      .getPopular()
      .then((data) => ui.renderCards(data))
      .catch((err) => {
        console.log("Hataaa:", err);
        //alert("Üzgünüz bir hata oluştu :(");
      });
  });

  //Formun gonderilme olayini izle

  ui.form.addEventListener("submit",(e) => {
    //Form gonderildiginde sayfa yenilemeyi engelle
    e.preventDefault();
    // inputtaki arama parametresine eris
    const query = e.target[0].value;

    //Aratilan kelime yoksa fonksiyonu durdur.Bu sayede api hakkimizi bosa harcamadik
    if(query.trim()==='') return alert("Lutfen gecerli bir arama islemi gerceklestiriniz");

// lodir'i render et
ui.renderLoader();

//Basligi  guncelle
ui.updateTitle(query+" icin sonuclar");

// api'a aratilan kelimeyle istek at
    api.searchMusics(query)
    // Gelen sarki verileriyle ekrana kart render et
    .then((data)=>ui.renderCards(data))
    // Hata varsa bunu yakala ve uyari ver
    .catch((err)=>{alert ("Islem gerceklestirilemedi") ;
      console.log(err)});
  });

  //Liste alaninda gerceklesen tiklanma olaylarini izle

  ui.list.addEventListener("click", () => {
  //Eger play clasina sahip bir elemana tiklandisya sarki calma islevini gerceklestircek
   if (e.target.className == "play"){
    //Tiklanma elemanin kapsamina eris
   const card = e.target.closest(".card");
   
   const data = card.dataset;

   console.log(data);

   ui.renderPlayer(data);
   }
  });