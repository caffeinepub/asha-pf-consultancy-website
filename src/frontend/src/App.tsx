import { ContactForm } from './components/ContactForm';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/card';
import { CheckCircle2, Shield, Globe, FileText, ArrowRight } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.45_0.15_250)] via-[oklch(0.40_0.18_260)] to-[oklch(0.35_0.20_270)] text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container relative mx-auto px-6 py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center justify-start">
                  <img 
                    src="/assets/generated/asha-pf-logo.dim_1200x300.png" 
                    alt="ASHA PF CONSULTANCY" 
                    className="h-16 md:h-20 w-auto"
                  />
                </div>
                <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  ASHA PF CONSULTANCY
                </h1>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  Your trusted partner for complex EPF, EPS & Pension cases across India
                </p>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <CheckCircle2 className="h-5 w-5 text-[oklch(0.85_0.15_150)]" />
                  <span className="text-base font-semibold text-white">
                    Helped more than 1000 individuals
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-[oklch(0.40_0.18_260)] hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Free Case Review
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold"
                >
                  Our Services
                </Button>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    'PF Withdrawals (Full / Partial)',
                    'Rejected & Complex EPF Cases',
                    'EPS Pension Issues',
                    'EPF Account Transfers',
                    'Old Service Record Recovery'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white">
                      <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5 text-[oklch(0.85_0.15_150)]" />
                      <span className="text-base font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why ASHA PF CONSULTANCY?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We bring expertise, transparency, and nationwide support to solve your EPF challenges
          </p>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Shield,
                title: 'Expert Handling',
                description: 'We specialize in complicated and long-pending EPF & EPS matters.'
              },
              {
                icon: FileText,
                title: 'Transparent Fees',
                description: 'No hidden charges. Clear pricing explained before processing.'
              },
              {
                icon: Globe,
                title: 'PAN India Support',
                description: 'We assist members from all states and EPFO offices.'
              }
            ].map((feature, index) => (
              <Card key={index} className="border-2 hover:border-[oklch(0.40_0.18_260)] transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-[oklch(0.40_0.18_260)]/10">
                    <feature.icon className="h-8 w-8 text-[oklch(0.40_0.18_260)]" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our EPF Services
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive solutions for all your EPF and pension needs
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'PF Final Settlement',
              'PF Partial Withdrawal',
              'EPF Account Transfer',
              'EPS Pension Clarification',
              'Rejected Claim Resolution',
              'Old Company PF Recovery'
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all border-2 hover:border-[oklch(0.40_0.18_260)]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[oklch(0.40_0.18_260)] text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p className="font-semibold text-base leading-relaxed pt-1">{service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[oklch(0.45_0.15_250)] via-[oklch(0.40_0.18_260)] to-[oklch(0.35_0.20_270)] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stuck with an EPF Issue?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get expert help today and avoid repeated rejections.
          </p>
          <Button 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-white text-[oklch(0.40_0.18_260)] hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Contact Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Contact ASHA PF CONSULTANCY
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you shortly
          </p>
          
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[oklch(0.15_0_0)] text-white/80 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© {new Date().getFullYear()} ASHA PF CONSULTANCY. All rights reserved.</p>
            <p className="text-center md:text-right">
              Disclaimer: We are private EPF consultants and not affiliated with EPFO.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10 text-center text-sm">
            <p>
              Built with love using{' '}
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'asha-pf-consultancy')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/90 underline underline-offset-4"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
