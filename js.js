const players = [
  {
      firstName: 'Łukasz',
      secondName: 'Fabiański',
      club:'West Ham United',
      age:'36',
      cityBirth:'Kostrzyn nad Odrą',
      position:'Bramkarz',
      status:'Powołany',
      imagePath:'img/Fabiański.png'
   },
   {
      firstName: 'Wojciech',
      secondName: 'Szczęsny',
      club:'Juventus',
      age:'31',
      cityBirth:'Warszawa',
      position:'Bramkarz',
      status:'Powołany',
      imagePath:'img/Szczęsny.png'
   },
   {
      firstName: 'Łukasz',
      secondName: 'Skorupski',
      club:'Bologna FC 1909',
      age:'30',
      cityBirth:'Zabrze',
      position:'Bramkarz',
      status:'Powołany',
      imagePath:'img/Skorupski.png'
    },
    {
      firstName:'Radosław',
      secondName:'Majecki',
      club:'AS Monaco',
      age:'21',
      cityBirth:'Starachowice',
      position:'Bramkarz',
      status:'lista rezerwowa',
      imagePath:'img/Majecki.png'
     },
     {
      firstName:'Jan',
      secondName:'Bednarek',
      club:' Southampton F.C.',
      age:'25',
      cityBirth:'Słupica',
      position:'Obrońca',
      status:'Powołany',
      imagePath:'img/Bednarek.png'
     },
     {
      firstName:'Paweł',
      secondName:'Dawidowicz',
      club:'Hellas Verona',
      age:'26',
      cityBirth:'Olsztyn',
      position:'Obrońca',
      status:'Powołany',
      imagePath:'img/Dawidowicz.png'
    },
    {
      firstName:'Kamil',
      secondName:'Glik',
      club:'Benevento Calcio',
      age:'33',
      cityBirth:"Jastrzębie-Zdrój",
      position:'Obrońca',
      status:'Powołany',
      imagePath:'img/Glik.png'
     },
     {
      firstName:'Robert',
      secondName:'Lewandowski',
      club:'Bayern Monachium',
      age:'32',
      cityBirth:'Warszawa',
      position:'Napastnik',
      status:'Powołany',
      imagePath:'img/Lewandowski.png'
     },
     {  
      firstName:'Przemysław',
      secondName:'Płacheta',
      club:'Norwich City',
      age:'23',
      cityBirth:'Łowicz',
      position:'Pomocnik',
      status:'Powołany',
      imagePath:'img/Płacheta.png'
     },
     {
      firstName:'Karol',
      secondName:'Świderski',
      club:'PAOK Saloniki',
      age:'24',
      cityBirth:'Rawicz',
      position:'Napastnik',
      status:'Powołany',
      imagePath:'img/Świderski.png'
     },
     {
      firstName:'Arkadiusz',
      secondName:'Milik',
      club:'Olympique Marsylia',
      age:'27',
      cityBirth:'Tychy',
      position:'Napastnik',
      status:'Powołany',
      imagePath:'img/Milik.png'
      },
      {
        firstName:'Przemysław',
        secondName:'Frankowski',
        club:'Chicago Fire',
        age:'26',
        cityBirth:'Gdańsk',
        position:'Pomocnik',  
        status:'Powołany',
        imagePath:'img/Frankowski.png'
      },
      {
        firstName:'Jakub',
        secondName:'Świerczok',
        club:'Piast Gliwice',
        age:'28',
        cityBirth:'Tychy',
        position:'Napastnik',
        status:'Powołany',
        imagePath:'img/Świerczok.png'
       },
      {
        firstName:'Kamil',
        secondName:'Jóźwiak',
        club:'Derby County F.C.',
        age:'23',
        cityBirth:'Międzyrzecz',
        position:'Pomocnik',
        status:'Powołany',
        imagePath:'img/Jóźwiak.png'
       },
      {
        firstName:'Dawid',
        secondName:'Kownacki',
        club:'Fortuna Düsseldorf',
        age:'24',
        cityBirth:'Gorzów Wielkopolski',
        position:'Napastnik',
        status:'Powołany',
        imagePath:'img/Kownacki.pmg'
       },
      {
        firstName:'Piotr',
        secondName:'Zieliński',
        club:'SSC Napoli',
        age:"27",
        cityBirth:'Ząbkowice Śląskie',
        position:'Pomocnik',
        status:'Powołany',
        imagePath:'img/Zieliński.png'
       },
      {
        firstName:'Kacper',
        secondName:'Kozłowski',
        club:'Pogoń Szczecin',
        age:'17',
        cityBirth:'Koszalin',
        position:'Pomocnik',
        status:'Powołany',
        imagePath:'img/Kozłowski.png',
      },
      {
        firstName:'Jakub',
        secondName:'Moder',
        club:'Brighton & Hove Albion',
        age:'22',
        cityBirth:'Szczecinek',
        position:'Pomocnik',
        status:'Powołany',
        imagePath:'img/Moder.png'
       },
      {
        firstName:'Grzegorz',
        secondName:'Krychowiak',
        club:'Lokomotiw Moskwa',
        age:'31',
        cityBirth:'Gryfice',
        position:'Pomocnik',
        status:'Powołany',
        imagePath:'img/Krychowiak.png'
       },
       {
        firstName:'Mateusz',
        secondName:'Klich',
        club:'Leeds United',
        age:'30',
        cityBirth:'Tarnów',
        position:'Pomocnik',
        status:'Powołany',
        imagePath:'img/Klich.png'
       },
      {
        firstName:'Karol',
        secondName:'Linetty',
        club:'Torino FC',
        age:'26',
        cityBirth:'Żnin',
        position:'Pomocnik',
        status:'Powołany',
        imagePath:'img/Linetty.png'
       },
      {
        firstName:'Tymoteusz',
        secondName:'Puchacz',
        club:'Union Berlin',
        age:'22',
        cityBirth:'Sulechów',
        position:'Obrońca',
        status:'Powołany',
        imagePath:'img/Puchacz.png'
       },
      {
        firstName:'Maciej',
        secondName:'Rybus',
        club:'Lokomotiw Moskwa',
        age:'31',
        cityBirth:'Łowicz',
        position:'Obrońca',
        status:'Powołany',
        imagePath:'img/Rybus.png'
       },
      {
        firstName:'Tomasz',
        secondName:'Kędziora',
        club:'Dynamo Kijów',
        age:'26',
        cityBirth:'Sulechów',
        position:'Obrońca',
        status:'Powołany',
        imagePath:'img/Kędziora.png'
       },
      {
        firstName:'Bartosz',
        secondName:'Bereszyński',
        club:'Sampdoria Genua',
        age:'28',
        cityBirth:'Poznań',
        position:'Obrońca',
        status:'Powołany',
        imagePath:'img/Bereszyński.png'
       },
      {
        firstName:'Kamil',
        secondName:'Piątkowski',
        club:'Raków Częstochowa',
        age:'20',
        cityBirth:'Jasło',
        position:'Obrońca',
        status:'Powołany',
        imagePath:'img/Piątkowski.png'
       },
      {
        firstName:'Michał',
        secondName:'Helik',
        club:' Barnsley F.C.',
        age:'25',
        cityBirth:'Chorzów',
        position:'Obrońca',
        status:'Powołany',
        imagePath:'img/Helik.png'
        },
      {
        firstName:'Paulo',
        secondName:'Sousa',
        club:'Polska',
        age:'50',
        cityBirth:'Viseu (Portugalia)',
        position:'Selekcjoner',
        status:'-',
        imagePath:'img/Sousa.png'
        },
      {
        firstName:'Zbigniew',
        secondName:'Boniek',
        club:'Polska',
        age:'65',
        cityBirth:'Bydgoszcz',
        position:'Prezes',
        status:'-',
        imagePath:'img/Boniek.png'
        },
      {
        firstName:'Robert',
        secondName:'Gumny',
        club:'FC Augsburg ',
        age:'22',
        cityBirth:'Poznań',
        position:'Obrońca',
        status:'lista rezerwowych',
        imagePath:'img/Gumny.png'
        },
      {
        firstName:'Kamil',
        secondName:'Grosicki',
        club:'West Bromwich Albion',
        age:'32',
        cityBirth:'Szczecin',
        position:'Pomocnik',
        status:'lista rezerwowych',
        imagePath:'img/Grosicki.png'
        },
      {
        firstName:'Sebastian',
        secondName:'Szymański',
        club:'Dinamo Moskwa',
        age:'22',
        cityBirth:'Biała Podlaska',
        position:'Pomocnik',
        status:'lista rezerwowych',
        imagePath:'img/Szymański.png'
        },
      {
        firstName:'Rafał',
        secondName:'Augustyniak',
        club:'Urał Jekaterynburg',
        age:'27',
        cityBirth:'Zduńska Wola',
        position:'Pomocnik',
        status:'lista rezerwowych',
        imagePath:'img/Augustyniak.png'
        },
      {
        firstName:'Manuel Julio Cordeiro',
        secondName:'da Silva',
        club:'Polska',
        age:'37',
        cityBirth:'Faro(Portugalia)',
        position:'Asystent Trenera',
        status:'-',
        imagePath:'img/Codeiro.png',
      },
      {
        firstName:'Victor Manuel Sánchez',
        secondName:'Lladó',
        club:'Polska',
        age:'39',
        cityBirth:'Mataró(Hiszpania)',
        position:'Asystent Trenera',
        status:'-',
        imagePath:'img/Llado.png'
      },
      {
        firstName:'Paulo Jorge Fernandes',
        secondName:'Grilo',
        club:'Polska',
        age:'52',
        cityBirth:'(Portugalia)',
        position:'Trener Bramkarzy',
        status:'-',
        imagePath:'img/Grilo.png'
      },
      {
        firstName:'Antonio José Gómez',
        secondName:'Díaz',
        club:'Polska',
        age:'44',
        cityBirth:'Murcia(Hiszpania)',
        position:'Trener przygotowania fizycznego',
        status:'-',
        imagePath:'img/Gomez.png',
      },
 ]

 const input = document.querySelector('input');
 const btn = document.querySelector('button');
 
 const photo = document.querySelector('.img-player')
 const name = document.querySelector('.name')
 const club = document.querySelector('.club')
 const position = document.querySelector('.position')
 const age = document.querySelector('.age')
 const city = document.querySelector('.city')
 const status = document.querySelector('.status')
 
 
 const showPlayer = () => {
	const player = players.find(player => player.secondName === input.value);
  
  if (player) {
    name.textContent = `${player.firstName} ${player.secondName}`;
    club.textContent = player.club;
    position.textContent = player.position;
    age.textContent = player.age;
    city.textContent = player.cityBirth;
    status.textContent = player.status;
    photo.setAttribute('src' ,player.imagePath)
  }
}

const enterCheck = () => {
 if(event.keyCode === 13){
  showPlayer();
 }
}

showPlayer();
btn.addEventListener('click' , showPlayer)
input.addEventListener('keyup', enterCheck)
