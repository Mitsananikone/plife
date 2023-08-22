import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import  Navbar  from '@/components/nav/nav';
import Footer from '@/components/footer/footer';


 export default function App({ Component, pageProps }) {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [authorized, setAuthorized] = useState(false);

    return (
        <>
            <Head>
                <title>Phoenique Life</title>
            </Head>
                <Navbar />
                    <div >
                        <Component {...pageProps} />
                        <Footer/>
                    </div>
              
        </>
    );
}
