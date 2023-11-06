 
 # Blogg Planering uppgift 2

Vill göra en matblogg som jag kan använda hemma till köket. den ska ha olika kategorier inom matlagning samt en sida med tips på frukost, mellanmål samt recept /möjlighet att lägga in nya recept 

 ## Bloggen ska innehålla följande:
• En navbar som syns i alla vyer som innehåller
• Göra två perspektiv på bloggen

- **Användare**
   - Tre sidor, huvudsida, blogsida och om mig sida
   - Bloggisdan ska visa titel och bild inen body
   - Trycker man på ett inlägg vissas den i detalj -detalj innebär att man ser titel bilder text osv.
   - Ska även visa komentarer samt gå att skriva in nya komentarer anonymt
   - En knapp för att navigera tillbaka till huvudsida
   - gilla och ogilla blogginlägget (räknas oändligt, det finns ingen gräns på antal likes/dislikes)
   - Information om dig (det är tillåtet att använda låtsas information här)
   - Formulär för att kontakta dig (på låtsas; printa ut all information i konsolen när man skickar in formuläret)

- **Ägarens perspektiv**
   - En extra vy för att skapa nya blogg inlägg
   - Allt ska sparas i local storage så sidan inte behöver laddas om för att kunna implememtera

 ### ett blogg inlägg ska innehälla följande: 

{
title: string;
thumbnailUrl: string;
body: string;
creationDate: Date;
likes: number;
dislikes: number;
comments: string[];
}

 ## BlogPlanering / egna tankar 
  Detta ska bli en matblogg med lite olika recept gällande mat och bak

  fölande saker ska vara med i varej recpet: 
    title: pankaka
    thumbnailUrl: bild på pankakor
    aboutRecipe: Goda pankakor som ska bakas med kärlek och toppas med glas och färska jordgubbar 
    ingredients: [mjölk, ägg, mjöl]
    cooking: blanda alla ingredienser, stek och ät 
    category: mat
    currentDate: Datum: 2023-11-05
    likes: 345 likes
    dislikes: 0
    comments: [bästa pannkakorna i världen, super gott!];

    _Style_
    använd tailwind för CSS 
    loga görte i canva 
    färgtema grönt 
    enkelt 
_TODO_

1. skapa github repo
status : klar
2. skapa alla filer/componenter/services som ska vara med
status : klar

3. skapa routes 
status : klar! 

4. gör en header med vad som ska var med
   - routes 
   status : klar! 
   - övrig CSS 
   status  :klar! 

5.  skapa blog class
   status : klar

6.  rendera ut blogs i blogs sidan
   status : rendering fungerar bra! innehåll ej klart 

7.   kunna öppna en blog om man klickar på den 
status : klart !

8.   se information om bloginläget och kunna navigera tillbaka till home
      status : klar 
9.   kunna gilla och ogilla varje enskild post

10.  kunna lägga till en post
status : bara ritat ut hur det kan se ut. Saknas functionalitet och eventuellt att det ska vara upplagrt på ett annat sätt ? fundera på saken

11.lada ner tailwind CSS status :klar! 

12. lada ner maticons for like button i home komponenten 
 status :klar! men funger ej av någon anledning? nu funkar det. behövde läga en länk i index.html för att det skulle funka :) 

 # FORTSÄTT HÄR! 

har gjort lite överallt med det värse idag så behöver börja fokusera lite till nästa sitning med blogen. 

1. Gör klart utsendet i blogs sidan samt onepost 
2. gör i ordning about sidan och skapa ett formulär där 
3. se till att det går att läga till en post med blog klassen 
4. 

