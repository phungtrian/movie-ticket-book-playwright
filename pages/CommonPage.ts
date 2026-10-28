import { BasePage } from "./BasePage";
import { TopNavigation } from "./components/TopNavigation";
import { Page } from "@playwright/test";

export class CommonPage extends BasePage {
    private topNavigation: TopNavigation

    constructor(page: Page) {
        super(page);
        this.topNavigation = new TopNavigation(page);
    }

    public getTopNavigation(): TopNavigation {
        return this.topNavigation;
    }
}