import { $ } from '@wdio/globals';

export class SubscriptionSignInPage {
  // Elements
  private get emailTextEdit(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().resourceId("login.email").className("android.widget.EditText")',
    );
  }

  private get passwordTextEdit(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().resourceId("login.password").className("android.widget.EditText")',
    );
  }

  // Methods
  public async enterEmail(username: string): Promise<void> {
    await (await this.emailTextEdit).waitForDisplayed();
    (await this.emailTextEdit).clearValue();
    (await this.emailTextEdit).setValue(username);
  }

  public async enterPassword(password: string): Promise<void> {
    await (await this.passwordTextEdit).waitForDisplayed();
    (await this.passwordTextEdit).clearValue();
    (await this.passwordTextEdit).setValue(password);
  }
}
