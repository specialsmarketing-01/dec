import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/footer/Footer';
import BackToTop from '../components/backToTop/backToTop';

const Datenschutz = () => {
    return (
        <>
            <Navbar />
            <section className="section-padding" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="mb-4" style={{ fontSize: '2rem', fontWeight: 700 }}>Datenschutz</h1>

                            <h2 style={{ fontSize: '1.35rem', marginTop: '2rem', marginBottom: '0.75rem' }}>1. Verantwortlicher</h2>
                            <p><strong>Decnox</strong></p>
                            <p>Inhaber: Arslan Pirbudagov</p>
                            <p>Adresse: Brünner Straße 34-38 13/13</p>
                            <p>E-Mail: office@decnox.com</p>
                            <p>Telefon: +436603288530</p>
                            <p>Der Schutz Ihrer personenbezogenen Daten ist uns ein besonderes Anliegen.</p>
                            <p>Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG).</p>

                            <h2 style={{ fontSize: '1.35rem', marginTop: '2rem', marginBottom: '0.75rem' }}>2. Allgemeine Datenverarbeitung</h2>
                            <p>Wir verarbeiten personenbezogene Daten nur dann, wenn dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.</p>
                            <p>Personenbezogene Daten sind z. B.:</p>
                            <ul style={{ marginBottom: '1.5rem' }}>
                                <li>Name</li>
                                <li>E-Mail-Adresse</li>
                                <li>Telefonnummer</li>
                                <li>IP-Adresse</li>
                            </ul>

                            <h2 style={{ fontSize: '1.35rem', marginTop: '2rem', marginBottom: '0.75rem' }}>3. Kontaktaufnahme</h2>
                            <p>Wenn Sie per E-Mail oder über ein Kontaktformular Kontakt mit uns aufnehmen, werden die von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen gespeichert.</p>
                            <p>Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
                            <p><strong>Rechtsgrundlage:</strong></p>
                            <p>Art. 6 Abs. 1 lit. b DSGVO (Vertrag / vorvertragliche Maßnahmen)</p>

                            <h2 style={{ fontSize: '1.35rem', marginTop: '2rem', marginBottom: '0.75rem' }}>4. Server-Logfiles</h2>
                            <p>Beim Besuch dieser Website werden automatisch Informationen durch den Hosting-Provider erhoben und gespeichert („Server-Logfiles").</p>
                            <p>Dies sind insbesondere:</p>
                            <ul style={{ marginBottom: '1.5rem' }}>
                                <li>IP-Adresse</li>
                                <li>Datum und Uhrzeit des Zugriffs</li>
                                <li>Browsertyp und Version</li>
                                <li>Betriebssystem</li>
                                <li>Referrer-URL</li>
                            </ul>
                            <p>Diese Daten dienen ausschließlich der technischen Überwachung und Sicherheit des Betriebs der Website.</p>
                            <p><strong>Rechtsgrundlage:</strong></p>
                            <p>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</p>

                            <h2 style={{ fontSize: '1.35rem', marginTop: '2rem', marginBottom: '0.75rem' }}>5. Cookies</h2>
                            <p>Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind.</p>
                            <p>Es werden keine Marketing- oder Tracking-Cookies ohne Ihre ausdrückliche Zustimmung gesetzt.</p>

                            <h2 style={{ fontSize: '1.35rem', marginTop: '2rem', marginBottom: '0.75rem' }}>6. Weitergabe von Daten</h2>
                            <p>Eine Weitergabe Ihrer personenbezogenen Daten erfolgt nur, wenn:</p>
                            <ul style={{ marginBottom: '1.5rem' }}>
                                <li>dies zur Vertragserfüllung notwendig ist,</li>
                                <li>eine gesetzliche Verpflichtung besteht,</li>
                                <li>oder Sie ausdrücklich eingewilligt haben.</li>
                            </ul>
                            <p>Eine Weitergabe zu Werbezwecken erfolgt nicht.</p>

                            <h2 style={{ fontSize: '1.35rem', marginTop: '2rem', marginBottom: '0.75rem' }}>7. Speicherdauer</h2>
                            <p>Personenbezogene Daten werden nur so lange gespeichert, wie dies zur Erfüllung des jeweiligen Zwecks erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.</p>

                            <h2 style={{ fontSize: '1.35rem', marginTop: '2rem', marginBottom: '0.75rem' }}>8. Ihre Rechte</h2>
                            <p>Ihnen stehen grundsätzlich folgende Rechte zu:</p>
                            <ul style={{ marginBottom: '1.5rem' }}>
                                <li>Recht auf Auskunft</li>
                                <li>Recht auf Berichtigung</li>
                                <li>Recht auf Löschung</li>
                                <li>Recht auf Einschränkung der Verarbeitung</li>
                                <li>Recht auf Datenübertragbarkeit</li>
                                <li>Recht auf Widerruf einer Einwilligung</li>
                            </ul>
                            <p>Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, haben Sie das Recht, sich bei der zuständigen Datenschutzbehörde zu beschweren.</p>
                            <p><strong>Österreichische Datenschutzbehörde</strong></p>
                            <p><a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--theme-primary-color, #0066cc)' }}>www.dsb.gv.at</a></p>

                            <h2 style={{ fontSize: '1.35rem', marginTop: '2rem', marginBottom: '0.75rem' }}>9. Datensicherheit</h2>
                            <p>Wir treffen angemessene technische und organisatorische Sicherheitsmaßnahmen, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Verlust oder Manipulation zu schützen.</p>

                            <h2 style={{ fontSize: '1.35rem', marginTop: '2rem', marginBottom: '0.75rem' }}>10. Änderungen dieser Datenschutzerklärung</h2>
                            <p>Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an geänderte Rechtslagen oder neue Funktionen der Website anzupassen.</p>

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

export default Datenschutz;
