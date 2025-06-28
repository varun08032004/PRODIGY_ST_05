# 🧪 Automated Checkout Flow Test Report

## 🔗 Website
[http://www.automationpractice.pl/index.php](http://www.automationpractice.pl/index.php)

---

## ✅ Test Summary

| Step                          | Status    | Notes                                                       |
|-------------------------------|-----------|-------------------------------------------------------------|
| Open homepage                 | ✅ Passed | Loaded successfully                                         |
| Click product                 | ✅ Passed | Product details opened                                      |
| Add to cart                   | ✅ Passed | Added to cart                                               |
| Proceed to checkout modal     | ✅ Passed | Transition correct                                          |
| Proceed to summary checkout   | ✅ Passed | Navigated to sign-in page                                   |
| Validate sign-in page         | ✅ Passed | Email input appeared                                        |

---

## 🧾 Issues Observed

| Severity | Description                                           | Recommended Fix                               |
|----------|-------------------------------------------------------|-----------------------------------------------|
| Medium   | Cannot proceed to payment without a registered user   | Automate a sign-up flow or add test account   |
| Low      | Modal covers cart button occasionally                 | Add modal close handler in the script         |

---

## ✅ Recommendations

- Integrate a **test user account** for full checkout  
- Add address and payment validation for end-to-end coverage  
- Add cross-browser testing with BrowserStack  
- Validate error messages for incorrect address/payment data

---

## 🧑‍💻 Author Info

- **Name:** Varun Girish Deshmukh  
- **Internship Track:** Software Testing  
- **Task Number:** 05  
- **Internship Program:** Prodigy InfoTech