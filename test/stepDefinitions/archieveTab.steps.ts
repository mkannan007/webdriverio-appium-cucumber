import { Then, When } from '@wdio/cucumber-framework';

import { archiveTabPage } from '../page/base.page.ts';

When(
  /^I scroll and tap on "(.*)" edition in Archive tab$/,
  async (editionDate: string) => {
    await archiveTabPage.clickArchiveTab();
    await archiveTabPage.scrollToTextValue(editionDate);
    await archiveTabPage.clickTextView(editionDate);
  },
);
