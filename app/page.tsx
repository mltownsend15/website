import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { ServicesSection } from "@/components/services-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <Navigation />
            <HeroSection />
            <WhyChooseSection />
            <ServicesSection />
            <Footer />
        </div>
    );
}
