import { $ } from '@wdio/globals';

export class FrontPageTab {
  // Elements
  private swipeHorizontal(steps: string): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiScrollable(new UiSelector().className("androidx.viewpager.widget.ViewPager").scrollable(true)).setAsHorizontalList().scrollToEnd(stepValue)'.replace(
        'stepValue',
        steps.replace(/"/g, ''),
      ),
    );
  }

  private get sectionsMenu(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().className("android.view.ViewGroup").description("Tap me to open the sections menu")',
    );
  }

  // Methods
  public async isSectionsMenuEnabled(): Promise<boolean> {
    return (await this.sectionsMenu).isEnabled();
  }

  public async scrollHorizontal(steps: string): Promise<void> {
    await (await this.swipeHorizontal(steps)).waitForDisplayed();
  }
}
