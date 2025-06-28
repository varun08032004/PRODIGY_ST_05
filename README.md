# 🛒 PRODIGY_ST_05 – Automated E-Commerce Checkout Flow

## 📌 Task Description

Automate the checkout process on an e-commerce website using any testing tool of your choice.  
Your script should:

- Add items to the cart
- Fill out checkout forms
- Verify the success message after purchase
- Validate page transitions and error messages

Document the script and note any issues encountered.

---

## ✅ Website Under Test

[http://www.automationpractice.pl/index.php](http://www.automationpractice.pl/index.php)

---

## ✅ Tools Used

- Selenium WebDriver (JavaScript)
- Node.js
- Local Chrome browser (can be extended to BrowserStack)
- Manual observation and console logs

---

## ✅ Files Included

| File                    | Description                                       |
|-------------------------|---------------------------------------------------|
| `checkout_test.js`      | Selenium test script for checkout automation      |
| `Checkout_Test_Report.md` | Markdown report summarizing test results/issues |
| `README.md`             | Overview and project documentation                |

---

## ✅ How to Run

1. Install dependencies:  
```bash
npm install selenium-webdriver
node checkout_test.js
