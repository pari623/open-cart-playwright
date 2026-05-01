/*  * Test Case: Login with Valid Credentials
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Navigate to Login page via Home page
 * 3) Enter valid credentials and log in
 * 4) Verify successful login by checking 'My Account' page presence
 *  */

import {test,expect} from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { MyAccountPage } from "../pages/MyAccountPage";
import { TestConfig } from "../test.config";

let config:TestConfig;
let homePage: HomePage;
let loginPage:LoginPage;
let myAccountPage:MyAccountPage;

test.beforeEach(async({page})=>
{
    config = new TestConfig();
    await page.goto(config.appUrl);
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);
});

test("Login test @login",async()=>
{
    await homePage.clickMyAccountLink();
    await homePage.clickLogin();
    await loginPage.setEmailAddress(config.email);
    await loginPage.setPassword(config.password);
    await loginPage.clickLoginBtn();
    const isLoggedIn = await myAccountPage.isMyAccountPageExists();
    expect(isLoggedIn).toBeTruthy();




})