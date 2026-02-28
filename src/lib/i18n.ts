export const locales = ["uz", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "uz";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const messages: Record<
  Locale,
  {
    nav: {
      home: string;
      blog: string;
      about: string;
      navigation: string;
      openMenu: string;
      language: string;
    };
    home: {
      badge: string;
      title: string;
      description: string;
      readArticles: string;
      featured: string;
      recent: string;
      viewAll: string;
    };
    blog: {
      title: string;
      description: string;
      empty: string;
      noMatch: string;
      searchPlaceholder: string;
      allCategory: string;
      previous: string;
      next: string;
      pageOf: string;
    };
    about: {
      title: string;
      heading: string;
      lead: string;
      goal: string;
      description: string;
    };
    share: {
      heading: string;
      copyLink: string;
    };
    author: {
      bio: string;
    };
    footer: {
      description: string;
    };
  }
> = {
  uz: {
    nav: {
      home: "Bosh sahifa",
      blog: "Blog",
      about: "Biz haqimizda",
      navigation: "Navigatsiya",
      openMenu: "Menyuni ochish",
      language: "Til",
    },
    home: {
      badge: "MUBINAAI",
      title: "Salom, shaxsiy blogimga xush kelibsiz.",
      description:
        "Frontend Developer (Backend va AI o'rganyapman) 🚀. 0️⃣ dan AI Engineer gacha yo'l. AI va Prompt Engineering bo'yicha o'rganayotgan bilimlarim hamda tajribalarimni ulashaman.",
      readArticles: "Maqolalarni ko'rish",
      featured: "Tanlangan maqolalar",
      recent: "So'nggi maqolalar",
      viewAll: "Barchasini ko'rish",
    },
    blog: {
      title: "Blog",
      description:
        "AI, ML va zamonaviy IT muhandisligi bo'yicha amaliy maqolalarni qidiring, saralang va o'qing.",
      empty:
        "Hozircha maqolalar mavjud emas. Tez orada yangi materiallar e'lon qilinadi.",
      noMatch: "Qidiruv mezonlariga mos maqola topilmadi.",
      searchPlaceholder: "Maqolalarni qidiring...",
      allCategory: "Barchasi",
      previous: "Oldingi",
      next: "Keyingi",
      pageOf: "Sahifa {page} / {total}",
    },
    about: {
      title: "Biz haqimizda",
      heading: "Mubinaai haqida",
      lead: "Mubinaai machine learning tizimlari, LLM operatsiyalari va zamonaviy IT arxitekturasi bo'yicha amaliy hamda muhandislik yondashuviga asoslangan materiallarni taqdim etadi.",
      goal: "Maqsadimiz oddiy: jamoalarga aniq arxitektura, o'lchanadigan natija va qo'llab-quvvatlashga qulay kod asosida ishonchli AI mahsulotlarini yaratishda yordam berish.",
      description: "Mubinaai platformasi va uning tahririy yo'nalishi haqida.",
    },
    share: {
      heading: "Maqolani ulashish",
      copyLink: "Havolani nusxalash",
    },
    author: {
      bio: "Amaliy machine learning va IT arxitekturasi yo'nalishida yozadigan dasturiy ta'minot muhandisi va AI amaliyotchisi.",
    },
    footer: {
      description:
        "Sun'iy intellekt, Machine Learning va IT muhandisligi bo'yicha amaliy maqolalar.",
    },
  },
  en: {
    nav: {
      home: "Home",
      blog: "Blog",
      about: "About",
      navigation: "Navigation",
      openMenu: "Open menu",
      language: "Language",
    },
    home: {
      badge: "MUBINAAI",
      title: "Welcome to my personal blog.",
      description:
        "I am a Frontend Developer currently learning Backend and AI 🚀. This is my journey from zero to AI Engineer, where I share my learnings and practical experience in AI and Prompt Engineering.",
      readArticles: "Read articles",
      featured: "Featured articles",
      recent: "Latest articles",
      viewAll: "View all",
    },
    blog: {
      title: "Blog",
      description:
        "Search, filter, and read practical articles on AI, machine learning, and modern IT engineering.",
      empty: "There are no articles yet. New content will be published soon.",
      noMatch: "No articles matched your search criteria.",
      searchPlaceholder: "Search articles...",
      allCategory: "All",
      previous: "Previous",
      next: "Next",
      pageOf: "Page {page} of {total}",
    },
    about: {
      title: "About",
      heading: "About Mubinaai",
      lead: "Mubinaai publishes practical, engineering-first content on machine learning systems, LLM operations, and modern IT architecture.",
      goal: "Our mission is straightforward: help teams ship reliable AI products through clean abstractions, measurable outcomes, and maintainable codebases.",
      description: "About Mubinaai and its editorial direction.",
    },
    share: {
      heading: "Share this article",
      copyLink: "Copy link",
    },
    author: {
      bio: "Software engineer and AI practitioner writing about practical machine learning and modern IT architecture.",
    },
    footer: {
      description:
        "Practical articles on AI, machine learning, and IT engineering.",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      blog: "Блог",
      about: "О нас",
      navigation: "Навигация",
      openMenu: "Открыть меню",
      language: "Язык",
    },
    home: {
      badge: "MUBINAAI",
      title: "Добро пожаловать в мой личный блог.",
      description:
        "Я Frontend Developer и сейчас изучаю Backend и AI 🚀. Здесь мой путь от нуля до AI Engineer, где я делюсь знаниями и практическим опытом по AI и Prompt Engineering.",
      readArticles: "Читать статьи",
      featured: "Рекомендуемые материалы",
      recent: "Последние материалы",
      viewAll: "Смотреть все",
    },
    blog: {
      title: "Блог",
      description:
        "Ищите, фильтруйте и читайте практические статьи по AI, machine learning и современной IT-инженерии.",
      empty: "Публикаций пока нет. В ближайшее время появятся новые материалы.",
      noMatch: "По заданным параметрам статьи не найдены.",
      searchPlaceholder: "Поиск статей...",
      allCategory: "Все",
      previous: "Назад",
      next: "Вперёд",
      pageOf: "Страница {page} из {total}",
    },
    about: {
      title: "О нас",
      heading: "О Mubinaai",
      lead: "Mubinaai публикует практические материалы с инженерным фокусом о системах machine learning, операционных процессах LLM и современной IT-архитектуре.",
      goal: "Наша цель проста: помогать командам выпускать надёжные AI-продукты за счёт чистых абстракций, измеримых результатов и поддерживаемого кода.",
      description: "О платформе Mubinaai и её редакционном подходе.",
    },
    share: {
      heading: "Поделиться статьёй",
      copyLink: "Скопировать ссылку",
    },
    author: {
      bio: "Инженер-программист и практик AI, пишущий о прикладном machine learning и современной IT-архитектуре.",
    },
    footer: {
      description:
        "Практические статьи по AI, machine learning и IT-инженерии.",
    },
  },
};
