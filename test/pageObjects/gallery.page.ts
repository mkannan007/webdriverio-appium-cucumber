import { $ } from '@wdio/globals';

export class GalleryPage {
  // Elements
  private get imageView(): Promise<WebdriverIO.Element> {
    return $('android=new UiSelector().className("android.widget.ImageView")');
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
}
