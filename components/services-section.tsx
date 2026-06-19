import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";
import { InsuranceList } from "@/components/insurance-list";
import { Clock, DollarSign, MapPin } from "lucide-react";
import Link from "next/link";

export function ServicesSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Service Offerings Include:
                    </h2>
                </div>

                <div className="grid grid-col-1 md:grid-cols-3 gap-8 mb-6">
                    {siteConfig.services.map((service, index) => {
                        return (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-shadow"
                            >
                                <CardContent className="flex h-full flex-col gap-3 p-6">
                                    <div className="aspect-video overflow-hidden rounded-lg bg-pink-100 mb-4">
                                        <video
                                            className="h-full w-full object-cover"
                                            src={service.video.src}
                                            title={service.video.title}
                                            controls
                                            preload="metadata"
                                            playsInline
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-xl font-bold text-gray-900 text-center">
                                            {service.title}
                                        </h3>
                                        <div className="text-l font-semibold pb-2 text-gray-900 text-center">
                                            <span>
                                                {service.info}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                                        {service.descriptionShort}
                                    </p>

                                    <div className="mt-auto grid grid-flow-col gap-2 px-2 py-2 space-x-4 text-sm text-gray-600 bg-pink-50 rounded-sm">
                                        <div className="flex items-center justify-center">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {service.duration}
                                        </div>
                                        {service.price && (
                                            <div className="flex items-center justify-center">
                                                <DollarSign className="w-4 h-4 mr-1" />
                                                {service.price}
                                            </div>
                                        )}
                                        <div className="flex items-center justify-center">
                                            <MapPin className="w-4 h-4 mr-1" />
                                            {service.type}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>                            
                        );
                    })}
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col items-center mb-12 gap-y-4">
                        <Link href="/services">
                            <button className="bg-pink-300 hover:bg-pink-400 text-white px-6 py-4 rounded-md font-medium transition-colors cursor-pointer">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>   
                {/* Insurance Section (Reusable) */}
                <InsuranceList title="Accepted Insurances" />
            </div>
        </section>
    );
}
