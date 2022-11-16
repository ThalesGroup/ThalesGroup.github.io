import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Data In-Transit (using Data Protection Gateway)',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    Img: "/img/screenshot-ciphertrust-manager-key-management.png",
    description: (
      <>
        Learn how CipherTrust with the Data Protection Gateway (DPG) connector can keep data in transit secure without the need to edit application source code.
      </>
    ),
  },
  {
    title: 'CipherTrust Transparent Encryption for Kubernetes (CTE for K8’s)',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    Img: "/img/screenshot-transparent-encyption1.png",
    description: (
      <>
        See how to quickly encrypt data on the client side and upload it to your favorite cloud storage provider without worrying about cloud key management solutions.
      </>
    ),
  },
  {
    title: 'Centralize Management of Keys and Policies',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    Img: "/img/screenshot-ciphertrust-manager-key-management.png",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ Img, Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Img ?
          <img src={Img}></img>
          :
          <Svg className={styles.featureSvg} role="img" />
        }
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className='text-lg font-semibold text-gray-900 text-black'>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container mb-20">

        <h1 className="text-4xl text-center font-bold m-4">
          Tools Built to Reduce Drag on Velocity
        </h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
