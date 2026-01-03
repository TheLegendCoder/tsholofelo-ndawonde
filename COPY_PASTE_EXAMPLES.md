/**
 * EMOTIONAL DESIGN - COPY & PASTE EXAMPLES
 * Ready-to-use code snippets for your portfolio
 */

// ============================================================================
// 1. HERO SECTION (Before & After)
// ============================================================================

// BEFORE:
// <div className="animate-fade-up [animation-delay:0.1s]">

// AFTER: More playful entrance
// <div className="animate-bounce-up [animation-delay:0.1s]">

// EXAMPLE - Hero heading with staggered animations:
/*
<div className="text-center">
  <h1 className="animate-bounce-up opacity-0" 
      style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
    Hi, I'm Tsholofelo
  </h1>
  <p className="animate-bounce-up opacity-0" 
     style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
    Your compelling subtitle
  </p>
  <button className="animate-bounce-up opacity-0" 
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
    View My Work
  </button>
</div>
*/

// ============================================================================
// 2. STAGGERED PROJECT CARDS
// ============================================================================

// SIMPLE STAGGERING:
/*
import { StaggerContainer } from '@/components/ui/stagger'

<StaggerContainer staggerChildren={true} variant="bounce">
  {projects.map((project) => (
    <Card 
      key={project.id}
      interactive={true}
      glow={true}
      className="hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]"
    >
      <AnimatedImage
        src={project.image}
        alt={project.title}
        parallax={true}
        hoverScale={1.08}
        glow={true}
      />
      <h3 className="text-xl font-bold mt-4">{project.title}</h3>
      <p className="text-muted-foreground">{project.description}</p>
    </Card>
  ))}
</StaggerContainer>
*/

// ============================================================================
// 3. ENHANCED BUTTONS WITH RIPPLE
// ============================================================================

// STANDARD BUTTON (now has hover lift built-in):
/*
<Button 
  size="lg"
  className="hover:shadow-lg"
>
  View My Work
</Button>

The button now automatically includes:
  • Hover lift: -translate-y-0.5
  • Shadow elevation: shadow-lg
  • Click feedback: active:scale-95
  • Smooth transition: duration-200
*/

// BUTTON WITH RIPPLE EFFECT:
/*
import { EnhancedButton } from '@/components/ui/button-enhanced'

<EnhancedButton 
  showRipple={true}
  pulseOnHover={true}
  size="lg"
  className="bg-gradient-to-r from-primary to-accent"
>
  ✨ Get Started
</EnhancedButton>
*/

// ============================================================================
// 4. LOADING STATES (Playful Variants)
// ============================================================================

// SIMPLE SPINNER:
/*
import { LoadingSpinner } from '@/components/ui/loading-spinner'

// Default spinning
<LoadingSpinner size="md" variant="default" />

// Playful bounce dots
<LoadingSpinner size="md" variant="bounce" />

// Glowing pulse (calming)
<LoadingSpinner size="md" variant="pulse" />

// Animated dots
<LoadingSpinner size="md" variant="dots" />
*/

// PAGE-LEVEL LOADING:
/*
import { PageLoading, FullPageLoading } from '@/components/ui/loading-spinner'

// Section loading
<PageLoading 
  message="Loading amazing projects..." 
  variant="bounce"
/>

// Full page overlay
<FullPageLoading 
  message="Preparing your experience..." 
  variant="pulse"
/>
*/

// ============================================================================
// 5. SCROLL-TRIGGERED REVEALS
// ============================================================================

// SIMPLE IN-VIEW ANIMATION:
/*
import { useInView } from '@/hooks/use-scroll-animation'

export function ProjectSection() {
  const { ref, isInView } = useInView({ threshold: 0.3 })
  
  return (
    <section 
      ref={ref}
      className={isInView ? 'animate-fade-in' : 'opacity-0'}
    >
      <h2 className={isInView ? 'animate-bounce-up' : 'opacity-0'}>
        Projects
      </h2>
      {/* Projects content */}
    </section>
  )
}
*/

// PARALLAX EFFECT:
/*
import { useParallax } from '@/hooks/use-scroll-animation'

export function HeroSection() {
  const { ref, style } = useParallax({ strength: 0.5 })
  
  return (
    <div ref={ref} style={style} className="transition-transform duration-300">
      <img src="background.jpg" alt="" />
    </div>
  )
}
*/

// CURSOR-FOLLOWING TILT:
/*
import { useCursorFollow } from '@/hooks/use-scroll-animation'

export function FeatureCard() {
  const { ref, style } = useCursorFollow()
  
  return (
    <div ref={ref} style={style} className="p-8 rounded-lg border">
      Tilts toward cursor
    </div>
  )
}
*/

// ============================================================================
// 6. FEATURED PROJECTS WITH EVERYTHING
// ============================================================================

