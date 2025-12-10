import { Stethoscope, Microscope, Heart, Activity, Shield, Video } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Консультация врача",
    description: "Первичная консультация с профильным специалистом",
  },
  {
    icon: Microscope,
    title: "Диагностика",
    description: "КТ, МРТ, УЗИ, анализы крови и другие методы",
  },
  {
    icon: Heart,
    title: "Терапия",
    description: "Лечение острых и хронических заболеваний",
  },
  {
    icon: Activity,
    title: "Хирургия",
    description: "Плановые и экстренные хирургические вмешательства",
  },
  {
    icon: Shield,
    title: "Профилактика",
    description: "Чекап, вакцинация, профилактические осмотры",
  },
  {
    icon: Video,
    title: "Телемедицина",
    description: "Онлайн-консультации, рецепты, наблюдение",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Наши <span className="text-primary">услуги</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Полный спектр медицинских услуг от диагностики до лечения
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
