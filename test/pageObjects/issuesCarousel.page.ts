import { $ } from "@wdio/globals";

export class IssuesCarouselPage {
  private textView(textValue: string): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().text("TextValue").className("android.widget.TextView")'.replace(
        "TextValue",
        textValue
      )
    );
  }

  // private get settingsLabel(): Promise<WebdriverIO.Element> {
  //   return $(
  //     'android=new UiSelector().text("Settings").className("android.widget.TextView")'
  //   );
  // }

  private scrollText(textValue: string): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiScrollable(new UiSelector().className("android.widget.ScrollView").scrollable(true)).scrollTextIntoView("TextValue")'.replace(
        "TextValue",
        textValue
      )
    );
  }

  // private get recentIssuesLabel(): Promise<WebdriverIO.Element> {
  //   return $(
  //     'android=new UiSelector().text("Recent issues").className("android.widget.TextView")'
  //   );
  // }

  private get swipeHorizontal(): Promise<WebdriverIO.Element> {
    return $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollToEnd(20)"
    );
  }

  // private get seemoreLabel(): Promise<WebdriverIO.Element> {
  //   return $(
  //     'android=new UiSelector().text("SEE MORE").className("android.widget.TextView")'
  //   );
  // }

  public async waitForPageText(textValue: string): Promise<void> {
    (await this.textView(textValue)).waitForDisplayed();
  }

  public async clickTextView(textValue: string): Promise<void> {
    (await this.textView(textValue)).waitForDisplayed();
    (await this.textView(textValue)).click();
  }
  // public async waitForLatestIssues() {
  //   (await this.latestIssue).waitForDisplayed();
  // }

  // public async waitForSettingsLabel(): Promise<void> {
  //   (await this.settingsLabel).waitForDisplayed();
  //   await driver.pause(2000);
  // }

  public async scrollToText(scrollText: string): Promise<void> {
    // (await this.textView(scrollText)).waitForDisplayed();
    (await this.scrollText(scrollText)).waitForDisplayed();
  }

  public async scrollToEnd(): Promise<void> {
    (await this.swipeHorizontal).waitForDisplayed();
  }
}
