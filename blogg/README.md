 
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
