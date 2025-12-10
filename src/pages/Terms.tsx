import { useLanguage } from "@/contexts/LanguageContext";

const Terms = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container-main section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {t("terms.title")}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("terms.services.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("terms.services.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("terms.appointments.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("terms.appointments.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("terms.payments.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("terms.payments.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("terms.liability.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("terms.liability.content")}
              </p>
            </section>
          </div>

          <div className="mt-12">
            <a 
              href="/" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              ← {t("common.back_home")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;