import { LandingPage } from "../pageObjects/landing.page.ts"
import { QuickTourPage } from "../pageObjects/quickTour.page.ts";
import { IssuesCarouselPage } from "../pageObjects/issuesCarousel.page.ts";
import { ArchiveTabPage } from "../pageObjects/archieveTab.page.ts";
import { SubscriptionSignInPage } from "../pageObjects/subscriptionSignIn.page.ts";
import { DownloadedEditionFrontPage } from "../pageObjects/downloadedEditionFront.page.ts";
import { DownloadedEditionNewsPage } from "../pageObjects/downloadedEditionNews.page.ts";
import { GalleryPage } from "../pageObjects/gallery.page.ts";

export const landingPage = new LandingPage();
export const quickTourPage = new QuickTourPage();
export const issuesCarouselPage = new IssuesCarouselPage();
export const archiveTabPage = new ArchiveTabPage();
export const subscriptionSignInPage = new SubscriptionSignInPage();
export const downloadedEditionFrontPage = new DownloadedEditionFrontPage();
export const downloadedEditionNewsPage = new DownloadedEditionNewsPage();
export const galleryPage = new GalleryPage();
