# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: account-registration.spec.ts >> Account Registration
- Location: tests/account-registration.spec.ts:8:5

# Error details

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator('h1:has-text(\'Your Account Has Been Created!\')')

```

# Test source

```ts
  1   | import{Page,Locator,expect} from "@playwright/test";
  2   | 
  3   | export class RegistrationPage{
  4   | 
  5   |     private readonly page:Page;
  6   |     private readonly firstNameField:Locator;
  7   |     private readonly lastNameField:Locator;
  8   |     private readonly emailfield:Locator;
  9   |     private readonly phoneNumberField:Locator;
  10  |     private readonly passwordField:Locator;
  11  |     private readonly confirmPasswordField:Locator;
  12  |     private readonly policyCheckBox:Locator;
  13  |     private readonly continueBtn:Locator;
  14  |     private readonly msgConfirmation:Locator;
  15  | 
  16  |     //construction for locate and initialiize the variable
  17  |     constructor(page:Page)
  18  |     {
  19  |         this.page = page;
  20  |         this.firstNameField = this.page.locator("#input-firstname");
  21  |         this.lastNameField = this.page.locator("#input-lastname");
  22  |         this.emailfield = this.page.locator("#input-email");
  23  |         this.phoneNumberField = this.page.locator("#input-telephone");
  24  |         this.passwordField = this.page.locator("#input-password");
  25  |         this.confirmPasswordField = this.page.locator("#input-confirm");
  26  |         this.policyCheckBox = this.page.locator("input[name='agree']");
  27  |         this.continueBtn = this.page.locator("input[value='Continue']");
  28  |         this.msgConfirmation = this.page.locator("h1:has-text('Your Account Has Been Created!')");
  29  |     }
  30  | 
  31  |     //methods
  32  |     async setFirstName(fname:string)
  33  |     {
  34  |        await this.firstNameField.fill(fname);
  35  |     }
  36  | 
  37  |     async setLastName(lname:string)
  38  |     {
  39  |         await this.lastNameField.fill(lname);
  40  |     }
  41  | 
  42  |     async setEmail(email:string)
  43  |     {
  44  |       await this.emailfield.fill(email);
  45  |     }
  46  | 
  47  |     async setPhoneNumber(phoneNumber:string)
  48  |     {
  49  |         await this.phoneNumberField.fill(phoneNumber);
  50  |     }
  51  | 
  52  |     async setPassword(password:string)
  53  |     {
  54  |         await this.passwordField.fill(password);
  55  |     }
  56  | 
  57  |     async confirmPassword(password:string)
  58  |     {
  59  |         await this.confirmPasswordField.fill(password);
  60  |     }
  61  | 
  62  |     async checkPolicyCheckBox()
  63  |     {
  64  |         await this.policyCheckBox.check();
  65  |     }
  66  | 
  67  |     async clickContinueBtn()
  68  |     {
  69  |         await this.continueBtn.click();
  70  |     }
  71  | 
  72  |     async getConfirmationMsg()
  73  |     {
> 74  |         return await this.msgConfirmation.textContent()??'';
      |                                           ^ Error: locator.textContent: Target page, context or browser has been closed
  75  |     }
  76  | 
  77  |     async completeTegistration(userData:{
  78  |         firstname:string;
  79  |         lastName:string;
  80  |         email:string;
  81  |         telephone:string;
  82  |         password:string;
  83  |     }):Promise<void>
  84  |     {
  85  |         await this.setFirstName(userData.firstname);
  86  |         await this.setLastName(userData.lastName);
  87  |         await this.setEmail(userData.email);
  88  |         await this.setPhoneNumber(userData.telephone);
  89  |         await this.setPassword(userData.password);
  90  |         await this.confirmPassword(userData.password);
  91  |         await this.checkPolicyCheckBox();
  92  |         await this.clickContinueBtn();
  93  |         await expect(this.msgConfirmation).toBeVisible();
  94  | 
  95  |     }
  96  | 
  97  | 
  98  | 
  99  | 
  100 | 
  101 | 
  102 | }
```