import { Then, When } from '@wdio/cucumber-framework';

import { commonPage, downloadedEditionNewsPage } from '../page/base.page.ts';

When(
  /^I tap on the article image on the news "(.*)" page$/,
  async (paginationValue: string) => {
    await commonPage.waitForTextContainsView(paginationValue);
    await downloadedEditionNewsPage.clickImageLinearLayout();
  },
);

When(
  /^I tap on the image to open full screen on "(.*)" ALB story "(.*)" page$/,
  async (articleName: string, paginationValue: string) => {
    await commonPage.waitForTextContainsView(paginationValue);
    await commonPage.waitForTextContains(articleName);
    await downloadedEditionNewsPage.clickGalleryViewer();
  },
);

Then(
  /^I should return to "(.*)" ALB story "(.*)" page$/,
  async (articleName: string, paginationValue: string) => {
    await commonPage.waitForTextContainsView(paginationValue);
    await commonPage.waitForTextContains(articleName);

    expect(await commonPage.isTextContainsDisplayed(articleName)).toEqual(true);
  },
);
