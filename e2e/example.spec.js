// // @ts-check
// const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

const { test, expect } = require("@playwright/test");

test("AppHasAddButton", async ({ page }) => {
  await page.goto("localhost:8080");
  const addButton = await page.$('button:has-text("add")');
  expect(addButton).not.toBeNull();
});

test("AppCanSubtract", async ({ page }) => {
  await page.goto("localhost:8080");
  await page.fill("#number1", "7");
  await page.fill("#number2", "3");
  await page.click("#subtract");
  await page.waitForSelector("#result");
  const result = await page.textContent("#result");
  expect(result).toBe("The result is: 4");
});
