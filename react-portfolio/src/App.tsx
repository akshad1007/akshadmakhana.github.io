import { HeroSection } from './components/HeroSection';
import { FloatingNav } from './components/FloatingNav';
import { AboutSection } from './components/AboutSection';
import { ResearchSection } from './components/ResearchSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { BlogSection } from './components/BlogSection';
import { GallerySection } from './components/GallerySection';

function App() {
  return (
    <div className="bg-lambo-black text-lambo-white selection:bg-lambo-gold selection:text-lambo-black min-h-screen overflow-x-hidden font-sans scroll-smooth">
      <FloatingNav />
      <main className="w-full flex flex-col items-center">
        {/* Intro / Hero */}
        <div id="intro" className="w-full">
          <HeroSection />
        </div>

        {/* About Section */}
        <div id="about" className="relative w-full border-t border-lambo-iron">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4" muted autoPlay loop playsInline className="w-full h-full object-cover opacity-30 mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-b from-lambo-black via-lambo-black/50 to-lambo-black"></div>
          </div>
          <AboutSection />
        </div>

        {/* Expertise Section (Redesigned) */}
        <div id="expertise" className="relative w-full border-t border-lambo-iron bg-lambo-black">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
              muted autoPlay loop playsInline
              className="w-full h-full object-cover opacity-30 mix-blend-screen brightness-[2] contrast-[1.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-lambo-black via-lambo-black/50 to-lambo-black"></div>
          </div>
          <ExpertiseSection />
        </div>

        {/* Research Section */}
        <div id="research" className="relative w-full border-t border-lambo-iron bg-lambo-black">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260329_050842_be71947f-f16e-4a14-810c-06e83d23ddb5.mp4" muted autoPlay loop playsInline className="w-full h-full object-cover opacity-30 mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-b from-lambo-black via-lambo-black/50 to-lambo-black"></div>
          </div>
          <ResearchSection />
        </div>

        {/* Projects Section (Redesigned with Scroll) */}
        <div id="projects" className="relative w-full border-t border-lambo-iron">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4"
              muted autoPlay loop playsInline
              className="w-full h-full object-cover opacity-30 mix-blend-screen brightness-[2] contrast-[1.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-lambo-black via-lambo-black/50 to-lambo-black"></div>
          </div>
          <ProjectsSection />
        </div>

        {/* Experience Section */}
        <div id="experience" className="relative w-full border-t border-lambo-iron">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
              muted autoPlay loop playsInline
              className="w-full h-full object-cover opacity-30 mix-blend-screen brightness-[2] contrast-[1.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-lambo-black via-lambo-black/50 to-lambo-black"></div>
          </div>
          <ExperienceSection />
        </div>

        {/* Gallery Section */}
        <div id="gallery" className="relative w-full border-t border-lambo-iron bg-lambo-black">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
              muted autoPlay loop playsInline
              className="w-full h-full object-cover opacity-30 mix-blend-screen brightness-[1.5]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-lambo-black via-lambo-black/50 to-lambo-black"></div>
          </div>
          <GallerySection />
        </div>

        {/* Certifications Section (Redesigned with Scroll) */}
        <div id="certifications" className="relative w-full border-t border-lambo-iron bg-lambo-black">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
              muted autoPlay loop playsInline
              className="w-full h-full object-cover opacity-30 mix-blend-screen brightness-[2] contrast-[1.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-lambo-black via-lambo-black/50 to-lambo-black"></div>
          </div>
          <CertificationsSection />
        </div>

        {/* Education Section */}
        <div id="education" className="relative w-full border-t border-lambo-iron bg-lambo-black">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4" muted autoPlay loop playsInline className="w-full h-full object-cover opacity-30 mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-b from-lambo-black via-lambo-black/50 to-lambo-black"></div>
          </div>
          <EducationSection />
        </div>
        {/* Blog Section */}
        <div id="blog" className="relative w-full border-t border-lambo-iron bg-lambo-black">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              src="https://res.cloudinary.com/dfonotyfb/video/upload/v1775585556/dds3_1_rqhg7x.mp4"
              muted autoPlay loop playsInline
              className="w-full h-full object-cover opacity-30 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-lambo-black via-lambo-black/50 to-lambo-black"></div>
          </div>
          <BlogSection />
        </div>
      </main>

      {/* Contact / Footer */}
      <footer id="contact" className="relative w-full py-32 md:py-44 flex flex-col items-center justify-center border-t border-lambo-iron bg-lambo-black text-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video src="https://res.cloudinary.com/dfonotyfb/video/upload/v1775585556/dds3_1_rqhg7x.mp4" muted autoPlay loop playsInline className="w-full h-full object-cover opacity-20 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-b from-lambo-black via-lambo-black/70 to-lambo-black"></div>
        </div>

        <div className="relative z-10 px-6">
          <span className="text-lambo-gold uppercase tracking-[0.3em] text-[12px] font-medium mb-8 block">Ready for the next move?</span>
          <h2 className="text-lambo-white text-[64px] md:text-[120px] font-normal uppercase leading-none mb-16 tracking-tighter">
            Initiate <br /> Contact
          </h2>

          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <a href="mailto:akshadmakhana@zohomail.in" className="bg-lambo-gold hover:bg-lambo-gold-dark text-lambo-black uppercase font-bold text-[16px] px-[40px] py-[24px] rounded-none transition-all tracking-widest min-w-[300px]">
              Email Me
            </a>
            <div className="flex gap-10 mt-8 md:mt-0">
              <a href="https://www.linkedin.com/in/akshad-makhana" target="_blank" rel="noopener noreferrer" className="text-lambo-ash hover:text-lambo-white uppercase text-[12px] tracking-widest transition-colors">LinkedIn</a>
              <a href="https://github.com/akshad1007" target="_blank" rel="noopener noreferrer" className="text-lambo-ash hover:text-lambo-white uppercase text-[12px] tracking-widest transition-colors">GitHub</a>
              <a href="https://www.instagram.com/akshad_makhana" target="_blank" rel="noopener noreferrer" className="text-lambo-ash hover:text-lambo-white uppercase text-[12px] tracking-widest transition-colors">Instagram</a>
            </div>
          </div>

          <p className="text-lambo-iron uppercase text-[10px] tracking-widest mt-32">© {new Date().getFullYear()} Akshad Makhana. Built for Performance.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
