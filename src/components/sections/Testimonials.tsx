import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    country: "USA",
    rating: 5,
    text: "Отличная клиника! Врачи профессиональны, персонал внимателен. Я чувствовал себя в безопасности.",
    flag: "🇺🇸",
  },
  {
    name: "Sarah Johnson",
    country: "UK",
    rating: 5,
    text: "Быстрая запись, минимальные очереди. Цены справедливые, всё прозрачно. Рекомендую!",
    flag: "🇬🇧",
  },
  {
    name: "Max Weber",
    country: "Germany",
    rating: 5,
    text: "Англоговорящий персонал - огромный плюс. Лечение прошло успешно, результат отличный.",
    flag: "🇩🇪",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-primary/5">
      <div className="container-main">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-12">
          Отзывы пациентов
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card border border-border rounded-xl p-6 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg">
                  {testimonial.flag}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
