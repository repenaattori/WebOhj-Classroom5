import { test, expect } from '@playwright/test';
import { log } from 'node:console';

test('Test image clicking', async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);

    let suits = ['heart','diamond', 'spade', 'club'];

    for (const s of suits) {
        let card = page.locator(`#${s}`);
        await expect(card).toHaveAttribute('src', /card.png/);
        await card.click();
        await expect(card).toHaveAttribute('src', new RegExp(`${s}.png`));
    }
});