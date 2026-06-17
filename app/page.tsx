import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { VideoIntroSection } from "@/components/video-intro-section";
import { ServicesSection } from "@/components/services-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <Navigation />
            <HeroSection />
            <VideoIntroSection />
            <ServicesSection />
            <Footer />
        </div>
    );
}
