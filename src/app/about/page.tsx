import { Layout } from "@/components/layout/layout";
import { aboutContent, personalInfo } from "@/components/data/content";
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
        </div>
      </section>
    </Layout>
  );
};

export default About;
