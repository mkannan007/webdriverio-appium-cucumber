# Please follow the below steps to Run in Browserstack
Update wdio.conf.ts with the following
1. Include browserstack `user, key`
2. Include `services: [["browserstack", { browserstackLocal: true }]],`
3. `capabilities --> appium:app` with the uploaded bs id

Follow the below expect setting Android Virtual Device

# Please follow the below steps to run this in your local machine

## Installation 
1. Download and Install Latest NodeJs **[Download link](https://nodejs.org/en)** or through package manager [Download link](https://nodejs.org/en/download/package-manager)
2. Download and Install Latest Visual Studio Code **[Download link](https://code.visualstudio.com/)** and **[Setup Guide](https://code.visualstudio.com/docs/setup/setup-overview)**
3. Download and Install Latest Android Studio and set environment variables **[Download link](https://developer.android.com/studio)** and **[Installation Guide](https://developer.android.com/codelabs/basic-android-kotlin-compose-install-android-studio?hl=en#2)**
4. Download and Install latest Java and set environment variables **[Download link](https://www.oracle.com/java/technologies/downloads/)** and **[Installation Guide](https://docs.oracle.com/en/java/javase/21/install/overview-jdk-installation.html#GUID-8677A77F-231A-40F7-98B9-1FD0B48C346A)**
5. Download and Install latest Git **[Download link](https://git-scm.com/downloads)** and **[Ref Guide](https://git-scm.com/docs)**
6. Clone this GitHub repository in your local machine **[Ref link](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)**

## Setup and Run Android Virtual device
1. Create and Run Google Pixel 6 Pro Android Version 12 **[Ref link](https://developer.android.com/studio/run/managing-avds)**
   
### Open Terminal 
1. Open Visual Studio code
2. Open the cloned project folder (`File  --> Open Folder`)
3. Open the terminal (`Terminal --> New Terminal`)
4. Run the following commands in the terminal

### Check virtual devices
`abd devices`

### Check Node installation
`node --version` 
`npm --version`

### Install Package Dependencies
`npm install`

### To Run the test
`npm run wdio`

## To see the html report after the test execution

- `Project Explorer --> test --> target`
- Open `index.html` in any browser

![image](https://github.com/mkannan007/webdriverio-appium-cucumber/assets/37662555/81c298cf-5a45-42c6-897e-9d4ebf1b917f)

## Cucumber HTML Report Generated
![image](https://github.com/mkannan007/webdriverio-appium-cucumber/assets/37662555/feb54810-fd29-4131-ae18-abcde253bca4)

## To View Test step screenshot for each scenario
`Click Feature Name link --> Click Scenario to expand --> Click Screenshot link of each step`

![screencapture-file-C-Users-mkannan007-test-projects-webdriverio-appium-cucumber-test-target-features-25ca83a3-2ab4-478e-9f32-095a4bbe5972-newspaper-edition-download-html-2024-01-25-13_16_31](https://github.com/mkannan007/webdriverio-appium-cucumber/assets/37662555/06f29789-e62e-4bf5-95aa-96b00d1c7692)

## Project Folder Structure

1. The code for the base config files are maintained under the `test/config` directory
2. The test scenarios for the feature files are maintained under the `test/features` directory
3. The code for the base page is maintained under the `test/page` directory
4. The code for the page wise object repositories are maintained under the `test/pageObjects` directory
5. The code for the scenario step implementaions are maintained under the `test/stepDefinitions` directory
6. The outcome of the test execution and cucumber html report will under the `test/target` directory
7. The webdriverio config file `wdio.conf.ts`, `tsconfig.json` and the formatter `prettierrc` are maintained in the root
