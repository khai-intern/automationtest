import {gondola, TestCase, TestModule} from "gondolajs";
import { HomePage } from "../pages/Home_Page";
import { LoginPage } from "../pages/Login_Page";

TestModule("Home Page");
TestCase("Check window existing",async() => {
    let homepage = new HomePage("http://www.railway.somee.com/Page/HomePage.cshtml","Safe Railway - Selenium Automation");
    homepage.open();
    homepage.checktitle();
});

TestCase("Create an account",async()=>{
    let homepage = new HomePage("http://www.railway.somee.com/Page/HomePage.cshtml","Safe Railway - Selenium Automation");
    homepage.open();
    homepage.createacc();
})


