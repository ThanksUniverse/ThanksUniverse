const i18n = {
  en: {
    lang: 'en',
    toggle: 'PT',
    title: 'Pedro Bertoluchi | .NET Full-Stack Portfolio',
    description: 'Pedro Bertoluchi - C#/.NET Full-Stack Developer building secure, real-time and AI-enabled systems.'
  },
  pt: {
    lang: 'pt-BR',
    toggle: 'EN',
    title: 'Pedro Bertoluchi | Portfolio .NET Full-Stack',
    description: 'Pedro Bertoluchi - Desenvolvedor C#/.NET Full-Stack construindo sistemas seguros, em tempo real e com IA.'
  }
};

const selectorText = {
  '.top-nav nav a[href="#projects"]': { en: 'Projects', pt: 'Projetos' },
  '.top-nav nav a[href="#signals"]': { en: 'Signals', pt: 'Sinais' },
  '.top-nav nav a[href="#stack"]': { en: 'Stack', pt: 'Stack' },
  '.top-nav nav a[href="#impact"]': { en: 'Impact', pt: 'Impacto' },
  '.top-nav nav a[href="#contact"]': { en: 'Contact', pt: 'Contato' },
  '.nav-cta': { en: 'Hire Me', pt: 'Me Contrate' },
  '.hero .kicker': { en: 'C#/.NET Developer - Primary Developer for Greenfield Projects', pt: 'Desenvolvedor C#/.NET - Dev Principal em Projetos Greenfield' },
  '.hero .hero-copy': { en: 'I own architecture, implementation, and delivery. I design secure APIs, real-time flows, and RAG-driven product features that help teams move faster and make better decisions.', pt: 'Eu lidero arquitetura, implementacao e entrega. Projeto APIs seguras, fluxos em tempo real e recursos com RAG que ajudam times a acelerar e tomar melhores decisoes.' },
  '.hero-actions a.btn.solid': { en: 'View Case Studies', pt: 'Ver Estudos de Caso' },
  '.hero-actions a.btn.solid.alt': { en: 'Book Intro Call', pt: 'Agendar Conversa' },
  '.hero-card h2': { en: 'Current Role Snapshot', pt: 'Resumo da Atuacao Atual' },
  '.hero-card > p': { en: 'Primary developer for new initiatives. From first architecture draft to production handoff.', pt: 'Desenvolvedor principal de novas iniciativas. Do primeiro desenho da arquitetura ate a entrega em producao.' },
  '.stat-grid article:nth-of-type(1) p': { en: 'MVP delivery window', pt: 'Janela de entrega do MVP' },
  '.stat-grid article:nth-of-type(2) p': { en: 'SignalR notifications', pt: 'Notificacoes com SignalR' },
  '.quick-view .kicker': { en: 'Recruiter Quick View', pt: 'Visao Rapida para Recrutadores' },
  '.quick-view h2': { en: '.NET full-stack engineer with platform ownership', pt: 'Engenheiro .NET full-stack com ownership de plataforma' },
  '.fact-tags span:nth-of-type(1)': { en: 'Primary Developer', pt: 'Desenvolvedor Principal' },
  '.fact-tags span:nth-of-type(2)': { en: 'Greenfield Delivery', pt: 'Entrega Greenfield' },
  '.fact-tags span:nth-of-type(3)': { en: 'Azure APIM Governance', pt: 'Governanca Azure APIM' },
  '.fact-tags span:nth-of-type(4)': { en: 'OWASP API Security', pt: 'Seguranca de API OWASP' },
  '.fact-tags span:nth-of-type(5)': { en: 'Blazor + SignalR', pt: 'Blazor + SignalR' },
  '.fact-tags span:nth-of-type(6)': { en: 'Redis + Real-time', pt: 'Redis + Tempo Real' },
  '.fact-tags span:nth-of-type(7)': { en: 'OpenAI + RAG', pt: 'OpenAI + RAG' },
  '.fact-tags span:nth-of-type(8)': { en: 'CI/CD Ownership', pt: 'Ownership de CI/CD' },
  '#projects .kicker': { en: 'Selected Work', pt: 'Trabalhos Selecionados' },
  '#projects .section-head h2': { en: 'Case studies built for operations, scale, and fast delivery', pt: 'Estudos de caso para operacao, escala e entrega rapida' },
  '#stack .kicker': { en: 'Core Stack', pt: 'Stack Principal' },
  '#stack .section-head h2': { en: 'Built around modern .NET web architecture', pt: 'Estruturado sobre arquitetura web moderna em .NET' },
  '#signals .kicker': { en: 'Hiring Signals', pt: 'Sinais de Contratacao' },
  '#signals .section-head h2': { en: 'What reduces hiring risk for teams', pt: 'O que reduz risco de contratacao para times' },
  '#impact .kicker': { en: 'Engineering Impact', pt: 'Impacto de Engenharia' },
  '#impact .section-head h2': { en: 'What teams get when I own delivery', pt: 'O que os times recebem quando eu lidero a entrega' },
  '#contact h2': { en: "Let's build the next .NET product", pt: 'Vamos construir o proximo produto em .NET' },
  '#contact > p': { en: 'Available for full-time and high-impact project collaboration.', pt: 'Disponivel para colaboracoes full-time e projetos de alto impacto.' },
  '#contact .btn.solid': { en: 'GitHub Profile', pt: 'Perfil no GitHub' },
  'footer p': { en: 'Pedro Bertoluchi - C#/.NET Full-Stack Developer', pt: 'Pedro Bertoluchi - Desenvolvedor C#/.NET Full-Stack' },
  '.project-grid article:nth-of-type(1) .badge': { en: 'Greenfield Platform', pt: 'Plataforma Greenfield' },
  '.project-grid article:nth-of-type(1) h3': { en: 'MG Comex Workflow Platform', pt: 'Plataforma de Fluxo MG Comex' },
  '.project-grid article:nth-of-type(1) p': { en: 'End-to-end import/comex pipeline with role-based modules, validations, and operational dashboards.', pt: 'Pipeline completo de importacao/comex com modulos por perfil, validacoes e dashboards operacionais.' },
  '.project-grid article:nth-of-type(1) li:nth-of-type(1)': { en: 'Designed architecture and API contracts', pt: 'Desenhei arquitetura e contratos de API' },
  '.project-grid article:nth-of-type(1) li:nth-of-type(2)': { en: 'Built Blazor UI and EF Core data workflows', pt: 'Implementei UI em Blazor e fluxos de dados com EF Core' },
  '.project-grid article:nth-of-type(1) li:nth-of-type(3)': { en: 'Delivered MVP to production in short cycles', pt: 'Entreguei MVP em producao em ciclos curtos' },
  '.project-grid article:nth-of-type(2) .badge': { en: 'Cloud Gateway', pt: 'Gateway em Nuvem' },
  '.project-grid article:nth-of-type(2) h3': { en: 'Azure API Management Control Layer', pt: 'Camada de Controle com Azure API Management' },
  '.project-grid article:nth-of-type(2) p': { en: 'Centralized API gateway handling proxy, observability, abuse protection, and traffic governance.', pt: 'Gateway centralizado de APIs com proxy, observabilidade, protecao contra abuso e governanca de trafego.' },
  '.project-grid article:nth-of-type(2) li:nth-of-type(1)': { en: 'APIM front-door for all inbound requests', pt: 'APIM como front-door para todas as requisicoes' },
  '.project-grid article:nth-of-type(2) li:nth-of-type(2)': { en: 'Real-time block rules and rate-limit monitoring', pt: 'Regras de bloqueio em tempo real e monitoramento de rate limit' },
  '.project-grid article:nth-of-type(2) li:nth-of-type(3)': { en: 'Standardized logs for operational visibility', pt: 'Padronizacao de logs para visibilidade operacional' },
  '.project-grid article:nth-of-type(3) .badge': { en: 'Real-time Infrastructure', pt: 'Infraestrutura em Tempo Real' },
  '.project-grid article:nth-of-type(3) h3': { en: 'Reusable SignalR Notification Hub', pt: 'Hub Reutilizavel de Notificacoes SignalR' },
  '.project-grid article:nth-of-type(3) p': { en: 'Template-based real-time communication layer adopted internally across products and teams.', pt: 'Camada de comunicacao em tempo real baseada em template, adotada internamente por diferentes produtos e times.' },
  '.project-grid article:nth-of-type(3) li:nth-of-type(1)': { en: 'Standardized event contracts and channels', pt: 'Padronizacao de contratos de eventos e canais' },
  '.project-grid article:nth-of-type(3) li:nth-of-type(2)': { en: 'Reduced repeated integration effort across projects', pt: 'Reducao de esforco repetido de integracao entre projetos' },
  '.project-grid article:nth-of-type(3) li:nth-of-type(3)': { en: 'Improved consistency of user feedback loops', pt: 'Melhoria da consistencia nos ciclos de feedback ao usuario' },
  '.project-grid article:nth-of-type(4) .badge': { en: 'AI + Automation', pt: 'IA + Automacao' },
  '.project-grid article:nth-of-type(4) h3': { en: 'Semantic Search for KPI and Docs', pt: 'Busca Semantica para KPIs e Documentos' },
  '.project-grid article:nth-of-type(4) p': { en: 'RAG pipeline enabling non-technical users to ask natural-language questions and retrieve reliable insights.', pt: 'Pipeline de RAG permitindo que usuarios nao tecnicos consultem KPIs e documentos em linguagem natural.' },
  '.project-grid article:nth-of-type(4) li:nth-of-type(1)': { en: 'Implemented embeddings flow and retrieval strategy', pt: 'Implementei fluxo de embeddings e estrategia de recuperacao' },
  '.project-grid article:nth-of-type(4) li:nth-of-type(2)': { en: 'Connected AI outputs into daily product workflows', pt: 'Conectei saidas de IA aos fluxos diarios do produto' },
  '.project-grid article:nth-of-type(4) li:nth-of-type(3)': { en: 'Increased discoverability and faster decision-making', pt: 'Aumentei a descobribilidade e acelerei a tomada de decisao' },
  '.project-grid article:nth-of-type(5) .badge': { en: 'Business Platform', pt: 'Plataforma de Negocio' },
  '.project-grid article:nth-of-type(5) h3': { en: 'ABC Activity Cost Tracking System', pt: 'Sistema ABC de Custeio por Atividade' },
  '.project-grid article:nth-of-type(5) p': { en: 'Internal system for collaborator activity entries and cost attribution per process and company area.', pt: 'Sistema interno para apontamento de atividades e atribuicao de custos por processo e area da empresa.' },
  '.project-grid article:nth-of-type(5) li:nth-of-type(1)': { en: 'Mapped activities to real operational cost drivers', pt: 'Mapeei atividades para direcionadores reais de custo operacional' },
  '.project-grid article:nth-of-type(5) li:nth-of-type(2)': { en: 'Enabled visibility of cost per workflow step', pt: 'Habilitei visibilidade de custo por etapa do fluxo' },
  '.project-grid article:nth-of-type(5) li:nth-of-type(3)': { en: 'Improved data quality for management decisions', pt: 'Melhorei a qualidade dos dados para decisoes gerenciais' },
  '.project-grid article:nth-of-type(6) .badge': { en: 'Enterprise Product', pt: 'Produto Corporativo' },
  '.project-grid article:nth-of-type(6) h3': { en: 'Conecta Ideias Collaboration Platform', pt: 'Plataforma Colaborativa Conecta Ideias' },
  '.project-grid article:nth-of-type(6) p': { en: 'Multi-user idea management platform where teams submit, discuss, and track innovation initiatives.', pt: 'Plataforma multiusuario para envio, discussao e acompanhamento de ideias e iniciativas de inovacao.' },
  '.project-grid article:nth-of-type(6) li:nth-of-type(1)': { en: 'Built role-aware workflows for idea lifecycle', pt: 'Implementei fluxos por perfil para o ciclo de vida das ideias' },
  '.project-grid article:nth-of-type(6) li:nth-of-type(2)': { en: 'Enabled engagement from distributed collaborators', pt: 'Habilitei engajamento de colaboradores distribuidos' },
  '.project-grid article:nth-of-type(6) li:nth-of-type(3)': { en: 'Delivered a scalable base for future modules', pt: 'Entreguei base escalavel para modulos futuros' },
  '.project-grid article:nth-of-type(7) .badge': { en: 'Operations Integration', pt: 'Integracao Operacional' },
  '.project-grid article:nth-of-type(7) h3': { en: 'Inventory Request and Live Status System', pt: 'Sistema de Requisicao de Estoque e Status em Tempo Real' },
  '.project-grid article:nth-of-type(7) p': { en: 'User-friendly request portal connected to inventory data with real-time status and fulfillment tracking.', pt: 'Portal simples para requisicao integrado ao estoque, com status em tempo real e acompanhamento da solicitacao.' },
  '.project-grid article:nth-of-type(7) li:nth-of-type(1)': { en: 'Integrated inventory source with request lifecycle', pt: 'Integrei a fonte de estoque ao ciclo de vida da requisicao' },
  '.project-grid article:nth-of-type(7) li:nth-of-type(2)': { en: 'Added real-time updates for requesters and teams', pt: 'Adicionei atualizacoes em tempo real para solicitantes e times' },
  '.project-grid article:nth-of-type(7) li:nth-of-type(3)': { en: 'Reduced friction and communication overhead', pt: 'Reduzi friccao e overhead de comunicacao' },
  '#stack .stack-card:nth-of-type(1) h3': { en: 'Application Layer', pt: 'Camada de Aplicacao' },
  '#stack .stack-card:nth-of-type(1) p': { en: 'Blazor Web + Hybrid frontends, modular component architecture, and user-centric UX flows.', pt: 'Frontends Blazor Web + Hybrid, arquitetura modular de componentes e fluxos UX orientados ao usuario.' },
  '#stack .stack-card:nth-of-type(2) h3': { en: 'API and Domain Layer', pt: 'Camada de API e Dominio' },
  '#stack .stack-card:nth-of-type(2) p': { en: 'ASP.NET Core APIs, EF Core data access, domain workflows, and background workers.', pt: 'APIs em ASP.NET Core, acesso a dados com EF Core, workflows de dominio e workers em background.' },
  '#stack .stack-card:nth-of-type(3) h3': { en: 'Data and Performance Layer', pt: 'Camada de Dados e Performance' },
  '#stack .stack-card:nth-of-type(3) p': { en: 'SQL Server/Azure SQL for durability, Redis for low-latency cache and pub/sub patterns.', pt: 'SQL Server/Azure SQL para persistencia e Redis para cache de baixa latencia e padroes pub/sub.' },
  '#stack .stack-card:nth-of-type(4) h3': { en: 'Security and Delivery Layer', pt: 'Camada de Seguranca e Entrega' },
  '#stack .stack-card:nth-of-type(4) p': { en: 'OWASP-aligned API hardening with OIDC, JWT, HSTS, CORS, plus Azure/GitHub CI/CD and observability.', pt: 'Hardening de API alinhado ao OWASP com OIDC, JWT, HSTS e CORS, mais CI/CD em Azure/GitHub e observabilidade.' },
  '#signals .impact-grid article:nth-of-type(1) h3': { en: 'End-to-End Ownership', pt: 'Ownership de Ponta a Ponta' },
  '#signals .impact-grid article:nth-of-type(1) p': { en: 'Repeatedly led architecture, implementation, and production rollout as primary developer for new initiatives.', pt: 'Liderei repetidamente arquitetura, implementacao e rollout em producao como dev principal de novas iniciativas.' },
  '#signals .impact-grid article:nth-of-type(2) h3': { en: 'Security and Reliability', pt: 'Seguranca e Confiabilidade' },
  '#signals .impact-grid article:nth-of-type(2) p': { en: 'OWASP-oriented API security, APIM governance, rate limiting, logging, and operational guardrails by default.', pt: 'Seguranca de APIs orientada ao OWASP, governanca em APIM, rate limiting, logging e guardrails operacionais.' },
  '#signals .impact-grid article:nth-of-type(3) h3': { en: 'Reusable Engineering Assets', pt: 'Assets Reutilizaveis de Engenharia' },
  '#signals .impact-grid article:nth-of-type(3) p': { en: 'Built reusable SignalR and API templates with documentation so teams can ship faster and more consistently.', pt: 'Criei templates reutilizaveis de SignalR e API com documentacao para acelerar entregas com consistencia.' },
  '#impact .impact-grid article:nth-of-type(1) h3': { en: 'Speed', pt: 'Velocidade' },
  '#impact .impact-grid article:nth-of-type(1) p': { en: 'Prototype-to-production pipelines with reusable templates and clear technical docs.', pt: 'Pipelines de prototipo ate producao com templates reutilizaveis e documentacao tecnica clara.' },
  '#impact .impact-grid article:nth-of-type(2) h3': { en: 'Quality', pt: 'Qualidade' },
  '#impact .impact-grid article:nth-of-type(2) p': { en: 'Secure API defaults, observability-first implementation, and maintainable architecture decisions.', pt: 'Padroes seguros de API, implementacao orientada a observabilidade e decisoes de arquitetura sustentaveis.' },
  '#impact .impact-grid article:nth-of-type(3) h3': { en: 'Business Fit', pt: 'Aderencia ao Negocio' },
  '#impact .impact-grid article:nth-of-type(3) p': { en: 'Systems focused on operational bottlenecks: HelpDesk, comex, inventory requests, ideas pipeline, and cost tracking.', pt: 'Sistemas focados em gargalos operacionais: HelpDesk, comex, requisicoes de estoque, ideias e custeio.' }
};

