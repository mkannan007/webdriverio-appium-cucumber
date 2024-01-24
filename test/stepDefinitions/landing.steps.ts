import { Given } from '@wdio/cucumber-framework';

Given(/^I launch the app$/, async () => {
  await driver.waitUntil(async () => {
    const contexts = await driver.getContexts();
    return contexts.length > 1;
  });

  await driver.dismissAlert();
});
