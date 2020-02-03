import {gondola, TestModule, TestCase} from "gondolajs";
import { Myticket } from "../pages/my_ticket";
import { LoginPage } from "../pages/Login_Page";

TestModule("My Ticket")
// TestCase("Verify...",async()=>{
//     let myticket = new Myticket("http://www.railway.somee.com/Page/ManageTicket.cshtml","Safe Railway - My Ticket");
//     myticket.open();
//     myticket.checktext("h1","Login page");
// })

// TestCase("Verify...",async()=>{
//     let myticket = new Myticket("http://www.railway.somee.com/Page/ManageTicket.cshtml","Safe Railway - My Ticket");
//     let loginpage = new LoginPage("http://www.railway.somee.com/Account/Login.cshtml","vexosox474@email5.net","123456789");
    
//     myticket.open();
//     loginpage.Loginwithacc();
//     myticket.checktext("a[href='/Page/ManageTicket.cshtml']","My ticket");
// })

TestCase("Verify filter...",async()=>{
    let myticket = new Myticket("http://www.railway.somee.com/Page/ManageTicket.cshtml","Safe Railway - My Ticket");
    let loginpage = new LoginPage("http://www.railway.somee.com/Account/Login.cshtml","vexosox474@email5.net","123456789");
    
    myticket.open();
    loginpage.Loginwithacc();
    myticket.gotobottom();
    gondola.wait(5);
})
