import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class CommonModals extends BasePage {
    private lblMessage: Locator

    constructor(page: Page) {
        super(page);
        this.lblMessage = page.locator('#swal2-title')
    }

    public async getMessageText(): Promise<string | null> {
        return this.lblMessage.textContent()
    }

    public async waitModalDisappear(): Promise<void> {
        this.lblMessage.waitFor({ state: 'hidden' })
    }

}