# Cypress Demo with Azure Pipeline

## Table of contents

- [Cypress Demo with Azure Pipeline
](#cypress-demo-with-azure-pipeline
)
- [Table of contents](#table-of-contents)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Plugins](#plugins)

## Prerequisites

Before you begin, ensure you have met the following requirements:

* Install [Node.js](https://nodejs.org/en/download/) (version 12 or above) and **npm** (version 6.9 or above) (*NOTE: npm is installed as part of Node*)
    - You can execute the command _`node --version`_ in order to check if you have `Node.js` installed and what number version
    - You can execute the command _`npm --version`_ in order to check if you have `npm` installed and what number version

## Installation

To install this project follow these steps:

```
npm install
```

## Usage

_**Note:** Headless Browsers are those which actually access the Web Page, but the GUI is hidden from the user_

- **Run all automated tests with headless browser in QA environment**

```
npm run cypress:qa-tests
```



## Plugins

The following plugins are installed after you execute the command _`npm install`_. This project is currently using [Cypress](https://github.com/cypress-io/cypress/blob/develop/README.md) and extended with the plugins.

|Plugin|README|
|:------:|:------:|
| cypress-xpath | https://github.com/cypress-io/cypress-xpath/blob/master/README.md |
| junit-report-merger | https://github.com/bhovhannes/junit-report-merger#readme |
