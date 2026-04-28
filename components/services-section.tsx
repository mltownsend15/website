import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";
import { InsuranceList } from "@/components/insurance-list";
import { Brain, Pill, Puzzle, Clock, DollarSign, MapPin } from "lucide-react";
import Link from "next/link";

const iconMap = {
    brain: Brain,
    pill: Pill,
    puzzle: Puzzle,
};

export function ServicesSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Service Offerings Include:
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Specialized mental health services for ages{" "}
                        {siteConfig.eligibility.ageRange}
                    </p>
                </div>

                <div className="grid grid-col-1 md:grid-cols-3 gap-8 mb-6">
                    {siteConfig.services.map((service, index) => {
                        const IconComponent =
                            iconMap[service.icon as keyof typeof iconMap];
                        return (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-shadow"
                            >
                                <CardContent className="grid grid-rows-subgrid gap-3 p-6">
                                    
                                    <div className="row-span-8 flex flex-col gap-2">
                                        <h3 className="text-xl font-bold text-gray-900 text-center">
                                            {service.title}
                                        </h3>
                                        <div className="text-l font-semibold pb-2 text-gray-900 text-center">
                                            <span>
                                                {service.info}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="row-span-4 text-gray-600 text-sm leading-relaxed text-center">
                                        {service.description}
                                    </p>

                                    <div className="row-start-14 row-span-4 flex justify-center items-center space-x-4 text-sm text-gray-600 bg-pink-50 rounded-sm">
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
                                    <div className="row-start-1 aspect-video bg-pink-100 rounded-lg mb-4 flex items-center justify-center">
                                        <IconComponent className="w-12 h-12 text-pink-300" />
                                    </div>
                                </CardContent>
                            </Card>                            
                        );
                    })}
                </div>
                <div className="flex justify-center mb-12">
                    <Link href="/services">
                        <button className="bg-pink-300 hover:bg-pink-400 text-white px-6 py-4 rounded-md font-medium transition-colors cursor-pointer">
                            More About Our Services 
                        </button>
                    </Link>
                </div>    
                {/* Insurance Section (Reusable) */}
                <InsuranceList title="Accepted Insurances" />
            </div>
        </section>
    );
}
