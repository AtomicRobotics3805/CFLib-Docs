import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        CFLib handles all of the backend requirements to use Commands, <a href="https://github.com/acmerobotics/road-runner">RoadRunner</a>, <a href="https://github.com/NoahBres/MeepMeep">MeepMeep</a>, and more!
      </>
    ),
  },
  {
    title: 'Open Source by Design',
    description: (
      <>
        We pledge to always release all of the source code at no cost for everything related to CFLib.<br/><br/>CFLib, CFDocs, and all other related projects are released with the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GNU GPL v3.0</a>.
      </>
    ),
  },
  {
    title: 'Completely Free',
    description: (
      <>
        We will never ask for payments, or fees of any kind, or lock features behind a paywall.<br/><br/>Donations are awesome, though.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
