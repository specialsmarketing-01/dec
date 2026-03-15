import React, { Fragment } from 'react';
import About from '../components/about/about';
import BackToTop from '../components/backToTop/backToTop';
import ContactArea from '../components/ContactArea';
import Hero from '../components/hero/hero';
import Marquee from '../components/marque/marque';
import Navbar from '../components/Navbar/Navbar';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import Testimonial from '../components/Testimonial/Testimonial';
import { Element } from 'react-scroll'
import BlogSection from '../components/BlogSection/BlogSection';
import Footer from '../components/footer/Footer';
import Pricing from '../components/Pricing';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar />
            <Element name='home' id='home'>
                <Hero />
            </Element>
            <Element name='about' id='about'>
                <About />
            </Element>
            <Element name='service' id='service'>
                <ServiceSection />
            </Element>
            <Marquee />
            <Element name='project' id='project'>
                <ProjectSection />
            </Element>
            <Testimonial />
            <Element name='blog' id='blog'>
                <BlogSection />
            </Element>
            <Pricing />
            <Element name='contact' id='contact'>
                <ContactArea />
            </Element>
            <Footer />
            <BackToTop />
        </Fragment>
    )
};
export default HomePage;