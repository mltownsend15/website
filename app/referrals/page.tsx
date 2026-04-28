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
                            href="https://miranda-townsend.clientsecure.me/contact-widget"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Get Started
                        </a>
                    </Button>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div className="width-full flex justify-center">
                        <div className="max-w-[70ch] flex flex-col gap-6 text-pretty">
                            <p>If you are referring a patient for services, please direct them to complete the <b>“Get Started”</b> form on our website. They will be offered a complimentary consultation call prior to scheduling. Any relevant collateral information is welcome and may be faxed to <b>509-606-1514</b>.</p>
                            <p>If you are seeking services for yourself, please complete the <b>“Get Started”</b> form as well. If you prefer to discuss options before completing intake paperwork, you are welcome to call <a href="tel:5096060708" className="font-semibold text-emerald-500">509-606-0708</a> to speak with Miranda Townsend.</p>
                        </div>
                    </div>
                    {/* Insurance Section (Reusable) */}
                    <InsuranceList title="Accepted Insurances" />
                </div>
            </div>

            <Footer />
        </div>
    );
}
