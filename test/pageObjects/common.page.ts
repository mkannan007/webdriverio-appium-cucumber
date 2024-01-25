import { $ } from '@wdio/globals';

export class CommonPage {
  protected locators: {
    text: string;
    textContains: string;
    textView: string;
    textContainsView: string;
    buttonText: string;
    scrollText: string;
    scrollHorizontal: string;
  };

  constructor() {
    this.locators = {
      text: 'android=new UiSelector().text("textValue")',
      textContains: 'android=new UiSelector().textContains("textValue")',
      textView:
        'android=new UiSelector().text("textValue").className("android.widget.TextView")',
      textContainsView:
        'android=new UiSelector().textContains("textValue").className("android.widget.TextView")',
      buttonText:
        'android=new UiSelector().text("buttonText").className("android.widget.Button")',
      scrollText:
        'android=new UiScrollable(new UiSelector().className("android.widget.ScrollView").scrollable(true)).scrollTextIntoView("textValue")',
      scrollHorizontal:
        'android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollToEnd(20)',
    };
  }

  // Elements
  private text(textValue: string): Promise<WebdriverIO.Element> {
    return $(this.locators.text.replace('textValue', textValue));
  }

  private textContains(textValue: string): Promise<WebdriverIO.Element> {
    return $(this.locators.textContains.replace('textValue', textValue));
  }

  private textView(textValue: string): Promise<WebdriverIO.Element> {
    return $(this.locators.textView.replace('textValue', textValue));
  }

  private textContainsView(textValue: string): Promise<WebdriverIO.Element> {
    return $(this.locators.textContainsView.replace('textValue', textValue));
  }

  private buttonText(buttonText: string): Promise<WebdriverIO.Element> {
    return $(this.locators.buttonText.replace('buttonText', buttonText));
  }

  private scrollText(textValue: string): Promise<WebdriverIO.Element> {
    return $(this.locators.scrollText.replace('textValue', textValue));
  }

  private get swipeHorizontal(): Promise<WebdriverIO.Element> {
    return $(this.locators.scrollHorizontal);
  }

  // Methods
  public async waitForText(textValue: string): Promise<void> {
    (await this.text(textValue)).waitForDisplayed();
  }

  public async clickText(textValue: string): Promise<void> {
    (await this.text(textValue)).waitForDisplayed();
    (await this.text(textValue)).click();
  }

  public async isTextViewDisplayed(textValue: string): Promise<boolean> {
    return (await this.textView(textValue)).isDisplayed();
  }

  public async waitForTextContains(textValue: string): Promise<void> {
    (await this.textContains(textValue)).waitForDisplayed();
  }

  public async clickTextContains(textValue: string): Promise<void> {
    (await this.textContains(textValue)).waitForDisplayed();
    (await this.textContains(textValue)).click();
  }

  public async isTextContainsDisplayed(textValue: string): Promise<boolean> {
    return (await this.textContains(textValue)).isDisplayed();
  }

  public async waitForTextView(textValue: string): Promise<void> {
    (await this.textView(textValue)).waitForDisplayed();
  }

  public async clickTextView(textValue: string): Promise<void> {
    (await this.textView(textValue)).waitForDisplayed();
    (await this.textView(textValue)).click();
  }

  public async waitForTextContainsView(textValue: string): Promise<void> {
    (await this.textContainsView(textValue)).waitForDisplayed();
  }

  public async clickTextContainsView(textValue: string): Promise<void> {
    (await this.textContainsView(textValue)).waitForDisplayed();
    (await this.textContainsView(textValue)).click();
  }

  public async doubleClickTextView(textValue: string): Promise<void> {
    await driver.execute('mobile: doubleClickGesture', {
      elementId: await this.textView(textValue),
    });
  }

  public async isButtonTextDisplayed(buttonText: string): Promise<boolean> {
    return (await this.buttonText(buttonText)).isDisplayed();
  }

  public async clickButtonText(buttonText: string): Promise<void> {
    (await this.buttonText(buttonText)).waitForDisplayed();
    (await this.buttonText(buttonText)).click();
  }

  public async scrollToTextView(scrollText: string): Promise<void> {
    (await this.scrollText(scrollText)).waitForDisplayed();
  }

  public async scrollHorizontalToEnd(): Promise<void> {
    (await this.swipeHorizontal).waitForDisplayed();
  }
}
