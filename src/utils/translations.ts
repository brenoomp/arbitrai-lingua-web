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
  solutionBenefits: Array<{ title: string; description: string }>;
  
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
  sezFeatures: Array<{ title: string }>;
  
  // Pricing Section
  pricingTitle: string;
  pricingDescription: string;
  pricingCardTitle: string;
  pricingCardFeatures: Array<string>;
  pricingCardNote: string;
  
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
    solutionBenefits: [
      {
        title: "Lightning Fast",
        description: "AI-powered analysis delivers decisions in weeks, not years."
      },
      {
        title: "Intelligent Decisions",
        description: "Advanced algorithms trained on thousands of legal precedents."
      },
      {
        title: "Legally Binding",
        description: "Enforceable decisions recognized internationally."
      }
    ],
    
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
    sezFeatures: [
      { title: "Global Recognition" },
      { title: "Investment Attraction" },
      { title: "Legal Certainty" },
      { title: "Rapid Deployment" }
    ],
    
    pricingTitle: "No Surprises. Fair Cost Tied to Success.",
    pricingDescription: "Pay only when disputes are resolved. Our transparent pricing model aligns our success with yours, eliminating the unpredictable costs of traditional legal processes.",
    pricingCardTitle: "Success-Based Pricing",
    pricingCardFeatures: [
      "No upfront costs or hidden fees",
      "Pay only when disputes are resolved",
      "Transparent pricing structure",
      "Scales with your business needs",
      "No long-term contracts required"
    ],
    pricingCardNote: "Detailed pricing will be shared with priority access members",
    
    faqTitle: "❓ Frequently Asked Questions (FAQ)",
    faqItems: [
      {
        question: "1. What is ArbitrAI?",
        answer: "ArbitrAI is a digital dispute resolution platform powered by artificial intelligence. It conducts the entire arbitration process, from notification to final decision, in a faster, more affordable, and more efficient way than traditional methods."
      },
      {
        question: "2. Does the AI's decision have legal value?",
        answer: "Yes, as long as both parties have previously signed an <strong>arbitration clause</strong> agreeing to resolve disputes through ArbitrAI. Once accepted, the AI's decision can be formalized as an <strong>extrajudicial enforceable title</strong>."
      },
      {
        question: "3. How is the AI's impartiality ensured?",
        answer: "ArbitrAI's models are trained on legal doctrine, case law, and best arbitration practices. All decisions can be reviewed by qualified human arbitrators or a partner arbitration chamber, ensuring fairness and neutrality."
      },
      {
        question: "4. Do I need a lawyer to use the platform?",
        answer: "Legal representation is not required, especially for consumer-related disputes. However, for more complex or high-value cases, legal assistance is recommended."
      },
      {
        question: "5. What if the other party refuses to participate?",
        answer: "Arbitration through ArbitrAI requires both parties to agree via a pre-existing arbitration clause. If the notified party refuses, arbitration will not proceed, though this may have contractual or legal consequences."
      },
      {
        question: "6. What types of disputes can be resolved on the platform?",
        answer: "ArbitrAI currently handles:\n- <strong>High-value consumer disputes</strong>\n- <strong>Corporate and shareholder conflicts</strong> (with arbitration clause)\n- Disputes within <strong>Special Economic or Digital Zones</strong>\n\nOther types of disputes may be added in the future."
      },
      {
        question: "7. How long does it take to get a decision?",
        answer: "It depends on the complexity of the case and the parties' responses. However, once the instruction phase is complete, <strong>the AI will issue a reasoned decision within 5 hours.</strong>"
      },
      {
        question: "8. Can I propose a settlement through the platform?",
        answer: "Yes. At any point, either party can propose a settlement. If accepted, the process is closed. For AI-assisted settlements, a <strong>1.5% fee</strong> applies based on the settlement value."
      },
      {
        question: "9. Can the AI decision be challenged?",
        answer: "Yes. After the decision is issued, parties can request:\n- <strong>A review by a human arbitrator</strong>\n- <strong>An appeal to a partner arbitration chamber</strong>"
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
    solutionBenefits: [
      {
        title: "Rápido como um Raio",
        description: "Análise com IA entrega decisões em semanas, não anos."
      },
      {
        title: "Decisões Inteligentes",
        description: "Algoritmos avançados treinados em milhares de precedentes jurídicos."
      },
      {
        title: "Legalmente Vinculante",
        description: "Decisões executáveis reconhecidas internacionalmente."
      }
    ],
    
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
    sezFeatures: [
      { title: "Reconhecimento Global" },
      { title: "Atração de Investimentos" },
      { title: "Segurança Jurídica" },
      { title: "Implantação Rápida" }
    ],
    
    pricingTitle: "Sem surpresas. Custo justo e atrelado ao sucesso.",
    pricingDescription: "Pague apenas quando disputas forem resolvidas. Nosso modelo de preços transparente alinha nosso sucesso ao seu, eliminando os custos imprevisíveis dos processos jurídicos tradicionais.",
    pricingCardTitle: "Precificação por Sucesso",
    pricingCardFeatures: [
      "Sem custos iniciais ou taxas ocultas",
      "Pague apenas quando as disputas forem resolvidas",
      "Estrutura de preços transparente",
      "Escalável conforme a necessidade do seu negócio",
      "Sem contratos de longo prazo"
    ],
    pricingCardNote: "Detalhes completos de preços serão compartilhados com membros de acesso prioritário",
    
    faqTitle: "❓ Perguntas Frequentes (FAQ)",
    faqItems: [
      {
        question: "1. O que é ArbitrAI?",
        answer: "ArbitrAI é uma plataforma digital de resolução de disputas alimentada por inteligência artificial. Ela conduz todo o processo de arbitragem, desde a notificação até a decisão final, de forma mais rápida, acessível e eficiente que os métodos tradicionais."
      },
      {
        question: "2. A decisão da IA tem valor legal?",
        answer: "Sim, desde que ambas as partes tenham previamente assinado uma <strong>cláusula arbitral</strong> concordando em resolver disputas através da ArbitrAI. Uma vez aceita, a decisão da IA pode ser formalizada como um <strong>título extrajudicial executivo</strong>."
      },
      {
        question: "3. Como é garantida a imparcialidade da IA?",
        answer: "Os modelos da ArbitrAI são treinados em doutrina legal, jurisprudência e melhores práticas de arbitragem. Todas as decisões podem ser revisadas por árbitros humanos qualificados ou uma câmara de arbitragem parceira, garantindo justiça e neutralidade."
      },
      {
        question: "4. Preciso de um advogado para usar a plataforma?",
        answer: "Representação legal não é obrigatória, especialmente para disputas relacionadas ao consumidor. No entanto, para casos mais complexos ou de alto valor, a assistência jurídica é recomendada."
      },
      {
        question: "5. E se a outra parte se recusar a participar?",
        answer: "A arbitragem através da ArbitrAI requer que ambas as partes concordem através de uma cláusula arbitral pré-existente. Se a parte notificada se recusar, a arbitragem não prosseguirá, embora isso possa ter consequências contratuais ou legais."
      },
      {
        question: "6. Que tipos de disputas podem ser resolvidas na plataforma?",
        answer: "A ArbitrAI atualmente trata:\n- <strong>Disputas de alto valor com consumidores</strong>\n- <strong>Conflitos corporativos e entre acionistas</strong> (com cláusula arbitral)\n- Disputas dentro de <strong>Zonas Econômicas Especiais ou Digitais</strong>\n\nOutros tipos de disputas podem ser adicionados no futuro."
      },
      {
        question: "7. Quanto tempo leva para obter uma decisão?",
        answer: "Depende da complexidade do caso e das respostas das partes. No entanto, uma vez que a fase de instrução esteja completa, <strong>a IA emitirá uma decisão fundamentada em 5 horas.</strong>"
      },
      {
        question: "8. Posso propor um acordo através da plataforma?",
        answer: "Sim. A qualquer momento, qualquer parte pode propor um acordo. Se aceito, o processo é encerrado. Para acordos assistidos por IA, uma <strong>taxa de 1,5%</strong> se aplica com base no valor do acordo."
      },
      {
        question: "9. A decisão da IA pode ser contestada?",
        answer: "Sim. Após a decisão ser emitida, as partes podem solicitar:\n- <strong>Uma revisão por um árbitro humano</strong>\n- <strong>Um recurso para uma câmara de arbitragem parceira</strong>"
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
    solutionBenefits: [
      {
        title: "Ultrarrápido",
        description: "El análisis con IA entrega decisiones en semanas, no años."
      },
      {
        title: "Decisiones Inteligentes",
        description: "Algoritmos avanzados entrenados en miles de precedentes legales."
      },
      {
        title: "Legalmente Vinculante",
        description: "Decisiones ejecutables reconocidas internacionalmente."
      }
    ],
    
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
    sezFeatures: [
      { title: "Reconocimiento Global" },
      { title: "Atracción de Inversiones" },
      { title: "Seguridad Jurídica" },
      { title: "Implementación Rápida" }
    ],
    
    pricingTitle: "Sin sorpresas. Un costo justo y vinculado al éxito.",
    pricingDescription: "Pague solo cuando las disputas se resuelvan. Nuestro modelo de precios transparente alinea nuestro éxito con el suyo, eliminando los costos impredecibles de los procesos legales tradicionales.",
    pricingCardTitle: "Precios Basados en el Éxito",
    pricingCardFeatures: [
      "Sin costos iniciales ni tarifas ocultas",
      "Pague solo cuando se resuelvan las disputas",
      "Estructura de precios transparente",
      "Escalable según las necesidades de su negocio",
      "Sin contratos a largo plazo"
    ],
    pricingCardNote: "Los detalles completos de precios se compartirán con los miembros de acceso prioritario",
    
    faqTitle: "❓ Preguntas Frecuentes (FAQ)",
    faqItems: [
      {
        question: "1. ¿Qué es ArbitrAI?",
        answer: "ArbitrAI es una plataforma digital de resolución de disputas impulsada por inteligencia artificial. Conduce todo el proceso de arbitraje, desde la notificación hasta la decisión final, de una manera más rápida, asequible y eficiente que los métodos tradicionales."
      },
      {
        question: "2. ¿La decisión de la IA tiene valor legal?",
        answer: "Sí, siempre que ambas partes hayan firmado previamente una <strong>cláusula arbitral</strong> acordando resolver disputas a través de ArbitrAI. Una vez aceptada, la decisión de la IA puede ser formalizada como un <strong>título extrajudicial ejecutivo</strong>."
      },
      {
        question: "3. ¿Cómo se garantiza la imparcialidad de la IA?",
        answer: "Los modelos de ArbitrAI están entrenados en doctrina legal, jurisprudencia y mejores prácticas de arbitraje. Todas las decisiones pueden ser revisadas por árbitros humanos calificados o una cámara de arbitraje asociada, garantizando justicia y neutralidad."
      },
      {
        question: "4. ¿Necesito un abogado para usar la plataforma?",
        answer: "La representación legal no es requerida, especialmente para disputas relacionadas con el consumidor. Sin embargo, para casos más complejos o de alto valor, se recomienda asistencia legal."
      },
      {
        question: "5. ¿Qué pasa si la otra parte se niega a participar?",
        answer: "El arbitraje a través de ArbitrAI requiere que ambas partes estén de acuerdo a través de una cláusula arbitral preexistente. Si la parte notificada se niega, el arbitraje no procederá, aunque esto puede tener consecuencias contractuales o legales."
      },
      {
        question: "6. ¿Qué tipos de disputas se pueden resolver en la plataforma?",
        answer: "ArbitrAI actualmente maneja:\n- <strong>Disputas de alto valor con consumidores</strong>\n- <strong>Conflictos corporativos y entre accionistas</strong> (con cláusula arbitral)\n- Disputas dentro de <strong>Zonas Económicas Especiales o Digitales</strong>\n\nOtros tipos de disputas pueden ser agregados en el futuro."
      },
      {
        question: "7. ¿Cuánto tiempo toma obtener una decisión?",
        answer: "Depende de la complejidad del caso y las respuestas de las partes. Sin embargo, una vez que la fase de instrucción esté completa, <strong>la IA emitirá una decisión fundamentada en 5 horas.</strong>"
      },
      {
        question: "8. ¿Puedo proponer un acuerdo a través de la plataforma?",
        answer: "Sí. En cualquier momento, cualquiera de las partes puede proponer un acuerdo. Si es aceptado, el proceso se cierra. Para acuerdos asistidos por IA, se aplica una <strong>tarifa del 1.5%</strong> basada en el valor del acuerdo."
      },
      {
        question: "9. ¿Se puede impugnar la decisión de la IA?",
        answer: "Sí. Después de que se emita la decisión, las partes pueden solicitar:\n- <strong>Una revisión por un árbitro humano</strong>\n- <strong>Un recurso a una cámara de arbitraje asociada</strong>"
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
