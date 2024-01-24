import { Given, Then, When } from '@wdio/cucumber-framework';

import { commonPage, frontPageTab, failOverBanner } from '../page/base.page.ts';

const setTimeoutSeconds = (seconds: number) => {
  const currentDate = new Date();

  return new Date(currentDate.setSeconds(currentDate.getSeconds() + seconds));
};

Then(
  /^I should wait for "(.*)" edition download to complete on Front page tab$/,
  async (editionDate: string) => {
    const timeout: Date = setTimeoutSeconds(60 * 1000 * 3);

    do {
      if (new Date() > timeout) {
        throw new Error(
          'Downloading edition timed out. Please check the network connection and try again.',
        );
      }
    } while ((await frontPageTab.isSectionsMenuEnabled()) === false);

    await failOverBanner.clickFailoverCloseBanner();

    expect(await frontPageTab.isSectionsMenuEnabled()).toBe(true);
    expect(await commonPage.isTextViewDisplayed(editionDate)).toBe(true);
  },
);

Given(
  /^I am on the "(.*)" on "(.*)" tab$/,
  async (editionDate: string, tabName: string) => {
    await commonPage.waitForTextContainsView(editionDate);
    await commonPage.waitForTextContainsView(tabName);
  },
);

Given(/^I scroll to page (\d+) of the news page$/, async (page: number) => {
  await frontPageTab.scrollHorizontal(`"${page - 1}"`);
});
