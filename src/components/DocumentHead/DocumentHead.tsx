import { FunctionComponent } from "react";
import Head from 'next/head'
interface DocumentHeadProps {
    title: string
}

const DocumentHead:FunctionComponent<DocumentHeadProps> = ({ title }) => (
    <Head>
        <title> { title } </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
)

export default DocumentHead