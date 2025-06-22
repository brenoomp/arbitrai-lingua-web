
export type Language = 'en' | 'pt' | 'es';

export interface Translation {
  // Meta
  metaTitle: string;
  metaDescription: string;
  
  // Hero Section
  heroHeadline: string;
  heroSubheadline: string;
  heroCTA: string;
  
  // Problem Section
  problemTitle: string;
  problemItems: {
    cost: { title: string; description: string };
    delays: { title: string; description: string };
    unpredictability: { title: string; description: string };
    burden: { title: string; description: string };
  };
  
  // Solution Section
  solutionTitle: string;
  solutionDescription: string;
  
  // Benefits Section
  benefitsTitle: string;
  benefitsItems: {
    speed: { title: string; description: string };
    cost: { title: string; description: string };
    predictability: { title: string; description: string };
  };
  
  // Who Section
  whoTitle: string;
  whoItems: {
    corporations: { title: string; description: string };
    sez: { title: string; description: string };
    platforms: { title: string; description: string };
  };
  
  // SEZ Section
  sezTitle: string;
  sezDescription: string;
  
  // Pricing Section
  pricingTitle: string;
  pricingDescription: string;
  
  // FAQ Section
  faqTitle: string;
  faqItems: Array<{ question: string; answer: string }>;
  
  // Form Section
  formTitle: string;
  formFields: {
    fullName: string;
    workEmail: string;
    company: string;
    jobTitle: string;
    interest: string;
  };
  formOptions: {
    corporation: string;
    sez: string;
    platform: string;
    other: string;
  };
  formButton: string;
  formCompliance: string;
  
  // Footer
  footerCopyright: string;
  privacyPolicy: string;
}

