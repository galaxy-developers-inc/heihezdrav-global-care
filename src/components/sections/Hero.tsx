import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-clinic.jpg";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToForm = () => {
    document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[80vh] bg-background overflow-hidden">
      <div className="container-main section-padding">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" onClick={scrollToForm}>
                {t("hero.cta")}
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#services">{t("hero.learn_more")}</a>
              </Button>
            </div>
            
            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-lg">✓</span>
                </div>
                <span className="text-sm text-muted-foreground">{t("hero.jci")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-lg">🌐</span>
                </div>
                <span className="text-sm text-muted-foreground">{t("hero.english")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-lg">24</span>
                </div>
                <span className="text-sm text-muted-foreground">{t("hero.support")}</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="order-1 lg:order-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <img
                src={heroImage}
                alt="Heihezdrav International Medical Clinic - современный интерьер клиники"
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-lg border border-border hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-secondary-foreground font-bold">4.9</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t("hero.rating")}</p>
                    <p className="text-sm text-muted-foreground">{t("hero.reviews")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
