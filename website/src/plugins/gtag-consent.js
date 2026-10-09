// @ts-check

/**
 * Sets Google consent mode defaults before Google Analytics loads.
 *
 * Analytics storage is denied until the visitor accepts cookies in the banner
 * rendered by src/theme/Root.js. This plugin must be listed before
 * @docusaurus/plugin-google-gtag in docusaurus.config.js so its script runs first.
 */
export const CONSENT_STORAGE_KEY = "pscloudpc-cookie-consent";

/** @type {import('@docusaurus/types').PluginModule} */
export default function gtagConsentPlugin() {
  return {
    name: "gtag-consent",
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "script",
            innerHTML: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              var consent = null;
              try { consent = localStorage.getItem('${CONSENT_STORAGE_KEY}'); } catch (e) {}
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: consent === 'accepted' ? 'granted' : 'denied'
              });
            `,
          },
        ],
      };
    },
  };
}
