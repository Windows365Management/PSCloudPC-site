import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import commandDocs from "@site/docs/commands/docusaurus.sidebar.js";
import styles from "./index.module.css";

const moduleRepoUrl = "https://github.com/Windows365Management/PSCloudPC";
const galleryUrl = "https://www.powershellgallery.com/packages/PSCloudPC";

const cmdlets = commandDocs.map((doc) => doc.replace("commands/", ""));
const countMatching = (pattern) => cmdlets.filter((name) => pattern.test(name)).length;

// Icons: simple 24x24 line icons, drawn with currentColor
const icons = {
  lifecycle: (
    <path d="M4 12a8 8 0 0 1 13.66-5.66L20 8.7M20 4v4.7h-4.7M20 12a8 8 0 0 1-13.66 5.66L4 15.3M4 20v-4.7h4.7" />
  ),
  remote: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4M9.5 10l2 2 3.5-3.5" />
    </>
  ),
  insights: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="M11 12l9-9M17 6l3 3M14 9l2 2" />
    </>
  ),
  graph: (
    <>
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path d="M10.8 7.2 6.2 15.8M13.2 7.2l4.6 8.6M7.5 18h9" />
    </>
  ),
  community: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <circle cx="17" cy="9.5" r="2.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.3c2.9-.6 6 1.3 6 4.7" />
    </>
  ),
};

function Icon({ name }) {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

const features = [
  {
    icon: "lifecycle",
    title: "Full lifecycle automation",
    description:
      "Create, update, assign, export and import provisioning policies, user settings policies, custom images and Azure network connections.",
  },
  {
    icon: "remote",
    title: "Remote actions at scale",
    description:
      "Reboot, rename, resize, restore, reprovision, snapshot and troubleshoot Cloud PCs, and power Frontline Cloud PCs on or off.",
  },
  {
    icon: "insights",
    title: "Visibility and reporting",
    description:
      "Query audit events, connectivity history, real-time connection status and the results of remote actions.",
  },
  {
    icon: "key",
    title: "Authenticate your way",
    description:
      "Interactive, device code, client secret, certificate or a bring-your-own access token, on Windows, macOS and Linux.",
  },
  {
    icon: "graph",
    title: "Built on Microsoft Graph",
    description:
      "Tokens, paging and beta endpoints are handled for you, so you work with consistent, pipeline-friendly cmdlets instead of raw JSON.",
  },
  {
    icon: "community",
    title: "Open source and community-driven",
    description:
      "MIT licensed and built by Windows 365 admins for Windows 365 admins. Ideas, issues and pull requests are welcome.",
  },
];

const categories = [
  { title: "Cloud PCs and remote actions", pattern: /^(Get-CloudPC|Get-CPCRestorePoint|Invoke-CPC(?!.*CloudApp))/ },
  { title: "Provisioning policies", pattern: /ProvisioningPolicy/ },
  { title: "User settings policies", pattern: /UserSettingsPolicy|CrossRegionDisasterRecovery/ },
  { title: "Monitoring and reporting", pattern: /AuditEvent|ConnectivityHistory|RealTimeConnectionStatus|RemoteActionResult/ },
  { title: "Images", pattern: /Image$/ },
  { title: "Azure network connections", pattern: /AzureNetworkConnection/ },
  { title: "Cloud Apps", pattern: /CloudApp/ },
  { title: "Tenant settings", pattern: /OrganizationSetting|ServicePlan|SupportedRegion/ },
];

const steps = [
  { title: "Install", code: "Install-Module PSCloudPC" },
  { title: "Connect", code: "Connect-Windows365" },
  { title: "Automate", code: 'Get-CloudPC | Where-Object status -eq "failed"' },
];

function Terminal() {
  return (
    <div className={styles.terminal} role="img" aria-label="Example PowerShell session using PSCloudPC">
      <div className={styles.terminalBar}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.terminalTitle}>PowerShell 7</span>
      </div>
      <pre className={styles.terminalBody}>
        <span className={styles.comment}># Install from the PowerShell Gallery</span>
        {"\n"}
        <span className={styles.prompt}>PS&gt; </span>
        <span className={styles.cmd}>Install-Module</span> <span className={styles.param}>-Name</span> PSCloudPC
        {"\n\n"}
        <span className={styles.prompt}>PS&gt; </span>
        <span className={styles.cmd}>Connect-Windows365</span>
        {"\n"}
        <span className={styles.prompt}>PS&gt; </span>
        <span className={styles.cmd}>Get-CloudPC</span> | <span className={styles.cmd}>Format-Table</span> displayName, status, servicePlanName
        {"\n\n"}
        <span className={styles.header}>displayName      status       servicePlanName</span>
        {"\n"}
        <span className={styles.header}>-----------      ------       ---------------</span>
        {"\n"}
        CPC-adele-4XK2   <span className={styles.ok}>provisioned</span>  Cloud PC Enterprise 4vCPU/16GB/128GB
        {"\n"}
        CPC-alex-9QW1    <span className={styles.ok}>provisioned</span>  Cloud PC Enterprise 2vCPU/8GB/128GB
        {"\n"}
        CPC-megan-2LM7   <span className={styles.warn}>inGracePeriod</span> Cloud PC Frontline 2vCPU/8GB/64GB
      </pre>
    </div>
  );
}

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={clsx("container", styles.heroInner)}>
        <div className={styles.heroText}>
          <span className={styles.eyebrow}>Community-driven PowerShell module for Windows 365</span>
          <Heading as="h1" className={styles.heroTitle}>
            Manage <span className={styles.gradientText}>Windows 365 Cloud PCs</span> from PowerShell
          </Heading>
          <p className={styles.heroSubtitle}>
            {siteConfig.title} automates provisioning, images, networking, user settings and day-to-day Cloud PC
            operations through Microsoft Graph, on Windows, macOS and Linux.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Get started
            </Link>
            <Link className={clsx("button button--lg", styles.ghostButton)} to="/docs/commands">
              Browse {cmdlets.length} cmdlets
            </Link>
          </div>
          <div className={styles.badges}>
            <a href={galleryUrl}>
              <img src="https://img.shields.io/powershellgallery/v/PSCloudPC?style=flat-square&label=PSGallery&color=0f78d4" alt="PowerShell Gallery version" height="20" />
            </a>
            <a href={galleryUrl}>
              <img src="https://img.shields.io/powershellgallery/dt/PSCloudPC?style=flat-square&label=downloads&color=0c59a4" alt="PowerShell Gallery downloads" height="20" />
            </a>
            <a href={moduleRepoUrl}>
              <img src="https://img.shields.io/github/stars/Windows365Management/PSCloudPC?style=flat-square&color=1490df" alt="GitHub stars" height="20" />
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <img
            className={styles.heroLogo}
            src={require("@site/static/img/logo.png").default}
            alt=""
            width="200"
            height="200"
          />
          <Terminal />
        </div>
      </div>
    </header>
  );
}

