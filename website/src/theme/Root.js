import { useEffect, useState } from "react";
import Link from "@docusaurus/Link";

// Keep in sync with src/plugins/gtag-consent.js
const CONSENT_STORAGE_KEY = "pscloudpc-cookie-consent";

function readConsent() {
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveConsent(value) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    // Storage unavailable (private mode, blocked cookies): the choice applies to this page view only.
  }
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: value === "accepted" ? "granted" : "denied",
    });
  }
}

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readConsent() === null);
  }, []);

  if (!visible) {
    return null;
  }

  const choose = (value) => {
    saveConsent(value);
    setVisible(false);
  };

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p>
        We use cookies to recognize your repeated visits and preferences, and to measure how our
        documentation is used and whether people find what they are looking for. With your consent,
        you help us make the documentation better. See the{" "}
        <Link to="/about#privacy">privacy note</Link>.
      </p>
      <div className="cookie-consent__actions">
        <button className="button button--secondary button--sm" onClick={() => choose("rejected")}>
          Reject
        </button>
        <button className="button button--primary button--sm" onClick={() => choose("accepted")}>
          Accept
        </button>
      </div>
    </div>
  );
}

// Root wraps the whole app and is never unmounted on navigation.
export default function Root({ children }) {
  return (
    <>
      {children}
      <CookieConsent />
    </>
  );
}
