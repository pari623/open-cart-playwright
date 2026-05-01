# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login test @login
- Location: tests/login.spec.ts:21:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://tutorialsninja.com/demo/", waiting until "load"

```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | import { HomePage } from "../pages/HomePage";
  3  | import { LoginPage } from "../pages/LoginPage";
  4  | import { MyAccountPage } from "../pages/MyAccountPage";
  5  | import { TestConfig } from "../test.config";
  6  | 
  7  | let config:TestConfig;
  8  | let homePage: HomePage;
  9  | let loginPage:LoginPage;
  10 | let myAccountPage:MyAccountPage;
  11 | 
  12 | test.beforeEach(async({page})=>
  13 | {
  14 |     config = new TestConfig();
> 15 |     await page.goto(config.appUrl);
     |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  16 |     homePage = new HomePage(page);
  17 |     loginPage = new LoginPage(page);
  18 |     myAccountPage = new MyAccountPage(page);
  19 | });
  20 | 
  21 | test("Login test @login",async()=>
  22 | {
  23 |     await  homePage.clickMyAccountLink();
  24 |     await homePage.clickLogin();
  25 |     await loginPage.setEmailAddress(config.email);
  26 |     await loginPage.setPassword(config.password);
  27 |     await loginPage.clickLoginBtn();
  28 |     const isLoggedIn = await myAccountPage.isMyAccountPageExists();
  29 |     expect(isLoggedIn).toBeTruthy();
  30 | 
  31 | 
  32 | 
  33 | 
  34 | })
```