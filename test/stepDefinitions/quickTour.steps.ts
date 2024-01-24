import { Given } from '@wdio/cucumber-framework';

import { commonPage, failOverBanner } from '../page/base.page.ts';

Given(
  /^I click "(.*)" button to navigate issues home page$/,
  async (buttonName) => {
    if (await commonPage.isTextViewDisplayed('Failover')) {
      await failOverBanner.clickFailoverCloseBanner();
    }

    let stepContext = 'Step 1 of 5';

    for (let i = 1; i <= 5; i++) {
      stepContext = `Step ${i} of 5`;

      await commonPage.waitForTextContainsView(stepContext);
      await commonPage.clickTextView(buttonName);
      await driver.pause(2000);
    }
  },
);
