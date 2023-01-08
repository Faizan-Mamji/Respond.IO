import { test, expect } from '@playwright/test';
import * as businessHelper from '../businessHelper/businessHelpers';
import ClothSelection from '../PageElements/CategoryClothing';
import CategorySelection from '../PageElements/CategoryDellSelection';
import MobileSearch from '../PageElements/HomeMobileSearch';
import CommonMethods from '../ReuseableCode/CommonMethods';

var commonMethods, categorySelection, getUrl, clothSelection, mobileSearch;
let postPayload = {
    firstname: 'Faizan',
    lastname: 'Mamji',
    totalprice: 1000,
    depositpaid: true,
    bookingdates: {
        checkin: '2018-01-01',
        checkout: '2019-01-01'
    },
    additionalneeds: 'Breakfast'
}

////////////////////////////// Application UI cases starts here //////////////////////////////

test.describe("UI Test Automation For iprice.my website", () => {
    test.beforeEach(async ({ page }) => {
        commonMethods = new CommonMethods(page)
        await commonMethods.navigation_Page(businessHelper.ConfigData().mainUrl)
    })

    test('Scenario-1: Navigate to laptop & select brands', async ({ page }) => {
        console.log('Scenario-1 executes!')
        categorySelection = new CategorySelection(page);
        await commonMethods.navigation_Page(businessHelper.ConfigData().laptopsCategory)
        await categorySelection.click_Category_Icon()
        await categorySelection.select_Category()
        await categorySelection.click_Category_Icon()
        await categorySelection.close_Category_Icon()
        getUrl = page.url()
        console.log(page.url())
        if (getUrl.includes('dell')) {
            console.log("Assert Successfull!")
        }
        await categorySelection.header_Text_Verify(businessHelper.ConfigData().headerText)
    })

    test('Scenario-2: Navigate to Cloth section & select price in descending order', async ({ page }) => {
        console.log('Scenario-1 executes!')
        clothSelection = new ClothSelection(page)
        await commonMethods.navigation_Page(businessHelper.ConfigData().clothCategory)
        await clothSelection.price_Ordering()

        for (let i = 1; i < 10; i++) {
            getUrl = page.url()
            if (getUrl.includes('desc')) {
                console.log("Url in if statement " + page.url())
                break;
            }
            else {
                console.log("Url in else statement " + page.url())
                await clothSelection.price_Ordering()
            }
        }
    })

    test('Scenario-3: Search for an item & validate search item', async ({ page }) => {
        mobileSearch = new MobileSearch(page)
        await mobileSearch.enter_Text_SearchBox(businessHelper.ConfigData().searchProduct)
        commonMethods.perform_Enter()
        await mobileSearch.assert_ProductName(businessHelper.ConfigData().searchProduct)
    })


    ////////////////////////////// Application UI cases ends here //////////////////////////////
});