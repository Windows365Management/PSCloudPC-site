import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import PageHeader from "@site/src/components/PageHeader";
import styles from "@site/src/components/page.module.css";

const moduleRepoUrl = "https://github.com/Windows365Management/PSCloudPC";
const releasesUrl = `${moduleRepoUrl}/releases`;

const maintainers = [
  { name: "Stefan Dingemanse", github: "StefanDingemanse", role: "Creator" },
  { name: "Niels Kok", github: "Ruthhl3ss", role: "Creator" },
];

const milestones = [
  { date: "January 2023", title: "First release", text: "PSCloudPC 1.0.0 ships with 22 cmdlets for Cloud PCs, provisioning policies, user settings policies and images." },
  { date: "January 2023", title: "Tenant settings and networking", text: "Organization settings, service plans and Azure network connections arrive in 1.0.4." },
  { date: "June 2023", title: "Frontline and pscloudpc.com", text: "Device code sign-in, Windows 365 Frontline support and the launch of this documentation website." },
  { date: "June 2024", title: "Export, import and reboot", text: "Move provisioning policies between tenants as JSON, and reboot Cloud PCs from PowerShell." },
  { date: "October 2024", title: "Certificate authentication", text: "Certificate-based sign-in for automation, and paging so large tenants return every Cloud PC." },
  { date: "August 2025", title: "Microsoft Graph authentication", text: "Authentication moves to Microsoft.Graph.Authentication, with token sign-in and Disconnect-Windows365." },
  { date: "November 2025", title: "Windows 365 Cloud Apps", text: "List, publish and unpublish Cloud Apps, and Windows Autopatch support in provisioning policies." },
  { date: "March 2026", title: "Rename, resize and disaster recovery", text: "Rename and resize Cloud PCs, and configure cross-region disaster recovery." },
  { date: "Coming next", title: "Monitoring and remote actions", text: "Audit events, connectivity history, real-time connection status, power management for Frontline, snapshots and troubleshooting.", next: true },
];

export default function About() {
  return (
    <Layout title="About" description="About PSCloudPC, the community-driven PowerShell module for Windows 365.">
      <PageHeader eyebrow="About" title="Windows 365 automation, by the community">
        PSCloudPC is an open-source PowerShell module for managing Windows 365 Cloud PCs through Microsoft Graph. It is
        free, MIT licensed and published to the PowerShell Gallery.
      </PageHeader>
      <main>
        <section className={styles.section}>
          <div className={clsx("container", styles.narrow)}>
            <span className={styles.kicker}>Our mission</span>
            <Heading as="h2" className={styles.sectionTitle}>
              Make Windows 365 easy to automate
            </Heading>
            <p className={styles.centered}>
              The Windows 365 Graph API is powerful, but working with it directly means handling tokens, paging, beta
              endpoints and JSON payloads yourself. PSCloudPC wraps all of that in consistent, pipeline-friendly
              cmdlets, so admins can spend their time on their environment instead of on API plumbing. The project
              started in 2023 and is maintained by members of the Windows 365 community.
            </p>
          </div>
        </section>

        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className="container">
            <span className={styles.kicker}>The team</span>
            <Heading as="h2" className={styles.sectionTitle}>
              Created by
            </Heading>
            <div className={clsx(styles.grid2, styles.narrow)} style={{ margin: "0 auto" }}>
              {maintainers.map((person) => (
                <Link key={person.github} className={styles.card} href={`https://github.com/${person.github}`}>
                  <div className={styles.person}>
                    <div className={styles.avatar}>
                      <img src={`https://github.com/${person.github}.png?size=168`} alt="" width="78" height="78" loading="lazy" />
                    </div>
                    <div>
                      <span className={styles.role}>{person.role}</span>
                      <Heading as="h3">{person.name}</Heading>
                      <p>@{person.github}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={clsx("container", styles.narrow)}>
            <span className={styles.kicker}>Milestones</span>
            <Heading as="h2" className={styles.sectionTitle}>
              How PSCloudPC grew
            </Heading>
            <ol className={styles.timeline}>
              {milestones.map((milestone) => (
                <li key={milestone.title} className={clsx(styles.milestone, milestone.next && styles.milestoneNext)}>
                  <span className={styles.milestoneDate}>{milestone.date}</span>
                  <Heading as="h3">{milestone.title}</Heading>
                  <p>{milestone.text}</p>
                </li>
              ))}
            </ol>
            <p className={clsx(styles.centered, styles.small)} style={{ marginTop: "2rem" }}>
              Every change is listed in the <Link href={releasesUrl}>release notes on GitHub</Link>.
            </p>
          </div>
        </section>

        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className="container">
            <span className={styles.kicker}>Contributors</span>
            <Heading as="h2" className={styles.sectionTitle}>
              Thank you to everyone who has contributed
            </Heading>
            <Link href={`${moduleRepoUrl}/graphs/contributors`}>
              <img className={styles.contributors} src="https://contrib.rocks/image?repo=Windows365Management/PSCloudPC" alt="PSCloudPC contributors" loading="lazy" />
            </Link>
            <p className={clsx(styles.centered, styles.small)} style={{ marginTop: "1.5rem" }}>
              Want to see yourself here? Read the <Link to="/contributing">contributing guide</Link>.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.grid3}>
              <div className={styles.card}>
                <Heading as="h3">Security</Heading>
                <p>
                  Please do not report security vulnerabilities through public issues. See the{" "}
                  <Link href={`${moduleRepoUrl}/blob/develop/SECURITY.md`}>security policy</Link> for how to report them
                  privately.
                </p>
              </div>
              <div className={styles.card}>
                <Heading as="h3">License</Heading>
                <p>
                  PSCloudPC is released under the <Link href={`${moduleRepoUrl}/blob/develop/LICENSE`}>MIT License</Link>.
                  You are free to use, modify and distribute it.
                </p>
              </div>
              <div className={styles.card}>
                <Heading as="h3">Disclaimer</Heading>
                <p>
                  PSCloudPC is a community project and is not affiliated with, endorsed by or supported by Microsoft.
                  Windows 365 and Microsoft Graph are trademarks of the Microsoft group of companies.
                </p>
              </div>
            </div>
            <div id="privacy" className={styles.card} style={{ marginTop: "1.5rem" }}>
              <Heading as="h3">Privacy</Heading>
              <p>
                This site uses Google Analytics to understand how the documentation is used. Analytics cookies are only
                set after you accept them in the cookie banner. To change your choice, clear the site data for
                pscloudpc.com in your browser and reload the page.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
