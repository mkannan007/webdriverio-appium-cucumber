import { When } from '@wdio/cucumber-framework';

import { commonPage } from '../page/base.page.ts';

When(
  /^I scroll to "(.*)" in Issues carousel page$/,
  async (scrollText: string) => {
    await commonPage.waitForTextView('Settings');
    await commonPage.scrollToTextView(scrollText);
  },
);

When(
  /^I scroll right to "(.*)" in Recent Issues and tap on it in Issues carousel page$/,
  async (textValue: string) => {
    await commonPage.scrollHorizontalToEnd();
    await commonPage.clickTextView(textValue);
  },
);
