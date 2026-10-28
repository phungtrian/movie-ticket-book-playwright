import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class TopNavigation extends BasePage {
    private registerLink: Locator
    private loginLink: Locator

    constructor(page: Page) {
        super(page); //khi kế thừa từ 1 class khác thì phải gọi super(page) để truyền page vào constructor của BasePage
        this.registerLink = page.locator('//a[h3[text()="Đăng Ký"]]')
        this.loginLink = page.locator('//a[h3[text()="Đăng Nhập"]]')
    }

    public async navigateToLoginPage(): Promise<void> {
        await this.click(this.loginLink);
    }

    public async navigateToRegisterPage(): Promise<void> {
        await this.click(this.registerLink);
    }
    
}