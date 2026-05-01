/* * Test Case: Add Product to Cart
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1. Navigate to application URL
 * 2. Enter an existing product name in the search box
 * 3. Click the search button
 * 4. Verify the product appears in the search results
 * 5. Select the product
 * 6. Set quantity
 * 7. Add the product to the cart
 * 8. Verify the success message
 *  */

import { test,expect } from "@playwright/test";
import { TestConfig } from "../test.config";
import { HomePage } from "../pages/HomePage";
import { SearchResultsPage } from "../pages/SearchResultPage";
import { ProductPage } from "../pages/ProductPage";

let config:TestConfig;
let homePage:HomePage;
let searchResultPage:SearchResultsPage;
let productPage:ProductPage;

test.beforeEach(async({page})=>
{
    config = new TestConfig();
    await page.goto(config.appUrl);

    homePage = new HomePage(page);
    searchResultPage = new SearchResultsPage(page);
    productPage = new ProductPage(page);

});

test("Add To Cart Test", async({page})=>
{
    const productName = config.productName;
    const productQuantity = config.productQuantity;

    await homePage.insertSearchBox(productName);
    await homePage.clickSearchBtn();
    expect(await searchResultPage.isProductExist(productName)).toBeTruthy();
    await searchResultPage.selectProduct(productName);
    await productPage.setQuantity(productQuantity); 
    await productPage.addToCart();
    expect (await productPage.isConfirmationMessageVisible()).toBeTruthy();
   
})

