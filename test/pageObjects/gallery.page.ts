import { $ } from '@wdio/globals';

export class GalleryPage {
  // Elements
  private textView(textValue: string): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().text("textValue").className("android.widget.TextView")'.replace(
        'textValue',
        textValue,
      ),
    );
  }

  private get imageView(): Promise<WebdriverIO.Element> {
    return $('android=new UiSelector().className("android.widget.ImageView")');
  }

  private get close(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().text("Close").className("android.widget.TextView")',
    );
  }

  // Methods
  public async swipeImage(): Promise<void> {
    await driver.execute('mobile: swipeGesture', {
      elementId: await this.imageView,
      direction: 'left',
      percent: 0.5,
      speed: 1000,
    });
  }

  public async waitForTextView(textValue: string): Promise<void> {
    (await this.textView(textValue)).waitForDisplayed();
  }

  public async clickClose(): Promise<void> {
    (await this.close).waitForDisplayed();
    (await this.close).click();
  }
}
