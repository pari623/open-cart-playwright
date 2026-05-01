import {test,expect} from "@playwright/test";
import { TestConfig } from "../test.config";
import { HomePage } from "../pages/HomePage";
import {LoginPage} from  "../pages/LoginPage";
import { MyAccountPage } from "../pages/MyAccountPage";
import { DataProvider } from "../utils/dataProvider";

const jsonPath = "testdata/logindata.json";
const JsonTestData =  DataProvider.getTestDataFromJson(jsonPath);

const csvPath = "testdata/logindata.csv";
const csvTestData = DataProvider.getTestDataFromCsv(csvPath);


for(const data of JsonTestData)
{
    test(`Login Test with JSON Data: ${data.testName} @datadriven`,async({page})=>
    {
       const config = new TestConfig();
       await page.goto(config.appUrl);

       const homePage = new HomePage(page);
       await homePage.clickMyAccountLink();
       await homePage.clickLogin();

       const loginPage = new LoginPage(page);
       await loginPage.login(data.email, data.password);

       if(data.expected.toLowerCase()==='success')
       {
        const myAccountPage = new MyAccountPage(page);
        const isLoggedIn = await myAccountPage.isMyAccountPageExists();
        expect(isLoggedIn).toBeTruthy();
       }
       else{
          
          const errorMessage = await loginPage.getLoginErrorMsg();
          expect(errorMessage).toBe("Warning: No match for E-Mail Address and/or Password.");
       }

    
    })
}

for(const data of csvTestData)
{
    test(`Login Test with CSV Data: ${data.testName} @datadriven`,async({page})=>
    {
       const config = new TestConfig();
       await page.goto(config.appUrl);

       const homePage = new HomePage(page);
       await homePage.clickMyAccountLink();
       await homePage.clickLogin();

       const loginPage = new LoginPage(page);
       await loginPage.login(data.email, data.password);

       if(data.expected.toLowerCase()==='Success')
       {
        const myAccountPage = new MyAccountPage(page);
        const isLoggedIn = await myAccountPage.isMyAccountPageExists();
        expect(isLoggedIn).toBeTruthy();
       }
       else{
          
          const errorMessage = await loginPage.getLoginErrorMsg();
          expect(errorMessage).toBe("Warning: No match for E-Mail Address and/or Password.");
       }

    
    })
}

