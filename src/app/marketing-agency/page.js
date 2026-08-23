import Home4Banner from '@/components/banner/Home4Banner'
import Home4CaseStudySection from '@/components/case-study-section/Home4CaseStudySection'
import Home4ContactSection from '@/components/contact-section/Home4ContactSection'
import Home4FeatureSection from '@/components/feature-section/Home4FeatureSection'
import Home4Footer from '@/components/Footer/Home4Footer'
import Header4 from '@/components/header/Header4.js'
import Home4ParnerSection from '@/components/partner-sections/Home4ParnerSection'
import Home4ProcessSection from '@/components/process-sections/Home4ProcessSection'
import Home4ServiceSection from '@/components/service-section/Home4ServiceSection'
import Home4TeamSection from '@/components/team-section/Home4TeamSection'
import Home4testimonialSection from '@/components/testimonial-section/Home4testimonialSection'
import { adaptMarketingAgencyDemoToHome4 } from '@/cms/adapters/homepageToHome4'
import { marketingAgencyDemo } from '@/cms/data/marketingAgencyDemo'
import React from 'react'

const page = () => {
    const data = adaptMarketingAgencyDemoToHome4(marketingAgencyDemo)

    return (
        <>
            <Header4 />
            <Home4Banner data={data.hero} />
            <Home4ParnerSection data={data.partners} />
            <Home4FeatureSection data={data.feature} />
            <Home4ProcessSection data={data.process} />
            <Home4ServiceSection data={data.service} />
            <Home4testimonialSection data={data.testimonial} />
            <Home4CaseStudySection data={data.caseStudies} />
            <Home4TeamSection data={data.team} />
            <Home4ContactSection data={data.contact} />
            <Home4Footer />
        </>

    )
}

export default page
