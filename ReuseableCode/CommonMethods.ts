import { test, expect, Page } from "@playwright/test";
import * as businessHelper from '../businessHelper/businessHelpers'

class CommonMethods {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async navigation_Page(mainUrl) {
        await this.page.goto(mainUrl)
    }

    async click_Element(locator) {
        await this.page.locator(locator).click()
    }

    async enterText(locator, text) {
        await this.page.locator(locator).type(text)
    }

    async assert_Text_Contains(locator, text) {
        await businessHelper.assertContainByText(this.page,locator,text)
    }

    async perform_Enter(){
        await this.page.keyboard.press('Enter')
    }
}

export default CommonMethods
