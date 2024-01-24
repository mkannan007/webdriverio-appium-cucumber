import { $ } from '@wdio/globals';

export class DownloadedEditionFrontPage {
  // Elements
  private get frontPage(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().className("android.widget.HorizontalScrollView").childSelector(new UiSelector().className("android.widget.TextView").text("Front page"))',
    );
  }

  private swipeHorizontal(steps: string): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiScrollable(new UiSelector().className("androidx.viewpager.widget.ViewPager").scrollable(true)).setAsHorizontalList().scrollToEnd(stepValue)'.replace(
        'stepValue',
        steps.replace(/"/g, ''),
      ),
    );
  }

  private textView(textValue: string): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().textContains("textValue").className("android.widget.TextView")'.replace(
        'textValue',
        textValue,
      ),
    );
  }

  private get sectionsMenu(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().className("android.view.ViewGroup").description("Tap me to open the sections menu")',
    );
  }

  // Methods
  public async waitForPageText(textValue: string): Promise<void> {
    (await this.textView(textValue)).waitForDisplayed();
  }

  public async isPageTextDisplayed(textValue: string): Promise<boolean> {
    return (await this.textView(textValue)).isDisplayed();
  }

  public async clickFrontPageTab(): Promise<void> {
    (await this.frontPage).click();
  }

  public async isSectionsMenuEnabled(): Promise<boolean> {
    return (await this.sectionsMenu).isEnabled();
  }

  public async scrollHorizontal(steps: string): Promise<void> {
    (await this.swipeHorizontal(steps)).waitForDisplayed();
  }
}
