import { Injectable } from '@angular/core';
import { Blogs } from './class/blogs';
import { DateService } from './date.service';
import { CommentsService } from './comments.service';

@Injectable({
  providedIn: 'root',
})
export class BlogpostsService {

  constructor(private dateService : DateService, private commentService : CommentsService) {

  }
  get likes() {
    return this.commentService._likes
  }
  get disLikes() {
    return this.commentService._disLikes
  }
  get randomDate(){
    return this.dateService.generateRandomDate(
      new Date(2023, 0, 1),
      new Date(),
    ).toLocaleDateString()
  }
  blogPostList: Blogs[] = [
    new Blogs(1,
      'cheesecake',
      'assets/images/cheesecake.jpg',
      'about',
      ['ingredienser', 'mer ingredienser'],
      ['cooking'],
      'bak',
      this.randomDate,
      this.likes, 
      this.disLikes,
     
      [
        'super gott recept',
        'helt fantastiuskt!, la även till lite ciron',
        'helt fantastiuskt!, la även till lite ciron',
      ]
    ),
    new Blogs(
      2,
      ' vego piroger',
      'assets/images/piroger.jpg',
      'about',
      ['ingredienser', 'mer ingredienser'],
      ['cooking'],
      'mat',
      this.randomDate,
      this.likes + 123, 
      this.disLikes,
      ['super gott recept', 'helt fantastiskt!, la även till lite citron']
    ),
    new Blogs(
      3, 'bröd',
      'assets/images/bröd.jpg',
      'about',
      ['ingredienser', 'mer ingredienser'],
      ['cooking'],
      'bak',
      this.randomDate,
      this.likes + 224, 
      this.disLikes,
      ['super gott recept', 'helt fantastiskt!, la även till lite ciron']
    ),
    new Blogs(
      4, 
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
      'mat',
      this.randomDate,
      this.likes + 334, 
      this.disLikes,
      ['super gott recept', 'helt fantastiskt!, la även till lite ingefära']
    ),
  ];

 
}
