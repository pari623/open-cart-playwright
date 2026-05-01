/* 
* Steps:
 * 1) Navigate to the application URL
 * 2) Go to Login page from Home page
 * 3) Login with valid credentials
 * 4) Verify 'My Account' page
 * 5) Click on Logout link
 * 6) Click on Continue button
 * 7) Verify user is redirected to Home Page
 */

import { test,expect}  from "@playwright/test";
import { TestConfig } from "../test.config";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { MyAccountPage } from "../pages/MyAccountPage"; 
import { LogoutPage } from "../pages/LogoutPage";

//Declare shared variables
let config: TestConfig;
let homePage: HomePage;
let loginPage:LoginPage;
let myAccountPage: MyAccountPage;
let logOutPage: LogoutPage;

test.beforeEach(async({page})=>
{
    config = new TestConfig(); //Load test config
    await page.goto(config.appUrl);  // Navigate to app URL

    //Initialize page objects
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);
    logOutPage = new LogoutPage(page);

})

test("LogOut Test", async()=>
{
    //Navigate to login page
    await homePage.clickMyAccountLink();
    await homePage.clickLogin();

    //Perform login by using valid credentials
    await loginPage.login(config.email,config.password);

    //Verify successfull login
    expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();

    //Click logout, which returns Logout Page instance
    await myAccountPage.logout();

    //Verify continue btn is visible before clicking
    expect(await logOutPage.isContinueBtnVisible()).toBeTruthy();

    //Click continue btn and verify redirection to HomePage
    await logOutPage.clickContinueBtn();
    expect(homePage.isHomePageExist()).toBeTruthy();


})