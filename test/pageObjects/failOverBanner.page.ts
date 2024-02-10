import { $ } from '@wdio/globals';

export class FailOverBanner {
  // Elements
  private get failoverClose(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().textContains("This is a failover test").fromParent(new UiSelector().className("android.view.ViewGroup"))',
    );
  }

  // Methods
  public async clickFailoverCloseBanner(): Promise<void> {
    await (await this.failoverClose).waitForDisplayed();
    (await this.failoverClose).click();
  }
}
