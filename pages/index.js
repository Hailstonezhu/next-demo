import Head from "next/head";
import Layout, {siteTitle} from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import {getSortedPostsData} from "../lib/posts";
import Link from 'next/link';
import Date from '../components/date/date';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    本人性格活泼开朗、工作认真仔细、具有很好的亲和力，善于与人沟通、而且爱好广泛，爱好唱歌、写作、喜欢不断创新、追求新事物。毕业于20xx年x月份。步入社会以后，做过兼职和两年的全职工作，有一定的'工作能力和语言的沟通能力。做事也比较认真付责任。收到同事和上司的认可。不过还是希望能找到一个更合适自己的工作岗位来锻炼自己，是自己在继续不断的进步。
                </p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{" "}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}

                </ul>
            </section>

        </Layout>
    );
}