function Stats() {
  const stats = [
    { value: cmdlets.length, label: "cmdlets" },
    { value: "5", label: "authentication methods" },
    { value: "MIT", label: "open-source licence" },
  ];
  return (
    <section className={styles.stats}>
      <div className={clsx("container", styles.statsGrid)}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className={styles.kicker}>Why PSCloudPC</span>
        <Heading as="h2" className={styles.sectionTitle}>
          Everything you need to run Windows 365 from the command line
        </Heading>
        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.featureCard}>
              <div className={styles.iconWrap}>
                <Icon name={feature.icon} />
              </div>
              <Heading as="h3">{feature.title}</Heading>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <span className={styles.kicker}>Get going in minutes</span>
        <Heading as="h2" className={styles.sectionTitle}>
          Three steps to your first automation
        </Heading>
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.stepNumber}>{index + 1}</span>
              <Heading as="h3">{step.title}</Heading>
              <code className={styles.stepCode}>{step.code}</code>
            </li>
          ))}
        </ol>
        <div className={styles.centered}>
          <Link className="button button--primary button--lg" to="/docs/getting-started/installation">
            Read the getting started guide
          </Link>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className={styles.kicker}>Cmdlet reference</span>
        <Heading as="h2" className={styles.sectionTitle}>
          Covers the whole Windows 365 service
        </Heading>
        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <Link key={category.title} className={styles.category} to="/docs/commands">
              <span>{category.title}</span>
              <span className={styles.categoryCount}>{countMatching(category.pattern)}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.cta}>
          <div className={styles.ctaGlow} aria-hidden="true" />
          <Heading as="h2" className={styles.ctaTitle}>
            Built by the Windows 365 community
          </Heading>
          <p className={styles.ctaLead}>
            Bug reports, feature ideas, documentation fixes and new cmdlets: contributions of every size are welcome.
          </p>
          <div className={styles.buttons}>
            <Link className={clsx("button button--lg", styles.ctaPrimary)} href={`${moduleRepoUrl}/discussions`}>
              Join the discussion
            </Link>
            <Link className={clsx("button button--lg", styles.ghostButton)} href={`${moduleRepoUrl}/issues/new/choose`}>
              Report an issue
            </Link>
            <Link className={clsx("button button--lg", styles.ghostButton)} to="/contributing">
              Contribute
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Windows 365 PowerShell module"
      description="PSCloudPC is a community-driven PowerShell module for managing Windows 365 Cloud PCs through Microsoft Graph."
    >
      <Hero />
      <main>
        <Stats />
        <Features />
        <Steps />
        <Categories />
        <Community />
      </main>
    </Layout>
  );
}
