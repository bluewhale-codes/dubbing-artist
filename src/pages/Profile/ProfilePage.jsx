import { ProfileSummaryCard } from "./components/ProfileSummaryCard";
import { AboutSection } from "./components/AboutSection";
import { VoiceDemoSection } from "./components/VoiceDemoSection";
import { SkillsSection } from "./components/SkillsSection";
import { LanguagesSection } from "./components/LanguagesSection";
import { StudioEquipment } from "./components/StudioEquipment";
import { Portfolio } from "./components/Portfolio";
import { ClientReviews } from "./components/ClientReviews";
import { AvailabilitySection } from "./components/AvailabilitySection";

export default function ProfilePage() {
  // Mock artist data
  const artistData = {
    profileImage: "https://images.unsplash.com/photo-1740102075520-fe22a53035cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB2b2ljZSUyMGFjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNzMwNTU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Priya Sharma",
    dubbingLanguages: ["Hindi", "English", "Tamil"],
    location: "Mumbai, India",
    experience: 8,
    languages: ["Hindi", "English", "Tamil", "Marathi"],
    rating: 4.9,
    reviewCount: 247,
    projectsCompleted: 385,
    bio: `Hello! I'm a professional voice-over artist and dubbing specialist with over 8 years of experience in the entertainment industry. I've had the privilege of working on a diverse range of projects, from animated films and TV series to documentaries, commercials, and video games.

My voice has been described as versatile, warm, and expressive, allowing me to bring characters to life and connect with audiences across different genres. Whether it's a heartfelt drama, an exciting action sequence, or a playful cartoon character, I approach each project with dedication and creativity.

I believe in delivering excellence and ensuring that every line resonates with authenticity and emotion. My home studio is equipped with professional-grade equipment, ensuring pristine audio quality for all my recordings.`,
    skills: [
      "Character voice acting for animations and cartoons",
      "Commercial and advertisement voice-overs",
      "Documentary and narration work",
      "Video game character dubbing",
      "E-learning and educational content",
      "Audiobook narration",
      "Lip-sync dubbing for foreign content"
    ],
    tags: [
      "Hindi Voice",
      "English Voice",
      "Cartoon Dubbing",
      "Narration",
      "Commercial VO",
      "Character Acting",
      "Documentary",
      "Animation",
      "Video Games",
      "Audiobooks"
    ]
  };

  return (
    <div className="mt-20px min-h-screen bg-[url('https://res.cloudinary.com/dycjjaxsk/image/upload/v1773135326/retro-digital-art-illustration-person-using-radio-technology_ghkwld.jpg')] bg-cover bg-center ">
      
      

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Summary (1/3 width on desktop, sticky on scroll) */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8">
              <ProfileSummaryCard
                profileImage={artistData.profileImage}
                name={artistData.name}
                dubbingLanguages={artistData.dubbingLanguages}
                location={artistData.location}
                experience={artistData.experience}
                languages={artistData.languages}
                rating={artistData.rating}
                reviewCount={artistData.reviewCount}
                projectsCompleted={artistData.projectsCompleted}
              />
            </div>
          </div>

          {/* Right Column - About Section (2/3 width on desktop) */}
          <div className="lg:col-span-2">
            <AboutSection/>
            <VoiceDemoSection/>
            <SkillsSection/>
            <LanguagesSection/>
            <StudioEquipment/>
            <Portfolio/>
            <ClientReviews/>
            <AvailabilitySection/>
          </div>
        </div>
      </div>
    </div>
  );
}
