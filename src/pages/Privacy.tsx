import { useLanguage } from "@/contexts/LanguageContext";

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container-main section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {t("privacy.title")}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("privacy.collection.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("privacy.collection.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("privacy.usage.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("privacy.usage.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("privacy.protection.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("privacy.protection.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("privacy.contact.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("privacy.contact.content")}
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

export default Privacy;