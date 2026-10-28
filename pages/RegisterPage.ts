import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";

export class RegisterPage extends CommonPage {
    private txtUsername: Locator
    private txtPassword: Locator
    private txtConfirmPassword: Locator
    private txtFullName: Locator
    private txtEmail: Locator
    private btnRegister: Locator

    constructor(page: Page) {
        super(page);
        this.txtUsername = page.locator('#taiKhoan')
        this.txtPassword = page.locator('#matKhau')
        this.txtConfirmPassword = page.locator("//input[@id='confirmPassWord']")
        this.txtFullName = page.locator('#hoTen')
        this.txtEmail = page.locator('#email')
        this.btnRegister = page.locator('//button[.="Đăng ký"]')
    }

    public async enterAccount(account: string): Promise<void> {
        await this.fill(this.txtUsername, account)
    }

    public async enterPassword(password: string): Promise<void> {
        await this.fill(this.txtPassword, password)
    }   

    public async enterConfirmPassword(confirmPassword: string): Promise<void> {
        await this.fill(this.txtConfirmPassword, confirmPassword)
    }

    public async enterFullName(fullName: string): Promise<void> {
        await this.fill(this.txtFullName, fullName)
    }

    public async enterEmail(email: string): Promise<void> {
        await this.fill(this.txtEmail, email)
    }

    public async clickRegisterButton(): Promise<void> {
        await this.click(this.btnRegister)
    }

    public async register(account: string, password: string, confirmPassword: string, fullName: string, email: string): Promise<void> {
        await this.enterAccount(account)
        await this.enterPassword(password)
        await this.enterConfirmPassword(confirmPassword)
        await this.enterFullName(fullName)
        await this.enterEmail(email)
        await this.clickRegisterButton()
    }
}