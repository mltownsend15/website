import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
    return (
        <div
            className="relative min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/forest.avif)" }}
        >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Main heading with enhanced text styling */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                        {siteConfig.tagline}
                    </h1>

                    {/* Subtitle with better contrast */}
                    <div className="bg-black/5 rounded-lg p-6 mb-8 backdrop-blur-sm shadow-xl">
                        <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                            Virtual psychiatric care for youth ages{" "}
                            {siteConfig.eligibility.ageRange} specializing in
                            autism, ADHD, anxiety, and mood disorders
                        </p>
                    </div>

                    {/* Call-to-action buttons */}
                    <div className="flex justify-center items-center">
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
                                Apply Here
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </div>
    );
}
