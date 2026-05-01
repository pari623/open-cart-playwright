import {Page,Locator} from "@playwright/test";


export class LoginPage{

    //define variable
    private readonly page:Page;
    private readonly emailAddressField:Locator;
    private readonly passwordField:Locator;
    private readonly loginBtn:Locator;
    private readonly txtErrorMsg:Locator;
    //constructor
    constructor(page:Page)
    {
       this.page = page;
       this.emailAddressField = this.page.locator("#input-email");
       this.passwordField = this.page.locator("#input-password");
       this.loginBtn = this.page.locator("input[value='Login']");
       this.txtErrorMsg = this.page.locator(".alert.alert-danger")
       

    }

    //methods

    async setEmailAddress(emailAddress:string)
    {
        await this.emailAddressField.fill(emailAddress);
    }

    async setPassword(password:string)
    {
        await this.passwordField.fill(password);
    }

    async clickLoginBtn()
    {
        await this.loginBtn.click();
    }

    async login(email:string,password:string)
    { 
        await this.setEmailAddress(email);
        await this.setPassword(password);
        await this.clickLoginBtn();
    }

     async getLoginErrorMsg():Promise<string | null>
     {
       return (this.txtErrorMsg.textContent());
     }



}