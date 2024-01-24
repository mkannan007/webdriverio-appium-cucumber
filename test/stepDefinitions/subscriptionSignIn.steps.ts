import { When } from "@wdio/cucumber-framework";

import { subscriptionSignInPage} from "../page/base.page.ts";

When(/^I "(.*)" with valid credentials on the paywall carousel$/, async (textValue: string) => {
  await subscriptionSignInPage.clickTextView(textValue);

  if (await subscriptionSignInPage.isAcceptAndContinueDisplayed() === true) {
    await subscriptionSignInPage.clickAcceptAndContinue();
  }

  if (await subscriptionSignInPage.isNoThanksDisplayed() === true) {
    await subscriptionSignInPage.clickNoThanks();
  }

  await subscriptionSignInPage.waitForSignInToMailText();
  await subscriptionSignInPage.enterEmail("mailqatest94@gmail.com");
  await subscriptionSignInPage.enterPassword("World123!");
  await subscriptionSignInPage.clickSignInButton();
});
