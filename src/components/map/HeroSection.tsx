import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import ricardoRochaImage from "@/assets/ricardo-rocha-1.jpg";

const HeroSection = () => {
  return (
    <Section variant="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-map-dark via-map-purple-dark/20 to-transparent" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-map-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-map-purple/10 rounded-full blur-3xl" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center min-h-screen lg:min-h-0">
          {/* Left Content */}
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto space-y-4 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3">
              <p className="text-map-cyan font-semibold text-sm sm:text-base lg:text-lg tracking-wide uppercase px-2">
                Para Donos de Empresas que Desejam Escalar seus Negócios
              </p>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight px-2">
                <span className="text-gradient">METODOLOGIA</span>
                <br />
                <span className="text-foreground">DE ALTA</span>
                <br />
                <span className="text-foreground">PERFORMANCE</span>
              </h1>
              
              <div className="w-16 sm:w-20 h-1 bg-gradient-primary rounded-full mx-auto lg:mx-0" />
            </div>
            
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed px-4 lg:px-0 mx-auto lg:mx-0">
              Trabalhe com <strong className="text-map-cyan">eficiência</strong> e aumente seu <strong className="text-map-cyan">lucro</strong> em 2 dias de imersão prática e intensiva.
            </p>
            
            <div className="space-y-3 sm:space-y-4 px-2">
              <div className="flex items-center justify-center lg:justify-start gap-4 text-sm sm:text-base lg:text-lg">
                <div className="w-3 h-3 bg-map-cyan rounded-full" />
                <span className="font-semibold">08 e 09 de Outubro</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4 text-sm sm:text-base lg:text-lg">
                <div className="w-3 h-3 bg-map-purple rounded-full" />
                <span className="font-semibold">Uberlândia - MG</span>
              </div>
            </div>
            
            <div className="pt-4 w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0 lg:max-w-none">
              <Button 
                variant="cta" 
                size="xl" 
                className="text-lg sm:text-xl w-full"
                onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                QUERO ESCALAR MEU NEGÓCIO
              </Button>
            </div>
          </div>
          
          {/* Right Content - Ricardo Rocha Image */}
          <div className="relative order-1 lg:order-2 w-full max-w-xs sm:max-w-sm mx-auto lg:max-w-none">
            <div className="relative mx-auto w-fit">
              <img 
                src={ricardoRochaImage} 
                alt="Ricardo Rocha - Criador da Metodologia MAP" 
                className="w-full max-w-xs sm:max-w-sm rounded-2xl shadow-purple mx-auto"
              />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-gradient-primary p-3 sm:p-4 lg:p-6 rounded-2xl shadow-glow">
                <div className="text-map-dark font-bold">
                  <div className="text-xs sm:text-sm">Criador da</div>
                  <div className="text-sm sm:text-base lg:text-xl">Metodologia MAP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;