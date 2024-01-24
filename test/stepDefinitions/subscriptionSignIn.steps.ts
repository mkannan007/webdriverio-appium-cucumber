import { When } from '@wdio/cucumber-framework';

import { commonPage, subscriptionSignInPage } from '../page/base.page.ts';
import * as BASE_CONFIG from '../config/base.config.ts';

When(
  /^I "(.*)" with valid credentials on the paywall carousel$/,
  async (textValue: string) => {
    await commonPage.doubleClickTextView(textValue);

    if (
      (await commonPage.isButtonTextDisplayed(
        BASE_CONFIG.ACCEPT_AND_CONTINUE_BUTTON_TEXT,
      )) === true
    ) {
      await commonPage.clickButtonText(
        BASE_CONFIG.ACCEPT_AND_CONTINUE_BUTTON_TEXT,
      );
    }

    if (
      (await commonPage.isButtonTextDisplayed(
        BASE_CONFIG.NO_THANKS_BUTTON_TEXT,
      )) === true
    ) {
      await commonPage.clickButtonText(BASE_CONFIG.NO_THANKS_BUTTON_TEXT);
    }

    await commonPage.waitForText(BASE_CONFIG.SUBSCRIPTION_PAGE_HEADER_TEXT);
    await subscriptionSignInPage.enterEmail(
      BASE_CONFIG.SUBSCRIPTION_EMAIL_USER_NAME,
    );
    await subscriptionSignInPage.enterPassword(
      BASE_CONFIG.SUBSCRIPTION_EMAIL_PASSWORD,
    );
    await commonPage.clickButtonText(textValue);
  },
);
