import React, {ReactElement, ReactNode} from "react";
import ReactDOM from "react-dom";
import App, {AppProps} from "next/app";
import Head from "next/head";
import Router from "next/router";

import PageChange from "../components/PageChange/PageChange";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwind.css";
import Layout from "../components/Layout";
import {NextPage} from "next";

Router.events.on("routeChangeStart", (url) => {
    console.log(`Loading: ${url}`);
    document.body.classList.add("body-page-transition");
    ReactDOM.render(
        <PageChange path={url} />,
        document.getElementById("page-transition")
    );
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppProps){
    return (
        <React.Fragment>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <title>Notus NextJS by Creative Tim</title>
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </React.Fragment>
    );
}

