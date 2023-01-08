import { expect, Page } from "@playwright/test";

export const ConfigData = () => {
    return require('../fixtures/testData.json')
}

export const assertByText = async (page, locator, textValue) => {
    await expect(page.locator(locator)).toHaveText(textValue);
}

export const assertContainByText = async (page, locator, textValue) => {
    await expect(page.locator(locator)).toContainText(textValue);
}

