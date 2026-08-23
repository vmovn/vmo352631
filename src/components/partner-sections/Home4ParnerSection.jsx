import React from 'react'

const defaultLogos = [1, 2, 3, 4, 5, 6].map((index) => ({
  lightPath: `/assets/img/home1/partner-0${index}.png`,
  darkPath: `/assets/img/home1/partner-light-0${index}.png`,
}));

const StatText = ({ value }) => value.split(/(\d[\dA-Za-z%+.]*)/).map((part, index) =>
  /^\d/.test(part) ? <span key={`${part}-${index}`}>{part}</span> : part
);

const Home4ParnerSection = ({ data = {} }) => {
  const logos = data.logos?.length ? data.logos : defaultLogos;

  return (
    <div className="partner-area four mb-130">
      <div className="container">
        <div className="partner-title-area wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
          <h6><StatText value={data.leftStat || "Our Globally 20K+ Clients."} /></h6>
          <h6><StatText value={data.rightStat || "Our Happy Cleints 90%+"} /></h6>
        </div>
        <div className="partner-wrap">
          <div className="marquee light">
            <div className="marquee__group">
              {logos.map((logo) => <a href="#" key={logo.lightPath}><img src={logo.lightPath} alt="" /></a>)}
            </div>
            <div aria-hidden="true" className="marquee__group">
              {logos.map((logo) => <a href="#" key={logo.lightPath}><img src={logo.lightPath} alt="" /></a>)}
            </div>
          </div>
          <div className="marquee dark">
            <div className="marquee__group">
              {logos.map((logo) => <a href="#" key={logo.darkPath}><img src={logo.darkPath || logo.lightPath} alt="" /></a>)}
            </div>
            <div aria-hidden="true" className="marquee__group">
              {logos.map((logo) => <a href="#" key={logo.darkPath}><img src={logo.darkPath || logo.lightPath} alt="" /></a>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home4ParnerSection
