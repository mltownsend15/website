"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Clock,
    DollarSign,
    MapPin,
    XCircle,
    ChevronDown,
} from "lucide-react";
import { useState } from "react";

export default function ServicesPage() {
    const [revealedIndex, setRevealedIndex] = useState<number | null>(null);


    const openMoreInfo = (index: number) => {
        setRevealedIndex((prev) => (prev === index ? null : index));
    };
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const closeMoreInfo = () => {
        setRevealedIndex(null);
    };
    /* eslint-enable @typescript-eslint/no-unused-vars */

    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Services Overview Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 pb-8 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Service Offerings
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        {siteConfig.services.map((service, index) => {
                            return (
                                <Card
                                    key={index}
                                    className="hover:shadow-lg transition-shadow cursor-pointer"
                                >
                                    <CardContent className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-3 grid-flow-col gap-8 p-6 relative">
                                        <div className="md:col-span-2 flex flex-col gap-2">
                                            <div className="flex flex-col">
                                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                                    {service.title}
                                                </h3>
                                                <div className="text-l font-semibold pb-2 text-gray-900">
                                                    <span>
                                                        {service.info}
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                {service.descriptionShort}
                                            </p>
                                            <div className="flex justify-center md:absolute top-0 right-6">
                                                <div className="flex justify-between items-center text-sm text-gray-500 gap-2 mb-4">
                                                    <div className="flex items-center">
                                                        <Clock className="w-4 h-4 mr-1" />
                                                        {service.duration}
                                                    </div>
                                                    {service.price && (
                                                        <div className="flex items-center">
                                                            <DollarSign className="w-4 h-4 mr-1" />
                                                            {service.price}
                                                        </div>
                                                    )}
                                                    <div className="flex items-center">
                                                        <MapPin className="w-4 h-4 mr-1" />
                                                        {service.type}
                                                    </div>
                                                </div>
                                            </div>
                                            <a
                                                className="flex items-center w-full text-pink-300 hover:text-pink-400 font-bold gap-2 cursor-pointer"
                                                onClick={() => openMoreInfo(index)}
                                            >
                                                {revealedIndex === index ? "Less Info" : "More Info"}
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform duration-200 ${
                                                        revealedIndex === index ? "rotate-180" : ""
                                                    }`}
                                                />
                                            </a>
                                            {revealedIndex === index && (
                                                <p className="text-gray-700 text-sm leading-relaxed mt-2 border-t border-gray-100 pt-4">
                                                    {service.description}
                                                </p>
                                            )}
                                        </div>
                                        <div className="col-start-1 md:row-start-1 aspect-video overflow-hidden rounded-lg bg-pink-100 mb-4">
                                            <video
                                                className="h-full w-full object-cover"
                                                src={service.video.src}
                                                title={service.video.title}
                                                controls
                                                preload="metadata"
                                                playsInline
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Card className="bg-red-50 border-red-200">
                            <CardHeader>
                                <CardTitle className="text-xl text-red-800 flex items-center">
                                    <XCircle className="w-6 h-6 mr-2" />
                                    Services Not Offered
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="text-red-700 space-y-2">
                                    <li>
                                        1. It is beyond the scope of my practice to
                                        consult, provide expert witness, or to
                                        participate in placement decisions of a
                                        youth in legal proceedings such as in the
                                        case of divorce.
                                    </li>
                                    <li>
                                        2. Therapy without medication management.
                                    </li>
                                    <li>3. I do not prescribe benzodiazepines.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
            </div>

            <Footer />
        </div>
    );
}
