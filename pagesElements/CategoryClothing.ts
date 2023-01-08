import { Page } from "@playwright/test";
import CommonMethods from '../ReuseableCode/commonMethods';

var commonMethods;

class ClothSelection {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        commonMethods = new CommonMethods(page);
    }

    async price_Ordering() {
        await commonMethods.click_Element("(//div[@id='sort-option']//a)[3]")
    }
}

export default ClothSelection
