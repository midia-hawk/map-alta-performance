import { Section } from "@/components/ui/section";
import { Calendar, MapPin, Clock, Users, Star, Shield } from "lucide-react";
import RegistrationForm from "./RegistrationForm";

const EventDetailsSection = () => {
  const details = [
    {
      icon: Calendar,
      title: "Data",
      value: "08 e 09 de Outubro",
      description: "2 dias completos de imersão"
    },
    {
      icon: MapPin,
      title: "Local",
      value: "Uberlândia - MG",
      description: "Evento 100% presencial"
    },
    {
      icon: Clock,
      title: "Formato",
      value: "Intensivo",
      description: "Prático e aplicável"
    },
    {
      icon: Users,
      title: "Vagas",
      value: "Limitadas",
      description: "Turma exclusiva"
    }
  ];

  const differentials = [
    "Evento 100% presencial (imersivo)",
    "Turma exclusiva e limitada",
    "Metodologia única, validada em empresas reais",
    "Ferramentas aplicáveis na hora",
    "Conteúdo direto, prático e sem enrolação",
    "Networking com empresários de alto nível"
  ];

  return (
    <Section variant="dark" className="relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gradient">Informações</span> do Evento
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Todos os detalhes da Imersão MAP que vai transformar sua empresa e sua vida empresarial.
          </p>
        </div>
        
        {/* Event Details Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {details.map((detail, index) => (
            <div key={index} className="text-center group">
              <div className="bg-card border border-border rounded-xl p-6 transition-smooth hover:border-map-cyan/50 hover:shadow-glow/20">
                <div className="bg-gradient-primary p-4 rounded-full w-fit mx-auto mb-4">
                  <detail.icon className="w-8 h-8 text-map-dark" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-map-cyan">
                  {detail.title}
                </h3>
                <div className="text-2xl font-bold mb-2 group-hover:text-map-cyan transition-smooth">
                  {detail.value}
                </div>
                <p className="text-muted-foreground text-sm">
                  {detail.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Differentials */}
        <div className="bg-secondary border border-border rounded-2xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                <span className="text-gradient">Diferenciais</span> da Imersão MAP
              </h3>
              <div className="space-y-4">
                {differentials.map((differential, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-map-cyan flex-shrink-0 mt-1" />
                    <p className="text-lg">{differential}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-primary p-8 rounded-xl">
              <div className="text-map-dark text-center">
                <Shield className="w-16 h-16 mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-4">Garantia de Satisfação</h4>
                <p className="text-lg">
                  Uma imersão com <strong>100% de satisfação</strong> dos participantes. 
                  Metodologia comprovada e resultados garantidos.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Registration Form */}
        <RegistrationForm />
      </div>
    </Section>
  );
};

export default EventDetailsSection;