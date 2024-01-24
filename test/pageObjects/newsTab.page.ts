import { $ } from '@wdio/globals';

export class NewsTabPage {
  // Elements
  private get imageLinearLayout(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().className("androidx.recyclerview.widget.RecyclerView").childSelector(new UiSelector().className("android.widget.LinearLayout"))',
    );
  }

  private get imageViewer(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().text("image").className("android.widget.Image")',
    );
  }

  // Methods
  public async clickImageLinearLayout(): Promise<void> {
    (await this.imageLinearLayout).waitForDisplayed();
    (await this.imageLinearLayout).click();
  }

  public async clickGalleryViewer(): Promise<void> {
    (await this.imageViewer).waitForDisplayed();
    (await this.imageViewer).click();
  }
}
