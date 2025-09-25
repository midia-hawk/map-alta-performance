import { Section } from "@/components/ui/section";
import { CheckCircle, Building2, Users, TrendingUp, Brain, Rocket, BarChart3 } from "lucide-react";

const MethodologySection = () => {
  const learnings = [
    {
      icon: Building2,
      title: "Estruturar a operação",
      description: "Para a empresa funcionar sem depender apenas de você"
    },
    {
      icon: Users,
      title: "Montar equipes de alta performance",
      description: "Times alinhados, produtivos e comprometidos com resultados"
    },
    {
      icon: TrendingUp,
      title: "Transformar faturamento em lucro",
      description: "Margem sustentável e previsível para crescimento sólido"
    },
    {
      icon: BarChart3,
      title: "Tomar decisões com clareza",
      description: "Usando indicadores certos e dados estratégicos"
    },
    {
      icon: Brain,
      title: "Assumir o papel de CEO estratégico",
      description: "Deixar de ser 'bombeiro' e focar na liderança e visão"
    },
    {
      icon: Rocket,
      title: "Aplicar um plano de escala",
      description: "Estratégia prática e realista para crescimento acelerado"
    }
  ];

  return (
    <Section className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-map-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-map-cyan/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-primary px-6 py-2 rounded-full text-map-dark font-semibold">
            <CheckCircle className="w-5 h-5" />
            Metodologia Comprovada
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            O que você aprende na <span className="text-gradient">Imersão MAP</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma metodologia única, validada em empresas reais, que já transformou a vida de mais de 500 empresários.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {learnings.map((learning, index) => (
            <div key={index} className="group">
              <div className="bg-card border border-border rounded-xl p-6 h-full transition-smooth hover:border-map-cyan/50 hover:shadow-glow/20 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="bg-gradient-primary p-3 rounded-lg w-fit">
                    <learning.icon className="w-6 h-6 text-map-dark" />
                  </div>
                  <h3 className="font-semibold text-xl group-hover:text-map-cyan transition-smooth">
                    {learning.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {learning.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-secondary border border-border rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                <span className="text-gradient">MAP</span> = Metodologia de Alta Performance
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-map-cyan flex-shrink-0 mt-1" />
                  <p className="text-lg">Evento 100% presencial, prático e intensivo</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-map-cyan flex-shrink-0 mt-1" />
                  <p className="text-lg">Duração de 2 dias completos de imersão</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-map-cyan flex-shrink-0 mt-1" />
                  <p className="text-lg">Métodos aplicáveis imediatamente no seu negócio</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-map-cyan flex-shrink-0 mt-1" />
                  <p className="text-lg">Turma exclusiva e limitada</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-primary p-8 rounded-xl">
              <div className="text-map-dark">
                <h4 className="text-2xl font-bold mb-4">Diferente de cursos teóricos</h4>
                <p className="text-lg">
                  A Imersão MAP entrega ferramentas práticas e estratégias que você pode implementar 
                  na segunda-feira seguinte ao evento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MethodologySection;