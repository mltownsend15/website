"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Clock,
    DollarSign,
    MapPin,
    Brain,
    Pill,
    Puzzle,
    X,
} from "lucide-react";
import { useState } from "react";

const iconMap = {
    brain: Brain,
    pill: Pill,
    puzzle: Puzzle,
};

export default function ServicesPage() {
    const [selectedService, setSelectedService] = useState<number | null>(null);

    const openModal = (index: number) => {
        setSelectedService(index);
        // Prevent body scroll when modal is open
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedService(null);
        // Restore body scroll
        document.body.style.overflow = "unset";
    };

    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Services Overview Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Service Offerings
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {siteConfig.services.map((service, index) => {
                            const IconComponent =
                                iconMap[service.icon as keyof typeof iconMap];
                            return (
                                <Card
                                    key={index}
                                    className="hover:shadow-lg transition-shadow cursor-pointer"
                                >
                                    <CardContent className="p-6">
                                        <div className="aspect-video bg-pink-100 rounded-lg mb-4 flex items-center justify-center">
                                            <IconComponent className="w-12 h-12 text-pink-300" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            {service.description}
                                        </p>

                                        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                                            <div className="flex items-center">
                                                <Clock className="w-4 h-4 mr-1" />
                                                {service.duration}
                                            </div>
                                            <div className="flex items-center">
                                                <DollarSign className="w-4 h-4 mr-1" />
                                                {service.price}
                                            </div>
                                            <div className="flex items-center">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                {service.type}
                                            </div>
                                        </div>

                                        <Button
                                            className="w-full bg-pink-300 hover:bg-pink-400 text-white"
                                            onClick={() => openModal(index)}
                                        >
                                            More Info
                                        </Button>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedService !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-900">
                                {siteConfig.services[selectedService].title}
                            </h2>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={closeModal}
                                className="h-8 w-8 rounded-full hover:bg-gray-100"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>

                        <div className="p-6">
                            <div className="mb-6">
                                <p className="text-lg text-gray-600 mb-4">
                                    {
                                        siteConfig.services[selectedService]
                                            .subtitle
                                    }
                                </p>

                                <div className="flex items-center space-x-6 text-sm bg-gray-50 rounded-lg p-4 inline-flex">
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-2 text-gray-500" />
                                        <span>
                                            {
                                                siteConfig.services[
                                                    selectedService
                                                ].duration
                                            }
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <DollarSign className="w-4 h-4 mr-2 text-gray-500" />
                                        <span>
                                            {
                                                siteConfig.services[
                                                    selectedService
                                                ].price
                                            }
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                                        <span>
                                            {
                                                siteConfig.services[
                                                    selectedService
                                                ].type
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    Service Description
                                </h3>

                                {siteConfig.services[selectedService]
                                    .detailedDescription && (
                                    <div className="prose max-w-none">
                                        <p className="text-gray-700 font-medium mb-4">
                                            {
                                                siteConfig.services[
                                                    selectedService
                                                ].detailedDescription!.intro
                                            }
                                        </p>
                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {
                                                siteConfig.services[
                                                    selectedService
                                                ].detailedDescription!.content
                                            }
                                        </p>

                                        {siteConfig.services[selectedService]
                                            .detailedDescription!.points && (
                                            <div className="space-y-4 mb-6">
                                                {siteConfig.services[
                                                    selectedService
                                                ].detailedDescription!.points!.map(
                                                    (point, pointIndex) => (
                                                        <p
                                                            key={pointIndex}
                                                            className="text-gray-600 leading-relaxed"
                                                        >
                                                            {point}
                                                        </p>
                                                    )
                                                )}
                                            </div>
                                        )}

                                        {siteConfig.services[selectedService]
                                            .detailedDescription!
                                            .conclusion && (
                                            <p className="text-gray-600 leading-relaxed">
                                                {
                                                    siteConfig.services[
                                                        selectedService
                                                    ].detailedDescription!
                                                        .conclusion
                                                }
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                                <Button
                                    onClick={closeModal}
                                    className="bg-pink-300 hover:bg-pink-400 text-white px-8"
                                >
                                    Close
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
