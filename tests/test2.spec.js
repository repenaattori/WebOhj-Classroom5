import { test, expect } from '@playwright/test';
import { log } from 'node:console';

test('Test image reset', async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);

    const button = page.getByRole('button');
    const images = await page.locator('img').all();

    for (const img of images) {
        await img.click();
        await expect(img).not.toHaveAttribute('src', /card.png/);
    }

    await button.click();
    for (const img of images) {
        await expect(img).toHaveAttribute('src', /card.png/);
    }
});