import { $ } from "@wdio/globals";

export class ArchiveTabPage {
  //   protected appSelectors: {
  //     archive: string;
  //     scrollEdition: string;
  //   };

  //   constructor() {
  //     this.appSelectors = {
  //         archive:
  //         'android=new UiSelector().text("Archive").className("android.widget.TextView")',
  //       scrollEdition:
  //         'android=new UiScrollable(new UiSelector().className("android.widget.ScrollView").scrollable(true)).scrollTextIntoView(editionToSearch)',
  //     };
  //   }

  private get archiveTab(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().text("Archive").className("android.widget.TextView")'
    );
  }

  private scrollToText(textValue: string): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiScrollable(new UiSelector().className("android.widget.ScrollView").scrollable(true)).scrollTextIntoView("Textvalue")'.replace(
        "Textvalue",
        textValue
      )
    );
  }

  private textView(textValue: string): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().text("TextValue").className("android.widget.TextView")'.replace(
        "TextValue",
        textValue
      )
    );
  }

  public async clickArchiveTab(): Promise<void> {
    (await this.archiveTab).waitForDisplayed();
    (await this.archiveTab).click();
  }

  public async scrollToTextValue(dateValue: string): Promise<void> {
    (await this.scrollToText(dateValue)).waitForDisplayed();
  }

  public async clickTextView(editionDate: string): Promise<void> {
    (await this.textView(editionDate)).waitForDisplayed();
    (await this.textView(editionDate)).click();
  }
}
