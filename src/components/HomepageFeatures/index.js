import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Gestión Integral de Pacientes',
    img: '/img/ehrimg1.png',
    description: (
      <>
        Administra historias clínicas, citas, signos vitales y prescripciones de manera centralizada y segura.
      </>
    ),
    isImg: true,
  },
  {
    title: 'Backend y Frontend Modernos',
    img: '/img/ehrimg2.png',
    description: (
      <>
        API RESTful en Node.js y frontend en Angular, diseñados para clínicas, hospitales y consultorios.
      </>
    ),
    isImg: true,
  },
  {
    title: 'Seguridad y Accesibilidad',
    img: '/img/ehrimg3.png',
    description: (
      <>
        Acceso seguro con autenticación JWT y roles. Interfaz responsiva y fácil de usar para todo el personal médico.
      </>
    ),
    isImg: true,
  },
];

function Feature({Svg, img, title, description, isImg}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {isImg ? (
          <img src={img} alt={title} className={styles.featureSvg} style={{maxHeight: 180}} />
        ) : (
          <Svg className={styles.featureSvg} role="img" />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
