import { Award, Users, Zap, Eye, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Опытные врачи",
    description: "20+ лет опыта, международные сертификаты",
  },
  {
    icon: Users,
    title: "Англоговорящий персонал",
    description: "Полная поддержка на английском языке, переводчик 24/7",
  },
  {
    icon: Zap,
    title: "Современное оборудование",
    description: "Последние технологии диагностики и лечения",
  },
  {
    icon: Eye,
    title: "Прозрачное ценообразование",
    description: "Никаких скрытых платежей, смета предоставляется заранее",
  },
  {
    icon: CheckCircle,
    title: "Быстрая запись",
    description: "Онлайн-бронирование доступно 24/7",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container-main">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
          Почему выбирают <span className="text-primary">нас?</span>
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