export const translations: Record<Language, Translation> = {
  en: {
    metaTitle: "ArbitrAI: AI-Arbitration for Business & Special Economic Zones",
    metaDescription: "The AI-powered dispute resolution platform for corporations and SEZs. Build a modern legal framework, attract investment, and resolve conflicts 90% faster.",
    
    heroHeadline: "AI-Powered Dispute Resolution. 90% Faster, 80% More Cost-Effective.",
    heroSubheadline: "ArbitrAI automates the entire arbitration workflow, turning the slow, expensive, and unpredictable nature of traditional justice into fast, predictable, and secure decisions.",
    heroCTA: "Be the First to Know. Sign Up for Pre-Launch.",
    
    problemTitle: "Is Your Company Still a Hostage to Legal Bureaucracy?",
    problemItems: {
      cost: {
        title: "Soaring Costs",
        description: "Legal fees that devour budgets and drain resources from core business activities."
      },
      delays: {
        title: "Extreme Delays",
        description: "Cases that drag on for years, leaving disputes unresolved and business relationships strained."
      },
      unpredictability: {
        title: "Unpredictability",
        description: "Outcomes that depend more on legal maneuvering than on facts and fairness."
      },
      burden: {
        title: "Operational Burden",
        description: "Time-consuming processes that distract leadership from strategic priorities."
      }
    },
    
    solutionTitle: "Introducing ArbitrAI: The Intelligent Arbitration.",
    solutionDescription: "A revolutionary platform that combines artificial intelligence with established arbitration principles to deliver faster, more predictable, and cost-effective dispute resolution.",
    
    benefitsTitle: "Turn Your Legal Liabilities into a Competitive Advantage.",
    benefitsItems: {
      speed: {
        title: "90% Faster Resolution",
        description: "AI-powered case analysis and automated workflows reduce resolution time from years to weeks."
      },
      cost: {
        title: "80% Cost Reduction",
        description: "Transparent, predictable pricing model eliminates surprise legal fees and budget overruns."
      },
      predictability: {
        title: "100% Predictable Outcomes",
        description: "Data-driven decisions based on precedent analysis and consistent application of rules."
      }
    },
    
    whoTitle: "Built for the Challenges of Today and Tomorrow.",
    whoItems: {
      corporations: {
        title: "Large Corporations",
        description: "Streamline dispute resolution across multiple jurisdictions with consistent, AI-powered decisions."
      },
      sez: {
        title: "Special Economic Zones",
        description: "Attract international investment with a modern, efficient legal framework that signals innovation."
      },
      platforms: {
        title: "Digital Platforms",
        description: "Resolve user disputes at scale with automated, fair, and transparent arbitration processes."
      }
    },
    
    sezTitle: "The OS for Modern Governance: Build Your Zone on a Foundation of Trust and Agility.",
    sezDescription: "A Special Economic Zone's greatest asset is its ability to attract global investment and talent. But investors demand more than tax incentives—they need assurance that disputes will be resolved quickly, fairly, and predictably. ArbitrAI is the turnkey infrastructure that signals to the world your zone is built for the future of commerce.",
    
    pricingTitle: "No Surprises. Fair Cost Tied to Success.",
    pricingDescription: "Pay only when disputes are resolved. Our transparent pricing model aligns our success with yours, eliminating the unpredictable costs of traditional legal processes.",
    
    faqTitle: "Your Questions, Answered.",
    faqItems: [
      {
        question: "How does ArbitrAI ensure fair and unbiased decisions?",
        answer: "ArbitrAI uses advanced AI algorithms trained on thousands of legal precedents and arbitration cases. The system applies consistent rules and principles, eliminating human bias while ensuring decisions are based on established legal frameworks."
      },
      {
        question: "Is ArbitrAI legally binding?",
        answer: "Yes, ArbitrAI decisions are legally binding arbitration awards, enforceable under international arbitration conventions including the New York Convention, recognized in over 160 countries."
      },
      {
        question: "What types of disputes can ArbitrAI handle?",
        answer: "ArbitrAI specializes in commercial disputes, contract breaches, intellectual property conflicts, and business partnership disagreements. The platform is designed for complex B2B disputes that require sophisticated analysis."
      },
      {
        question: "How secure is the ArbitrAI platform?",
        answer: "Security is paramount. ArbitrAI uses enterprise-grade encryption, secure cloud infrastructure, and complies with international data protection standards including GDPR and SOC 2 Type II certification."
      }
    ],
    
    formTitle: "Get Ahead. Secure Your Priority Access to ArbitrAI.",
    formFields: {
      fullName: "Full Name",
      workEmail: "Work Email",
      company: "Company / Organization Name",
      jobTitle: "Job Title",
      interest: "I am primarily interested in ArbitrAI for:"
    },
    formOptions: {
      corporation: "A Large Corporation",
      sez: "A Special Economic Zone",
      platform: "A Digital Platform",
      other: "Other"
    },
    formButton: "GET PRIORITY ACCESS",
    formCompliance: "By signing up, you agree to our Privacy Policy. We don't spam.",
    
    footerCopyright: "© 2025 ArbitrAI. All rights reserved.",
    privacyPolicy: "Privacy Policy"
  },
  
  pt: {
    metaTitle: "ArbitrAI: Arbitragem-IA para Empresas e Zonas Econômicas Especiais",
    metaDescription: "A plataforma de resolução de disputas com IA para empresas e ZEEs. Construa um framework jurídico moderno, atraia investimentos e resolva conflitos 90% mais rápido.",
    
    heroHeadline: "Resolução de Disputas com Inteligência Artificial. 90% mais rápido, 80% mais econômico.",
    heroSubheadline: "A ArbitrAI automatiza todo o fluxo arbitral, transformando a lentidão e os custos imprevisíveis da justiça tradicional em decisões ágeis, previsíveis e seguras.",
    heroCTA: "Seja o primeiro a saber. Inscreva-se para o pré-lançamento.",
    
    problemTitle: "Sua empresa ainda é refém da burocracia jurídica?",
    problemItems: {
      cost: {
        title: "Custos Crescentes",
        description: "Honorários jurídicos que consomem orçamentos e drenam recursos de atividades essenciais do negócio."
      },
      delays: {
        title: "Atrasos Extremos",
        description: "Casos que se arrastam por anos, deixando disputas sem resolução e relacionamentos comerciais tensos."
      },
      unpredictability: {
        title: "Imprevisibilidade",
        description: "Resultados que dependem mais de manobras jurídicas do que de fatos e justiça."
      },
      burden: {
        title: "Sobrecarga Operacional",
        description: "Processos demorados que distraem a liderança de prioridades estratégicas."
      }
    },
    
    solutionTitle: "Apresentando ArbitrAI: A Arbitragem Inteligente.",
    solutionDescription: "Uma plataforma revolucionária que combina inteligência artificial com princípios estabelecidos de arbitragem para entregar resolução de disputas mais rápida, previsível e econômica.",
    
    benefitsTitle: "Transforme seu passivo jurídico em vantagem competitiva.",
    benefitsItems: {
      speed: {
        title: "90% Mais Rápido",
        description: "Análise de casos com IA e fluxos automatizados reduzem o tempo de resolução de anos para semanas."
      },
      cost: {
        title: "80% Redução de Custos",
        description: "Modelo de preços transparente e previsível elimina taxas jurídicas surpresa e estouros de orçamento."
      },
      predictability: {
        title: "100% Previsível",
        description: "Decisões baseadas em dados, análise de precedentes e aplicação consistente de regras."
      }
    },
    
    whoTitle: "Desenvolvido para os desafios do presente e do futuro.",
    whoItems: {
      corporations: {
        title: "Grandes Empresas",
        description: "Simplifique a resolução de disputas em múltiplas jurisdições com decisões consistentes e baseadas em IA."
      },
      sez: {
        title: "Zonas Econômicas Especiais",
        description: "Atraia investimento internacional com um framework jurídico moderno e eficiente que sinaliza inovação."
      },
      platforms: {
        title: "Plataformas Digitais",
        description: "Resolva disputas de usuários em escala com processos de arbitragem automatizados, justos e transparentes."
      }
    },
    
    sezTitle: "O SO para a Governança Moderna: Construa sua Zona sobre uma base de Confiança e Agilidade.",
    sezDescription: "O maior ativo de uma Zona Econômica Especial é sua capacidade de atrair investimentos e talentos globais. Mas investidores exigem mais que incentivos fiscais—eles precisam de garantias de que disputas serão resolvidas rapidamente, de forma justa e previsível. A ArbitrAI é a infraestrutura completa que sinaliza ao mundo que sua zona foi construída para o futuro do comércio.",
    
    pricingTitle: "Sem surpresas. Custo justo e atrelado ao sucesso.",
    pricingDescription: "Pague apenas quando disputas forem resolvidas. Nosso modelo de preços transparente alinha nosso sucesso ao seu, eliminando os custos imprevisíveis dos processos jurídicos tradicionais.",
    
    faqTitle: "Suas dúvidas, respondidas.",
    faqItems: [
      {
        question: "Como a ArbitrAI garante decisões justas e imparciais?",
        answer: "A ArbitrAI usa algoritmos avançados de IA treinados em milhares de precedentes legais e casos de arbitragem. O sistema aplica regras e princípios consistentes, eliminando vieses humanos enquanto garante que decisões sejam baseadas em frameworks jurídicos estabelecidos."
      },
      {
        question: "As decisões da ArbitrAI são legalmente vinculantes?",
        answer: "Sim, as decisões da ArbitrAI são sentenças arbitrais legalmente vinculantes, executáveis sob convenções internacionais de arbitragem incluindo a Convenção de Nova York, reconhecida em mais de 160 países."
      },
      {
        question: "Que tipos de disputas a ArbitrAI pode resolver?",
        answer: "A ArbitrAI se especializa em disputas comerciais, quebras de contrato, conflitos de propriedade intelectual e desentendimentos de parceria empresarial. A plataforma é projetada para disputas B2B complexas que requerem análise sofisticada."
      },
      {
        question: "Quão segura é a plataforma ArbitrAI?",
        answer: "Segurança é fundamental. A ArbitrAI usa criptografia de nível empresarial, infraestrutura em nuvem segura e cumpre padrões internacionais de proteção de dados incluindo GDPR e certificação SOC 2 Tipo II."
      }
    ],
    
    formTitle: "Saia na frente. Garanta seu acesso prioritário à ArbitrAI.",
    formFields: {
      fullName: "Nome Completo",
      workEmail: "E-mail Corporativo",
      company: "Nome da Empresa / Organização",
      jobTitle: "Cargo",
      interest: "Tenho interesse principal na ArbitrAI para:"
    },
    formOptions: {
      corporation: "Uma Grande Empresa",
      sez: "Uma Zona Econômica Especial",
      platform: "Uma Plataforma Digital",
      other: "Outro"
    },
    formButton: "QUERO ACESSO PRIORITÁRIO",
    formCompliance: "Ao se inscrever, você concorda com nossa Política de Privacidade. Não enviamos spam.",
    
    footerCopyright: "© 2025 ArbitrAI. Todos os direitos reservados.",
    privacyPolicy: "Política de Privacidade"
  },
  
  es: {
    metaTitle: "ArbitrAI: Arbitraje-IA para Empresas y Zonas Económicas Especiales",
    metaDescription: "La plataforma de resolución de disputas con IA para corporaciones y ZEE. Construya un marco legal moderno, atraiga inversión y resuelva conflictos 90% más rápido.",
    
    heroHeadline: "Resolución de Disputas con Inteligencia Artificial. 90% más rápido, 80% más económico.",
    heroSubheadline: "ArbitrAI automatiza todo el flujo de arbitraje, transformando la lentitud y los costos impredecibles de la justicia tradicional en decisiones ágiles, predecibles y seguras.",
    heroCTA: "Sé el primero en saber. Regístrate para el prelanzamiento.",
    
    problemTitle: "¿Su empresa sigue siendo rehén de la burocracia legal?",
    problemItems: {
      cost: {
        title: "Costos Crecientes",
        description: "Honorarios legales que devoran presupuestos y drenan recursos de actividades comerciales centrales."
      },
      delays: {
        title: "Retrasos Extremos",
        description: "Casos que se prolongan por años, dejando disputas sin resolver y relaciones comerciales tensas."
      },
      unpredictability: {
        title: "Impredecibilidad",
        description: "Resultados que dependen más de maniobras legales que de hechos y justicia."
      },
      burden: {
        title: "Carga Operacional",
        description: "Procesos que consumen tiempo y distraen al liderazgo de prioridades estratégicas."
      }
    },
    
    solutionTitle: "Presentando ArbitrAI: El Arbitraje Inteligente.",
    solutionDescription: "Una plataforma revolucionaria que combina inteligencia artificial con principios establecidos de arbitraje para entregar resolución de disputas más rápida, predecible y económica.",
    
    benefitsTitle: "Convierta sus pasivos legales en una ventaja competitiva.",
    benefitsItems: {
      speed: {
        title: "90% Más Rápido",
        description: "Análisis de casos con IA y flujos automatizados reducen el tiempo de resolución de años a semanas."
      },
      cost: {
        title: "80% Reducción de Costos",
        description: "Modelo de precios transparente y predecible elimina honorarios legales sorpresa y sobrecostos."
      },
      predictability: {
        title: "100% Predecible",
        description: "Decisiones basadas en datos, análisis de precedentes y aplicación consistente de reglas."
      }
    },
    
    whoTitle: "Creado para los desafíos de hoy y del mañana.",
    whoItems: {
      corporations: {
        title: "Grandes Corporaciones",
        description: "Simplifique la resolución de disputas en múltiples jurisdicciones con decisiones consistentes y basadas en IA."
      },
      sez: {
        title: "Zonas Económicas Especiales",
        description: "Atraiga inversión internacional con un marco legal moderno y eficiente que señala innovación."
      },
      platforms: {
        title: "Plataformas Digitales",
        description: "Resuelva disputas de usuarios a escala con procesos de arbitraje automatizados, justos y transparentes."
      }
    },
    
    sezTitle: "El SO para la Gobernanza Moderna: Construya su Zona sobre una base de Confianza y Agilidad.",
    sezDescription: "El mayor activo de una Zona Económica Especial es su capacidad para atraer inversión y talento global. Pero los inversores exigen más que incentivos fiscales—necesitan garantías de que las disputas se resolverán rápidamente, de manera justa y predecible. ArbitrAI es la infraestructura llave en mano que le indica al mundo que su zona está construida para el futuro del comercio.",
    
    pricingTitle: "Sin sorpresas. Un costo justo y vinculado al éxito.",
    pricingDescription: "Pague solo cuando las disputas se resuelvan. Nuestro modelo de precios transparente alinea nuestro éxito con el suyo, eliminando los costos impredecibles de los procesos legales tradicionales.",
    
    faqTitle: "Sus preguntas, respondidas.",
    faqItems: [
      {
        question: "¿Cómo garantiza ArbitrAI decisiones justas e imparciales?",
        answer: "ArbitrAI utiliza algoritmos avanzados de IA entrenados en miles de precedentes legales y casos de arbitraje. El sistema aplica reglas y principios consistentes, eliminando sesgos humanos mientras garantiza que las decisiones se basen en marcos legales establecidos."
      },
      {
        question: "¿Son legalmente vinculantes las decisiones de ArbitrAI?",
        answer: "Sí, las decisiones de ArbitrAI son laudos arbitrales legalmente vinculantes, ejecutables bajo convenciones internacionales de arbitraje incluyendo la Convención de Nueva York, reconocida en más de 160 países."
      },
      {
        question: "¿Qué tipos de disputas puede manejar ArbitrAI?",
        answer: "ArbitrAI se especializa en disputas comerciales, incumplimientos de contrato, conflictos de propiedad intelectual y desacuerdos de asociación empresarial. La plataforma está diseñada para disputas B2B complejas que requieren análisis sofisticado."
      },
      {
        question: "¿Qué tan segura es la plataforma ArbitrAI?",
        answer: "La seguridad es fundamental. ArbitrAI utiliza cifrado de nivel empresarial, infraestructura en la nube segura y cumple con estándares internacionales de protección de datos incluyendo GDPR y certificación SOC 2 Tipo II."
      }
    ],
    
    formTitle: "Tome la delantera. Asegure su acceso prioritario a ArbitrAI.",
    formFields: {
      fullName: "Nombre Completo",
      workEmail: "Correo electrónico de trabajo",
      company: "Nombre de la Empresa / Organización",
      jobTitle: "Puesto de Trabajo",
      interest: "Estoy interesado/a principalmente en ArbitrAI para:"
    },
    formOptions: {
      corporation: "Una Gran Corporación",
      sez: "Una Zona Económica Especial",
      platform: "Una Plataforma Digital",
      other: "Otro"
    },
    formButton: "OBTENER ACCESO PRIORITARIO",
    formCompliance: "Al registrarte, aceptas nuestra Política de Privacidad. No enviamos spam.",
    
    footerCopyright: "© 2025 ArbitrAI. Todos los derechos reservados.",
    privacyPolicy: "Política de Privacidad"
  }
};

export const getTranslation = (language: Language): Translation => {
  return translations[language];
};
