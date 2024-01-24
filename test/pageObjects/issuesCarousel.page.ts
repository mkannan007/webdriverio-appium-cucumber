import { $ } from '@wdio/globals';

export class IssuesCarouselPage {
  // Elements
  private textView(textValue: string): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().text("TextValue").className("android.widget.TextView")'.replace(
        'TextValue',
        textValue,
      ),
    );
  }

  private scrollText(textValue: string): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiScrollable(new UiSelector().className("android.widget.ScrollView").scrollable(true)).scrollTextIntoView("TextValue")'.replace(
        'TextValue',
        textValue,
      ),
    );
  }

  private get swipeHorizontal(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollToEnd(20)',
    );
  }

  // Methods
  public async waitForPageText(textValue: string): Promise<void> {
    (await this.textView(textValue)).waitForDisplayed();
  }

  public async clickTextView(textValue: string): Promise<void> {
    (await this.textView(textValue)).waitForDisplayed();
    (await this.textView(textValue)).click();
  }

  public async scrollToText(scrollText: string): Promise<void> {
    (await this.scrollText(scrollText)).waitForDisplayed();
  }

  public async scrollToEnd(): Promise<void> {
    (await this.swipeHorizontal).waitForDisplayed();
  }
}
