import { EMAIL2, PHONE_NUMBER } from '@/config/config'
import React from 'react'

const PrivacyPolicyPage = () => {
    return (
        <div className="container py-12">
            <h1 className="heading-1 mb-8">Privacy Policy</h1>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">Introduction</h2>
                <p className="mb-5 text-lg text-[var(--color-dark)]">
                    Keystone Instruments (India) Pvt Ltd ("Keystone", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">Information We Collect</h2>
                <p className="mb-5">
                    We collect personal information you voluntarily provide to us when you interact with our website, make inquiries, or place orders. This information may include your name, email address, phone number, billing and shipping addresses, and payment details.
                </p>
                <p>
                    Additionally, we may collect non-personal information automatically through cookies or other tracking technologies to improve your user experience.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">How We Use Your Information</h2>
                <p className="mb-5">Your information is used to:</p>
                <ul className="list-disc list-inside mb-5">
                    <li>Process and fulfill your orders</li>
                    <li>Respond to inquiries and provide customer support</li>
                    <li>Improve our website, products, and services</li>
                    <li>Send you important updates, promotions, or notifications (with your consent where required)</li>
                    <li>Meet legal and regulatory requirements</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">Information Sharing and Disclosure</h2>
                <p className="mb-5">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business, fulfilling orders, or complying with the law, provided they agree to protect your information.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">Cookies and Tracking Technologies</h2>
                <p className="mb-5">
                    Our website uses cookies and similar technologies to enhance your experience, analyze traffic, and provide personalized content. You can control cookie preferences through your browser settings. Disabling cookies may affect site functionality.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">Data Security</h2>
                <p className="mb-5">
                    We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">Your Rights</h2>
                <p className="mb-5">
                    You have the right to access, correct, or delete your personal information in accordance with applicable laws. You may also withdraw consent for marketing communications at any time.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">Children's Privacy</h2>
                <p className="mb-5">
                    Our services are not directed to children under the age of 18. We do not knowingly collect personal information from children.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">Changes to This Privacy Policy</h2>
                <p className="mb-5">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">Contact Us</h2>
                <p>
                    If you have questions or concerns about this Privacy Policy, please contact us at:<br />
                    Keystone Instruments (India) Pvt Ltd<br />
                    Door No. 4-6, First Floor, Kattoor Street, Papanaikenpalayam,<br />
                    Coimbatore, Tamil Nadu, INDIA - 641037<br />
                    Phone: {PHONE_NUMBER}<br />
                    Email: {EMAIL2}
                </p>
            </section>
        </div>
    )
}

export default PrivacyPolicyPage