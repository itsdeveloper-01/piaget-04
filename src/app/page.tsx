import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import MontessoriBanner from "@/components/MontessoriBanner";
import VisionMission from "@/components/VisionMission";
import LevelsPath from "@/components/LevelsPath";
import Community from "@/components/Community";
import Testimonials from "@/components/Testimonials";
import LocationMap from "@/components/LocationMap";
import ContactSection from "@/components/ContactSection";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { readHomeFile } from "@/lib/content";

export default function Page() {
  const hero = readHomeFile<{ slides: any[] }>("hero.md");
  const montessori = readHomeFile<{ title: string; ctaText: string; ctaLink: string }>("montessori.md");
  const vm = readHomeFile<{ headlineTop: string; headlineBottom: string }>("vision-mission.md");
  const levels = readHomeFile<{
    title: string;
    items: { name: string; desc: string }[];
    achievementsTitle: string;
    achievementsBody: string;
  }>("levels.md");
  const community = readHomeFile<{ title: string; items: any[] }>("community.md");
  const testimonials = readHomeFile<{ title: string; items: any[] }>("testimonials.md");
  const location = readHomeFile<{ title: string; googleMapsEmbedUrl: string }>("location.md");
  const contact = readHomeFile<{ title: string; whatsappNumber: string; email: string }>("contact.md");

  return (
    <main className="min-h-screen">
      
      <Navbar />

      <HeroCarousel slides={hero.data.slides} />

      <MontessoriBanner
        title={montessori.data.title}
        body={montessori.content}
        ctaText={montessori.data.ctaText}
        ctaLink={montessori.data.ctaLink}
      />

      <VisionMission
        headlineTop={vm.data.headlineTop}
        headlineBottom={vm.data.headlineBottom}
        body={vm.content}
      />

      <LevelsPath
        title={levels.data.title}
        items={levels.data.items}
        achievementsTitle={levels.data.achievementsTitle}
        achievementsBody={levels.data.achievementsBody}
      />

      <Community title={community.data.title} items={community.data.items} />

      <Testimonials title={testimonials.data.title} items={testimonials.data.items} />

      <LocationMap title={location.data.title} googleMapsEmbedUrl={location.data.googleMapsEmbedUrl} />

      <ContactSection
        title={contact.data.title}
        body={contact.content}
        whatsappNumber={contact.data.whatsappNumber}
        email={contact.data.email}
      />

      <FloatingContactButtons
        whatsappNumber={contact.data.whatsappNumber}
        email={contact.data.email}
      />
    </main>
  );
}
