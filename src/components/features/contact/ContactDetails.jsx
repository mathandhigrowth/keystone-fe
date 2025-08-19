import { EMAIL, EMAIL2, PHONE_NUMBER } from "@/config/config";
import { Briefcase, Headphones, MapPin, Phone, UserRoundIcon } from "lucide-react";

export default function ContactDetails() {
    return (
        <div className=" pb-24 sm:pb-32 pt-5">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-0.5 bg-gray-300"></div>
                        <span className="text-sm uppercase tracking-wider text-gray-600">Help Center</span>
                    </div>
                    <h2 className="text-5xl font-bold leading-tight text-[var(--color-dark)]">
                        Get <span className="bg-[var(--color-accent)] text-white px-2 -mx-2">assistance</span>
                    </h2>
                    <p className="text-lg text-gray-700">
                        We understand that sometimes you need a helping hand. Find the assistance you need below.
                    </p>
                </div>

                {/* Contact Options */}
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">

                    <div className="bg-[var(--color-surface)] p-8 rounded-lg shadow-2xl flex flex-col ring ring-primary items-start text-left">
                        <div className="p-4 rounded-full bg-orange-100 mb-4">
                            <Briefcase className="w-8 h-8 text-[var(--color-accent)]" />
                        </div>
                        <div className="flex flex-auto flex-col items-start">
                            <div className="flex-auto">
                                <h3 className="text-xl font-medium tracking-tight text-gray-900">
                                    Contact sales
                                </h3>
                                <p className="mt-2 text-base leading-7 text-gray-600">
                                    Talk to our helpful team.
                                </p>
                            </div>
                            <a
                                href={`mailto:${EMAIL}`}
                                className="mt-4 inline-block text-base font-semibold text-primary"
                            >
                                {EMAIL}
                            </a>
                        </div>
                    </div>
                    <div className="bg-[var(--color-surface)] p-8 rounded-lg shadow-2xl flex flex-col ring ring-primary items-start text-left">
                        <div className="p-4 rounded-full bg-orange-100 mb-4">
                            <Headphones className="w-8 h-8 text-[var(--color-accent)]" />
                        </div>
                        <div className="flex flex-auto flex-col items-start">
                            <div className="flex-auto">
                                <h3 className="text-xl font-medium tracking-tight text-gray-900">
                                    Contact support
                                </h3>
                                <p className="mt-2 text-base leading-7 text-gray-600">
                                    We're ready to assist you.
                                </p>
                            </div>
                            <a
                                href={`mailto:${EMAIL2}`}
                                className="mt-4 inline-block text-base font-semibold text-primary"
                            >
                                {EMAIL2}
                            </a>
                        </div>
                    </div>

                    <div className="bg-[var(--color-surface)] p-8 rounded-lg shadow-2xl flex flex-col ring ring-primary items-start text-left">
                        <div className="p-4 rounded-full bg-orange-100 mb-4">
                            <MapPin className="w-8 h-8 text-[var(--color-accent)]" />
                        </div>
                        <div className="flex flex-auto flex-col items-start">
                            <div className="flex-auto">
                                <h3 className="text-xl font-medium tracking-tight text-gray-900">
                                    Visit us
                                </h3>
                                <p className="mt-2 text-base leading-7 text-gray-600">
                                    Come see us at our HQ.
                                </p>
                            </div>
                            <span
                                className="mt-4 inline-block text-base font-semibold text-primary"
                            >Papanickenpalayam, Coimbatore – 641037               </span>
                        </div>
                    </div>

                    <div className="bg-[var(--color-surface)] p-8 rounded-lg shadow-2xl flex flex-col ring ring-primary items-start text-left">
                        <div className="p-4 rounded-full bg-orange-100 mb-4">
                            <Phone className="w-8 h-8 text-[var(--color-accent)]" />
                        </div>
                        <div className="flex flex-auto flex-col items-start">
                            <div className="flex-auto">
                                <h3 className="text-xl font-medium tracking-tight text-gray-900">
                                    Call us
                                </h3>
                                <p className="mt-2 text-base leading-7 text-gray-600">
                                    Mon - Sat, 09:30am – 06:30pm
                                </p>
                            </div>
                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                className="mt-4 inline-block text-base font-semibold text-primary"
                            >
                                {PHONE_NUMBER}
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
