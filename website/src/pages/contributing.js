import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import CodeBlock from "@theme/CodeBlock";

import PageHeader from "@site/src/components/PageHeader";
import styles from "@site/src/components/page.module.css";

const moduleRepoUrl = "https://github.com/Windows365Management/PSCloudPC";
const siteRepoUrl = "https://github.com/Windows365Management/PSCloudPC-site";

const iconPaths = {
  bug: (
    <>
      <path d="M8 6a4 4 0 0 1 8 0" />
      <rect x="6" y="6" width="12" height="13" rx="6" />
      <path d="M12 10v9M3 13h3M18 13h3M4 7l2.5 2M20 7l-2.5 2M4 20l2.5-2.5M20 20l-2.5-2.5" />
    </>
  ),
  idea: <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z" />,
  chat: <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.6A8 8 0 1 1 21 12Z" />,
  code: <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />,
};

function Icon({ name }) {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {iconPaths[name]}
    </svg>
  );
}

const ways = [
  {
    icon: "bug",
    title: "Report a bug",
    description: "Something not working? Include the module version, PowerShell version and the exact command you ran.",
    link: `${moduleRepoUrl}/issues/new?template=BUG_REPORT.yml`,
    action: "Open a bug report",
  },
  {
    icon: "idea",
    title: "Request a feature",
    description: "Missing a cmdlet? A link to the relevant Microsoft Graph API documentation helps a lot.",
    link: `${moduleRepoUrl}/issues/new?template=FEATURE.yml`,
    action: "Request a feature",
  },
  {
    icon: "chat",
    title: "Ask or share",
    description: "Ask a question, share how you use PSCloudPC or float an idea with the community.",
    link: `${moduleRepoUrl}/discussions`,
    action: "Start a discussion",
  },
  {
    icon: "code",
    title: "Write code",
    description: "Fix a bug or add a cmdlet. Issues labelled good first issue or help wanted are great places to start.",
    link: `${moduleRepoUrl}/issues?q=is%3Aopen+label%3A%22good+first+issue%22%2C%22help+wanted%22`,
    action: "Find an issue",
  },
];

const steps = [
  {
    title: "Fork and branch",
    text: (
      <>
        Fork <Link href={moduleRepoUrl}>Windows365Management/PSCloudPC</Link> and create a branch from{" "}
        <code>develop</code>, prefixed with <code>feature/</code>, <code>fix/</code> or <code>docs/</code>.
      </>
    ),
  },
  {
    title: "Follow the conventions",
    text: (
      <>
        Use an approved PowerShell verb and the <code>CPC</code> noun prefix, with one cmdlet per file in{" "}
        <code>PSCloudPc/Public/</code>. Add new cmdlets to <code>FunctionsToExport</code> in the manifest.
      </>
    ),
  },
  {
    title: "Write the help",
    text: (
      <>
        Add comment-based help with a synopsis, description, every parameter and at least one example that starts
        with the cmdlet name. This help is also the source of the <Link to="/docs/commands">cmdlet reference</Link>.
      </>
    ),
  },
  {
    title: "Test and open a pull request",
    text: (
      <>
        Add Pester tests, run PSScriptAnalyzer and the tests locally, and open a pull request against{" "}
        <code>develop</code>. A maintainer will review it.
      </>
    ),
  },
];

const checks = `Invoke-ScriptAnalyzer -Path ./PSCloudPc/Public/*.ps1 -Recurse -ExcludeRule PSAvoidTrailingWhitespace
Import-Module ./PSCloudPc/PSCloudPC.psd1 -Force
Invoke-Pester -Path ./Pester/Functions.tests.ps1, ./Tests -Output Detailed`;

export default function Contributing() {
  return (
    <Layout title="Contributing" description="How to contribute to PSCloudPC: report bugs, request features and contribute code or documentation.">
      <PageHeader eyebrow="Contributing" title="Help build PSCloudPC">
        PSCloudPC is built by and for the Windows 365 community. Contributions of every size are welcome, from a typo fix
        to a brand-new cmdlet.
      </PageHeader>
      <main>
        <section className={styles.section}>
          <div className="container">
            <span className={styles.kicker}>Ways to contribute</span>
            <Heading as="h2" className={styles.sectionTitle}>
              Pick what suits you
            </Heading>
            <div className={styles.grid4}>
              {ways.map((way) => (
                <Link key={way.title} className={styles.card} href={way.link}>
                  <div className={styles.iconWrap}>
                    <Icon name={way.icon} />
                  </div>
                  <Heading as="h3">{way.title}</Heading>
                  <p>{way.description}</p>
                  <span className={styles.cardLink}>{way.action} →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className={clsx("container", styles.narrow)}>
            <span className={styles.kicker}>Contributing code</span>
            <Heading as="h2" className={styles.sectionTitle}>
              Your first pull request
            </Heading>
            <p className={styles.sectionLead}>
              If you plan a larger change, open an issue or discussion first so we can agree on the approach before you
              invest time in it.
            </p>
            <ol className={styles.steps}>
              {steps.map((step, index) => (
                <li key={step.title} className={styles.step}>
                  <span className={styles.stepNumber}>{index + 1}</span>
                  <Heading as="h3">{step.title}</Heading>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
            <Heading as="h3" className={styles.centered} style={{ marginTop: "2.5rem" }}>
              Run the same checks as CI
            </Heading>
            <CodeBlock language="powershell">{checks}</CodeBlock>
            <p className={clsx(styles.centered, styles.small)}>
              The full development guide lives in{" "}
              <Link href={`${moduleRepoUrl}/blob/develop/CONTRIBUTING.md`}>CONTRIBUTING.md</Link>.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <span className={styles.kicker}>Documentation</span>
            <Heading as="h2" className={styles.sectionTitle}>
              Improve this website
            </Heading>
            <div className={styles.grid2}>
              <div className={styles.card}>
                <Heading as="h3">Guides</Heading>
                <p>
                  Guides such as installation and authentication live in the{" "}
                  <Link href={siteRepoUrl}>PSCloudPC-site repository</Link> under <code>website/docs</code>. Use the{" "}
                  <strong>Edit this page</strong> link at the bottom of any guide to propose a change.
                </p>
              </div>
              <div className={styles.card}>
                <Heading as="h3">Cmdlet reference</Heading>
                <p>
                  Cmdlet pages are generated from the module's comment-based help. To fix one, edit the help in the
                  cmdlet's source file; the <strong>Edit this page</strong> link on a cmdlet page takes you there.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} style={{ paddingTop: 0 }}>
          <div className="container">
            <div className={styles.cta}>
              <Heading as="h2">Be kind, be welcoming</Heading>
              <p>
                Please follow our Code of Conduct in all project spaces. By contributing, you agree that your
                contributions are licensed under the MIT License.
              </p>
              <div className={styles.ctaButtons}>
                <Link className={clsx("button button--lg", styles.ctaPrimary)} href={`${moduleRepoUrl}/blob/develop/CODE_OF_CONDUCT.md`}>
                  Read the Code of Conduct
                </Link>
                <Link className={clsx("button button--lg", styles.ctaGhost)} href={`${moduleRepoUrl}/discussions`}>
                  Say hello in Discussions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
