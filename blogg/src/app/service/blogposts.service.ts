import { Injectable } from '@angular/core';
import { Blogs } from './class/blogs';
import { DateService } from './date.service';
import { LocalstorageService } from './localstorage.service';


@Injectable({
  providedIn: 'root',
})
export class BlogpostsService {
  //arrays whit categorys for the blogpost
  categorys : string[] = ["mat","bak"]
  BakCategorys : string[] = ["tårta", "kaka", "bulle", "bröd", "efterrätt", "övrigt"]
  MatCategorys : string[] = ["soppa", "gryta", "pastarätt", "huvudrätt", "förrätt", "picknick", "frukost"]

  //boolean for the adminpage changes
  adminPage : boolean = false;

  constructor(private dateService : DateService, localstorage : LocalstorageService ) {
    if(localstorage.getAllPost()){
      this.blogPostList = localstorage.getAllPost()}
    
  }
  
  // generate a date for the blogs by random
  get randomDate(){
    return this.dateService.generateRandomDate(
      new Date(2023, 0, 1),
      new Date(),
    ).toLocaleDateString()
  }
//hard koded posts
  blogPostList: Blogs[] = [
    new Blogs(1,
      'cheesecake',
      'assets/images/cheesecake2.jpg',
      'Fryst cheesecake är en perfekt dessert för stora kalas eller middagar eftersom du kan göra den i förväg och frysa in. Ta fram cheesecaken en stund innan servering och garnera med dina favoritfrukter och bär. ',
      ['botten:','15 digestivkex', '75 g smör', 'Fyllning:', '3 ägg',' 1.5 dl socker', '1 krm vaniljpulver', '400g färskost', '2dl vispgrädde', 'topping:', '125 g färska hallon', 'citronmellis'],
      ['Mixa eller krossa kexen fint. Smält smöret och blanda med smulorna. Tryck ut blandningen i botten på en rund form med löstagbar kant, ca 24 cm i diameter.',
      'Dela äggen i gulor och vitor. Vispa äggulor, socker och vaniljpulver pösigt i en bunke. Rör ner färskosten.',
      'Vispa grädden löst. Vispa vitorna till ett hårt skum. Vänd först ner grädden och sedan vitorna försiktigt i färskostsmeten. Häll smeten i formen. Täck med plastfilm och låt stå i frys minst 4 tim.',
      'Ta ut cheesecaken ca 15 min innan servering. Garnera med hallon och blad från citronmeliss.' ],
      this.categorys[1],
      this.BakCategorys[0],
      this.randomDate,
      46, 
      0,
     
      [
        'super gott recept',
        'helt fantastiskt!, la även till lite citron',
         "älskar cheesecake"
     
      ]
    ),
    new Blogs(
      2,
      ' vego piroger',
      'assets/images/piroger.jpg',
      'Vad sägs om lite vegetariska piroger såhär på en måndag? Riktigt goda piroger fyllda med spenat och mozzarella, omöjliga att motstå! Jag är ganska dålig på att laga vegetarisk mat, men ibland blir jag bara sugen att testa lite och så blev det idag 🙂',
      ['Deg:*',
'        1/4 pkt jäst',
       ' 2 dl fingervarmt vatten',
        '0,5 dl olivolja',
        '5,5 dl vetemjöl',
       ' 0,5 tsk salt',
        
        'Fyllning',
       ' 1 gul lök',
        '2 vitlöksklyftor',
        '1 msk olivolja',
        '400 g färsk spenat',
        'muskot',
       ' salt och peppar',
        '200 g mozzarella',
        
       ' +1 ägg till pensling'],
      ['1. Smula jästen i en bunke.',
      '2. Blanda i vatten och olja och rör tills jästen löst upp sig.',
      '3. Tillsätt mjöl och salt och arbeta ihop till en fast deg.',
     ' 4. Täck över bunken med en bakduk och låt jäsa i 30 minuter.',
      '5. Medan degen jäser: Finhacka löken och vitlöken.',
     ' 6. Fräs löken mjuk i en stor stekpanna eller wokpanna.',
     ' 7. Tillsätt spenaten och stek ihop i ca 5 minuter. Smaka av med muskot, salt och peppar.',
     ' 8. Skiva mozzarellan och lägg bitarna på lite hushållspapper så att de får rinna av och att det inte är så mycket vätska kvar.',
      '7. Dela degen i 10 delar. Kavla ut varje del till en rund platta på ca 15 cm i diameter.',
     ' 8. Lägg ett par matskedar fyllning på varje platta. Lägg en bit mozzarella ovanpå.',
      '9. Vik ihop degen ovanpå fyllningen.',
      '10. Lägg pirogerna på en bakplåtspappersklädd plåt och låt jäsa i 15 minuter. Sätt ugnen på 225 grader.',
      '11. Baka mitt i ugnen i 13-15 minuter tills de har fått fin färg.'],
      this.categorys[0],
      this.MatCategorys[5],
      this.randomDate,
      123, 
      0,
      ['super gott recept', 'helt fantastiskt!', "bättre än klassiska piroger"]
    ),
    new Blogs(
      3, 
      'pumpasoppa',
      'assets/images/pumpasopa.jpg',
      'En varm och krämig pumpasoppa med rostade pumpakärnor. En härlig och lättlagad höstmiddag! Servera med en bit gott bröd. Till detta serverar vi mousserande vin. Strukturerna i en mixad soppa gifter sig med bubblorna i vinet.',
      ['1 kg butternutpumpa eller muscatpumpa',
      '5 dl vatten',
      '1 gul lök',
     '1 vitlöksklyfta',
     '2 msk grönsaksfond',
      '1 tsk salt',
      '1 tsk paprikapulver',
      '0,5 tsk spiskummin',
      '2 dl crème fraîche',
      '1 dl matlagningsgrädde',],
      ['1. Finhacka gul lök och fräs i kastrull med smör och vitlök.', '2. Skala pumpan och gröp ur kärnorna (spara dem till att rosta). Skär pumpan i mindre bitar.', '3. Tillsätt pumpaskivorna i kastrullen och stek under omrörning. Rör ner grönsaksfond, kryddor och vatten och  låt koka i cirka 20 minuter.','4. Ha i crème fraîche och matlagningsgrädde och mixa slätt med stavmixer. Servera med en bit bröd!'],
      this.categorys[1],
      this.BakCategorys[5],
      this.randomDate,
      334, 
      0,
      ['super gott recept', 'helt fantastiskt!, la även till lite ingefära', "bästa höst rätten"]
    ),
    new Blogs(
      4, 
      'Bröd',
      'assets/images/bröd.jpg',
      "bröd",
      [],
      [],
      this.categorys[1],
      this.MatCategorys[3],
      this.randomDate,
      354, 
      0,
      ['super gott recept', 'helt fantastiskt!, la även till lite ingefära', "bästa brödet"]
    ),
    new Blogs(
      5, 
      'pannkaka',
      'assets/images/pannkaka',
      "pannkaka är gött",
      ["3 ägg", "3 dl mjöl", "6 dl mjölk"],
      ["vispa", "stek", "ät"],
      this.categorys[0],
      this.MatCategorys[6],
      this.randomDate,
      354, 
      0,
      ['super gott recept', 'helt fantastiskt!, la även till lite ingefära', "bästa brödet"]
    ),
  ];

 
}
