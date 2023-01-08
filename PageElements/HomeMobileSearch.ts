import type { Page, test } from '@playwright/test';
import CommonMethods from '../ReuseableCode/CommonMethods';
import * as businessHelper from '../businessHelper/businessHelpers'

var commonMethods;

class MobileSearch {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        commonMethods = new CommonMethods(page);
    }

    async enter_Text_SearchBox(searchText) {
        await commonMethods.enterText("//input[@id='term']", searchText)
    }

    async assert_ProductName(expectedText){
        await commonMethods.assert_Text_Contains("//div[@class='od kW cN kR bH']/h1",expectedText)
    }
}

export default MobileSearch