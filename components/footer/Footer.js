import React from 'react'
import Link from 'next/link'

const Footer = (props) => {
    return (
        <div className="tp-site-footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-image">
                            <Link className="logo logo-text" href="/">DECNOX</Link>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="link-widget">
                            <ul>
                                <li><Link href="/"><i className="ti-facebook"></i></Link></li>
                                <li><Link href="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link href="/"><i className="ti-linkedin"></i></Link></li>
                                <li><Link href="/"><i className="ti-pinterest"></i></Link></li>
                                <li><Link href="/"><i className="ti-vimeo-alt"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="copyright">
                            <p>© 2025 DECNOX. Digital Marketing Agency. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;