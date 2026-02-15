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
  '.top-nav nav a[href="#about"]': { en: 'About', pt: 'Sobre' },
  '.top-nav nav a[href="#projects"]': { en: 'Projects', pt: 'Projetos' },
  '.top-nav nav a[href="#strengths"]': { en: 'Strengths', pt: 'Diferenciais' },
  '.top-nav nav a[href="#stack"]': { en: 'Stack', pt: 'Stack' },
  '.top-nav nav a[href="#contact"]': { en: 'Contact', pt: 'Contato' },
  '.nav-cta': { en: 'Hire Me', pt: 'Me Contrate' },
  '.hero .kicker': { en: 'C#/.NET Developer \u2014 Primary Developer for Greenfield Projects', pt: 'Desenvolvedor C#/.NET \u2014 Dev Principal em Projetos Greenfield' },
  '.hero-sub': { en: 'I own architecture, implementation, and delivery. I design secure APIs, real-time flows, and RAG-driven product features that help teams move faster and make better decisions.', pt: 'Eu lidero arquitetura, implementa\u00e7\u00e3o e entrega. Projeto APIs seguras, fluxos em tempo real e recursos com RAG que ajudam times a acelerar e tomar melhores decis\u00f5es.' },
  '.hero-actions a.btn.solid:not(.alt)': { en: 'View Case Studies', pt: 'Ver Estudos de Caso' },
  '.hero-actions a.btn.solid.alt': { en: 'Book Intro Call', pt: 'Agendar Conversa' },
  '.hero-card h2': { en: 'Current Role Snapshot', pt: 'Resumo da Atua\u00e7\u00e3o Atual' },
  '.hero-card > p': { en: 'Primary developer for new initiatives. From first architecture draft to production handoff.', pt: 'Desenvolvedor principal de novas iniciativas. Do primeiro desenho da arquitetura at\u00e9 a entrega em produ\u00e7\u00e3o.' },
  '.stat-grid article:nth-of-type(1) p': { en: 'MVP delivery window', pt: 'Janela de entrega do MVP' },
  '.stat-grid article:nth-of-type(2) p': { en: 'SignalR notifications', pt: 'Notifica\u00e7\u00f5es com SignalR' },
  '.stat-grid article:nth-of-type(3) p': { en: 'Embeddings + RAG', pt: 'Embeddings + RAG' },
  '.stat-grid article:nth-of-type(4) p': { en: 'JWT, CORS, HSTS', pt: 'JWT, CORS, HSTS' },
  '#about .kicker': { en: 'About', pt: 'Sobre' },
  '#about h2': { en: 'Pedro Bertoluchi', pt: 'Pedro Bertoluchi' },
  '.about-headline': { en: '.NET engineer for business-critical internal systems', pt: 'Engenheiro .NET para sistemas internos de miss\u00e3o cr\u00edtica' },
  '.about-body': { en: "I'm Pedro, a .NET engineer focused on building and operating business-critical internal systems. I ship secure Blazor applications backed by SQL and Azure, with strong ownership over reliability, integrations, and production support. My style is direct and pragmatic: measurable impact, clean architecture, and systems that keep working under pressure.", pt: 'Sou Pedro, engenheiro .NET focado em construir e operar sistemas internos de miss\u00e3o cr\u00edtica. Entrego aplica\u00e7\u00f5es Blazor seguras com SQL e Azure, com ownership forte sobre confiabilidade, integra\u00e7\u00f5es e suporte em produ\u00e7\u00e3o. Meu estilo \u00e9 direto e pragm\u00e1tico: impacto mensur\u00e1vel, arquitetura limpa e sistemas que continuam funcionando sob press\u00e3o.' },
  '.highlight-card h3': { en: 'What I deliver', pt: 'O que eu entrego' },
  '.highlight-card li:nth-of-type(1)': { en: 'Primary developer for greenfield initiatives from architecture to production rollout.', pt: 'Dev principal em projetos greenfield, da arquitetura ao rollout em produ\u00e7\u00e3o.' },
  '.highlight-card li:nth-of-type(2)': { en: 'Built APIM gateway governance with proxy, real-time block/rate limiting visibility, and standardized logging.', pt: 'Constru\u00ed governan\u00e7a de gateway APIM com proxy, visibilidade de bloqueio/rate limit em tempo real e logs padronizados.' },
  '.highlight-card li:nth-of-type(3)': { en: 'Delivered internal platforms for comex workflows, ABC cost tracking, and inventory request lifecycle.', pt: 'Entreguei plataformas internas para fluxos de comex, custeio ABC e ciclo de vida de requisi\u00e7\u00f5es de estoque.' },
  '.highlight-card li:nth-of-type(4)': { en: 'Implemented AI/RAG search flows that improved KPI and document discoverability for non-technical users.', pt: 'Implementei fluxos de busca com IA/RAG que melhoraram a descoberta de KPIs e documentos para usu\u00e1rios n\u00e3o t\u00e9cnicos.' },
  '.highlight-card li:nth-of-type(5)': { en: 'Created reusable SignalR and API security templates to increase team delivery consistency.', pt: 'Criei templates reutiliz\u00e1veis de SignalR e seguran\u00e7a de API para aumentar a consist\u00eancia das entregas do time.' },
  '.competence-tags span:nth-of-type(1)': { en: 'Primary Developer', pt: 'Desenvolvedor Principal' },
  '.competence-tags span:nth-of-type(2)': { en: 'Greenfield Delivery', pt: 'Entrega Greenfield' },
  '.competence-tags span:nth-of-type(3)': { en: 'Azure APIM Governance', pt: 'Governan\u00e7a Azure APIM' },
  '.competence-tags span:nth-of-type(4)': { en: 'OWASP API Security', pt: 'Seguran\u00e7a de API OWASP' },
  '.competence-tags span:nth-of-type(5)': { en: 'Blazor + SignalR', pt: 'Blazor + SignalR' },
  '.competence-tags span:nth-of-type(6)': { en: 'Redis + Real-time', pt: 'Redis + Tempo Real' },
  '.competence-tags span:nth-of-type(7)': { en: 'OpenAI + RAG', pt: 'OpenAI + RAG' },
  '.competence-tags span:nth-of-type(8)': { en: 'CI/CD Ownership', pt: 'Ownership de CI/CD' },
  '#projects .kicker': { en: 'Selected Work', pt: 'Trabalhos Selecionados' },
  '#projects .section-head h2': { en: 'Case studies built for operations, scale, and fast delivery', pt: 'Estudos de caso para opera\u00e7\u00e3o, escala e entrega r\u00e1pida' },
  '.project-grid article:nth-of-type(1) .badge': { en: 'Greenfield Platform', pt: 'Plataforma Greenfield' },
  '.project-grid article:nth-of-type(1) h3': { en: 'MG Comex Workflow Platform', pt: 'Plataforma de Fluxo MG Comex' },
  '.project-grid article:nth-of-type(1) .project-desc': { en: 'End-to-end import/comex pipeline with role-based modules, validations, and operational dashboards.', pt: 'Pipeline completo de importa\u00e7\u00e3o/comex com m\u00f3dulos por perfil, valida\u00e7\u00f5es e dashboards operacionais.' },
  '.project-grid article:nth-of-type(1) li:nth-of-type(1)': { en: 'Designed architecture and API contracts', pt: 'Desenhei arquitetura e contratos de API' },
  '.project-grid article:nth-of-type(1) li:nth-of-type(2)': { en: 'Built Blazor UI and EF Core data workflows', pt: 'Implementei UI em Blazor e fluxos de dados com EF Core' },
  '.project-grid article:nth-of-type(1) li:nth-of-type(3)': { en: 'Delivered MVP to production in 4-8 week cycles', pt: 'Entreguei MVP em produ\u00e7\u00e3o em ciclos de 4-8 semanas' },
  '.project-grid article:nth-of-type(2) .badge': { en: 'Cloud Gateway', pt: 'Gateway em Nuvem' },
  '.project-grid article:nth-of-type(2) h3': { en: 'Azure API Management Control Layer', pt: 'Camada de Controle com Azure API Management' },
  '.project-grid article:nth-of-type(2) .project-desc': { en: 'Centralized API gateway handling proxy, observability, abuse protection, and traffic governance.', pt: 'Gateway centralizado de APIs com proxy, observabilidade, prote\u00e7\u00e3o contra abuso e governan\u00e7a de tr\u00e1fego.' },
  '.project-grid article:nth-of-type(2) li:nth-of-type(1)': { en: 'APIM front-door for all inbound requests', pt: 'APIM como front-door para todas as requisi\u00e7\u00f5es' },
  '.project-grid article:nth-of-type(2) li:nth-of-type(2)': { en: 'Real-time block rules and rate-limit monitoring', pt: 'Regras de bloqueio em tempo real e monitoramento de rate limit' },
  '.project-grid article:nth-of-type(2) li:nth-of-type(3)': { en: 'Standardized logs and reduced incident triage time by ~30%', pt: 'Padronizei logs e reduzi tempo de triagem de incidentes em ~30%' },
  '.project-grid article:nth-of-type(3) .badge': { en: 'AI + Automation', pt: 'IA + Automa\u00e7\u00e3o' },
  '.project-grid article:nth-of-type(3) h3': { en: 'Semantic Search for KPI and Docs', pt: 'Busca Sem\u00e2ntica para KPIs e Documentos' },
  '.project-grid article:nth-of-type(3) .project-desc': { en: 'RAG pipeline enabling non-technical users to ask natural-language questions and retrieve reliable insights.', pt: 'Pipeline de RAG permitindo que usu\u00e1rios n\u00e3o t\u00e9cnicos consultem KPIs e documentos em linguagem natural.' },
  '.project-grid article:nth-of-type(3) li:nth-of-type(1)': { en: 'Implemented embeddings flow and retrieval strategy', pt: 'Implementei fluxo de embeddings e estrat\u00e9gia de recupera\u00e7\u00e3o' },
  '.project-grid article:nth-of-type(3) li:nth-of-type(2)': { en: 'Connected AI outputs into daily product workflows', pt: 'Conectei sa\u00eddas de IA aos fluxos di\u00e1rios do produto' },
  '.project-grid article:nth-of-type(3) li:nth-of-type(3)': { en: 'Improved document/KPI discovery and reduced lookup time for users', pt: 'Melhorei a descoberta de documentos/KPIs e reduzi tempo de busca dos usu\u00e1rios' },
  '.project-grid article:nth-of-type(4) .badge': { en: 'Operations Integration', pt: 'Integra\u00e7\u00e3o Operacional' },
  '.project-grid article:nth-of-type(4) h3': { en: 'Inventory Request and Live Status System', pt: 'Sistema de Requisi\u00e7\u00e3o de Estoque e Status em Tempo Real' },
  '.project-grid article:nth-of-type(4) .project-desc': { en: 'User-friendly request portal connected to inventory data with real-time status and fulfillment tracking.', pt: 'Portal simples para requisi\u00e7\u00e3o integrado ao estoque, com status em tempo real e acompanhamento da solicita\u00e7\u00e3o.' },
  '.project-grid article:nth-of-type(4) li:nth-of-type(1)': { en: 'Integrated inventory source with request lifecycle', pt: 'Integrei a fonte de estoque ao ciclo de vida da requisi\u00e7\u00e3o' },
  '.project-grid article:nth-of-type(4) li:nth-of-type(2)': { en: 'Added real-time updates for requesters and teams', pt: 'Adicionei atualiza\u00e7\u00f5es em tempo real para solicitantes e times' },
  '.project-grid article:nth-of-type(4) li:nth-of-type(3)': { en: 'Reduced friction and status-follow-up overhead for requesters', pt: 'Reduzi fric\u00e7\u00e3o e overhead de follow-up de status para solicitantes' },
  '.also-built .kicker': { en: 'Also Built', pt: 'Tamb\u00e9m Constru\u00ed' },
  '.also-built-items span:nth-of-type(1)': { en: 'ABC Activity Cost Tracking Platform', pt: 'Plataforma de Custeio por Atividade ABC' },
  '.also-built-items span:nth-of-type(2)': { en: 'Conecta Ideias Collaboration Platform', pt: 'Plataforma Colaborativa Conecta Ideias' },
  '.also-built-items span:nth-of-type(3)': { en: 'Reusable SignalR Notification Hub', pt: 'Hub Reutiliz\u00e1vel de Notifica\u00e7\u00f5es SignalR' },
  '.also-built-items span:nth-of-type(4)': { en: 'HelpDesk Workflow System', pt: 'Sistema de Fluxo HelpDesk' },
  '.also-built-items span:nth-of-type(5)': { en: 'Real-time Chat with RAG + AI', pt: 'Chat em Tempo Real com RAG + IA' },
  '#strengths .kicker': { en: 'Why Work With Me', pt: 'Por Que Trabalhar Comigo' },
  '#strengths .section-head h2': { en: 'What I bring to every project', pt: 'O que eu trago para cada projeto' },
  '#strengths .strength-card:nth-of-type(1) h3': { en: 'End-to-End Ownership', pt: 'Ownership de Ponta a Ponta' },
  '#strengths .strength-card:nth-of-type(1) p': { en: 'Repeatedly led architecture, implementation, and production rollout as primary developer for new initiatives.', pt: 'Liderei repetidamente arquitetura, implementa\u00e7\u00e3o e rollout em produ\u00e7\u00e3o como dev principal de novas iniciativas.' },
  '#strengths .strength-card:nth-of-type(2) h3': { en: 'Security and Reliability', pt: 'Seguran\u00e7a e Confiabilidade' },
  '#strengths .strength-card:nth-of-type(2) p': { en: 'OWASP-oriented API security, APIM governance, rate limiting, logging, and operational guardrails by default.', pt: 'Seguran\u00e7a de APIs orientada ao OWASP, governan\u00e7a em APIM, rate limiting, logging e guardrails operacionais.' },
  '#strengths .strength-card:nth-of-type(3) h3': { en: 'Speed to Production', pt: 'Velocidade para Produ\u00e7\u00e3o' },
  '#strengths .strength-card:nth-of-type(3) p': { en: 'Prototype-to-production pipelines with reusable templates and clear technical docs. 4-8 week MVP cycles.', pt: 'Pipelines de prot\u00f3tipo at\u00e9 produ\u00e7\u00e3o com templates reutiliz\u00e1veis e documenta\u00e7\u00e3o t\u00e9cnica clara. Ciclos MVP de 4-8 semanas.' },
  '#strengths .strength-card:nth-of-type(4) h3': { en: 'Reusable Engineering', pt: 'Engenharia Reutiliz\u00e1vel' },
  '#strengths .strength-card:nth-of-type(4) p': { en: 'Built reusable SignalR and API templates with documentation so teams can ship faster and more consistently.', pt: 'Criei templates reutiliz\u00e1veis de SignalR e API com documenta\u00e7\u00e3o para acelerar entregas com consist\u00eancia.' },
  '#strengths .strength-card:nth-of-type(5) h3': { en: 'Business-First Systems', pt: 'Sistemas Orientados ao Neg\u00f3cio' },
  '#strengths .strength-card:nth-of-type(5) p': { en: 'Systems focused on real operational bottlenecks: HelpDesk, comex, inventory requests, ideas pipeline, and cost tracking.', pt: 'Sistemas focados em gargalos operacionais reais: HelpDesk, comex, requisi\u00e7\u00f5es de estoque, ideias e custeio.' },
  '#strengths .strength-card:nth-of-type(6) h3': { en: 'Azure-Native', pt: 'Nativo em Azure' },
  '#strengths .strength-card:nth-of-type(6) p': { en: 'Broad Azure experience: App hosting, identity (Azure AD/OIDC), monitoring, SQL, Redis caching, APIM, and storage.', pt: 'Ampla experi\u00eancia em Azure: App hosting, identidade (Azure AD/OIDC), monitoramento, SQL, cache Redis, APIM e storage.' },
  '#stack .kicker': { en: 'Core Stack', pt: 'Stack Principal' },
  '#stack .section-head h2': { en: 'Built around modern .NET web architecture', pt: 'Estruturado sobre arquitetura web moderna em .NET' },
  '#stack .stack-card:nth-of-type(1) h3': { en: 'Application Layer', pt: 'Camada de Aplica\u00e7\u00e3o' },
  '#stack .stack-card:nth-of-type(1) p': { en: 'Blazor Web + Hybrid frontends, modular component architecture, and user-centric UX flows.', pt: 'Frontends Blazor Web + Hybrid, arquitetura modular de componentes e fluxos UX orientados ao usu\u00e1rio.' },
  '#stack .stack-card:nth-of-type(2) h3': { en: 'API and Domain Layer', pt: 'Camada de API e Dom\u00ednio' },
  '#stack .stack-card:nth-of-type(2) p': { en: 'ASP.NET Core APIs, EF Core data access, domain workflows, and background workers.', pt: 'APIs em ASP.NET Core, acesso a dados com EF Core, workflows de dom\u00ednio e workers em background.' },
  '#stack .stack-card:nth-of-type(3) h3': { en: 'Data and Performance Layer', pt: 'Camada de Dados e Performance' },
  '#stack .stack-card:nth-of-type(3) p': { en: 'SQL Server/Azure SQL for durability, Redis for low-latency cache and pub/sub patterns.', pt: 'SQL Server/Azure SQL para persist\u00eancia e Redis para cache de baixa lat\u00eancia e padr\u00f5es pub/sub.' },
  '#stack .stack-card:nth-of-type(4) h3': { en: 'Security and Delivery Layer', pt: 'Camada de Seguran\u00e7a e Entrega' },
  '#stack .stack-card:nth-of-type(4) p': { en: 'OWASP-aligned API hardening with OIDC, JWT, HSTS, CORS, plus Azure/GitHub CI/CD and observability.', pt: 'Hardening de API alinhado ao OWASP com OIDC, JWT, HSTS e CORS, mais CI/CD em Azure/GitHub e observabilidade.' },
  '#contact h2': { en: "Let's build the next .NET product", pt: 'Vamos construir o pr\u00f3ximo produto em .NET' },
  '#contact p': { en: 'Available for full-time and high-impact project collaboration.', pt: 'Dispon\u00edvel para colabora\u00e7\u00f5es full-time e projetos de alto impacto.' },
  '#contact .btn.solid:not(.alt)': { en: 'Send Email', pt: 'Enviar Email' },
  '#contact .btn.solid.alt': { en: 'GitHub Profile', pt: 'Perfil no GitHub' },
  'footer p': { en: 'Pedro Bertoluchi \u2014 C#/.NET Full-Stack Developer', pt: 'Pedro Bertoluchi \u2014 Desenvolvedor C#/.NET Full-Stack' }
};

