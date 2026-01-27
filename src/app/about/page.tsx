import { Layout } from "@/components/layout/layout";
import { aboutContent, personalInfo, skills } from "@/components/data/content";
import { MapPin, Mail, Briefcase } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-8">About Me</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">{aboutContent.intro}</p>
            <p className="text-muted-foreground mb-6">{aboutContent.story}</p>
            <p className="text-muted-foreground mb-12">{aboutContent.approach}</p>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              {personalInfo.location}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-5 w-5 text-primary" />
              {personalInfo.email}
            </div>
          </div>

          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3 mb-12">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>

          {/* Experience section removed as aboutContent.experience no longer exists */}
        </div>
      </section>
    </Layout>
  );
};

export default About;
