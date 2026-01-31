import { test, expect } from "@playwright/test";

test.describe("Layout fixes", () => {
  test("container is centered on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("/");

    // Wait for page to load
    await page.waitForSelector("#services");

    // Get the services section container
    const container = page.locator("#services .container").first();
    const boundingBox = await container.boundingBox();
    const viewportSize = page.viewportSize();

    if (boundingBox && viewportSize) {
      const leftMargin = boundingBox.x;
      const rightMargin = viewportSize.width - (boundingBox.x + boundingBox.width);

      // Margins should be roughly equal (within 50px tolerance for padding differences)
      const marginDifference = Math.abs(leftMargin - rightMargin);
      expect(marginDifference).toBeLessThan(50);
    }
  });

  test("container has auto margins applied", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("/");

    await page.waitForSelector("#services .container");

    const container = page.locator("#services .container").first();
    const marginLeft = await container.evaluate((el) =>
      window.getComputedStyle(el).marginLeft
    );
    const marginRight = await container.evaluate((el) =>
      window.getComputedStyle(el).marginRight
    );

    // Both margins should be auto (computed as pixel values, they should be equal)
    expect(marginLeft).toBe(marginRight);
  });

  test("main content has header offset padding", async ({ page }) => {
    await page.goto("/");

    const main = page.locator("main#main-content");
    const paddingTop = await main.evaluate((el) =>
      window.getComputedStyle(el).paddingTop
    );

    // Should have padding-top of at least 64px (4rem)
    const paddingValue = parseInt(paddingTop, 10);
    expect(paddingValue).toBeGreaterThanOrEqual(64);
  });

  test("header does not overlap content on services page", async ({ page }) => {
    await page.goto("/services");
    await page.waitForLoadState("networkidle");

    const header = page.locator("header");
    const firstSection = page.locator("section").first();

    const headerBox = await header.boundingBox();
    const sectionBox = await firstSection.boundingBox();

    if (headerBox && sectionBox) {
      // Section should start at or below the header bottom
      expect(sectionBox.y).toBeGreaterThanOrEqual(headerBox.y + headerBox.height - 5);
    }
  });

  test("badges have adequate padding", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector("#services");

    // Find a badge in the services section
    const badge = page.locator("#services .container span").filter({ hasText: "React" }).first();

    if (await badge.count() > 0) {
      const paddingLeft = await badge.evaluate((el) =>
        window.getComputedStyle(el).paddingLeft
      );
      const paddingTop = await badge.evaluate((el) =>
        window.getComputedStyle(el).paddingTop
      );

      // Should have at least 12px horizontal padding (px-3 = 0.75rem = 12px)
      expect(parseInt(paddingLeft, 10)).toBeGreaterThanOrEqual(12);
      // Should have at least 6px vertical padding (py-1.5 = 0.375rem = 6px)
      expect(parseInt(paddingTop, 10)).toBeGreaterThanOrEqual(6);
    }
  });

  test("hero section fills viewport correctly", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("/");

    const hero = page.locator("section").first();
    const heroBox = await hero.boundingBox();

    if (heroBox) {
      // Hero should be close to viewport height (allowing for some variance)
      expect(heroBox.height).toBeGreaterThan(900);
    }
  });

  test("navigation links are visible and clickable", async ({ page }) => {
    await page.goto("/");

    // Check desktop navigation is visible
    const nav = page.locator("nav");
    await expect(nav).toBeVisible();

    // Check all main nav links exist
    const homeLink = page.locator('nav a[href="/"]');
    const servicesLink = page.locator('nav a[href="/services"]');
    const projectsLink = page.locator('nav a[href="/projects"]');
    const aboutLink = page.locator('nav a[href="/about"]');
    const contactLink = page.locator('nav a[href="/contact"]');

    await expect(homeLink).toBeVisible();
    await expect(servicesLink).toBeVisible();
    await expect(projectsLink).toBeVisible();
    await expect(aboutLink).toBeVisible();
    await expect(contactLink).toBeVisible();
  });

  test("pages load without errors", async ({ page }) => {
    const pages = ["/", "/services", "/projects", "/about", "/contact"];

    for (const path of pages) {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
    }
  });
});
