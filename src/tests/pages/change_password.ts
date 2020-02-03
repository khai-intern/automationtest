import {gondola} from "gondolajs";
export class changepassword{
    currpass : string;
    newpass : string;
    confirmpass : string;
    constructor(currpass : string, newpass : string, confirmpass: string){
        this.currpass = currpass;
        this.newpass = newpass;
        this.confirmpass = confirmpass;
    }
    setcurpass = (currpass : string)=>{
        this.currpass = currpass;
    }
    getcurrpass = ()=>{
        return this.currpass;
    }
    setnewpass = (newpass : string)=>{
        this.newpass = newpass;
    }
    getnewpass = ()=>{
        return this.newpass;
    }
    setconfirmpass = (confirmpass : string)=>{
        this.confirmpass = confirmpass;
    }
    getconfirmpass = ()=>{
        return this.currpass;
    }
    changpassword = ()=>{
        this.inputvalid("currentPassword",this.currpass);
        this.inputvalid("newPassword",this.currpass);
        this.inputvalid("confirmPassword",this.currpass);
        //this.clickbtn("//input[@value='Change Password']");
    }
    clickbtn = (btn : string)=>{
        gondola.click({xpath:btn});
    }
    checktext = (strcss : string, strtext : string) =>{
        gondola.checkText(strcss,strtext);
    }
    inputvalid = (strid:string,strvalid:string)=>{
        gondola.enter({id: strid},strvalid);
    }
    gotobottom = ()=>{
        gondola.executeScript(function () {
            const scrollingElement = (document.scrollingElement || document.body)
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
        });
        
    }
}