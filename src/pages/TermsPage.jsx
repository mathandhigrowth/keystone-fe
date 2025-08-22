import { EMAIL, EMAIL2, PHONE_NUMBER } from '@/config/config'
import React from 'react'

const TermsPage = () => {
    return (
        <div className="container py-12">
            <h1 className="heading-1 mb-8">Terms & Conditions</h1>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">Introduction</h2>
                <p className="mb-5 text-lg text-[var(--color-dark)]">
                    By accessing or using the website, products, or services of Keystone Instruments (India) Pvt Ltd ("Keystone", "we", "us", or "our"), you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please discontinue use of our offerings.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">Use of Services</h2>
                <p className="mb-5">
                    All users must comply with these Terms & Conditions when using any of Keystone's products or services. Unauthorized, unlawful, or fraudulent use is strictly prohibited.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">Orders & Acceptance</h2>
                <p className="mb-5">
                    Orders submitted through our website, email, or direct contact represent an offer to purchase and are subject to confirmation. Keystone reserves the right to modify product offerings, terms, pricing, and availability prior to final acceptance.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">Payment Terms</h2>
                <p className="mb-5">
                    Payment is required according to the terms specified in the official invoice or agreement. Accepted payment methods and schedules are detailed for each order. Failure to pay may result in delays or cancellation of services.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">Delivery & Returns</h2>
                <p className="mb-5">
                    Delivery timelines are reasonable estimates and subject to logistical factors. Keystone is not liable for delays caused by events beyond its control. Returns are accepted only if authorized, unused, and compliant with our return policy.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">Warranty & Support</h2>
                <p className="mb-5">
                    Warranty coverage is based on the specific terms provided at purchase. Keystone supports warranty claims as per the stated process. We are not responsible for damages from misuse, improper installation, or modification.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">Liability</h2>
                <p className="mb-5">
                    Keystone shall not be liable for any indirect, incidental, consequential, or special damages arising from use of its products or services. Technical advice and recommendations are provided in good faith but without guarantee, unless expressly stated.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">Intellectual Property</h2>
                <p className="mb-5">
                    All content, documentation, and materials provided by Keystone are protected under intellectual property laws. No part of our website or documentation may be copied or reused without prior written consent.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">Privacy Policy</h2>
                <p className="mb-5">
                    Keystone respects your privacy. Data collected is handled in accordance with our Privacy Policy and applicable laws, used only for processing orders, fulfilling services, and improving our offerings.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">Amendments</h2>
                <p className="mb-5">
                    Keystone may revise these Terms & Conditions at any time. Updates are effective upon posting on our website. Continued use of our services constitutes acceptance of the revised terms.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">Governing Law</h2>
                <p className="mb-5">
                    These Terms & Conditions are governed by the laws of the Republic of India. Any disputes will be subject to the exclusive jurisdiction of courts located in Coimbatore, Tamil Nadu.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="heading-2 mb-3">Contact</h2>
                <p className="mb-5">
                    For any questions related to these Terms & Conditions, please contact:<br />
                    Keystone Instruments (India) Pvt Ltd<br />
                    Door No. 4-6, First Floor, Kattoor Street, Papanaikenpalayam,<br />
                    Coimbatore, Tamil Nadu, INDIA - 641037<br />
                    Phone: {PHONE_NUMBER}<br />
                    Email: {EMAIL2}
                </p>
            </section>

            <p className="text-muted text-sm">
                By using Keystone’s products or services, you acknowledge and agree to these Terms & Conditions.
            </p>
        </div>
    )
}

export default TermsPage