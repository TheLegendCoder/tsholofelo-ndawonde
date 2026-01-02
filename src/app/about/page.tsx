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

          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Experience</h2>
          <div className="space-y-8">
            {aboutContent.experience.map((exp, index) => (
              <div key={index} className="gradient-card rounded-xl p-6 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
