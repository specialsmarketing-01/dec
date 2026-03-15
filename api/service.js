import hostingImg1 from '/public/images/service-single/hosting/img-1.jpg'
import hostingImg2 from '/public/images/service-single/hosting/img-2.jpg'
import hostingImg3 from '/public/images/service-single/hosting/img-3.jpg'

import webdesignImg1 from '/public/images/service-single/webdesign/img-1.jpg'
import webdesignImg2 from '/public/images/service-single/webdesign/img-2.jpg'
import webdesignImg3 from '/public/images/service-single/webdesign/img-3.jpg'

import socialmediaImg1 from '/public/images/service-single/socialmedia/img-1.jpg'
import socialmediaImg2 from '/public/images/service-single/socialmedia/img-2.jpg'
import socialmediaImg3 from '/public/images/service-single/socialmedia/img-3.jpg'

import graphicdesignImg1 from '/public/images/service-single/graphicdesign/img-1.jpg'
import graphicdesignImg2 from '/public/images/service-single/graphicdesign/img-2.jpg'
import graphicdesignImg3 from '/public/images/service-single/graphicdesign/img-3.jpg'

import seoImg1 from '/public/images/service-single/seo/img-1.jpg'
import seoImg2 from '/public/images/service-single/seo/img-2.jpg'
import seoImg3 from '/public/images/service-single/seo/img-3.jpg'

import googleadsImg1 from '/public/images/service-single/googleads/img-1.jpg'
import googleadsImg2 from '/public/images/service-single/googleads/img-2.jpg'
import googleadsImg3 from '/public/images/service-single/googleads/img-3.jpg'

const Services = [
    {
        Id: '1',
        sImgS: hostingImg1,
        sTitle: 'Website Hosting',
        description: 'Website hosting is the service that makes your website accessible online by storing its files on a server. We provide reliable, fast hosting with 99.9% uptime, SSL certificates, and 24/7 support so your site stays secure and available to visitors around the clock.',
        des2: 'From shared hosting for small sites to dedicated servers for high-traffic projects, we match you with the right plan.',
        des3: 'Our hosting includes automatic backups, one-click installs for popular platforms, and scalable resources that grow with your business.',
        icon: 'flaticon-coding',
        projects: '150',
        ssImg1: hostingImg2,
        ssImg2: hostingImg3,
    },
    {
        Id: '2',
        sImgS: webdesignImg1,
        sTitle: 'Website Design and Development',
        description: 'Website design and development bring your brand to life online with a professional, user-friendly site that converts visitors into customers. We create custom layouts, responsive designs, and fast, secure code tailored to your goals.',
        des2: 'From landing pages to full e-commerce and web apps, we deliver modern, accessible websites.',
        des3: 'We focus on clean code, mobile-first design, and SEO-friendly structure so your site performs well and ranks.',
        icon: 'flaticon-vector',
        projects: '213',
        ssImg1: webdesignImg2,
        ssImg2: webdesignImg3,
    },
    {
        Id: '3',
        sImgS: socialmediaImg1,
        sTitle: 'Social Media Marketing',
        description: 'Social media marketing helps businesses connect with their audience, build brand awareness, and drive engagement across platforms like Facebook, Instagram, LinkedIn, and Twitter. We create content strategies, run targeted ads, and analyze performance to grow your reach and ROI.',
        des2: 'We plan content calendars, manage communities, and turn followers into loyal customers.',
        des3: 'Our team handles creative posts, paid campaigns, and reporting so you can focus on running your business.',
        icon: 'flaticon-social-media',
        projects: '89',
        ssImg1: socialmediaImg2,
        ssImg2: socialmediaImg3,
    },
    {
        Id: '4',
        sImgS: graphicdesignImg1,
        sTitle: 'Graphic Design',
        description: 'Graphic designing enhances your brand\'s identity through creative visuals that capture attention and communicate your message. We deliver logos, brochures, social graphics, and marketing materials that look professional and stay consistent across all touchpoints.',
        des2: 'From brand guidelines to ad creatives and packaging, we make your brand stand out.',
        des3: 'Our designers combine typography, color, and imagery to create visuals that resonate with your audience.',
        icon: 'flaticon-palette',
        projects: '124',
        ssImg1: graphicdesignImg2,
        ssImg2: graphicdesignImg3,
    },
    {
        Id: '5',
        sImgS: seoImg1,
        sTitle: 'SEO',
        description: 'Search Engine Optimization (SEO) improves your website\'s visibility on search engines like Google. We optimize your content, technical setup, and backlink profile so you rank higher for relevant keywords and attract more organic traffic and leads.',
        des2: 'We conduct keyword research, on-page optimization, and link building tailored to your industry.',
        des3: 'Our SEO strategies are data-driven and aligned with search guidelines for sustainable, long-term growth.',
        icon: 'flaticon-promotion',
        projects: '178',
        ssImg1: seoImg2,
        ssImg2: seoImg3,
    },
    {
        Id: '6',
        sImgS: googleadsImg1,
        sTitle: 'Google Ads',
        description: 'Google Ads is a powerful advertising platform that helps your business appear at the top of search results and across the Google network. We manage campaigns, target the right keywords and audiences, and optimize bids so you get more clicks and conversions within your budget.',
        des2: 'From Search and Display to YouTube and Shopping ads, we build and scale campaigns that perform.',
        des3: 'We track conversions, A/B test ad copy and landing pages, and provide clear reporting on ROI.',
        icon: 'flaticon-bar-chart',
        projects: '95',
        ssImg1: googleadsImg2,
        ssImg2: googleadsImg3,
    },
]

export default Services;
