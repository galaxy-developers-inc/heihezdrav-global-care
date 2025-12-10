import { Award, Users, Zap, Eye, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyUs = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Award,
      title: t("whyus.experience"),
      description: t("whyus.experience.desc"),
    },
    {
      icon: Users,
      title: t("whyus.staff"),
      description: t("whyus.staff.desc"),
    },
    {
      icon: Zap,
      title: t("whyus.technology"),
      description: t("whyus.technology.desc"),
    },
    {
      icon: Eye,
      title: t("whyus.pricing"),
      description: t("whyus.pricing.desc"),
    },
    {
      icon: CheckCircle,
      title: t("whyus.booking"),
      description: t("whyus.booking.desc"),
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container-main">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
          {t("whyus.title")}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card border border-border rounded-xl p-6 text-center card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
