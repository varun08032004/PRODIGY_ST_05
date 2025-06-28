const { Builder, By, until } = require('selenium-webdriver');

async function runCheckoutTest() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://www.automationpractice.pl/index.php');

    // Click the first product
    await driver.findElement(By.css('.product_img_link')).click();

    // Add to cart
    await driver.wait(until.elementLocated(By.name('Submit')), 10000);
    await driver.findElement(By.name('Submit')).click();

    // Proceed to checkout from modal
    await driver.wait(until.elementLocated(By.css('a.btn.btn-default.button.button-medium')), 10000);
    await driver.findElement(By.css('a.btn.btn-default.button.button-medium')).click();

    // Proceed to summary
    await driver.wait(until.elementLocated(By.css('.standard-checkout')), 10000);
    await driver.findElement(By.css('.standard-checkout')).click();

    // Wait for the sign-in page
    await driver.wait(until.elementLocated(By.id('email')), 10000);
    console.log("✅ Sign-in page loaded successfully.");

  } catch (err) {
    console.error("❌ Test failed:", err);
  } finally {
    await driver.quit();
  }
}

runCheckoutTest();
