import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-100 section-padding">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contacts */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-light" />
                <span>Guangzhou, China</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-light" />
                <span>+86 20 XXXX XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-light" />
                <span>info@heihezdrav.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary-light" />
                <span>WeChat: heihezdrav</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-secondary" />
                <span>WhatsApp: +86 138 XXXX XXXX</span>
              </li>
            </ul>
          </div>
          
          {/* Working Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Часы работы</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>Пн-Пт: 8:00-18:00</li>
              <li>Сб: 9:00-15:00</li>
              <li>Вс: По записи</li>
            </ul>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#why-us" className="text-neutral-400 hover:text-accent transition-colors">
                  О клинике
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-accent transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#doctors" className="text-neutral-400 hover:text-accent transition-colors">
                  Врачи
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-neutral-400 hover:text-accent transition-colors">
                  Цены
                </a>
              </li>
              <li>
                <a href="#cta-form" className="text-neutral-400 hover:text-accent transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Следите за нами</h4>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-primary-light transition-colors">
                Facebook
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-light transition-colors">
                Instagram
              </a>
              <a href="#" className="text-neutral-400 hover:text-secondary transition-colors">
                WeChat
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
          <p className="mb-2">© 2025 Heihezdrav Medical Clinic. All rights reserved.</p>
          <p>
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            {" | "}
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
