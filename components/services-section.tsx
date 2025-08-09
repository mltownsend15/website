import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";
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

                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {siteConfig.services.map((service, index) => {
                        const IconComponent =
                            iconMap[service.icon as keyof typeof iconMap];
                        return (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-shadow"
                            >
                                <CardContent className="p-6">
                                    <div className="aspect-video bg-emerald-100 rounded-lg mb-4 flex items-center justify-center">
                                        <IconComponent className="w-12 h-12 text-emerald-300" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
                                        {service.description}
                                    </p>

                                    <div className="flex justify-center items-center space-x-4 text-sm text-gray-500 mb-4">
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

                                    <div className="text-center">
                                        <Link href="/services">
                                            <button className="bg-emerald-300 hover:bg-emerald-400 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                                                More Info
                                            </button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {siteConfig.services.map((service, index) => {
                        const IconComponent =
                            iconMap[service.icon as keyof typeof iconMap];
                        return (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-shadow"
                            >
                                <CardContent className="p-6">
                                    <div className="aspect-video bg-pink-100 rounded-lg mb-4 flex items-center justify-center">
                                        <IconComponent className="w-12 h-12 text-pink-300" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
                                        {service.description}
                                    </p>

                                    <div className="flex justify-center items-center space-x-4 text-sm text-gray-500 mb-4">
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

                                    <div className="text-center">
                                        <Link href="/services">
                                            <button className="bg-pink-300 hover:bg-pink-400 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                                                More Info
                                            </button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Insurance Section */}
                <div className="bg-white rounded-lg p-8 shadow-sm">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                        We Accept These In-Network Insurances
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {siteConfig.insurance.map((insurer, index) => (
                            <div
                                key={index}
                                className="p-3 bg-gray-50 rounded-lg"
                            >
                                <span className="text-sm font-medium text-gray-700">
                                    {insurer}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
