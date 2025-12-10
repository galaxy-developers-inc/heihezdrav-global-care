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

const services = [
  "Консультация врача",
  "Диагностика",
  "Терапия",
  "Хирургия",
  "Профилактика",
  "Телемедицина",
];

const CTAForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Заявка отправлена!",
      description: "Наш администратор свяжется с вами в течение часа.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="cta-form" className="section-padding gradient-hero">
      <div className="container-main">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Запишитесь на приём прямо сейчас
          </h2>
          <p className="text-primary-foreground/90 mb-8">
            Заполните форму, и наш администратор свяжется с вами в течение часа
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <Input
              name="name"
              type="text"
              placeholder="Ваше имя"
              required
              className="bg-primary-foreground text-foreground border-0 h-12"
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="bg-primary-foreground text-foreground border-0 h-12"
            />
            <Input
              name="phone"
              type="tel"
              placeholder="Телефон/WhatsApp"
              required
              className="bg-primary-foreground text-foreground border-0 h-12"
            />
            <Select name="service" required>
              <SelectTrigger className="bg-primary-foreground text-foreground border-0 h-12">
                <SelectValue placeholder="Выберите услугу" />
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
              placeholder="Предпочтительная дата"
              className="bg-primary-foreground text-foreground border-0 h-12"
            />
            <Textarea
              name="message"
              placeholder="Дополнительная информация"
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
              {isSubmitting ? "Отправка..." : "Записаться"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTAForm;
