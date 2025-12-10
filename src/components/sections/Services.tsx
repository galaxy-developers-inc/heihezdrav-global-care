import { Stethoscope, Microscope, Heart, Activity, Shield, Video } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Stethoscope,
      title: t("services.consultation"),
      description: t("services.consultation.desc"),
    },
    {
      icon: Microscope,
      title: t("services.diagnostics"),
      description: t("services.diagnostics.desc"),
    },
    {
      icon: Heart,
      title: t("services.therapy"),
      description: t("services.therapy.desc"),
    },
    {
      icon: Activity,
      title: t("services.surgery"),
      description: t("services.surgery.desc"),
    },
    {
      icon: Shield,
      title: t("services.prevention"),
      description: t("services.prevention.desc"),
    },
    {
      icon: Video,
      title: t("services.telemedicine"),
      description: t("services.telemedicine.desc"),
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-xl p-6 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
