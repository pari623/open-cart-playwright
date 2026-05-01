import {Page, Locator} from "@playwright/test";

export class HomePage
{
   //Locators
   private readonly page: Page
   private readonly lnkMyAccount: Locator;
   private readonly lnkRegister: Locator;
   private readonly lnkLogin: Locator;
   private readonly txtSearchbox: Locator;
   private readonly btnSearch: Locator;

   //construction

   constructor(page:Page)
   {
     this.page = page;
     this.lnkMyAccount = this.page.getByText("My Account").nth(0);
     this.lnkRegister = this.page.getByText("Register");
     this.lnkLogin = this.page.locator("a:has-text('Login')");
     this.txtSearchbox = this.page.getByPlaceholder("Search");
     this.btnSearch = this.page.locator(".btn.btn-default.btn-lg");

   }

   //method

  async isHomePageExist()
  {
    let title:string = await this.page.title();
    if(title)
    {
        return true;
    }
    return false;
  }

  async clickMyAccountLink()
  {
    await this.lnkMyAccount.click();
  }

  async clickRegisterLink()
  {
    await this.lnkRegister.click();
  }

  async clickLogin()
  {
    await this.lnkLogin.click();
  }

  async insertSearchBox(productName:string)
  {

    await this.txtSearchbox.fill(productName);

  }

  async clickSearchBtn()
  {
    await this.btnSearch.click();
  }



}