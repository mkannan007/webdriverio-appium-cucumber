import { Given } from '@wdio/cucumber-framework';

import { landingPage, quickTourPage } from '../page/base.page.ts';

Given(/^I navigate to issues home page$/, async () => {
  await landingPage.waitForFailoverBannerText();
  await landingPage.clickFailoverCloseBanner();

  let stepContext = 'Step 1 of 5';

  for (let i = 1; i <= 5; i++) {
    stepContext = `Step ${i} of 5`;
    const stepContextElement = await $(
      `android=new UiSelector().textContains("${stepContext}").className("android.widget.TextView")`,
    );

    await stepContextElement.waitForDisplayed();

    // await quickTourPage.waitForPageText(stepContext);
    await quickTourPage.clickTextView('Continue');
    await driver.pause(2000);
  }
});