const selectorHtml = {
  '.hero-left h1': {
    en: 'Building production-grade web products with <span>Blazor</span>, <span>SignalR</span>, <span>Redis</span> and <span>AI pipelines</span>.',
    pt: 'Construindo produtos web prontos para producao com <span>Blazor</span>, <span>SignalR</span>, <span>Redis</span> e <span>pipelines de IA</span>.'
  }
};

const langToggle = document.getElementById('lang-toggle');

const applyLanguage = (lang) => {
  const locale = lang === 'pt' ? 'pt' : 'en';
  const dict = i18n[locale];

  document.documentElement.lang = dict.lang;
  document.title = dict.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute('content', dict.description);
  }

  Object.entries(selectorText).forEach(([selector, text]) => {
    const node = document.querySelector(selector);
    if (node) {
      node.textContent = text[locale];
    }
  });

  Object.entries(selectorHtml).forEach(([selector, text]) => {
    const node = document.querySelector(selector);
    if (node) {
      node.innerHTML = text[locale];
    }
  });

  if (langToggle) {
    langToggle.textContent = dict.toggle;
    langToggle.setAttribute('aria-label', locale === 'en' ? 'Mudar idioma para portugues' : 'Switch language to English');
  }

  window.localStorage.setItem('portfolio-language', locale);
};

if (langToggle) {
  langToggle.addEventListener('click', () => {
    const nextLang = document.documentElement.lang.startsWith('pt') ? 'en' : 'pt';
    applyLanguage(nextLang);
  });
}

const savedLanguage = window.localStorage.getItem('portfolio-language');
applyLanguage(savedLanguage === 'pt' ? 'pt' : 'en');

const revealItems = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

const canTilt = window.matchMedia('(hover: hover) and (pointer: fine)').matches && !prefersReducedMotion;

if (canTilt) {
  const tiltCards = document.querySelectorAll('.tilt');

  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 8;
      const rotateX = ((y / rect.height) - 0.5) * -8;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    });
  });
}
