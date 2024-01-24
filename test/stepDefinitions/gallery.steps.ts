import { When } from '@wdio/cucumber-framework';

import { commonPage, galleryPage } from '../page/base.page.ts';

When(/^I scroll through all gallery images$/, async () => {
  for (let i = 1; i <= 9; i++) {
    await commonPage.waitForTextContains(`${i} of 9`);
    await galleryPage.swipeImage();
  }
});

When(
  /^I click on "(.*)" button on the last image$/,
  async (buttonName: string) => {
    await commonPage.clickTextContainsView(buttonName);
  },
);
