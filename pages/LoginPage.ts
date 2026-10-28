import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";

export class LoginPage extends CommonPage {

    private txtUsername: Locator
    private txtPassword: Locator
    private btnLogin: Locator

    constructor(page: Page) {
        super(page);
        this.txtUsername = page.locator('#taiKhoan')
        this.txtPassword = page.locator('#matKhau')
        this.btnLogin = page.locator('//button[span[text()="Đăng nhập"]]')
    }

    public async enterAccount(account: string): Promise<void> {
        await this.fill(this.txtUsername, account)
    }

    public async enterPassword(password: string): Promise<void> {
        await this.fill(this.txtPassword, password)
    }

    public async clickLoginButton(): Promise<void> {
        await this.click(this.btnLogin)
    }

    public async login(account: string, password: string): Promise<void> {
        await this.enterAccount(account)
        await this.enterPassword(password)
        await this.clickLoginButton()
    }
}