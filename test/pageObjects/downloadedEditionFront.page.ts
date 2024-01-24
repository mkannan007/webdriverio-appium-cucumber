import { $ } from "@wdio/globals";

export class DownloadedEditionFrontPage {
  private get frontPage(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().className("android.widget.HorizontalScrollView").childSelector(new UiSelector().className("android.widget.TextView").text("Front page"))'
    );
  }

  private swipeHorizontal(steps: string): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiScrollable(new UiSelector().className("androidx.viewpager.widget.ViewPager").scrollable(true)).setAsHorizontalList().scrollToEnd(stepValue)'.replace(
        "stepValue",
        steps.replace(/"/g, "")
      )
    );
  }

  private textView(textValue: string): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().textContains("textValue").className("android.widget.TextView")'.replace(
        "textValue",
        textValue
      )
    );
  }

  private get downloadBar(): Promise<WebdriverIO.Element> {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup[2]'
    );
  }

  private get sectionsMenu(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().className("android.view.ViewGroup").description("Tap me to open the sections menu")'
    );
  }

  public async waitForPageText(textValue: string): Promise<void> {
    (await this.textView(textValue)).waitForDisplayed();
  }

  public async isPageTextDisplayed(textValue: string): Promise<boolean> {
    return (await this.textView(textValue)).isDisplayed();
  }

  public async clickFrontPageTab(): Promise<void> {
    (await this.frontPage).click();
  }

  public async waitForDownloadProgressBar(): Promise<void> {
    (await this.downloadBar).waitForDisplayed();
  }

  public async isDownloadProgressBarNotDisplayed(): Promise<boolean> {
    return (await this.downloadBar).isDisplayed();
  }

  public async isSectionsMenuEnabled(): Promise<boolean> {
    return (await this.sectionsMenu).isEnabled();
  }

  public async scrollHorizontal(steps: string): Promise<void> {
    (await this.swipeHorizontal(steps)).waitForDisplayed();
  }
}
