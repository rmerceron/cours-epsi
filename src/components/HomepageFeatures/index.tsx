import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: '360 Learning',
    Svg: require('@site/static/img/logo-360learning-3.svg').default,
    description: (
      <>
        Plateforme d'apprentissage en ligne utilisée par l'EPSI pour diffuser les cours.
      </>
    ),
    link: 'https://epsi.360learning.com/home/content/all',
  },
  {
    title: 'Informations EPSI',
    Svg: require('@site/static/img/epsi_logo.svg').default,
    description: (
      <>
        Accès aux informations de l'EPSI, y compris les présentations et ressources pour l'année 2025-2026.
      </>
    ),
    link: 'epsi',
  },
  {
    title: 'Informations EISI',
    Svg: require('@site/static/img/coming-soon-icon.svg').default,
    description: (
      <>
        Informations spécifiques à l'examen du Mastère EISI.
      </>
    ),
    link: '#',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <a href={link} className={styles.featureCard}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className={styles.featureContainer}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
