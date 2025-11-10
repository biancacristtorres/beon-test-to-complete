import { test } from '@playwright/test';
import { PageManager } from '../../src/ui/Pages/PageManager';
import properties from '../../properties.json';

test.describe.serial('NopCommerce demo store', () => {

    let pm: PageManager;

    test('Navigation & Product Search - Apple MacBook Pro', async ({ page, context }) => {
        const productName = properties.ui.productName;

        pm = new PageManager(page);

        await pm.home.goto();
        await pm.home.search(productName);
        await pm.searchResults.clickProduct(productName);
        await pm.productDetails.expectProductTitle(productName);
    });
});
