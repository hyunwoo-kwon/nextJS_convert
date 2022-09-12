import "../styles/globals.css"
import {Component} from "react";
import type {AppProps} from "next/app";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import {useRouter} from "next/router";

export default function MyApp({ Component, pageProps }: AppProps){
    // console.log("Component = "  + Component)
    // console.log("pageProps = " + JSON.stringify(pageProps))


    return (
        <>
            <Layout/>
            <Component {...pageProps} />
        </>
    )
}