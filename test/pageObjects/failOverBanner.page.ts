import { $ } from '@wdio/globals';

export class FailOverBannerPage {
  // Elements
  private get failoverClose(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().textContains("This is a failover test").fromParent(new UiSelector().className("android.view.ViewGroup"))',
    );
  }

  // Methods
  public async clickFailoverCloseBanner(): Promise<void> {
    (await this.failoverClose).click();
  }
}
