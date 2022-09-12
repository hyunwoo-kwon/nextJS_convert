import useSWR from 'swr'
import NavBar from "./NavBar";

// @ts-ignore
export default  function Layout({ children }){

    return (
        <>
            <NavBar/>
            <main>{children}</main>
        </>
    );
}