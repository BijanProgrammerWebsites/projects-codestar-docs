import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();

    return (
        <Layout>
            <header className={clsx(styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link className="button button--secondary button--lg" to="/intro">
                            مقدمات
                        </Link>
                        <Link className="button button--secondary button--lg" to="/frontend">
                            فرانت‌اند
                        </Link>
                        <Link className="button button--secondary button--lg" to="/software-engineering">
                            مهندسی نرم‌افزار
                        </Link>
                        <Link className="button button--secondary button--lg" to="/general">
                            عمومی
                        </Link>
                        <Link className="button button--secondary button--lg" to="/project">
                            پروژه
                        </Link>
                    </div>
                </div>
            </header>
        </Layout>
    );
}
