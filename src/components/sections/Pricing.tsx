import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();
  
  const pricingData = [
    { service: t("pricing.consultation"), price: "$80" },
    { service: t("pricing.ultrasound"), price: "$150" },
    { service: t("pricing.ct"), price: "$400" },
    { service: t("pricing.blood_test"), price: "$120" },
    { service: t("pricing.emergency"), price: "$200" },
    { service: t("pricing.telemedicine"), price: "$60" },
  ];

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-main">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
          {t("pricing.title")}
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card">
            <table className="w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left px-6 py-4 font-semibold text-foreground">{t("pricing.service")}</th>
                  <th className="text-right px-6 py-4 font-semibold text-foreground">{t("pricing.price")}</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((item, index) => (
                  <tr 
                    key={item.service}
                    className="border-t border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-foreground">{item.service}</td>
                    <td className="px-6 py-4 text-right font-semibold text-primary">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-6">
            {t("pricing.note")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
