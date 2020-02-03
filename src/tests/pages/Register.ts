import {gondola} from "gondolajs"

export class Register {
    url : string;
    email : any;
    password : any;
    confirmpass : any;
    pid : any;
    registerbtn : string = "//input[@value='Register']";
    constructor(url:string, email:any, password: any , confirmpass: any, pid:any){
        this.url = url;
        this.email = email;
        this.password = password;
        this.confirmpass = confirmpass;
        this.pid = pid;
    }
    seturl = (url : string)=>{
        this.url = url;
    }
    geturl = ()=>{
        return this.url;
    }
    setemail = (email: any) =>{
        this.email = email;
    }
    getemail = ()=>{
        return this.email;
    }
    setpassword = (password: any) =>{
        this.password = password;
    }
    getpassword = ()=>{
        return this.password;
    }
    setconfirmpass = (confirmpass : any)=>{
        this.confirmpass = confirmpass;
    }
    getconfirmpass = ()=>{
        return this.confirmpass;
    }
    setpid = (pid : any)=>{
        this.pid = pid;
    }
    getpid = ()=>{
        return this.pid;
    }
    clickregister = () =>{
        gondola.click({xpath: this.registerbtn})
    }
    registerwithacc = ()=>{
        gondola.enter({id: "email"},this.email);
        gondola.enter({id: "password"},this.password);
        gondola.enter({id: "confirmPassword"},this.confirmpass);
        gondola.enter({id: "pid"},this.pid);
        this.clickregister();
    }
    open = () =>{
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