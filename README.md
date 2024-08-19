# dcl-recruitment-page
This framework is going to give coverage for different features of the web application of recruitment-page

# to run all test spec run playwright will start the web server automatically.
npm run test

* Project description
* Project Setup
  * Pre-requisites
  * Opening the project
  * Installing dependencies and tools
  * Manual installation of dependencies

* Project execution guide
    * Run the tests
* Reports
* Locating elements
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
* Install Jest

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
* Install allure-command line tools `npm install @wdio/allure-reporter --save-dev` and `npm install -g allure-commandline --save-dev`
* Install dotenv using: `npm i dotenv`

## Project Execution
---------------------

### Run the tests
* To run tests locally you can use: `npx playwright test`

## Reports
---------------------
After running `npm run test` a folder named `allure-results` will be generated so to generate report you need to follow:
* To generate the reports use int terminal: `allure generate allure-results --clean`
* To open the reports you can run in terminal: `allure open`
