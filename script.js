(function(){
    function zacniKviz(){
    const output = [];

    covidVprasanja.forEach(
        (currentVprasanje, vprasanjeNumber) => {
        
        const odgovori = [];

        for (letter in currentVprasanje.odgovori){

            odgovori.push(
                `<label>
                <input type="radio" name="vprasanje${vprasanjeNumber}" value="${letter}">
                ${letter} :
                ${currentVprasanje.odgovori[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="vprasanje"> ${currentVprasanje.vprasanje} </div>
            <div class="odgovori"> ${odgovori.join('')} </div>`
          );
        }
    );

    kvizContainer.innerHTML = output.join('');
    }

    function pokaziRezultate(){

    const odgovorContainers = kvizContainer.querySelectorAll('.odgovori');
    
    let stPravilen = 0;

    covidVprasanja.forEach( (currentVprasanje, vprasanjeNumber) => {
     
      const odgovorContainer = odgovorContainers[vprasanjeNumber];
      const selector = `input[name=vprasanje${vprasanjeNumber}]:checked`;
      const userAnswer = (odgovorContainer.querySelector(selector) || {}).value;
      
      if(userAnswer === currentVprasanje.pravilenOdgovor){    

        stPravilen++;        
        odgovorContainers[vprasanjeNumber].style.color = 'green';
      }      
      else{        
        odgovorContainers[vprasanjeNumber].style.color = 'red';
      }
    });

    resultatiContainer.innerHTML = `${stPravilen} out of ${covidVprasanja.length}`;

    };



    const kvizContainer = document.getElementById('kviz');
    const rezultatiContainer = document.getElementById('rezultati');
    const gumbOddaj = document.getElementById ('oddaj');
    const covidVprasanja = [
    {
        vprasanje: "Kakšne vrste virus je COVID-19?",
        odgovori: {
            a: "Nevrološka bolezen",
            b: "Respiratorna bolezen",
        },
        pravilenOdgovor: "b"                
    
    },
    {
        vprasanje: "Kateri od simptomov ni eden od ključnih simptomov Covid-19?",
        odgovori: {
            a: "Kihanje",
            b: "Kašljanje",
            c: "Povišana temperatura"
        },
        pravilenOdgovor: "a"                
    
    },
    {
        vprasanje: "Kaj je učinkovitejši ukrep za preprečevanje okužbe?",
        odgovori: {
            a: "Nošenje maske",
            b: "Temeljito umivanje rok",
        },
        pravilenOdgovor: "b"                

    },
    {
        vprasanje: "Kako dolgo lahko virus preživi brez gostitelja?",
        odgovori: {
            a: "1 teden",
            b: "Več ur do nekaj dni",
            c: "Več kot 2 tedna"
        },
        pravilenOdgovor: "b"
    },
    {
        vprasanje: "Kolikšen procent ljudi kaže blage znake okužbe?",
        odgovori:{
            a: "10 %",
            b: "50 %",
            c: "80 %"
        },
        pravilenOdgovor: "c"
    },
    {
        vprasanje: "Kolikšna je primerna varnostna razdalja pri druženju?",
        odgovori:{
            a: "30cm",
            b: "1,5m",
            c: "3m"
        },
        pravilenOdgovor: "b"
    },
    {
        vprasanje: "Za katere družbene skupine predstavlja COVID-19 največje tveganje?",
        odgovori:{
            a: "Otroke",
            b: "Tiste, z že obstoječimi bolezenskimi stanji",
        },
        pravilenOdgovor: "b"
    },
    {
        vprasanje: "Kaj storimo ob sumu na okužbo?",
        odgovori:{
            a: "Obiščemo zdravnika",
            b: "Ostanemo doma, se izoliramo in pokličemo svojega zdravnika",
            c: "Počakamo nekaj dni in še naprej hodimo v službo",
        },
        pravilenOdgovor: "b"
    },
    ];

    zacniKviz();

    gumbOddaj.addEventListener('click', pokaziRezultate);
})();



