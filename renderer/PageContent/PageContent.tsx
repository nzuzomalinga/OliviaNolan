import '../scss/PageContent.scss'
import { Collaboration } from './Sections/Collaboration'
import Footer from './Sections/Footer'
import { LetsWorkTogether } from './Sections/LetsWorkTogether'
import { PageDescription } from './Sections/PageDescription'
import { Services } from './Sections/Services'

export default function PageContent() {
    return (<>
        <PageDescription />
        <Services />
        <Collaboration />
        <LetsWorkTogether />
        <Footer/>
    </>)
}