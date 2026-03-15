import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogs from '../../api/blogs'
import BlogSingle from "../BlogSingle";
import Link from 'next/link'
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../context/translations';

const BlogSection = () => {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = useState({});
    const [number, setCount] = useState(3);
    const [buttonActive, setButtonState] = useState(false);
    const { language } = useLanguage();
    const t = useTranslation(language);

    function handleClose() {
        setOpen(false);
    }

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item)
    }

    return (
        <section className="tp-blog-section section-padding" id="blog">
            <div className="container">
                <div className="tp-section-title">
                    <span>{t('blog.span')}</span>
                    <h2>{t('blog.h2')}</h2>
                </div>
                <div className="tp-blog-items">
                    <div className="row">
                        {blogs.slice(0, number).map((blog, bl) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={bl}>
                                <div className="tp-blog-item">
                                    <div className="tp-blog-img">
                                        <Image src={blog.screens} alt="" />
                                        <div className="thumb">{blog.thumb}</div>
                                    </div>
                                    <div className="tp-blog-content">
                                        <ul>
                                            <li>{blog.create_at}</li>
                                            <li>By <Link href="/" onClick={() => handleClickOpen(blog)}>{blog.author}</Link></li>
                                        </ul>
                                        <h2 onClick={() => handleClickOpen(blog)}>{blog.title}</h2>
                                        <p>{blog.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={`sec-title-btn text-center mt-3 ${buttonActive ? "d-none" : ""}`}>
                        <span onClick={() => setButtonState(!buttonActive)}>
                            <button className="theme-btn" onClick={() => setCount(number + number)}>
                                {t('blog.viewAll')}
                            </button>
                        </span>
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>{t('blog.visibleText')}</h1>
            </div>
            <BlogSingle open={open} onClose={handleClose} title={state.title} bImg={state.blogSingleImg} create_at={state.create_at} author={state.author} comment={state.comment} />
        </section>
    );
}

export default BlogSection;