import { Then, When } from '@wdio/cucumber-framework';

import { commonPage } from '../page/base.page.ts';

When(
  /^I scroll and tap on "(.*)" edition in "(.*)" tab$/,
  async (editionDate: string, tabName: string) => {
    await commonPage.clickTextView(tabName);
    await commonPage.scrollToTextView(editionDate);
    await commonPage.clickTextView(editionDate);
  },
);
