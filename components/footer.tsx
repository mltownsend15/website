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
                                href="https://miranda-townsend.clientsecure.me/contact-widget"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Get Started
                            </a>
                        </Button>
                        <div className="grid gap-2">
                            <p className="text-sm text-gray-500">
                                NPI: {siteConfig.contact.npi}
                            </p>
                            <p className="text-sm text-gray-500">
                                License: {siteConfig.contact.licenseNumber}
                            </p>
                            <p className="text-sm text-gray-500">
                                © 2026 {siteConfig.name}. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
