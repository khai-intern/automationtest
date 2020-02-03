import {gondola} from "gondolajs"
import { IGondolaWeb } from "gondolajs/built/builtin"

export class HomePage {
    constructor(url : string, headertext : string){
        this.url = url;
        this.headertext = headertext;
    }
    public url : string;
    headertext : string;
    setheadertext = (strtext : string) =>{
        this.headertext = strtext;
    }
    seturl = (url : string)=>{
        this.url = url;
    }
    getheadertext = ()=>{
        return  this.headertext;
    }
    geturl = () => {
        return this.url;
    }
    checktitle = () =>{
        gondola.checkWindowExist(this.getheadertext());
    }
    open = () =>{
        gondola.navigate(this.geturl());
    }
    createacc = ()=>{
        gondola.click({xpath: "//a[.='create an account']"});
        gondola.checkText({css: "h1"},"Create account");
    }
}