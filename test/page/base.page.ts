import { CommonPage } from '../pageObjects/common.page.ts';
import { FailOverBannerPage } from '../pageObjects/failOverBanner.page.ts';
import { SubscriptionSignInPage } from '../pageObjects/subscriptionSignIn.page.ts';
import { FrontPageTab } from '../pageObjects/frontPageTab.page.ts';
import { NewsTabPage } from '../pageObjects/newsTab.page.ts';
import { GalleryPage } from '../pageObjects/gallery.page.ts';

export const commonPage = new CommonPage();
export const failOverBanner = new FailOverBannerPage();
export const subscriptionSignInPage = new SubscriptionSignInPage();
export const frontPageTab = new FrontPageTab();
export const newsTab = new NewsTabPage();
export const galleryPage = new GalleryPage();
