import { Section } from "@/components/ui/section";
import { ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";

const TransformationSection = () => {
  const beforeAfter = [
    {
      before: "Empresário cansado, sem tempo, refém da operação",
      after: "Empresário com tempo para liderar e clareza para decidir"
    },
    {
      before: "Equipe desorganizada, sem foco, dependente",
      after: "Equipe alinhada, produtiva e engajada"
    },
    {
      before: "Empresa crescendo no esforço, mas sem lucro consistente",
      after: "Operação eficiente, empresa crescendo com lucros previsíveis"
    }
  ];

  return (
    <Section variant="dark" className="relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            A <span className="text-gradient">transformação</span> que você vai vivenciar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como sua empresa e sua vida podem mudar completamente em apenas 2 dias.
          </p>
        </div>
        
        <div className="space-y-12 max-w-5xl mx-auto">
          {beforeAfter.map((item, index) => (
            <div key={index} className="group">
              <div className="grid lg:grid-cols-5 gap-8 items-center">
                {/* Before */}
                <div className="lg:col-span-2">
                  <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-destructive mb-2">ANTES da MAP</h3>
                        <p className="text-muted-foreground">{item.before}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="lg:col-span-1 flex justify-center">
                  <div className="bg-gradient-primary p-4 rounded-full shadow-glow">
                    <ArrowRight className="w-6 h-6 text-map-dark" />
                  </div>
                </div>
                
                {/* After */}
                <div className="lg:col-span-2">
                  <div className="bg-map-cyan/10 border border-map-cyan/20 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-map-cyan flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-map-cyan mb-2">DEPOIS da MAP</h3>
                        <p className="text-foreground">{item.after}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary p-8 lg:p-12 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-map-dark mb-6">
              Mais de 500 empresários já vivenciaram essa transformação
            </h3>
            <p className="text-xl text-map-dark/80 mb-8">
              E agora é a sua vez de assumir o controle do seu negócio e construir 
              uma empresa que funciona sem depender apenas de você.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-map-dark">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Presencial</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">2 Dias</div>
                <div className="text-sm">Intensivos</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Empresários</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TransformationSection;