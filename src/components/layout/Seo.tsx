import Head from "next/dist/shared/lib/head";

export default function Seo({title}:{title:string}){
    return <Head>
                <link rel="shortcut icon" href="public/image/favicon.png" />
                <title>{title} | KEPCO</title>
            </Head>
}