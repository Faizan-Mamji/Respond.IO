import { test, expect } from '@playwright/test';

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

test.describe("Test Playwright With Dummy Register Testing", () => {
    test("Positive: Flow without any change", async ({ request, baseURL }) => {
        const response = await request.post(`${baseURL}booking`, {
            data: JSON.stringify(postPayload)
        });

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        console.log(await response.json());
    });

    test("Negative: Firstname & Lastname is empty", async ({ request, baseURL }) => {
        postPayload.firstname = ""
        postPayload.lastname = ""

        const response = await request.post(`${baseURL}booking`, {
            data: JSON.stringify(postPayload)
        });

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        console.log(await response.json());
    });

    test("Negative: Price passed as a float ", async ({ request, baseURL }) => {
        postPayload.totalprice = 123.60

        const response = await request.post(`${baseURL}booking`, {
            data: JSON.stringify(postPayload)
        });

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        console.log(await response.json());
    });

    test("Negative: Passed irrelevant date", async ({ request, baseURL }) => {
        postPayload.bookingdates.checkin = "123422"
        postPayload.bookingdates.checkout = "123433"

        const response = await request.post(`${baseURL}booking`, {
            data: JSON.stringify(postPayload)
        });

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        console.log(await response.json());
    });

    test("Negative: Passed amount in negative with float value", async ({ request, baseURL }) => {
        postPayload.totalprice = -120.223;

        const response = await request.post(`${baseURL}booking`, {
            data: JSON.stringify(postPayload)
        });

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        console.log(await response.json());
    });

    test("Positive: Change depositpaid boolean value to false", async ({ request, baseURL }) => {
        postPayload.depositpaid = false;

        const response = await request.post(`${baseURL}booking`, {
            data: JSON.stringify(postPayload)
        });

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        console.log(await response.json());
    });
});