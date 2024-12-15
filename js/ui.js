export class UI{
//Kurucu metot
    constructor(){
        this.list = document.querySelector(".list");
        this.form = document.querySelector("form");
        this.title = document.getElementById("title");
        this.player = document.querySelector(".player");
       
        this.audio = document.querySelector("audio");
    }

    //Ekrana muzik karti render eden fonksiyon

    renderCards(songs){

        //Oncesinde list kismindaki Html'i temizle
        this.list.innerHTML ="";

        //Her muzik verisi icin ekrana bir HTML olustur
        songs.forEach ((song) => {
            
            //Card olustur

         const card = document.createElement("div");
         //Cardin classini belirle
         card.className = "card";

         //Card elemanina sarki verilerini aktar
          card.dataset.title = song.title;
          card.dataset.subtitle = song.subtitle;
          card.dataset.img = song.images.coverarthq;
          card.dataset.mp3 = song.hub.actions[1].uri;

         //card'in icerigini belirle
         card.innerHTML= 
         `
                 <figure>
                    <img
                  src="${song.images.coverarthq}"
                  alt=""
                />
                <div class="play">
                    <i class="bi bi-play-fill"></i>
                </div>
                </figure>
              

                 <div class="card-info">
                    <h4>${this.sliceText(song.title)}</h4>
                    <h4>${song.subtitle}</h4>
                 </div>
         
         `;

//Card'i Html icerisine yerlestir
         this.list.appendChild(card);

   });
}

//Ekrana loader render edden fonksiyon

renderLoader() {
this.list.innerHTML = 

`

<div class="pyramid-loader">
  <div class="wrapper">
    <span class="side side1"></span>
    <span class="side side2"></span>
    <span class="side side3"></span>
    <span class="side side4"></span>
    <span class="shadow"></span>
  </div>  
</div>

`
}

// Arama islemi sonucunda baslikk kismini guncelleyen fonksiyon

updateTitle(text){
  this.title.textContent = text;

}

sliceText(text){
  if(text.length > 16){
    return text.slice(0, 16) + "...";
  }
  return text;
}

//Oynatma alanini guncelleyen fonksiyon
renderPlayer(song){
console.log(song);


  this.player.innerHTML = 
  `
 
     <div class="info">
        <img
        class="animate"
        src="${song.img}"
        alt=""
      />
     <div>
     <h5>${song.title}</h5>
     <p>${song.subtitle}</p>
     </div>
     </div>
     
      <audio autoplay 
       src="${song.mp3}"
      controls>
      </audio>
 
      <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox-fill"></i>
        <i class="bi bi-pc-display"></i>
      </div>
  `;
  const audio  = this.player.querySelector("audio");
  //Audio elemanin oynat-durdur durumunu kontrol et
  audio.addEventListener("play", this.toggleAnimation);
  audio.addEventListener("pause", this.toggleAnimation);
}

// resim animasyonuna dinamik sekilde ekle-cikar yapan fonksiyon
toggleAnimation(){
  const image = document.querySelector(".info img");
 image.classList.toggle("animate");

}
}