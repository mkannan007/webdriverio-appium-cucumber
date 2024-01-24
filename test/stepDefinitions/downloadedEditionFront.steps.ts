import { Given, Then, When } from '@wdio/cucumber-framework';

import { downloadedEditionFrontPage, landingPage } from '../page/base.page.ts';

const setTimeoutSeconds = (seconds: number) => {
  const currentDate = new Date();

  return new Date(currentDate.setSeconds(currentDate.getSeconds() + seconds));
};

Then(
  /^I should wait for "(.*)" edition download to complete on Front page tab$/,
  async (editionDate: string) => {
    const timeout: Date = setTimeoutSeconds(60 * 1000 * 3);
    await downloadedEditionFrontPage.waitForDownloadProgressBar();

    // do {
    //   if (new Date() > timeout) {
    //     throw new Error(
    //       "Downloading edition timed out. Please check the network connection and try again."
    //     );
    //   }
    //   console.log(
    //     `Waiting for download to complete ${await downloadedEditionFrontPage.isDownloadProgressBarNotDisplayed()}`
    //   );
    //   await driver.pause(3000);
    // } while (
    //   (await downloadedEditionFrontPage.isDownloadProgressBarNotDisplayed()) ===
    //   true
    // );

    // await landingPage.clickFailoverCloseBanner();
    // const downloadEditionProgressBarStatus: boolean =
    //   await downloadedEditionFrontPage.isDownloadProgressBarNotDisplayed();
    // expect(downloadEditionProgressBarStatus).toBe(false);

    do {
      if (new Date() > timeout) {
        throw new Error(
          'Downloading edition timed out. Please check the network connection and try again.',
        );
      }
      // await driver.pause(3000);
    } while (
      (await downloadedEditionFrontPage.isSectionsMenuEnabled()) === false
    );

    await landingPage.clickFailoverCloseBanner();
    // const sectionMenuStatus: boolean =
    //   await downloadedEditionFrontPage.isSectionsMenuEnabled();

    expect(await downloadedEditionFrontPage.isSectionsMenuEnabled()).toBe(true);
    expect(
      await downloadedEditionFrontPage.isPageTextDisplayed(editionDate),
    ).toBe(true);
  },
);

Given(
  /^I am on the "(.*)" on "(.*)" tab$/,
  async (editionDate: string, tabName: string) => {
    await downloadedEditionFrontPage.waitForPageText(editionDate);
    await downloadedEditionFrontPage.waitForPageText(tabName);
  },
);

Given(/^I scroll to page (\d+) of the news page$/, async (page: number) => {
  await downloadedEditionFrontPage.scrollHorizontal(`"${page - 1}"`);
});
