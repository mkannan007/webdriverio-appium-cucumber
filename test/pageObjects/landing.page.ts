import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class LandingPage {
    private get failoverText(): Promise<WebdriverIO.Element> {
        return $('android=new UiSelector().textContains("Failover").className("android.widget.TextView")');
    }

    private get failoverClose(): Promise<WebdriverIO.Element> {
        // return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]');
    return $('android=new UiSelector().textContains("This is a failover test").fromParent(new UiSelector().className("android.view.ViewGroup"))');
    }

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