const selectorHtml = {
  '.hero-left h1': {
    en: 'Building production-grade web products with <span>Blazor</span>, <span>SignalR</span>, <span>Redis</span> and <span>AI pipelines</span>.',
    pt: 'Construindo produtos web prontos para produ\u00e7\u00e3o com <span>Blazor</span>, <span>SignalR</span>, <span>Redis</span> e <span>pipelines de IA</span>.'
  },
  '.about-details li:nth-of-type(1)': {
    en: '<strong>Role:</strong> .NET Engineer (Full-Stack, Enterprise Internal Systems)',
    pt: '<strong>Fun\u00e7\u00e3o:</strong> Engenheiro .NET (Full-Stack, Sistemas Internos Corporativos)'
  },
  '.about-details li:nth-of-type(2)': {
    en: '<strong>Location:</strong> Porto Ferreira, Sao Paulo, Brazil',
    pt: '<strong>Localiza\u00e7\u00e3o:</strong> Porto Ferreira, S\u00e3o Paulo, Brasil'
  },
  '.about-details li:nth-of-type(3)': {
    en: '<strong>Work model:</strong> On-site/Hybrid, open to global collaboration',
    pt: '<strong>Modelo:</strong> Presencial/H\u00edbrido, aberto a colabora\u00e7\u00e3o global'
  },
  '.about-details li:nth-of-type(4)': {
    en: '<strong>Quick links:</strong> <a href="https://github.com/ThanksUniverse" target="_blank" rel="noopener noreferrer">GitHub</a> &middot; <a href="https://www.linkedin.com/in/pedro-bertoluchi/" target="_blank" rel="noopener noreferrer">LinkedIn</a> &middot; <a href="mailto:pedro.bertoluchi@outlook.com">Email</a>',
    pt: '<strong>Links:</strong> <a href="https://github.com/ThanksUniverse" target="_blank" rel="noopener noreferrer">GitHub</a> &middot; <a href="https://www.linkedin.com/in/pedro-bertoluchi/" target="_blank" rel="noopener noreferrer">LinkedIn</a> &middot; <a href="mailto:pedro.bertoluchi@outlook.com">Email</a>'
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
    langToggle.setAttribute('aria-label', locale === 'en' ? 'Mudar idioma para portugu\u00eas' : 'Switch language to English');
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

const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mainNav.classList.toggle('open');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('open');
    });
  });
}

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
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
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
      const rotateY = ((x / rect.width) - 0.5) * 6;
      const rotateX = ((y / rect.height) - 0.5) * -6;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    });
  });
}
