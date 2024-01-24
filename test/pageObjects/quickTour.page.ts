import { $ } from '@wdio/globals'

export class QuickTourPage {
    // private get continue(): Promise<WebdriverIO.Element> {
    //     return $('android=new UiSelector().text("Continue").className("android.widget.TextView")');
    // }

    private textView(textValue: string): Promise<WebdriverIO.Element> {
        return $(
          'android=new UiSelector().text("TextValue").className("android.widget.TextView")'.replace(
            "TextValue",
            textValue
          )
        );
      }

    public async waitForPageText(textValue: string): Promise<void> {
        (await this.textView(textValue)).waitForDisplayed();
    }

    public async clickTextView(textValue: string): Promise<void> {
        (await this.textView(textValue)).waitForDisplayed();
        (await this.textView(textValue)).click();
    }
}
