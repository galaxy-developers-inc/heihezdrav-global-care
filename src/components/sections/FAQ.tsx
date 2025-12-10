import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Как записаться на приём?",
    answer: "Заполните форму на сайте, отправьте WhatsApp/WeChat, или позвоните в клинику. Запись занимает менее 5 минут.",
  },
  {
    question: "Какие языки поддерживаются?",
    answer: "Английский, китайский, японский, корейский. Переводчик доступен для других языков.",
  },
  {
    question: "Какие документы нужны?",
    answer: "Паспорт, медицинская страховка (если есть), предыдущие медицинские рекорды.",
  },
  {
    question: "Есть ли скидки на пакеты услуг?",
    answer: "Да, при заказе комплексного чекапа скидка 15%. Подробнее на консультации.",
  },
  {
    question: "Если я иностранец, это может быть проблемой?",
    answer: "Нет, мы специализируемся на иностранных пациентах. Весь процесс адаптирован для вас.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-muted">
      <div className="container-main">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
          Часто задаваемые <span className="text-primary">вопросы</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
