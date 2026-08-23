import React from 'react'

const defaults = [
    { step: "01", titleLead: "Client", titleTail: "Onboarding", description: "Included meetings and questionnaires to gather key information." },
    { step: "02", titleLead: "Campaign", titleTail: "Setup", description: "Like Google Ads, Facebook Ads, email marketing, or other tools." },
    { step: "03", titleLead: "Reporting &", titleTail: "Insights", description: "A comprehensive report is delivered, outlining the results, ROI." },
];

const Home4ProcessSection = ({ data = {} }) => {
    const stages = defaults.map((fallback, index) => ({ ...fallback, ...(data.stages?.[index] || {}) }));
    return (
        <>
            <div className="home4-process-section mb-130" id={data.sectionId || undefined}>
                <div className="container">
                    <div className="row justify-content-lg-end">
                        <div className="col-xl-10 col-lg-11">
                            <div className="process-wrapper">
                                <ul>
                                    <li>
                                        <svg className="divider" width={6} height={98} viewBox="0 0 6 98" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.5 5L5.88675 0H0.113249L2.5 5H3.5ZM2.5 93L0.113249 98H5.88675L3.5 93H2.5ZM2.5 4.5V93.5H3.5V4.5H2.5Z" />
                                        </svg>
                                        <div className="single-process">
                                            <div className="step-no">
                                                <span>Step</span>
                                                <strong>{stages[0].step}</strong>
                                            </div>
                                            <div className="process-content">
                                                <h5>{stages[0].titleLead} <br />{stages[0].titleTail}</h5>
                                                <p>{stages[0].description === defaults[0].description ? <>Included <strong>meetings</strong> and <strong>questionnaires</strong> to gather key information.</> : stages[0].description}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <svg className="divider" width={6} height={98} viewBox="0 0 6 98" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.5 5L5.88675 0H0.113249L2.5 5H3.5ZM2.5 93L0.113249 98H5.88675L3.5 93H2.5ZM2.5 4.5V93.5H3.5V4.5H2.5Z" />
                                        </svg>
                                        <div className="single-process">
                                            <div className="step-no">
                                                <span>Step</span>
                                                <strong>{stages[1].step}</strong>
                                            </div>
                                            <div className="process-content">
                                                <h5>{stages[1].titleLead} <br />{stages[1].titleTail}</h5>
                                                <p>{stages[1].description === defaults[1].description ? <>Like <strong>Google Ads, Facebook Ads, email marketing,</strong> or other tools.</> : stages[1].description}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-process">
                                            <div className="step-no">
                                                <span>Step</span>
                                                <strong>{stages[2].step}</strong>
                                            </div>
                                            <div className="process-content">
                                                <h5>{stages[2].titleLead} <br />{stages[2].titleTail}</h5>
                                                <p>{stages[2].description === defaults[2].description ? <>A comprehensive report is delivered, outlining the results, <strong>ROI.</strong></> : stages[2].description}</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home4ProcessSection
