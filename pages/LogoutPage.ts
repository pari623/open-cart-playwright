import{Page,Locator} from "@playwright/test";
import { HomePage } from "./HomePage";

export class LogoutPage{
  
    //Variables
    private readonly page:Page;
    private readonly continueBtn:Locator;

   //constructor
   constructor(page:Page)
   {
      this.page = page
      this.continueBtn = this.page.getByText("Continue");
   }

   //method
   async clickContinueBtn()
   {
     await this.continueBtn.click();
     return new HomePage(this.page)
   }

   async isContinueBtnVisible()
   {
       return await this.continueBtn.isVisible();
   }




}