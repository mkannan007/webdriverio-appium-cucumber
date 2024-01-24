import { When } from '@wdio/cucumber-framework';

import { commonPage, subscriptionSignInPage } from '../page/base.page.ts';

When(
  /^I "(.*)" with valid credentials on the paywall carousel$/,
  async (textValue: string) => {
    await commonPage.doubleClickTextView(textValue);

    if (
      (await subscriptionSignInPage.isAcceptAndContinueDisplayed()) === true
    ) {
      await subscriptionSignInPage.clickAcceptAndContinue();
    }

    if ((await subscriptionSignInPage.isNoThanksDisplayed()) === true) {
      await subscriptionSignInPage.clickNoThanks();
    }

    await commonPage.waitForText('Sign in to your Mail account');
    await subscriptionSignInPage.enterEmail('mailqatest94@gmail.com');
    await subscriptionSignInPage.enterPassword('World123!');
    await subscriptionSignInPage.clickSignInButton();
  },
);