/*
'use client'

import { StaggerContainer } from '@/components/ui/stagger'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedImage } from '@/components/ui/animated-image'
import { Button } from '@/components/ui/button'
import { useInView } from '@/hooks/use-scroll-animation'

export function FeaturedProjects({ projects }) {
  const { ref, isInView } = useInView()

  return (
    <section 
      ref={ref}
      className={isInView ? 'animate-fade-in' : 'opacity-0'}
    >
      <div className="mb-12">
        <h2 className={isInView ? 'animate-bounce-up opacity-100' : 'opacity-0'}>
          Featured Projects
        </h2>
        <p className={isInView ? 'animate-bounce-up opacity-100' : 'opacity-0'}
           style={{ animationDelay: '0.1s' }}>
          Work I'm proud of
        </p>
      </div>

      <StaggerContainer staggerChildren={true} variant="cascade">
        {projects.map((project) => (
          <Card 
            key={project.id}
            interactive={true}
            glow={true}
            className="overflow-hidden"
          >
            <AnimatedImage
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              parallax={true}
              hoverScale={1.08}
              glow={true}
            />
            
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <div className="flex gap-2 mt-2 flex-wrap">
                {project.tags?.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              
              <div className="flex gap-2">
                <Button 
                  variant="default" 
                  size="sm"
                  className="hover:animate-spring-scale"
                >
                  View Project
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="hover:animate-spring-scale"
                >
                  GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </StaggerContainer>
    </section>
  )
}
*/

// ============================================================================
// 7. EMOTIONAL HERO (Full Example)
// ============================================================================

/*
import { EmotionalHero } from '@/components/ui/emotional-hero'

export function HomeHero() {
  return (
    <EmotionalHero
      title="Crafting Elegant Solutions Through Code"
      subtitle="✨ Full-Stack Developer & Designer"
      description="I build beautiful, scalable web applications that solve real problems. 
                   With expertise in React, TypeScript, and cloud infrastructure."
      cta={{
        label: "Explore My Work",
        onClick: () => {
          document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
        }
      }}
      backgroundPattern={true}
    />
  )
}
*/

// ============================================================================
// 8. BLOG POST CARDS WITH ANIMATIONS
// ============================================================================

/*
import { StaggerContainer } from '@/components/ui/stagger'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useInView } from '@/hooks/use-scroll-animation'

export function BlogPosts({ posts }) {
  const { ref, isInView } = useInView()

  return (
    <section 
      ref={ref}
      className={isInView ? 'animate-fade-in' : 'opacity-0'}
    >
      <h2 className={isInView ? 'animate-bounce-up' : 'opacity-0'}
          style={{ animationDelay: '0.1s' }}>
        Latest Articles
      </h2>

      <StaggerContainer staggerChildren={true}>
        {posts.map((post) => (
          <Card 
            key={post.id}
            interactive={true}
            className="cursor-pointer"
          >
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-xs text-muted-foreground">
                  {post.readTime} min read
                </span>
              </div>
              <CardTitle className="hover:text-primary transition-colors">
                {post.title}
              </CardTitle>
              <CardDescription>
                {post.date} • By {post.author}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {post.excerpt}
              </p>
              <a 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all"
              >
                Read More <span className="text-sm">→</span>
              </a>
            </CardContent>
          </Card>
        ))}
      </StaggerContainer>
    </section>
  )
}
*/

// ============================================================================
// 9. FORM WITH EMOTIONAL FEEDBACK
// ============================================================================

/*
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { PageLoading } from '@/components/ui/loading-spinner'

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Submit form...
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSuccess(true)
    
    // Reset after animation
    setTimeout(() => setIsSuccess(false), 2000)
  }

  if (isLoading) {
    return <PageLoading message="Sending your message..." variant="bounce" />
  }

  if (isSuccess) {
    return (
      <div className="animate-bounce-in p-8 rounded-lg bg-green-50 border border-green-200">
        <p className="text-green-700 font-semibold">✓ Message sent successfully!</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 animate-cascade-in">
      <div className="animate-cascade-in" style={{ animationDelay: '0.1s' }}>
        <Input 
          placeholder="Your name"
          required
          className="focus-visible:ring-primary"
        />
      </div>
      
      <div className="animate-cascade-in" style={{ animationDelay: '0.2s' }}>
        <Input 
          type="email"
          placeholder="Your email"
          required
          className="focus-visible:ring-primary"
        />
      </div>

      <div className="animate-cascade-in" style={{ animationDelay: '0.3s' }}>
        <Textarea 
          placeholder="Your message..."
          required
          rows={4}
          className="focus-visible:ring-primary"
        />
      </div>

      <Button 
        type="submit"
        className="w-full animate-bounce-up opacity-0"
        style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
      >
        Send Message
      </Button>
    </form>
  )
}
*/

// ============================================================================
// 10. PAGE LAYOUT WITH TRANSITIONS
// ============================================================================

/*
import { PageTransition } from '@/components/ui/page-transition'

export default function Page() {
  return (
    <PageTransition variant="cascade">
      <main className="min-h-screen">
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
          {/* Navigation */}
        </header>

        <Hero />
        <FeaturedProjects />
        <BlogPosts />
        <ContactSection />

        <footer className="border-t bg-muted/50">
          {/* Footer */}
        </footer>
      </main>
    </PageTransition>
  )
}
*/

export {}
