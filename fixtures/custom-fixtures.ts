import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { CommonModals } from '../pages/modals/CommonModals';

// Declare the types of your fixtures.
type MyFixtures = {
  homePage: HomePage,
  registerPage: RegisterPage,
  loginPage: LoginPage,
  commonModal: CommonModals,
};

// Extend base test by providing "homePage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    // Set up the fixture.
    const homePage = new HomePage(page)

    // Use the fixture value in the test.
    await use(homePage);
  },

  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },

    loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
    },

    commonModal: async ({ page }, use) => {
    await use(new CommonModals(page));
    },

});
export { expect } from '@playwright/test';