import {gondola} from "gondolajs";
export class LoginPage {
    url : string;
    email : string;
    password : string; 
    loginbtn : string = "//input[@value='login']";
    constructor(url:string,email:string,password:string){
        this.url = url;
        this.email = email;
        this.password = password;
    }
    seturl = (url: string) =>{
        this.url = url;
    }
    geturl = ()=>{
        return this.url;
    }
    setemail = (email: string) =>{
        this.email = email;
    }
    getemail = ()=>{
        return this.email;
    }
    setpassword = (password: string) =>{
        this.password = password;
    }
    getpassword = ()=>{
        return this.password;
    }
    clickLoginbtn = ()=>{
        gondola.click({xpath : this.loginbtn});
    }
    Loginwithacc = ()=>{
        gondola.enter({id: "username"},this.email);
        gondola.enter({id: "password"},this.password);
        this.clickLoginbtn();
        gondola.checkText({css:"strong"},"Welcome"+" "+ this.email);
    }
    open = () =>{
        gondola.maximize();
        gondola.navigate(this.geturl());

    }
    clickbtn = (btn : string) =>{
        gondola.click({xpath:btn});
    }
    checktext =(strcss : string, strtext:string)=>{
        gondola.checkText({css:strcss},strtext);
    }
    inputvalid = (strid:string,strvalid:string)=>{
        gondola.enter({id: strid},strvalid);
    }
    
    
}