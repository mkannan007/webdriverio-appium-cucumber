import { $ } from "@wdio/globals";

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class SubscriptionSignInPage {
  private get welcomeText(): Promise<WebdriverIO.Element> {
    return $('android=new UiSelector().textContains("Welcome to Mail")');
  }

  private textView(textValue: string): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().text("TextValue").className("android.widget.TextView")'.replace(
        "TextValue",
        textValue
      )
    );
  }

  private get acceptAndContinue(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().text("Accept & continue").className("android.widget.Button")'
    );
  }

  private get noThanks(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().text("No thanks").className("android.widget.Button")'
    );
  }

  private get signInToMailText(): Promise<WebdriverIO.Element> {
    return $('android=new UiSelector().text("Sign in to your Mail account")');
  }

  private get emailTextEdit(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().resourceId("login.email").className("android.widget.EditText")'
    );
  }

  private get passwordTextEdit(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().resourceId("login.password").className("android.widget.EditText")'
    );
  }

  private get signInButton(): Promise<WebdriverIO.Element> {
    return $(
      'android=new UiSelector().text("Sign in").className("android.widget.Button")'
    );
  }

  public async waitForWelcomeMailSubscription(): Promise<void> {
    (await this.welcomeText).waitForDisplayed();
  }

  public async clickTextView(textValue: string): Promise<void> {
    // (await this.textView(textValue)).waitForDisplayed();
    // (await this.textView(textValue)).click();
    await driver.execute('mobile: doubleClickGesture', {
      elementId: await this.textView(textValue),
    });
  }

  public async isAcceptAndContinueDisplayed(): Promise<boolean> {
    return (await this.acceptAndContinue).isDisplayed();
  }

  public async clickAcceptAndContinue(): Promise<void> {
    (await this.acceptAndContinue).waitForDisplayed();
    (await this.acceptAndContinue).click();
  }

  public async isNoThanksDisplayed(): Promise<boolean> {
    return (await this.noThanks).isDisplayed();
  }

  public async clickNoThanks(): Promise<void> {
    (await this.noThanks).waitForDisplayed();
    (await this.noThanks).click();
  }

  public async waitForSignInToMailText(): Promise<void> {
    (await this.signInToMailText).waitForDisplayed();
  }

  public async enterEmail(username: string): Promise<void> {
    (await this.emailTextEdit).waitForDisplayed();
    (await this.emailTextEdit).clearValue();
    (await this.emailTextEdit).setValue(username);
  }

  public async enterPassword(password: string): Promise<void> {
    (await this.passwordTextEdit).waitForDisplayed();
    (await this.passwordTextEdit).clearValue();
    (await this.passwordTextEdit).setValue(password);
  }

  public async clickSignInButton(): Promise<void> {
    (await this.signInButton).waitForDisplayed();
    (await this.signInButton).click();``
  }
}
