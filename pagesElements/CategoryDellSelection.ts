import type { Page, test } from '@playwright/test';
import CommonMethods from '../ReuseableCode/commonMethods';

var commonMethods;

class CategorySelection {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        commonMethods = new CommonMethods(page);
    }

    async click_Category_Icon() {
        await commonMethods.click_Element("//label[@role='button']/i[@class='sprite-icons cI pp ip p eD sU']")
    }

    async select_Category() {
        await commonMethods.click_Element("(//span[@data-vars-lb='Dell'])[1]")
    }

    async close_Category_Icon() {
        await commonMethods.click_Element("//label[@role='button']/i[@class='sprite-icons cI pp ip p eD sU nI']")
    }

    async header_Text_Verify() {
        await commonMethods.assert_Text("//div[@class='od kW cN kR bH']/h1", "Dell")
    }
}

export default CategorySelection