// Api URL
const url = 'https://shazam.p.rapidapi.com/artists/get-latest-release?l=en-US';
// Headers ==> Api'ın bizi tanıyıp verileri iletmesi için gerekli obje
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cba3de756emsh49c6bc9263ae550p1f6c31jsn6e0dab4014ec',
		'x-rapidapi-host': 'shazam.p.rapidapi.com'
	}
};

// Apı Clası

export class API {
    //Populer muzikleri api'dan alan fonksiyon
    async getPopular(){

const data = await this.searchMusics("neffex")
const data1 = await this.searchMusics("eminem")

return [...data, ...data1];
    }
    
    //Aratilan kelimeye gore sarki verilerini alan fonksiyon

   async searchMusics(query){
        //URL'i dinamik hale getirdik
        const url = `https://shazam.p.rapidapi.com/search?term=${query}&locale=en-US` ;

        // Api'a istek at
       const res = await fetch(url,options);

       // gelen cevabi js nesnesine cevir
       const data = await res.json();
// Veri icerisinde bulunan katmanli yapiyi duzenledik ve sarki verisine eristik
const formatted = data.tracks.hits.map((item) => item.track);

    return formatted;
    }
    } 