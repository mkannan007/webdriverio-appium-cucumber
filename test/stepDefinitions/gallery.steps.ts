import { When } from "@wdio/cucumber-framework";

import { galleryPage } from "../page/base.page.ts";

When(/^I scroll through all gallery images$/, async () => {
  for (let i = 1; i <= 9; i++) {
    await galleryPage.waitForTextView(`${i} of 9`);
    await galleryPage.swipeImage();
  }

});

When(/^I click on close button on the last image$/, async () => {
  await galleryPage.clickClose();
});
