import { When } from "@wdio/cucumber-framework";

import { issuesCarouselPage} from "../page/base.page.ts";

When(/^I scroll to "(.*)" in Issues carousel page$/, async (scrollText: string) => {
    await issuesCarouselPage.waitForPageText("Settings");
    await issuesCarouselPage.scrollToText(scrollText);
});

When(/^I scroll right to "(.*)" in Recent Issues and tap on it in Issues carousel page$/, async (textValue: string) => {
  await issuesCarouselPage.scrollToEnd();
  await issuesCarouselPage.clickTextView(textValue);
});
