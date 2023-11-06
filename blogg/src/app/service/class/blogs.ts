import { DateService } from "../date.service";
export class Blogs {
    id: number;
    title: string;
    thumbnailUrl: string;
    aboutRecipe: string;
    ingredients: string[];
    cooking: string[];
    category: string;
   currentDate: any; //this.dateService.getDate(); //date
    likes: number;
    dislikes: number;
    comments: string[];
    constructor(  
        id: number, 
        title: string,
        thumbnailUrl: string,
        aboutRecipe: string,
        ingredients: string[],
        cooking: string[],
        category: string,
        currentDate: any,
        likes: number,
        dislikes: number,
        comments: string[],
        )
        {
        this.id = id;
        this.title = title;
        this.thumbnailUrl = thumbnailUrl;
        this.aboutRecipe = aboutRecipe;
        this.ingredients = ingredients;
        this.cooking = cooking;
        this.category = category;
        this.currentDate= currentDate;
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = comments;
    }
}
 
