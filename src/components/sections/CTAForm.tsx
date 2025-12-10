import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const CTAForm = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    t("services.consultation"),
    t("services.diagnostics"),
    t("services.therapy"),
    t("services.surgery"),
    t("services.prevention"),
    t("services.telemedicine"),
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: t("cta.success_title"),
      description: t("cta.success_desc"),
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="cta-form" className="section-padding gradient-hero">
      <div className="container-main">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-primary-foreground/90 mb-8">
            {t("cta.subtitle")}
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <Input
              name="name"
              type="text"
              placeholder={t("cta.name")}
              required
              className="bg-primary-foreground text-foreground border-0 h-12"
            />
            <Input
              name="email"
              type="email"
              placeholder={t("cta.email")}
              required
              className="bg-primary-foreground text-foreground border-0 h-12"
            />
            <Input
              name="phone"
              type="tel"
              placeholder={t("cta.phone")}
              required
              className="bg-primary-foreground text-foreground border-0 h-12"
            />
            <Select name="service" required>
              <SelectTrigger className="bg-primary-foreground text-foreground border-0 h-12">
                <SelectValue placeholder={t("cta.service")} />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              name="date"
              type="date"
              placeholder={t("cta.date")}
              className="bg-primary-foreground text-foreground border-0 h-12"
            />
            <Textarea
              name="message"
              placeholder={t("cta.message")}
              rows={4}
              className="bg-primary-foreground text-foreground border-0 resize-none"
            />
            <Button 
              type="submit" 
              variant="hero" 
              size="xl" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("cta.submitting") : t("cta.submit")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTAForm;
