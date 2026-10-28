import { Locator, Page } from "@playwright/test"

type PlaywrightLocator = Locator | string;

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async click(locator: PlaywrightLocator, options?: { timeout?: number | undefined} | undefined) {
        if (typeof locator === 'string')
            await this.page.locator(locator).click(options);
        else
            await locator.click(options);
    }

    public async fill(locator: PlaywrightLocator, value: string, options?: { timeout?: number | undefined} | undefined) {
        if (typeof locator === 'string')
            await this.page.locator(locator).fill(value, options)
        else
            await locator.fill(value, options)
    }
}