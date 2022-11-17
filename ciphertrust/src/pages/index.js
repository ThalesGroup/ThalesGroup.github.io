import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import StepProcessComponent from '../components/StepProcess';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary mb-20', styles.heroBanner)}>
      {/* <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Thales CipherTrust Manager Community Edition
          </Link>
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row space-y-4 justify-evenly md:mx-auto">
        <div className="md:w-1/2">
          <h1 className="text-6xl font-bold m-4">
            Reduce Drag of Adding Data Security
          </h1>
        <p className="text-lg">CipherTrust Platform Community Edition allows you to deploy
data protection – in minutes instead of weeks</p>
        </div>
        <div>
          <div className="bg-white rounded-md px-6 py-6">
            <div className="flex-col">
              <h1 className="text-black text-2xl font-bold mb-2 border-none">Try Now</h1>
              <h1 className="text-black text-lg font-semibold text-gray-600">
                Self-managed | Always Free
              </h1>
              <Link href="/docs/intro"><button className="bg-blue-500 text-white p-2 rounded-md border-none cursor-pointer">Get Started</button></Link>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-md px-6 py-6">
            <div className="flex-col">
              <h1 className="text-black text-2xl font-bold mb-2">Watch Demo</h1>
              <h1 className="text-black text-lg font-semibold text-gray-600">
                Self-managed | Always Free
              </h1>
              <Link href="/docs/deploy/azure"><button className="bg-blue-500 text-white p-2 rounded-md border-none cursor-pointer">Watch Demo</button></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`CipherTrust Platform Tutorials`}
      description="CipherTrust Platform Community Edition allows you to deploy data protection – in minutes instead of weeks. Learn how to deploy and use CipherTrust Manager Community Edition at CipherTrust Learn."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <StepProcessComponent />
      </main>
    </Layout>
  );
}
