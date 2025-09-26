import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  phone: z.string().trim().min(10, "Telefone inválido").max(15, "Telefone muito longo"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail muito longo"),
  position: z.string().min(1, "Selecione seu cargo"),
  employees: z.string().min(1, "Selecione o número de funcionários"),
});

type FormData = z.infer<typeof formSchema>;

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      position: "",
      employees: "",
    },
  });

  const getUtmParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_term: urlParams.get('utm_term') || '',
      utm_content: urlParams.get('utm_content') || '',
    };
  };

  const formatPhone = (value: string) => {
    // Remove tudo que não for número
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a máscara (11) 99999-9999
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handlePhoneChange = (value: string) => {
    const formattedValue = formatPhone(value);
    form.setValue('phone', formattedValue);
  };

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    
    try {
      const utmParams = getUtmParams();
      // Remove a formatação do telefone antes de enviar
      const cleanPhone = data.phone.replace(/\D/g, '');
      const payload = {
        ...data,
        phone: cleanPhone,
        ...utmParams,
        timestamp: new Date().toISOString(),
        source: "imersao-map-landing",
        page_url: window.location.href,
      };

      const response = await fetch("https://n8n-n8n-start.t4r0vc.easypanel.host/webhook/6ecbce42-7ff3-4099-9f5b-37fa35af5945", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(payload),
      });

      toast({
        title: "Inscrição enviada com sucesso!",
        description: "Você receberá mais informações em breve.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro ao enviar inscrição",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const positionOptions = [
    { value: "ceo", label: "CEO" },
    { value: "diretor", label: "Diretor" },
    { value: "gerente", label: "Gerente" },
    { value: "coordenador", label: "Coordenador ou supervisor" },
    { value: "analista", label: "Analista" },
    { value: "consultor", label: "Consultor" },
  ];

  const employeeOptions = [
    { value: "1-5", label: "1 a 5" },
    { value: "6-10", label: "6 a 10" },
    { value: "11-20", label: "11 a 20" },
    { value: "21-40", label: "21 a 40" },
    { value: "41-100", label: "41 a 100" },
    { value: "100+", label: "100+" },
  ];

  return (
    <div id="registration-form" className="bg-secondary border border-border rounded-2xl p-8 lg:p-12">
      <div className="text-center mb-8">
        <h3 className="text-3xl lg:text-4xl font-bold mb-4">
          <span className="text-gradient">Garanta sua vaga</span> na Imersão MAP
        </h3>
        <p className="text-lg text-muted-foreground">
          Preencha os dados abaixo e transforme sua empresa em 2 dias
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-lg mx-auto">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Digite seu nome completo" 
                    className="h-12 bg-background border-border focus:border-map-cyan"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone com DDD</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="(11) 99999-9999" 
                    className="h-12 bg-background border-border focus:border-map-cyan"
                    value={field.value}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    maxLength={15}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input 
                    type="email"
                    placeholder="seu@email.com" 
                    className="h-12 bg-background border-border focus:border-map-cyan"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Selecione seu cargo</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-12 bg-background border-border focus:border-map-cyan">
                      <SelectValue placeholder="Selecione seu cargo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-background border-border">
                    {positionOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="employees"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantos funcionários?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-12 bg-background border-border focus:border-map-cyan">
                      <SelectValue placeholder="Quantos funcionários?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-background border-border">
                    {employeeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-center pt-6">
            <Button 
              type="submit" 
              variant="cta" 
              size="xl" 
              className="text-xl w-full"
              disabled={isLoading}
            >
              {isLoading ? "ENVIANDO..." : "QUERO GARANTIR MINHA VAGA AGORA"}
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              ⚡ Vagas limitadas • 📍 Uberlândia-MG • 📅 08 e 09 de Outubro
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RegistrationForm;