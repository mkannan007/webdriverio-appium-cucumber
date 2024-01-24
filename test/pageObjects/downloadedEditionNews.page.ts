import { $ } from '@wdio/globals';

export class DownloadedEditionNewsPage {
  // Elements
  private get newsTab(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().className("android.widget.HorizontalScrollView").childSelector(new UiSelector().text("News").className("android.widget.TextView"))',
    );
  }

  private textView(textValue: string): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().text("textValue").className("android.widget.TextView")'.replace(
        'textValue',
        textValue,
      ),
    );
  }

  private get imageLinearLayout(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().className("androidx.recyclerview.widget.RecyclerView").childSelector(new UiSelector().className("android.widget.LinearLayout"))',
    );
  }

  private textLayout(textValue: string): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().text("textValue").className("android.view.View")'.replace(
        'textValue',
        textValue,
      ),
    );
  }

  private get imageViewer(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().text("image").className("android.widget.Image")',
    );
  }

  // Methods
  public async clickNewsTab(): Promise<void> {
    (await this.newsTab).waitForDisplayed();
    (await this.newsTab).click();
  }

  public async waitForPageText(pageValue: string): Promise<void> {
    (await this.textView(pageValue)).waitForDisplayed();
  }

  public async clickImageLinearLayout(): Promise<void> {
    (await this.imageLinearLayout).waitForDisplayed();
    (await this.imageLinearLayout).click();
  }

  public async waitForPageContentText(textValue: string): Promise<void> {
    (await this.textLayout(textValue)).waitForDisplayed();
  }

  public async isPageContentTextDisplayed(textValue: string): Promise<boolean> {
    return (await this.textLayout(textValue)).isDisplayed();
  }

  public async clickGalleryViewer(): Promise<void> {
    (await this.imageViewer).waitForDisplayed();
    (await this.imageViewer).click();
  }
}
