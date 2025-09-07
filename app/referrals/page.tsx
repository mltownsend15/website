import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InsuranceList } from "@/components/insurance-list";

export default function ReferralsPage() {
    // Placeholder values to be filled in later
    const WA_LICENSE_NUMBER = siteConfig.contact.licenseNumber; // Replace with actual license number
    const FAX_NUMBER = siteConfig.contact.fax; // Uses existing fax if present

    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Hero / Header Section */}
            <div className="bg-gradient-to-r from-emerald-300 to-emerald-400 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-white mb-6">
                        Referrals
                    </h1>
                    <p className="text-xl text-white mb-8 opacity-90">
                        Key information for referring providers and partners.
                    </p>
                    <Button
                        size="lg"
                        className="bg-emerald-300 hover:bg-emerald-400 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200 min-w-[160px]"
                        asChild
                    >
                        <a
                            href="https://www.valant.io/prospectivepatient/TownsendMedicalServicesPLLC"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Apply Here
                        </a>
                    </Button>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    {/* License & Fax */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">
                                Provider Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-gray-600">
                            <p>
                                <span className="font-semibold text-gray-900">
                                    WA License:
                                </span>{" "}
                                <span>{WA_LICENSE_NUMBER}</span>
                            </p>
                            <p>
                                <span className="font-semibold text-gray-900">
                                    Fax:
                                </span>{" "}
                                <span>{FAX_NUMBER}</span>
                            </p>
                        </CardContent>
                    </Card>

                    {/* Insurance Section (Reusable) */}
                    <InsuranceList title="Accepted Insurances" />
                </div>
            </div>

            <Footer />
        </div>
    );
}
