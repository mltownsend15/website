import { siteConfig } from "@/lib/site-config";

export function WhyChooseSection() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-300 mb-6">
                        {siteConfig.whyChoose.title}
                    </h2>
                </div>

                <div className="bg-gradient-to-r from-emerald-300 to-emerald-400 rounded-2xl p-8 md:p-12 mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center leading-relaxed">
                        {siteConfig.whyChoose.subtitle}
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {siteConfig.whyChoose.points.map((point, index) => (
                        <div key={index} className="text-center">
                            <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                {point.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
