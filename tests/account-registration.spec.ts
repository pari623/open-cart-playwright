/* 
 * Test Case: Account Registration
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to application URL 
 * 2) Go to 'My Account' and click 'Register'
 * 3) Fill in registration details with random data
 * 4) Agree to Privacy Policy and submit the form
 * 5) Validate the confirmation message
 */
 

import {test,expect} from "@playwright/test";
import { TestConfig } from "../test.config";
import { RegistrationPage } from "../pages/RegistrationPage";
import { HomePage } from "../pages/HomePage";
import { RandomDataUtil } from "../utils/randomDataGenerator";

test.describe("Group Test",()=>
{
    let config:TestConfig;
    let homePage : HomePage;
    let registerPage: RegistrationPage;

    test.beforeEach(async({page})=>
{
     config = new TestConfig();
     await page.goto(config.appUrl2);
     homePage = new HomePage(page);
     registerPage = new RegistrationPage(page);
  
});


test("Account Registration @master @sanity @regression",async({})=>
{
    await homePage.clickMyAccountLink();
    await homePage.clickRegisterLink();

    await registerPage.setFirstName(RandomDataUtil.getFirstName());
    await registerPage.setLastName(RandomDataUtil.getLastName());
    await registerPage.setEmail(RandomDataUtil.getEmail());
    await registerPage.setPhoneNumber(RandomDataUtil.getPhoneNumber());
    const password = RandomDataUtil.getPassword();
    await registerPage.setPassword(password);
    await registerPage.confirmPassword(password);
    await registerPage.checkPolicyCheckBox();
    await registerPage.clickContinueBtn();
    const confirmMsg = await registerPage.getConfirmationMsg();
    expect(confirmMsg).toBe("Your Account Has Been Created!");
    console.log("Test Passed!");

})

})


