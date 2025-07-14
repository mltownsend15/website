import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {siteConfig.name}
                        </h3>
                        <div className="text-gray-600 space-y-1">
                            <p>{siteConfig.contact.phone}</p>
                            <p>{siteConfig.contact.email}</p>
                            <p>{siteConfig.contact.address}</p>
                            <p>{siteConfig.contact.city}</p>
                        </div>
                    </div>

                    <div className="text-center md:text-right">
                        <Button
                            className="bg-emerald-300 hover:bg-emerald-400 text-white mb-4"
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
                        <p className="text-sm text-gray-500">
                            © 2024 {siteConfig.name}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
