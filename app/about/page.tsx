import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <Navigation />

            <div className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Meet Your Practitioner
                        </h1>
                        <p className="text-xl text-gray-600">
                            Dedicated to providing compassionate, specialized
                            mental health care
                        </p>
                    </div>

                    <Card className="overflow-hidden mb-12">
                        <CardContent className="p-0">
                            <div className="md:flex">
                                <div className="md:w-1/3 bg-gradient-to-br from-emerald-300 to-emerald-400 p-8 text-white">
                                    <div className="text-center">
                                        <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 overflow-hidden">
                                            <Image
                                                src="/mirandaBiographyPicture.jpg"
                                                alt="Miranda Townsend, Psychiatric Nurse Practitioner"
                                                width={128}
                                                height={128}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>
                                        <h2 className="text-2xl font-bold mb-2">
                                            {siteConfig.practitioner.name}
                                        </h2>
                                        <p className="text-lg opacity-90 mb-4">
                                            {siteConfig.practitioner.title}
                                        </p>
                                        <p className="text-sm opacity-75">
                                            {
                                                siteConfig.practitioner
                                                    .credentials
                                            }
                                        </p>
                                    </div>
                                </div>

                                <div className="md:w-2/3 p-8">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                        Biography
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {siteConfig.practitioner.bio}
                                    </p>

                                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                        Areas of Expertise
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {siteConfig.practitioner.specialties.map(
                                            (specialty, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="secondary"
                                                    className="bg-emerald-100 text-emerald-400"
                                                >
                                                    {specialty}
                                                </Badge>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* The Approach Section */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold text-emerald-300 mb-4">
                                    The Approach
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {siteConfig.practitioner.approach}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold text-emerald-300 mb-4">
                                    Philosophy
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {siteConfig.practitioner.philosophy}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold text-emerald-300 mb-4">
                                    Commitment
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {siteConfig.practitioner.commitment}
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Mission Section */}
                    <div className="text-center bg-gradient-to-r from-emerald-300 to-emerald-400 rounded-2xl p-12 text-white">
                        <h3 className="text-3xl font-bold mb-4">Mission</h3>
                        <p className="text-xl opacity-90">
                            Elevating the mental health of youth through
                            inclusive psychiatric services.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
