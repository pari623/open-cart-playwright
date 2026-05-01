/* 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Enter the product name in the search field
 * 3) Click the search button
 * 4) Verify if the product is displayed in the search results
 */
import { test,expect } from "@playwright/test";
import { TestConfig } from "../test.config";
import { HomePage } from "../pages/HomePage";
import { SearchResultsPage} from "../pages/SearchResultPage";

let config:TestConfig;
let homePage:HomePage;
let searchResultPage:SearchResultsPage;

test.beforeEach(async({page})=>
{
   config = new TestConfig();
   await page.goto(config.appUrl);

   homePage = new HomePage(page);
   searchResultPage = new SearchResultsPage(page);

});

test("Search Result Test", async({page})=>
{
   await homePage.insertSearchBox(config.productName);
   await homePage.clickSearchBtn();

   expect(await searchResultPage.isSearchResultsPageExists()).toBeTruthy();
   
   const isProductFound = await searchResultPage.isProductExist(config.productName);
   expect(isProductFound).toBeTruthy();


})

