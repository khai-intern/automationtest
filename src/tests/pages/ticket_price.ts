import {gondola} from "gondolajs";
export class ticket_price{
    url : string;
    titletext : string;
    constructor(url : string, titletext : string){
        this.url = url;
        this.titletext = titletext;
    }
    seturl(url : string){
        this.url = url;
    }
    geturl(){
        return this.url;
    }
    open = () =>{
        gondola.navigate(this.geturl());
    }
    clickbtn = (btn : string)=>{
        gondola.click({xpath:btn});
    }
    checktext = (strcss : string, strtext : string) =>{
        gondola.checkText(strcss,strtext);
    }
}