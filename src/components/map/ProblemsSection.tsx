import { Section } from "@/components/ui/section";
import { X, TrendingDown, Users, Clock, Target } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      icon: X,
      title: "Empresário refém da operação",
      description: "Não consegue se afastar do negócio nem por um dia"
    },
    {
      icon: TrendingDown,
      title: "Crescimento sem lucro",
      description: "Faturamento aumenta, mas a margem de lucro não acompanha"
    },
    {
      icon: Users,
      title: "Equipes desmotivadas",
      description: "Time desorganizado, sem processo e sem entrega de resultados"
    },
    {
      icon: Clock,
      title: "Apagando incêndios",
      description: "Vive sobrecarregado resolvendo problemas urgentes diariamente"
    },
    {
      icon: Target,
      title: "Decisões sem clareza",
      description: "Falta de estratégia e indicadores para tomar decisões assertivas"
    }
  ];

  return (
    <Section variant="dark" className="relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Você se identifica com alguma dessas <span className="text-gradient">situações?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Se você é empresário e enfrenta esses desafios diariamente, a Imersão MAP foi feita especialmente para você.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="group">
              <div className="bg-card border border-border rounded-xl p-6 h-full transition-smooth hover:border-map-cyan/50 hover:shadow-glow/20">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-destructive/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <problem.icon className="w-5 h-5 sm:w-6 sm:h-6 text-destructive" />
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="font-semibold text-base sm:text-lg group-hover:text-map-cyan transition-smooth">
                      {problem.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-primary p-6 sm:p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-map-dark mb-4">
              É hora de transformar sua realidade empresarial!
            </h3>
            <p className="text-base sm:text-lg text-map-dark/80">
              A Metodologia MAP vai te ensinar como sair da operação e assumir o papel de CEO estratégico.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProblemsSection;