"# Playwright_testsScripts" 

Dependencies Required
Node.js: Required to run JavaScript on the server-side. It includes NPM (Node Package Manager), which we’ll use to install other dependencies.
Playwright: The main library for browser automation.

@playwright/test: Provides additional testing features if you’re running tests with Playwright’s test runner.

Step-by-Step Installation Guide
Step 1: Install Node.js
Download Node.js from the official website.

Install Node.js by following the installation wizard.

Verify Installation: Open a terminal or command prompt and run:

node -v
npm -v  //This should show the versions of Node.js and npm.

Step 2: Set Up the Project Directory
Create a new directory for your project: Playwright_testScript.

Navigate to the directory in the terminal

Initialize the Node.js project by running:
npm init -y {This will create a package.json file in your project directory.}

Step 3: Install Playwright and Other Dependencies

Install Playwright:
npm install playwright {This will add Playwright to your project’s dependencies in package.json.}

Install the required browsers (Chromium, Firefox) that Playwright uses:
npx playwright install {This command will download the necessary browser for testing.}

To Run Tests
node .\TestCase1.js   
node .\TestCase2.js   
node .\TestCase3.js   






