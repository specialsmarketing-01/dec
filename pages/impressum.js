import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/footer/Footer';
import BackToTop from '../components/backToTop/backToTop';

const impressumStyle = {
    section: { paddingTop: '120px', paddingBottom: '80px' },
    h1: { fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' },
    h2: { fontSize: '1.35rem', marginTop: '1rem', marginBottom: '1.25rem', fontWeight: 600 },
    row: { marginBottom: '1rem' },
    label: { fontWeight: 600, marginBottom: '0.25rem' },
    value: { marginBottom: 0 },
};

const Impressum = () => {
    return (
        <>
            <Navbar />
            <section className="section-padding" style={impressumStyle.section}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 style={impressumStyle.h1}>Impressum</h1>
                            <h2 style={impressumStyle.h2}>Angaben gemäß § 5 ECG</h2>

                            <div style={impressumStyle.row}>
                                <div style={impressumStyle.label}>Unternehmensname</div>
                                <p style={impressumStyle.value}>DECNOX</p>
                                <p style={{ marginTop: '0.25rem', marginBottom: 0 }}>(Inhaber: Arslan Pirbudagov)</p>
                            </div>

                            <div style={impressumStyle.row}>
                                <div style={impressumStyle.label}>Rechtsform</div>
                                <p style={impressumStyle.value}>Einzelunternehmen</p>
                            </div>

                            <div style={impressumStyle.row}>
                                <div style={impressumStyle.label}>Adresse</div>
                                <p style={impressumStyle.value}>Brünner Straße 34-34 13/13</p>
                            </div>

                            <div style={impressumStyle.row}>
                                <div style={impressumStyle.label}>Telefon</div>
                                <p style={impressumStyle.value}>+436603288530</p>
                            </div>

                            <div style={impressumStyle.row}>
                                <div style={impressumStyle.label}>E-Mail</div>
                                <p style={impressumStyle.value}><a href="mailto:office@decnox.com" style={{ color: 'inherit' }}>office@decnox.com</a></p>
                            </div>

                            <div style={impressumStyle.row}>
                                <div style={impressumStyle.label}>UID-Nummer</div>
                                <p style={impressumStyle.value}>ATU82719505</p>
                            </div>

                            <div style={impressumStyle.row}>
                                <div style={impressumStyle.label}>Gewerbe</div>
                                <p style={impressumStyle.value}>Werbeagentur / Marketingdienstleistungen</p>
                            </div>

                            <div style={impressumStyle.row}>
                                <div style={impressumStyle.label}>Gewerbebehörde</div>
                                <p style={impressumStyle.value}>Magistratisches Bezirksamt Wien</p>
                            </div>

                            <div style={impressumStyle.row}>
                                <p style={impressumStyle.value}>Mitglied der Wirtschaftskammer Wien</p>
                            </div>

                            <div style={impressumStyle.row}>
                                <div style={impressumStyle.label}>Anwendbares Recht</div>
                                <p style={impressumStyle.value}>Österreich</p>
                            </div>

                            <p style={{ marginTop: '2.5rem' }}>
                                <Link href="/" className="theme-btn">Zurück zur Startseite</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <BackToTop />
        </>
    );
};

export default Impressum;
