import NavBar from "../components/NavBar";
import "../styles/globals.css"

// @ts-ignore
export default function App({ Component, pageProps }){
    return (
        <div>
            <NavBar />
            <Component {...pageProps}/>
            <span>_app.tsx hello</span>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <style jsx>{`
                  a {
                    color: white;
                  }
`               }
            </style>
        </div>
    )
}