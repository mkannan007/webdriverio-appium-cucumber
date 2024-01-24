import { $ } from '@wdio/globals';

export class LandingPage {
  // Elements
  private get failoverText(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().textContains("Failover").className("android.widget.TextView")',
    );
  }

  private get failoverClose(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().textContains("This is a failover test").fromParent(new UiSelector().className("android.view.ViewGroup"))',
    );
  }

  // Methods
  public async waitForFailoverBannerText(): Promise<void> {
    (await this.failoverText).waitForDisplayed();
  }

  public async isFailoverBannerDisplayed(): Promise<boolean> {
    await this.failoverText.then((element) => {
      return element.isDisplayed();
    });
    return false;
  }

  public async clickFailoverCloseBanner(): Promise<void> {
    (await this.failoverClose).click();
  }
}
