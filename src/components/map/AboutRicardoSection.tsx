import { Section } from "@/components/ui/section";
import { Building, TrendingUp, Users, Award, Briefcase, Target } from "lucide-react";
import ricardoRochaImage from "@/assets/ricardo-rocha-2.jpg";

const AboutRicardoSection = () => {
  const achievements = [
    {
      icon: Briefcase,
      title: "Ex-executivo do Magalu",
      description: "Magazine Luiza"
    },
    {
      icon: Building,
      title: "12 empresas criadas",
      description: "E vendidas com sucesso"
    },
    {
      icon: TrendingUp,
      title: "R$ 1 bilhão",
      description: "Ecossistema empresarial"
    },
    {
      icon: Users,
      title: "500+ empresários",
      description: "Já transformados"
    },
    {
      icon: Award,
      title: "Investidor e mentor",
      description: "Reconhecido nacionalmente"
    },
    {
      icon: Target,
      title: "Criador da MAP",
      description: "Metodologia exclusiva"
    }
  ];

  return (
    <Section className="relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-map-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-map-cyan/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Aprenda com quem <span className="text-gradient">realmente sabe</span> construir negócios de sucesso
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ricardo Rocha não é apenas um palestrante. É um empresário que vivenciou na prática 
            tudo o que ensina na Imersão MAP.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={ricardoRochaImage} 
                alt="Ricardo Rocha palestrando" 
                className="w-full rounded-2xl shadow-purple"
              />
              <div className="absolute -top-6 -left-6 bg-gradient-primary p-6 rounded-2xl shadow-glow">
                <div className="text-map-dark font-bold">
                  <div className="text-lg">Ricardo Rocha</div>
                  <div className="text-sm">Criador da MAP</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                <span className="text-gradient">Quem é</span> Ricardo Rocha?
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Ex-executivo do Magazine Luiza</strong>, Ricardo Rocha é um empreendedor serial que construiu e vendeu 12 empresas de sucesso ao longo de sua carreira.
                </p>
                <p>
                  Hoje, como <strong className="text-foreground">investidor e mentor</strong>, ele lidera um ecossistema de empresas avaliado em quase <strong className="text-map-cyan">R$ 1 bilhão</strong>.
                </p>
                <p>
                  Criador da <strong className="text-foreground">Metodologia MAP</strong>, Ricardo é reconhecido por ensinar na prática como transformar negócios, sem teorias vazias.
                </p>
              </div>
            </div>
            
            <div className="bg-secondary border border-border rounded-xl p-6">
              <h4 className="font-semibold text-xl mb-4 text-map-cyan">
                O diferencial de Ricardo Rocha
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                "Não sou apenas um palestrante teórico. Sou um empresário que vivenciou cada desafio, 
                cada erro e cada conquista que vocês enfrentam. A MAP nasceu da minha experiência real 
                construindo e escalando empresas."
              </p>
            </div>
          </div>
        </div>
        
        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="group">
              <div className="bg-card border border-border rounded-xl p-6 text-center transition-smooth hover:border-map-cyan/50 hover:shadow-glow/20 hover:-translate-y-2">
                <div className="bg-gradient-primary p-4 rounded-full w-fit mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-map-dark" />
                </div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-map-cyan transition-smooth">
                  {achievement.title}
                </h4>
                <p className="text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-primary p-8 lg:p-12 rounded-2xl text-center">
          <h3 className="text-3xl font-bold text-map-dark mb-4">
            Já impactou mais de 500 empresários diretamente
          </h3>
          <p className="text-xl text-map-dark/80">
            Reconhecido por ensinar na prática como transformar negócios, sem teorias vazias.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutRicardoSection;