import './NavMenu.css';
import Categories from '../Categories/Categories';
import { useState } from 'react';

function NavMenu() {

   const [categories, setCategories] = useState({
      about: {
         title: 'О компании',
         subcategories: {
            info: {
               title: 'Информация'
            },
            ourTeam: {
               title: 'Наш коллектив'
            },
            career: {
               title: 'Карьера'
            },
            feedback: {
               title: 'Обратная связь'
            }
         }
      },
      products: {
         title: 'Продукты',
         subcategories: {
            bookkeeping: {
               title: '1С BAIM: Бухгалтерия для Азербайджана'
            },
            complexAutomation: {
               title: '1С BAIM: Комплексная Автоматизация для Азербайджана'
            },
            service: {
               title: '1С BAIM: ERP для Азербайджана'
            },
            allProducts: {
               title: 'Все продукты 1С'
            },
            choice: {
               title: 'Какой продукт выбрать'
            }
         }
      },
      service: {
         title: 'Услуги',
         subcategories: {
            technicalSupport: {
               title: 'Сопровождение 1С: ИТС'
            },
            subscriptionService: {
               title: 'Абонентское обслуживание 1С'
            },
            preDesignInspection: {
               title: 'Предпроектное обследование'
            },
            serverSoftwareInstallation: {
               title: 'Установка серверного ПО'
            },
            webDev: {
               title: 'Разработка сайтов'
            },
            mobileDev: {
               title: 'Разработка мобильного приложения'
            },
            softwareImplementation: {
               title: 'Внедрение программного обеспечения 1С'
            }
         }
      },
      clients: {
         title: 'Наши клиенты',
      },
      materials: {
         title: 'Полезные материалы',
         subcategories: {
            news: {
               title: 'Новости'
            },
            instructions: {
               title: 'Инструкции'
            },
            viseoMaterials: {
               title: 'Видеоматериалы'
            }
         }
      }
   });

   return (
      <Categories categories={categories} />
   )
}

export default NavMenu;