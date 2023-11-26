 
 # branch main
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

  följande saker ska vara med i varje recept: 
    title: pannkaka
    thumbnailUrl: bild på pannkakor
    aboutRecipe: Goda pannkakor som ska bakas med kärlek och toppas med glass och färska jordgubbar 
    ingredients: [mjölk, ägg, mjöl]
    cooking: blanda alla ingredienser, stek och ät 
    category: mat
    currentDate: Datum: 2023-11-05
    likes: 345 likes
    dislikes: 0
    comments: [bästa pannkakorna i världen, super gott!];

    _Style_
    använd tailwind för CSS 
    loga gört i canva eller copy nåt från nätet 
    färgtema grönt är skönt 
    KISS

_TODO_

1. skapa github repo
status : klar
2. skapa alla filer/Komponenter/services som ska vara med
status : klar

3. skapa routes 
status : klar! 

4. gör en header med vad som ska var med
   - routes 
   status : klar! 
   - övrig CSS 
   status  :klar!
   - lägg till logo 
   status : klar 

5.  skapa blog class
   status : klar

6.  rendera ut blogs i blogs sidan
   status : rendering fungerar bra!

7.   kunna öppna en blog om man klickar på den 
status : klart !

8.   se information om blogginlägget och kunna navigera tillbaka till home
      status : klar 
9.   kunna gilla och ogilla varje enskild post

10.  kunna lägga till en post
status : klar!

11.lada ner tailwind CSS status :klar! 

12. lada ner maticons for like button i home komponenten 
 status :klar! men funger ej av någon anledning? nu funkar det. behövde lägga en länk i index.html för att det skulle funka

 13.skapa kontakt formulär till about sidan som ska rendera ut meddelandet i consolen.
 status : klar

14. se över all kod så att det som är på hemsidan står på svenska! 
 status klar!

15.skapa funktionalitet till createPost med formGroup och puscha till listan  i blogs.
status klar!

16.skapa localstorage service och se till att alla blogs sparas.
status : klar !


17. se till att man kan gilla och lägga till nya kommentarer

status : klar! 


18.gör de möjligt att lägga till bild i blogg posten
   - lägg in med URL status : klar! 

19.skriv om koden till mindre komponenter
   - create post : här vill jag få en service för all funktionalitet samt mindre komponenter och mer återanvänding i koden.   
   Status : valt att inte läga mer tid på detta istället läga till lite andra funktioner som kan vara bra på en sida. 
   - hamburger meny
   - scroll navbar
   - remove item knapp (får ej boolean för onepost att synka med headern? vet ej varför )
   - showimages grejen är lite fixad med mm 


   Slutsteg: 

   känner mig ganska klar med bloggen, vill få boolena för admin vyn att funka globalt så vi kan ha med remove post knappen på admin onepost. 
   
