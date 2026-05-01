import{Page,Locator,expect} from "@playwright/test";

export class RegistrationPage{

    private readonly page:Page;
    private readonly firstNameField:Locator;
    private readonly lastNameField:Locator;
    private readonly emailfield:Locator;
    private readonly phoneNumberField:Locator;
    private readonly passwordField:Locator;
    private readonly confirmPasswordField:Locator;
    private readonly policyCheckBox:Locator;
    private readonly continueBtn:Locator;
    private readonly msgConfirmation:Locator;

    //construction for locate and initialiize the variable
    constructor(page:Page)
    {
        this.page = page;
        this.firstNameField = this.page.locator("#input-firstname");
        this.lastNameField = this.page.locator("#input-lastname");
        this.emailfield = this.page.locator("#input-email");
        this.phoneNumberField = this.page.locator("#input-telephone");
        this.passwordField = this.page.locator("#input-password");
        this.confirmPasswordField = this.page.locator("#input-confirm");
        this.policyCheckBox = this.page.locator("input[name='agree']");
        this.continueBtn = this.page.locator("input[value='Continue']");
        this.msgConfirmation = this.page.locator("h1:has-text('Your Account Has Been Created!')");
    }

    //methods
    async setFirstName(fname:string)
    {
       await this.firstNameField.fill(fname);
    }

    async setLastName(lname:string)
    {
        await this.lastNameField.fill(lname);
    }

    async setEmail(email:string)
    {
      await this.emailfield.fill(email);
    }

    async setPhoneNumber(phoneNumber:string)
    {
        await this.phoneNumberField.fill(phoneNumber);
    }

    async setPassword(password:string)
    {
        await this.passwordField.fill(password);
    }

    async confirmPassword(password:string)
    {
        await this.confirmPasswordField.fill(password);
    }

    async checkPolicyCheckBox()
    {
        await this.policyCheckBox.check();
    }

    async clickContinueBtn()
    {
        await this.continueBtn.click();
    }

    async getConfirmationMsg()
    {
        return await this.msgConfirmation.textContent()??'';
    }

    async completeRegistration(userData:{
        firstname:string;
        lastName:string;
        email:string;
        telephone:string;
        password:string;
    }):Promise<void>
    {
        await this.setFirstName(userData.firstname);
        await this.setLastName(userData.lastName);
        await this.setEmail(userData.email);
        await this.setPhoneNumber(userData.telephone);
        await this.setPassword(userData.password);
        await this.confirmPassword(userData.password);
        await this.checkPolicyCheckBox();
        await this.clickContinueBtn();

    }






}