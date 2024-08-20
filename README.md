# dcl-recruitment-page
This framework is going to give coverage for different features of the web application of recruitment-page

* Project description
* Project Setup
  * Pre-requisites
  * Opening the project
  * Installing dependencies and tools
  * Manual installation of dependencies

* Project execution guide
    * Run the tests
* Reports
* Git documentation

## Project setup
---------------------
### Pre-requisites: 
* Install Playwright
    npm init playwright@latest, mainly choose TypeScript and true to install browsers
	TypeScript
	true (npx playwright install)
* Install NodeJS
* Install Mocha

# Opening the project
clone repo on git clone https://github.com/daniellyluzardo/dcl-recruitment-page.git
git init

# Opening the project
### Using NPM

- Run `npm i` to install the project dependencies

### Using Yarn

- Run `yarn` to install the project dependencies

### Manual installation of dependencies:
If the `npm install` command is not working you can follow this step to install all the dependencies manually:
* Install playwright: `npm init playwright@latest`
* Install allure-command line tools `npm install @wdio/allure-reporter --save-dev` and 
`npm install -g allure-commandline --save-dev` and 
`npm install --save-dev allure-playwright` 
`npm install --save-dev @playwright/test allure-playwright`
`npx playwright test --reporter=line,allure-playwright`
* Install dotenv using: `npm i dotenv`

## Project Execution
---------------------

### Run the tests
* To run tests locally you can use: `npx playwright test`
* To run tests locally and generate reports, you can use: `npx playwright test --reporter=line,allure-playwright`

### Paralelism
* Due the nature of some tests, Ive decided to set workers to 1 at time to be able to run separatedly on each browser with less errors, you can check this worker setup on `playwright.config.ts`

### Language settings/Localization
* Sometimes the credentials provided in the Login page logs in a user that is set as a different language than english, which is the main language used to code these scripts, it is possible to set the language to english via coding adding a new test case, also it can be change via postman, but currently this feature is not in the scope so if the runs are not running correctly, check manually if the current user is set to english, if it is not, change language overall in the website > Admin > Configuration > Localization > Language dropbox > English

### Language settings/Localization
* Sometimes the credentials provided in the Login page logs in a user that doesn't have recruitment module enabled, so to be able to correctly run those to recruit a candidate > go to Admin > Configuration > Modules > Module Configuration and mark Recruitment Module true and Save, the Recruitment menu item should be displayed

## Reports
---------------------
After running `npx playwright test --reporter=line,allure-playwright` a folder named `allure-results` will be generated so to generate report you need to follow:
* To generate the reports use int terminal: `allure generate allure-results --clean`
* To open the reports you can run in terminal: `allure open ./allure-report`

## Git Documentation
* 
* To have more detailed information on allure, check: https://github.com/orgs/allure-framework/discussions/categories/questions-support