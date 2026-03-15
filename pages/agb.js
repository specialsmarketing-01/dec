import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/footer/Footer';
import BackToTop from '../components/backToTop/backToTop';
import ChatBot from '../components/ChatBot/ChatBot';

const AGB = () => {
    const sectionStyle = { fontSize: '1.35rem', marginTop: '2rem', marginBottom: '0.75rem' };
    const listStyle = { marginBottom: '1.5rem' };

    return (
        <>
            <Navbar />
            <section className="section-padding" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="mb-4" style={{ fontSize: '2rem', fontWeight: 700 }}>AGB</h1>
                            <h2 style={{ fontSize: '1.35rem', marginTop: '1rem', marginBottom: '1.5rem', fontWeight: 600 }}>Allgemeine Geschäftsbedingungen</h2>

                            <h2 style={sectionStyle}>1. Geltungsbereich</h2>
                            <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäftsbeziehungen zwischen Arslan Pirbudagov, Einzelunternehmer, Wien (nachfolgend „Auftragnehmer") und seinen Kunden, sofern diese Unternehmer im Sinne des UGB sind.</p>
                            <p>Verträge mit Konsumenten werden nicht abgeschlossen.</p>
                            <p>Abweichende Bedingungen des Kunden gelten nur, wenn sie vom Auftragnehmer ausdrücklich schriftlich anerkannt wurden.</p>

                            <h2 style={sectionStyle}>2. Vertragsabschluss</h2>
                            <p>Ein Vertrag kommt zustande durch:</p>
                            <ul style={listStyle}>
                                <li>schriftliche Annahme eines Angebots,</li>
                                <li>Beauftragung per E-Mail oder Telefon,</li>
                                <li>Beginn der Leistungserbringung,</li>
                                <li>oder durch Bezahlung einer Rechnung.</li>
                            </ul>

                            <h2 style={sectionStyle}>3. Leistungen</h2>
                            <p>Der Auftragnehmer erbringt insbesondere Leistungen in den Bereichen:</p>
                            <ul style={listStyle}>
                                <li>Webdesign & Websitepflege</li>
                                <li>Social Media Marketing</li>
                                <li>SEO-Optimierung (Onpage & Offpage)</li>
                                <li>Google Ads Betreuung</li>
                                <li>Social Media Betreuung</li>
                                <li>Printprodukte (z. B. Visitenkarten, Flyer), sofern vereinbart</li>
                            </ul>
                            <p>Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Angebot oder der individuellen Vereinbarung.</p>

                            <h2 style={sectionStyle}>4. Mitwirkungspflichten des Kunden</h2>
                            <p>Der Kunde verpflichtet sich, alle zur Leistungserbringung erforderlichen Informationen, Inhalte und Zugangsdaten rechtzeitig bereitzustellen sowie notwendige Freigaben ohne schuldhafte Verzögerung zu erteilen.</p>
                            <p>Verzögerungen aufgrund fehlender Mitwirkung verlängern vereinbarte Fristen entsprechend.</p>

                            <h2 style={sectionStyle}>5. Preise & Zahlungsbedingungen</h2>
                            <ul style={listStyle}>
                                <li>Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.</li>
                                <li>Die Vergütung ist nach Erbringung der Leistung fällig.</li>
                                <li>Rechnungen sind innerhalb von 14 Tagen ab Rechnungsdatum ohne Abzug zu bezahlen.</li>
                                <li>Bei Zahlungsverzug gelten die gesetzlichen Verzugszinsen.</li>
                                <li>Fremdkosten (z. B. Werbebudgets, Druckkosten, Software, Domains) trägt der Kunde gesondert.</li>
                            </ul>

                            <h2 style={sectionStyle}>6. Korrekturen & Zusatzleistungen</h2>
                            <p>Umfang, Anzahl und Art von Korrekturen oder Änderungswünschen ergeben sich aus dem jeweiligen Angebot oder einer individuellen Vereinbarung.</p>
                            <p>Nicht ausdrücklich vereinbarte Leistungen gelten als Zusatzleistungen und werden gesondert verrechnet.</p>

                            <h2 style={sectionStyle}>7. Nutzungsrechte</h2>
                            <p>Sämtliche Nutzungsrechte an erstellten Werken gehen erst nach vollständiger Bezahlung der vereinbarten Vergütung auf den Kunden über.</p>
                            <p>Bis zur vollständigen Bezahlung verbleiben sämtliche Rechte beim Auftragnehmer.</p>

                            <h2 style={sectionStyle}>8. Haftung</h2>
                            <p>Der Auftragnehmer haftet ausschließlich für Schäden, die vorsätzlich oder grob fahrlässig verursacht wurden.</p>
                            <p>Eine Haftung für leichte Fahrlässigkeit, entgangenen Gewinn, mittelbare Schäden oder Folgeschäden ist – soweit gesetzlich zulässig – ausgeschlossen.</p>

                            <h2 style={sectionStyle}>9. SEO-, Marketing- & Werbeleistungen</h2>
                            <p>Bei Leistungen im Bereich SEO, Online-Marketing, Social Media und Google Ads wird kein bestimmter Erfolg garantiert.</p>
                            <p>Insbesondere wird keine Garantie für Rankings, Reichweiten, Umsätze, Leads oder Conversions übernommen.</p>
                            <p>Änderungen von Algorithmen oder Plattformrichtlinien liegen außerhalb des Einflussbereichs des Auftragnehmers.</p>

                            <h2 style={sectionStyle}>10. Referenzen</h2>
                            <p>Der Auftragnehmer ist berechtigt, erbrachte Leistungen unter Nennung des Kundennamens und/oder Logos als Referenz zu verwenden, sofern keine anderslautende Vereinbarung getroffen wurde.</p>

                            <h2 style={sectionStyle}>11. Datenschutz</h2>
                            <p>Der Auftragnehmer verarbeitet personenbezogene Daten ausschließlich im Rahmen der geltenden gesetzlichen Bestimmungen, insbesondere der DSGVO.</p>

                            <h2 style={sectionStyle}>12. Gerichtsstand & Recht</h2>
                            <p>Es gilt österreichisches Recht.</p>
                            <p>Gerichtsstand ist Wien.</p>

                            <h2 style={sectionStyle}>13. Salvatorische Klausel</h2>
                            <p>Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>

                            <p style={{ marginTop: '2.5rem' }}>
                                <Link href="/" className="theme-btn">Zurück zur Startseite</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <BackToTop />
            <ChatBot />
        </>
    );
};

export default AGB;
