

# Automated Tests – Playwright + TypeScript

This project contains automated **API tests** (GoRest API) and **UI tests** (nopCommerce demo store) using **Playwright with TypeScript**.

---

## ✅ Prerequisites

Before running the tests, make sure you have:

- **Node.js** (version 24 recommended)
    
- **npm**
    
- **Playwright browsers installed**
    

Install Playwright browsers:

`npx playwright install`

Install project dependencies:

`npm install`

---

## 🚀 How to Run the Tests

### Run all tests

`npx playwright test`

### Run only API tests

`npx playwright test tests/api`

### Run only UI tests

`npx playwright test tests/ui`

### View the Playwright HTML report

`npx playwright show-report`

---

## 🏗 Test Design Overview

### 🔌 API Tests (GoRest)

The API test suite covers a complete CRUD flow:

1. **Create a new user**
    
2. **Create a new blog post for the user**
    
3. **Read and verify the blog post**
    
4. **Update the post (PATCH + PUT)**
    
5. **Delete the post**
    
6. **Verify deletion (expect 404)**
    
---

### 🖥 UI Tests (nopCommerce Demo Store)

The UI test flow:

1. Navigate to the homepage
    
2. Search for a product: **“Apple MacBook Pro”**
    
3. Click the product in the search results
    
4. Verify the product detail page
    

---

## 🔮 Future Improvements  
I would refactor the project to follow stronger architectural patterns, such as:

- Introducing interfaces and abstractions to avoid depending directly on Playwright’s APIRequestContext.  
- Creating a proper service layer for the API tests using dependency injection.  
- Improving typing across the suite (request/response models, domain objects, and DTOs).  
- Expanding the Page Object Model with components and a cleaner PageManager.  
- Adding custom fixtures for shared state, test data setup, and teardown.  
- Implementing a test data factory to centralize payload generation.  

---

#### Notes: I did not move forward with UI tests because cloud flair was blocking me