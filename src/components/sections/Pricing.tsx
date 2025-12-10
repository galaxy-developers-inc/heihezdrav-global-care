const pricingData = [
  { service: "Консультация врача", price: "$80" },
  { service: "УЗИ диагностика", price: "$150" },
  { service: "КТ сканирование", price: "$400" },
  { service: "Анализы крови", price: "$120" },
  { service: "Первичная помощь", price: "$200" },
  { service: "Телемедицина (30 мин)", price: "$60" },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-main">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
          Стоимость <span className="text-primary">услуг</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card">
            <table className="w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Услуга</th>
                  <th className="text-right px-6 py-4 font-semibold text-foreground">Цена (USD)</th>
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
            * Цены ориентировочные. Точная стоимость определяется после консультации.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
