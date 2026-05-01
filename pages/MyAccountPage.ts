import {Page,Locator} from "@playwright/test";
import { LogoutPage } from "./LogoutPage";

export class MyAccountPage{

    private readonly page:Page;
    private readonly msgHeading:Locator;
    private readonly logoutLink:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.msgHeading=this.page.locator("h2:has-text('My Account')");
        this.logoutLink=this.page.locator("text='Logout'").nth(1);
    }

    async isMyAccountPageExists()
    {
        try {
          const isVisible = await this.msgHeading.isVisible();
          return isVisible;    
        } catch (error) {
            console.log(`here is an Error ${error}`);
            return false;
        } 
    }

    async logout()
    { 
        await this.logoutLink.click();
        return new LogoutPage(this.page);

    }

    async getPageTitle()
    {
       return (await this.page.title());
    }


}