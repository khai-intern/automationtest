import {gondola, TestModule, TestCase} from "gondolajs";
import { bookticket } from "../pages/book_ticket";
import { LoginPage } from "../pages/Login_Page";
const Departdate = [
    {
      id: 1,
      date: "2/6/2020"
    },
    {
      id: 2,
      date: "2/7/2020",
    },
    {
      id: 3,
      date: "2/8/2020",
    },
    {
      id: 4,
      date: "2/9/2020",
    },
    {
      id: 5,
      date: "2/10/2020",
    },
    {
      id: 6,
      date: "2/11/2020",
    },
    {
      id: 7,
      date: "2/12/2020",
    },
    {
      id: 8,
      date: "2/13/2020",
    },
    {
      id: 9,
      date: "2/14/2020",
    },
    {
      id: 10,
      date: "2/15/2020",
    },
    {
      id: 11,
      date: "2/16/2020",
    },
    {
      id: 12,
      date: "2/17/2020",
    },
    {
      id: 13,
      date: "2/18/2020",
    },
    {
      id: 14,
      date: "2/19/2020",
    },
    {
      id: 15,
      date: "2/20/2020",
    },
    {
      id: 16,
      date: "2/21/2020",
    },
    {
      id: 17,
      date: "2/22/2020",
    },
    {
      id: 18,
      date: "2/23/2020",
    },
    {
      id: 19,
      date: "2/24/2020",
    },
    {
      id: 20,
      date: "2/25/2020",
    },
    {
      id: 21,
      date: "2/26/2020",
    },
    {
      id: 22,
      date: "2/27/2020",
    },
    {
      id: 23,
      date: "2/28/2020",
    },
    {
      id: 24,
      date: "2/29/2020",
    },
    {
      id: 25,
      date: "3/1/2020",
    },
    {
      id: 26,
      date: "3/2/2020",
    },
    {
      id: 27,
      date: "3/3/2020",
    },
    ,
    {
      id: 28,
      date: "3/4/2020",
    },
];
const Departfrom = [
    {
      id: 1,
      title: "Sài Gòn",
    },
    {
      id: 2,
      title: "Phan Thiết",
    },
    {
      id: 3,
      title: "Nha Trang",
    },
    {
      id: 4,
      title: "Đà Nẵng",
    },
    {
      id: 5,
      title: "Huế",
    },
    {
      id: 6,
      title: "Quảng Ngãi",
    }
   ];
const Arrive = [
    {
      id: 1,
      title: "Phan Thiết",
    },
    {
      id: 2,
      title: "Nha Trang",
    },
    {
      id: 3,
      title: "Đà Nẵng",
    },
    {
      id: 4,
      title: "Huế",
    },
    {
      id: 5,
      title: "Quảng Ngãi",
    }
   ];
const Seat = [
    {
      id: 1,
      title: "Hard seat",
    },
    {
      id: 2,
      title: "Soft seat",
    },
    {
      id: 3,
      title: "Soft seat with air conditioner",
    },
    {
      id: 4,
      title: "Hard bed",
    },
    {
      id: 5,
      title: "Soft bed",
    },
    {
      id: 6,
      title: "Soft bed with air conditioner",
    }
   ];
const TicketAmount = [
 {
   id: 1,
   title: "1",
 },
 {
   id: 2,
   title: "2",
 },
 {
   id: 3,
   title: "3",
 },
 {
   id: 4,
   title: "4",
 },
 {
   id: 5,
   title: "5",
 },
 {
   id: 6,
   title: "6",
 },
 {
   id: 7,
   title: "7",
 },
 {
   id: 8,
   title: "8",
 },
 {
   id: 9,
   title: "9",
 },
 {
   id: 10,
   title: "10",
 }
];
TestModule("Book Ticket")

TestCase("Verify...",async()=>{
    let book = new bookticket("http://www.railway.somee.com/Page/BookTicketPage.cshtml","Safe Railway - Book Ticket");
    book.open();
})

TestCase("Verify...",async()=>{
    let book = new bookticket("http://www.railway.somee.com/Page/BookTicketPage.cshtml","Safe Railway - Book Ticket");
    book.open();
    let loginpage = new LoginPage("http://www.railway.somee.com/Account/Login.cshtml","vexosox474@email5.net","123456789");
    loginpage.Loginwithacc();
})

TestCase("Verify...",async()=>{
    let book = new bookticket("http://www.railway.somee.com/Page/BookTicketPage.cshtml","Safe Railway - Book Ticket");
    book.open();
    let loginpage = new LoginPage("http://www.railway.somee.com/Account/Login.cshtml","vexosox474@email5.net","123456789");
    loginpage.Loginwithacc();
    book.gotobottom();
    gondola.select("[name='Date']",["2/24/2020"]);
    gondola.select("[name='DepartStation']",["Phan Thiết"]);
    gondola.select("[name='ArriveStation']",["Đà Nẵng"]);
    gondola.select("[name='SeatType']",["Soft bed with air conditioner"]);
    gondola.select("[name='TicketAmount']",["2"]);
    book.clickbtn("//input[@value='Book ticket']");
    //gondola.wait(5);
})

TestCase("Verify...",async()=>{
    let book = new bookticket("http://www.railway.somee.com/Page/BookTicketPage.cshtml","Safe Railway - Book Ticket");
    book.open();
    let loginpage = new LoginPage("http://www.railway.somee.com/Account/Login.cshtml","vexosox474@email5.net","123456789");
    loginpage.Loginwithacc();
    book.gotobottom();
    for(var i = 0;i<28;i++){
        let path = "["+i+"].date";
        const value = await gondola.getJSONValue(Departdate, path);
        gondola.select("[name='Date']",[value[0]]); 
    }
    for(var i = 1;i<6;i++){
        let path = "["+i+"].title";
        const value1 = await gondola.getJSONValue(Departfrom, path);
        gondola.select("[name='DepartStation']",[value1[0]]);
    }
    gondola.refresh();
    for(var i = 0;i<5;i++){
        let path = "["+i+"].title";
        const value2 = await gondola.getJSONValue(Arrive, path);
        gondola.select("[name='ArriveStation']",[value2[0]]);
    }
    for(var i = 0;i<6;i++){
        let path = "["+i+"].title";
        const value3 = await gondola.getJSONValue(Seat, path);
        gondola.select("[name='SeatType']",[value3[0]]);
    }
    for(var i = 0;i<10;i++){
        let path = "["+i+"].title";
        const value4 = await gondola.getJSONValue(TicketAmount, path);
        gondola.select("[name='TicketAmount']",[value4[0]]);
    }
})