import {gondola} from "gondolajs";
export class faq{
    url : string;
    titletext : string;
    constructor(url : string, titletext : string){
        this.url = url;
        this.titletext = titletext;
    }
    seturl = (url : string)=>{
        this.url = url;
    }
    geturl =() =>{
        return this.url;
    }
    settitletext =(titletext : string)=>{
        this.titletext = titletext;
    }
    gettitletext = () =>{
        return this.titletext;
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
    checktitletext = () =>{
        gondola.checkWindowExist(this.gettitletext());
    }
    scrolltotop = ()=>{
        gondola.executeScript(function () {
            let scrollingElement = (document.scrollingElement || document.body)
            scrollingElement.scrollTop = 0;
        });
    }
}