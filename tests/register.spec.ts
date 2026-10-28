import {expect , test } from '../fixtures/custom-fixtures';

test('TC1: Verify register successfully', async ({ homePage, registerPage, loginPage, commonModal, page }) => {

    //Step 1: Launch the application
    await page.goto('https://demo1.cybersoft.edu.vn/');

    const uuid = crypto.randomUUID();
    const accountName = uuid
    const email = `${accountName}@example.com`
    
    //Step 2: Click on the register link
    //Cach bat locator:
    //1. By role
    await homePage.getTopNavigation().navigateToRegisterPage();

    await registerPage.enterAccount(accountName)

    await registerPage.enterPassword('123456')

    await registerPage.enterConfirmPassword('123456')

    await registerPage.enterFullName('alo ABC')

    await registerPage.enterEmail(email)

    await registerPage.clickRegisterButton()

    //Step 9: Verify register successfully
    //Verify point 1: Message dialog is displayed with the text "Đăng ký thành công"

    const registerDialog = await commonModal.getMessageText()
    expect(registerDialog).toEqual('Đăng ký thành công')

    //Verify point 2: Verify the user is redirected to the login page
    await registerPage.getTopNavigation().navigateToLoginPage();

    await loginPage.login(accountName, '123456')

    await expect(page.locator('#swal2-title')).toHaveText('Đăng nhập thành công')
})
