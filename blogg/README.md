 
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
    loga gört i canva 
    färgtema grönt är skönt 
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
   - lägg till logo 
   status : klar 

5.  skapa blog class
   status : klar

6.  rendera ut blogs i blogs sidan
   status : rendering fungerar bra!

7.   kunna öppna en blog om man klickar på den 
status : klart !

8.   se information om bloginläget och kunna navigera tillbaka till home
      status : klar 
9.   kunna gilla och ogilla varje enskild post

10.  kunna lägga till en post
status : bara ritat ut hur det kan se ut. Saknas functionalitet och eventuellt att det ska vara upplagrt på ett annat sätt ? fundera på saken

11.lada ner tailwind CSS status :klar! 

12. lada ner maticons for like button i home komponenten 
 status :klar! men funger ej av någon anledning? nu funkar det. behövde läga en länk i index.html för att det skulle funka

 13.skapa kontakt formulär till about sidan som ska rendera ut meddeladnet i consolen.
 status : klar

14. se över all kod så att det som är på hemsidan står på svenska! 
 status pågår!

15.skapa funktionalitet till createPost med formGroup och puscha till listan  i blogs.
status klar!

16.skapa localstorage service och se till att alla blogs sparas.
status : klar !


17. se till att man kan gilla och lägga till nya kommentarer

status : nästan klart , kan lägga till kommetnarer och gilla men det uppdateras inte/sparas inte i local storage 


18.gör de möjligt att lägga till bild i blogg posten
   - lägg in med URL status : klar! 

# FORTSÄTT HÄR! 
19.skriv om koden till mindre komponenter
   - create post : här vill jag få en service för all funktionalitet samt mindre komponenter och mer återanvänding i koden.   
   - one post : mindre kompoenenter

20. Om tid finns skapa en remove knap till admin blog sidan som gör det möjligt att ta bort en post. använd samma boolean som i header addpost knappen. 

21. Om tid finns vill jag ha snyggare/ mer användar vänlig design på sidan, gärna mer grids tänk och öva det med tailwind cssen . 



## buggar/saker att fixa 

- när man lägger till nya grejer i createpost så förstoras inte formuläret utan saker läger sig utanför diven och under footern
Detta är löst med annan CSS lösning

- blir ett sträck som att man skulle kunna skriva något i header länkarna lite random på isdan ibland ??

- går ej att skriva commentarer i nya blogpost... behöver kanske göra om till en formarray som ingredienserna eller något liknande?? 

localstorage går inte att rendera ut posten ifall man uppdaterar sidan. Får 404 error meddelanden. vet inte varför . listan i localstorage skrivs över om man gör nya post? 

FIXAT
- när man lägger till nya ingrediense på sparas ett nytt recept varej gång så där är något väldgt fel! kolla detta först imorgon och lös det! 
Klart med detta! behövde sätta alla form controlls to null as a start and create a if statement in the submit function for the submition not to render whitout everything in the form was finished.