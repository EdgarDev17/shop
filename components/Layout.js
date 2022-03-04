import Head from 'next/head'
import {Footer} from '../components/Footer'
import {Nav} from '../components/Nav'
import SideNav from '../components/SideNav'
import commerce from '../lib/commerce'

// Layout: Holy Grail Layout

export default function Layout({children}) {
    return (
        <div>
            <Head>
                <title>EdDev Ecommerce</title>
                <meta
                    name="description"
                    content="Ecommerce for a clothing store"
                />
                <link rel="icon" href={'/favicon.ico'}/>
            </Head>

            <div className={'w-full flex flex-row flex-grow'}>

                <div className={'w-min flex-shrink flex-grow-0 px-2'}>
                    <SideNav/>
                </div>

                <main role={'main'} className={'w-full flex-grow mx-auto'}>
                    <div>{children}</div>
                </main>

            </div>

            <footer className={''}>
                <Footer/>
            </footer>
        </div>
    )
}
