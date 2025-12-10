import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ru' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Переводы
const translations = {
  ru: {
    // Header
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.doctors': 'Врачи',
    'nav.pricing': 'Цены',
    'nav.faq': 'FAQ',
    'nav.contact': 'Контакты',
    'nav.appointment': 'Записаться',
    
    // Hero Section
    'hero.title': 'Международная клиника мирового уровня в центре Китая',
    'hero.subtitle': 'Качественное медицинское обслуживание мирового уровня',
    'hero.description': 'Квалифицированные врачи, современное оборудование, полная забота о вашем здоровье. Более 5000 довольных пациентов по всему миру.',
    'hero.cta': 'Записаться на приём',
    'hero.learn_more': 'Наши услуги',
    
    // Why Us Section
    'whyus.title': 'Почему выбирают нас?',
    'whyus.experience': 'Опытные врачи',
    'whyus.experience.desc': '20+ лет опыта, международные сертификаты',
    'whyus.staff': 'Англоговорящий персонал',
    'whyus.staff.desc': 'Полная поддержка на английском языке, переводчик 24/7',
    'whyus.technology': 'Современное оборудование',
    'whyus.technology.desc': 'Последние технологии диагностики и лечения',
    'whyus.pricing': 'Прозрачное ценообразование',
    'whyus.pricing.desc': 'Никаких скрытых платежей, смета предоставляется заранее',
    'whyus.booking': 'Быстрая запись',
    'whyus.booking.desc': 'Онлайн-бронирование доступно 24/7',
    
    // Services Section
    'services.title': 'Наши услуги',
    'services.subtitle': 'Полный спектр медицинских услуг от диагностики до лечения',
    'services.consultation': 'Консультация врача',
    'services.consultation.desc': 'Первичная консультация с профильным специалистом',
    'services.diagnostics': 'Диагностика',
    'services.diagnostics.desc': 'КТ, МРТ, УЗИ, анализы крови и другие методы',
    'services.therapy': 'Терапия',
    'services.therapy.desc': 'Лечение острых и хронических заболеваний',
    'services.surgery': 'Хирургия',
    'services.surgery.desc': 'Плановые и экстренные хирургические вмешательства',
    'services.prevention': 'Профилактика',
    'services.prevention.desc': 'Чекап, вакцинация, профилактические осмотры',
    'services.telemedicine': 'Телемедицина',
    'services.telemedicine.desc': 'Онлайн-консультации, рецепты, наблюдение',
    
    // Doctors Section
    'doctors.title': 'Наши врачи',
    'doctors.experience': 'Опыт',
    'doctors.qualification': 'Квалификация',
    'doctors.languages': 'Языки',
    'doctors.cardiology': 'Кардиология',
    'doctors.gastroenterology': 'Гастроэнтерология',
    'doctors.dermatology': 'Дерматология',
    
    // Testimonials Section
    'testimonials.title': 'Отзывы пациентов',
    'testimonials.1': 'Отличная клиника! Врачи профессиональны, персонал внимателен. Я чувствовал себя в безопасности.',
    'testimonials.2': 'Быстрая запись, минимальные очереди. Цены справедливые, всё прозрачно. Рекомендую!',
    'testimonials.3': 'Англоговорящий персонал - огромный плюс. Лечение прошло успешно, результат отличный.',
    
    // Pricing Section
    'pricing.title': 'Стоимость услуг',
    'pricing.service': 'Услуга',
    'pricing.price': 'Цена (USD)',
    'pricing.consultation': 'Консультация врача',
    'pricing.ultrasound': 'УЗИ диагностика',
    'pricing.ct': 'КТ сканирование',
    'pricing.blood_test': 'Анализы крови',
    'pricing.emergency': 'Первичная помощь',
    'pricing.telemedicine': 'Телемедицина (30 мин)',
    'pricing.note': '* Цены ориентировочные. Точная стоимость определяется после консультации.',
    
    // FAQ Section
    'faq.title': 'Часто задаваемые вопросы',
    'faq.q1': 'Как записаться на приём?',
    'faq.a1': 'Заполните форму на сайте, отправьте WhatsApp/WeChat, или позвоните в клинику. Запись занимает менее 5 минут.',
    'faq.q2': 'Какие языки поддерживаются?',
    'faq.a2': 'Английский, китайский, японский, корейский. Переводчик доступен для других языков.',
    'faq.q3': 'Какие документы нужны?',
    'faq.a3': 'Паспорт, медицинская страховка (если есть), предыдущие медицинские рекорды.',
    'faq.q4': 'Есть ли скидки на пакеты услуг?',
    'faq.a4': 'Да, при заказе комплексного чекапа скидка 15%. Подробнее на консультации.',
    'faq.q5': 'Если я иностранец, это может быть проблемой?',
    'faq.a5': 'Нет, мы специализируемся на иностранных пациентах. Весь процесс адаптирован для вас.',
    
    // CTA Form Section
    'cta.title': 'Запишитесь на приём прямо сейчас',
    'cta.subtitle': 'Заполните форму, и наш администратор свяжется с вами в течение часа',
    'cta.name': 'Ваше имя',
    'cta.email': 'Email',
    'cta.phone': 'Телефон/WhatsApp',
    'cta.service': 'Выберите услугу',
    'cta.date': 'Предпочтительная дата',
    'cta.message': 'Дополнительная информация',
    'cta.submit': 'Записаться',
    'cta.submitting': 'Отправка...',
    'cta.success_title': 'Заявка отправлена!',
    'cta.success_desc': 'Наш администратор свяжется с вами в течение часа.',
    
    // Footer Section
    'footer.contacts': 'Контакты',
    'footer.hours': 'Часы работы',
    'footer.navigation': 'Навигация',
    'footer.social': 'Следите за нами',
    'footer.hours.weekdays': 'Пн-Пт: 8:00-18:00',
    'footer.hours.saturday': 'Сб: 9:00-15:00',
    'footer.hours.sunday': 'Вс: По записи',
    'footer.nav.about': 'О клинике',
    'footer.nav.services': 'Услуги',
    'footer.nav.doctors': 'Врачи',
    'footer.nav.pricing': 'Цены',
    'footer.nav.contacts': 'Контакты',
    'footer.copyright': '© 2025 Heihezdrav Medical Clinic. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    // Hero Trust Badges
    'hero.jci': 'Лицензия JCI',
    'hero.english': 'English Speaking',
    'hero.support': 'Поддержка 24/7',
    'hero.rating': 'Рейтинг клиники',
    'hero.reviews': '500+ отзывов',
    
    // Privacy Page
    'privacy.title': 'Политика конфиденциальности',
    'privacy.collection.title': 'Сбор информации',
    'privacy.collection.content': 'Мы собираем только необходимую информацию для предоставления медицинских услуг: имя, контактные данные, медицинскую историю.',
    'privacy.usage.title': 'Использование данных',
    'privacy.usage.content': 'Ваши данные используются исключительно для медицинского обслуживания, записи на приём и связи с вами.',
    'privacy.protection.title': 'Защита данных',
    'privacy.protection.content': 'Мы используем современные методы шифрования и защиты данных. Информация не передается третьим лицам без вашего согласия.',
    'privacy.contact.title': 'Контакты',
    'privacy.contact.content': 'По вопросам конфиденциальности обращайтесь: info@heihezdrav.com',

    // Terms Page
    'terms.title': 'Условия обслуживания',
    'terms.services.title': 'Медицинские услуги',
    'terms.services.content': 'Клиника предоставляет медицинские услуги в соответствии с международными стандартами и лицензиями.',
    'terms.appointments.title': 'Запись на приём',
    'terms.appointments.content': 'Пациенты могут записаться онлайн или по телефону. Отмена должна быть сделана за 24 часа.',
    'terms.payments.title': 'Оплата',
    'terms.payments.content': 'Оплата производится наличными, картой или банковским переводом. Цены указаны в USD.',
    'terms.liability.title': 'Ответственность',
    'terms.liability.content': 'Клиника несет ответственность в рамках действующего законодательства и страхового покрытия.',

    // Common
    'common.back_home': 'Вернуться на главную',
    'button.book_appointment': 'Записаться на прием',
    'button.learn_more': 'Узнать больше',
    'button.contact': 'Связаться с нами',
  },
  zh: {
    // Header
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.services': '服务',
    'nav.doctors': '医生',
    'nav.pricing': '价格',
    'nav.faq': '常见问题',
    'nav.contact': '联系我们',
    'nav.appointment': '预约',
    
    // Hero Section
    'hero.title': '中国中心的世界级国际诊所',
    'hero.subtitle': '世界级优质医疗服务',
    'hero.description': '合格的医生，现代化设备，全面关爱您的健康。全球超过5000名满意的患者。',
    'hero.cta': '预约就诊',
    'hero.learn_more': '我们的服务',
    
    // Why Us Section
    'whyus.title': '为什么选择我们？',
    'whyus.experience': '经验丰富的医生',
    'whyus.experience.desc': '20+年经验，国际认证',
    'whyus.staff': '英语服务团队',
    'whyus.staff.desc': '全英语支持，24/7翻译服务',
    'whyus.technology': '现代化设备',
    'whyus.technology.desc': '最新的诊断和治疗技术',
    'whyus.pricing': '透明定价',
    'whyus.pricing.desc': '无隐藏费用，提前提供报价',
    'whyus.booking': '快速预约',
    'whyus.booking.desc': '24/7在线预约服务',
    
    // Services Section
    'services.title': '我们的服务',
    'services.subtitle': '从诊断到治疗的全方位医疗服务',
    'services.consultation': '医生咨询',
    'services.consultation.desc': '专科医生初诊咨询',
    'services.diagnostics': '诊断检查',
    'services.diagnostics.desc': 'CT、MRI、超声、血液检查等方法',
    'services.therapy': '治疗',
    'services.therapy.desc': '急性和慢性疾病治疗',
    'services.surgery': '外科手术',
    'services.surgery.desc': '计划性和紧急外科手术',
    'services.prevention': '预防保健',
    'services.prevention.desc': '体检、疫苗接种、预防性检查',
    'services.telemedicine': '远程医疗',
    'services.telemedicine.desc': '在线咨询、处方、随访',
    
    // Doctors Section
    'doctors.title': '我们的医生',
    'doctors.experience': '经验',
    'doctors.qualification': '资质',
    'doctors.languages': '语言',
    'doctors.cardiology': '心脏病学',
    'doctors.gastroenterology': '胃肠病学',
    'doctors.dermatology': '皮肤科',
    
    // Testimonials Section
    'testimonials.title': '患者评价',
    'testimonials.1': '优秀的诊所！医生专业，工作人员细心。我感到很安全。',
    'testimonials.2': '预约快速，排队时间短。价格公道，一切透明。推荐！',
    'testimonials.3': '英语服务团队是巨大的优势。治疗成功，效果很好。',
    
    // Pricing Section
    'pricing.title': '服务价格',
    'pricing.service': '服务',
    'pricing.price': '价格 (USD)',
    'pricing.consultation': '医生咨询',
    'pricing.ultrasound': '超声诊断',
    'pricing.ct': 'CT扫描',
    'pricing.blood_test': '血液检查',
    'pricing.emergency': '急诊服务',
    'pricing.telemedicine': '远程医疗 (30分钟)',
    'pricing.note': '* 价格仅供参考。具体费用在咨询后确定。',
    
    // FAQ Section
    'faq.title': '常见问题',
    'faq.q1': '如何预约就诊？',
    'faq.a1': '填写网站表格，发送WhatsApp/微信，或致电诊所。预约不到5分钟。',
    'faq.q2': '支持哪些语言？',
    'faq.a2': '英语、中文、日语、韩语。其他语言可提供翻译服务。',
    'faq.q3': '需要什么文件？',
    'faq.a3': '护照、医疗保险（如有）、既往病历。',
    'faq.q4': '套餐服务有折扣吗？',
    'faq.a4': '是的，综合体检套餐享受15%折扣。详情请咨询。',
    'faq.q5': '作为外国人会有问题吗？',
    'faq.a5': '不会，我们专门为外国患者服务。整个流程都为您量身定制。',
    
    // CTA Form Section
    'cta.title': '立即预约就诊',
    'cta.subtitle': '填写表格，我们的管理员将在一小时内与您联系',
    'cta.name': '您的姓名',
    'cta.email': '邮箱',
    'cta.phone': '电话/WhatsApp',
    'cta.service': '选择服务',
    'cta.date': '首选日期',
    'cta.message': '附加信息',
    'cta.submit': '预约',
    'cta.submitting': '提交中...',
    'cta.success_title': '申请已提交！',
    'cta.success_desc': '我们的管理员将在一小时内与您联系。',
    
    // Footer Section
    'footer.contacts': '联系方式',
    'footer.hours': '营业时间',
    'footer.navigation': '导航',
    'footer.social': '关注我们',
    'footer.hours.weekdays': '周一至周五：8:00-18:00',
    'footer.hours.saturday': '周六：9:00-15:00',
    'footer.hours.sunday': '周日：预约制',
    'footer.nav.about': '关于诊所',
    'footer.nav.services': '服务',
    'footer.nav.doctors': '医生',
    'footer.nav.pricing': '价格',
    'footer.nav.contacts': '联系我们',
    'footer.copyright': '© 2025 Heihezdrav Medical Clinic. 版权所有。',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    
    // Hero Trust Badges
    'hero.jci': 'JCI认证',
    'hero.english': '英语服务',
    'hero.support': '24/7支持',
    'hero.rating': '诊所评分',
    'hero.reviews': '500+评价',
    
    // Privacy Page
    'privacy.title': '隐私政策',
    'privacy.collection.title': '信息收集',
    'privacy.collection.content': '我们只收集提供医疗服务所需的必要信息：姓名、联系方式、病史。',
    'privacy.usage.title': '数据使用',
    'privacy.usage.content': '您的数据仅用于医疗服务、预约和与您联系。',
    'privacy.protection.title': '数据保护',
    'privacy.protection.content': '我们使用现代加密和数据保护方法。未经您同意，信息不会传递给第三方。',
    'privacy.contact.title': '联系方式',
    'privacy.contact.content': '隐私问题请联系：info@heihezdrav.com',

    // Terms Page
    'terms.title': '服务条款',
    'terms.services.title': '医疗服务',
    'terms.services.content': '诊所按照国际标准和许可证提供医疗服务。',
    'terms.appointments.title': '预约',
    'terms.appointments.content': '患者可在线或电话预约。取消预约需提前24小时。',
    'terms.payments.title': '付款',
    'terms.payments.content': '可现金、刷卡或银行转账付款。价格以美元计价。',
    'terms.liability.title': '责任',
    'terms.liability.content': '诊所在现行法律和保险范围内承担责任。',

    // Common
    'common.back_home': '返回首页',
    'button.book_appointment': '预约就诊',
    'button.learn_more': '了解更多',
    'button.contact': '联系我们',
  }
};