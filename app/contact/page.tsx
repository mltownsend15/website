"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    MapPin,
    Phone,
    VoicemailIcon as Fax,
    Mail,
    Clock,
    MessageSquare,
    Download,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [smsConsent, setSmsConsent] = useState(false);

    return (
        <div className="min-h-screen">
            <Navigation />

            <div className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Contact Miranda for a Free Consultation
                        </h1>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-6">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-4 mb-6">
                                        <MapPin className="w-6 h-6 text-emerald-300 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-2">
                                                Location
                                            </h3>
                                            <p className="text-gray-600 mb-1">
                                                {siteConfig.contact.note}
                                            </p>
                                            <p className="text-gray-600">
                                                {siteConfig.contact.address}
                                            </p>
                                            <p className="text-gray-600">
                                                {siteConfig.contact.city}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 mb-6">
                                        <Phone className="w-6 h-6 text-emerald-300 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-2">
                                                Phone
                                            </h3>
                                            <a
                                                href={`tel:${siteConfig.contact.phone}`}
                                                className="text-emerald-300 hover:text-emerald-400 font-medium"
                                            >
                                                {siteConfig.contact.phone}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 mb-6">
                                        <Fax className="w-6 h-6 text-emerald-300 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-2">
                                                Fax
                                            </h3>
                                            <p className="text-gray-600">
                                                {siteConfig.contact.fax}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 mb-6">
                                        <Clock className="w-6 h-6 text-emerald-300 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-2">
                                                Office Hours
                                            </h3>
                                            {siteConfig.contact.hours.map(
                                                (hour, index) => (
                                                    <p
                                                        key={index}
                                                        className="text-gray-600"
                                                    >
                                                        {hour}
                                                    </p>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 mb-6">
                                        <Mail className="w-6 h-6 text-emerald-300 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-2">
                                                Email
                                            </h3>
                                            <a
                                                href={`mailto:${siteConfig.contact.email}`}
                                                className="text-emerald-300 hover:text-emerald-400 font-medium"
                                            >
                                                {siteConfig.contact.email}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Enhanced Booking Policy Section with Download */}
                                    <div className="bg-emerald-50 rounded-lg p-4">
                                        <div className="flex items-start space-x-4">
                                            <MessageSquare className="w-6 h-6 text-emerald-300 mt-1 flex-shrink-0" />
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-900 mb-2">
                                                    Booking Policy
                                                </h3>
                                                <p className="text-gray-600 text-sm mb-3">
                                                    {
                                                        siteConfig.contact
                                                            .bookingNote
                                                    }
                                                </p>

                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="border-emerald-300 text-emerald-300 hover:bg-emerald-300 hover:text-white bg-transparent"
                                                    asChild
                                                >
                                                    <a
                                                        href="/Blink_Phone_SMS_messaging_Manditory.docx"
                                                        download="Blink_Phone_SMS_messaging_Manditory.docx"
                                                        className="flex items-center"
                                                    >
                                                        <Download className="w-4 h-4 mr-2" />
                                                        Download Texting Policy
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Actions and Consent Forms */}
                        <div className="space-y-6">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                        Before Getting Started
                                    </h3>

                                    <div className="space-y-6 mb-8">
                                        {/* SMS Consent Checkbox */}
                                        <div className="flex items-start space-x-3">
                                            <input
                                                type="checkbox"
                                                id="sms-consent"
                                                checked={smsConsent}
                                                onChange={(e) =>
                                                    setSmsConsent(
                                                        e.target.checked
                                                    )
                                                }
                                                className="mt-1 h-4 w-4 text-emerald-300 focus:ring-emerald-300 border-gray-300 rounded"
                                            />
                                            <label
                                                htmlFor="sms-consent"
                                                className="text-gray-700 leading-relaxed text-sm"
                                            >
                                                I authorize Townsend Medical
                                                Services PLLC to communicate
                                                with me via SMS/texting and
                                                understand that this form of
                                                communication may not be fully
                                                secure.
                                            </label>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {/* Email Button */}
                                        <Button
                                            size="lg"
                                            className="w-full bg-emerald-300 hover:bg-emerald-400 text-white"
                                            asChild
                                        >
                                            <a
                                                href={`mailto:${siteConfig.contact.email}?subject=Free Consultation Request&body=Hello Miranda,%0D%0A%0D%0AI would like to schedule a free consultation. Please let me know your availability.%0D%0A%0D%0AThank you!`}
                                            >
                                                <Mail className="w-5 h-5 mr-2" />
                                                Send Email
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
