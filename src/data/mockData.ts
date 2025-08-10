// Devuelve la cantidad de herramientas por categoría
export function getCantidadPorCategoria(categoriaId: string): number {
    return herramientas.filter(h => h.categoria === categoriaId).length;
}
export const categorias = {
    'generacion': {
        nombre: 'Generación de Código',
        emoji: '🤖',
        descripcion: 'Herramientas especializadas en autocompletado, generación y refactoring de código',
        color: 'from-blue-500 to-cyan-500',
        destacadas: ['GitHub Copilot', 'Cursor', 'Tabnine']
    },
    'chat': {
        nombre: 'Chat & Asistentes',
        emoji: '💬',
        descripcion: 'Asistentes conversacionales especializados en desarrollo y programación',
        color: 'from-green-500 to-emerald-500',
        destacadas: ['GPT-4o', 'Claude 3.5']
    },
    'ides': {
        nombre: 'IDEs y Editores',
        emoji: '🛠️',
        descripcion: 'Entornos de desarrollo integrados con capacidades de IA avanzadas',
        color: 'from-purple-500 to-violet-500',
        destacadas: ['Cursor', 'Replit AI']
    },
    'testing': {
        nombre: 'Testing & QA',
        emoji: '🧪',
        descripcion: 'Herramientas de IA para pruebas automatizadas y aseguramiento de calidad',
        color: 'from-orange-500 to-red-500',
        destacadas: ['Mabl', 'Diffblue Cover', 'Testim AI']
    },
    'devops': {
        nombre: 'DevOps & Deployment',
        emoji: '🚀',
        descripcion: 'Automatización inteligente para CI/CD, infraestructura y operaciones',
        color: 'from-indigo-500 to-blue-500',
        destacadas: ['Harness AI/OPS', 'Dynatrace Davis AI']
    },
    'documentacion': {
        nombre: 'Documentación',
        emoji: '📚',
        descripcion: 'Generación automática y mantenimiento de documentación técnica',
        color: 'from-teal-500 to-cyan-500',
        destacadas: ['Notion AI', 'Mintlify', 'NotebookLM']
    },
    'diseno': {
        nombre: 'UI/UX & Diseño',
        emoji: '🎨',
        descripcion: 'Herramientas de IA para diseño de interfaces, presentaciones y experiencia de usuario',
        color: 'from-pink-500 to-rose-500',
        destacadas: ['Gamma', 'Beautiful.ai', 'Miro AI']
    },
    'seguridad': {
        nombre: 'Seguridad & Análisis',
        emoji: '🔒',
        descripcion: 'Análisis de seguridad, vulnerabilidades y calidad de código con IA',
        color: 'from-red-500 to-pink-500',
        destacadas: ['Snyk Code', 'SonarLint AI', 'DeepCode']
    }
};

export const herramientas = [
    // Generación de Código
    {
        nombre: "GitHub Copilot",
        categoria: "generacion",
        descripcion: "El asistente de código IA más popular. GPT-4 + Codex para 100+ lenguajes.",
        logo: "🤖",
        tags: ["Autocompletado", "VS Code", "IntelliJ"],
    },
    {
        nombre: "Cursor",
        categoria: "generacion",
        descripcion: "Editor de código con IA integrada. Fork de VS Code con GPT-4.",
        logo: "⚡",
        tags: ["Editor", "GPT-4", "Autocomplete"],
    },
    {
        nombre: "Tabnine",
        categoria: "generacion",
        descripcion: "Autocompletado inteligente con modelos propios y personalizables.",
        logo: "🔮",
        tags: ["Autocomplete", "Local", "Privacidad"],
    },
    {
        nombre: "Sourcegraph Cody",
        categoria: "generacion",
        descripcion: "Asistente IA con acceso al contexto completo del codebase.",
        logo: "🔍",
        tags: ["Contexto", "Search", "Claude"],
    },
    {
        nombre: "Codeium",
        categoria: "generacion",
        descripcion: "Copiloto IA gratuito para autocompletado de código.",
        logo: "🚀",
        tags: ["Autocompletado", "Gratis", "IA"],
    },
    {
        nombre: "Code Llama",
        categoria: "generacion",
        descripcion: "Modelo open source de Meta para generación de código.",
        logo: "🦙",
        tags: ["Open Source", "Meta", "Generación"],
    },
    {
        nombre: "Intellicode",
        categoria: "generacion",
        descripcion: "Sugerencias inteligentes de código por Microsoft.",
        logo: "🧠",
        tags: ["Autocompletado", "Microsoft", "VSCode"],
    },
    {
        nombre: "MutableAI",
        categoria: "generacion",
        descripcion: "Refactorización y generación de código con IA.",
        logo: "🔧",
        tags: ["Refactor", "Generación", "IA"],
    },
    {
        nombre: "CodeWhisperer",
        categoria: "generacion",
        descripcion: "Asistente IA de Amazon para autocompletado y seguridad.",
        logo: "🛡️",
        tags: ["Autocompletado", "Amazon", "Seguridad"],
    },
    // Chat & Asistentes
    {
        nombre: "GPT-4o",
        categoria: "chat",
        descripcion: "El modelo más avanzado para desarrollo. Soporte multimodal y razonamiento complejo.",
        logo: "🧠",
        tags: ["Multimodal", "Razonamiento", "API"],
    },
    {
        nombre: "Claude 3.5",
        categoria: "chat",
        descripcion: "Excelente para código complejo, refactoring y arquitectura de software.",
        logo: "🎭",
        tags: ["Arquitectura", "Refactoring", "Seguridad"],
    },
    // IDEs y Editores
    {
        nombre: "Cursor",
        categoria: "ides",
        descripcion: "Editor de código revolucionario con IA nativa. Fork de VS Code.",
        logo: "⚡",
        tags: ["Editor", "IA Nativa", "Productivity"],
    },
    {
        nombre: "Replit AI",
        categoria: "ides",
        descripcion: "IDE en la nube con asistente IA integrado para desarrollo colaborativo.",
        logo: "☁️",
        tags: ["Cloud", "Colaborativo", "Deploy"],
    },
    // Testing & QA
    {
        nombre: "Mabl",
        categoria: "testing",
        descripcion: "Testing inteligente en la nube con auto-scaling y insights de IA.",
        logo: "☁️",
        tags: ["Cloud Testing", "Auto-scaling", "AI Insights"],
    },
    {
        nombre: "Diffblue Cover",
        categoria: "testing",
        descripcion: "Generación automática de unit tests para Java con IA.",
        logo: "�️",
        tags: ["Java", "Unit Tests", "Automático"],
    },
    {
        nombre: "Testim AI",
        categoria: "testing",
        descripcion: "Plataforma de testing automatizado con IA para aplicaciones web.",
        logo: "🎯",
        tags: ["E2E Testing", "Web", "Auto-healing"],
    },
    // DevOps & Deployment
    {
        nombre: "Harness AI/OPS",
        categoria: "devops",
        descripcion: "Plataforma DevOps con IA para CI/CD, feature flags y observabilidad.",
        logo: "⚙️",
        tags: ["CI/CD", "Feature Flags", "Observability"],
    },
    {
        nombre: "Dynatrace Davis AI",
        categoria: "devops",
        descripcion: "IA para observabilidad, detección de anomalías y root cause analysis.",
        logo: "📊",
        tags: ["Observability", "Anomalías", "APM"],
    },
    {
        nombre: "Ansible Lightspeed",
        categoria: "devops",
        descripcion: "Automatización de infraestructura con IA para Ansible.",
        logo: "⚙️",
        tags: ["DevOps", "Automatización", "Infraestructura"],
    },
    {
        nombre: "Amazon Q Developer",
        categoria: "devops",
        descripcion: "Asistente IA de Amazon para desarrollo y operaciones.",
        logo: "🎯",
        tags: ["DevOps", "AWS", "Asistente"],
    },
    // Documentación
    {
        nombre: "Notion AI",
        categoria: "documentacion",
        descripcion: "Asistente de escritura e investigación integrado en Notion para documentación automática.",
        logo: "📝",
        tags: ["Escritura", "Workspace", "Automático"],
    },
    {
        nombre: "Mintlify",
        categoria: "documentacion",
        descripcion: "Generación automática de documentación desde código con IA.",
        logo: "📖",
        tags: ["Auto-docs", "APIs", "Beautiful"],
    },
    {
        nombre: "NotebookLM",
        categoria: "documentacion",
        descripcion: "Asistente IA para investigación y documentación técnica.",
        logo: "📓",
        tags: ["Research", "PDFs", "Synthesis"],
    },
    {
        nombre: "Swimm",
        categoria: "documentacion",
        descripcion: "Documentación de código que se mantiene actualizada automáticamente.",
        logo: "🏊",
        tags: ["Live Docs", "Code Sync", "Knowledge"],
    },
    // UI/UX & Diseño
    {
        nombre: "Gamma",
        categoria: "diseno",
        descripcion: "Crea presentaciones profesionales con IA en segundos. Diseño automático y contenido inteligente.",
        logo: "🎯",
        tags: ["Presentaciones", "Auto-diseño", "Contenido IA"],
    },
    {
        nombre: "Beautiful.ai",
        categoria: "diseno",
        descripcion: "Presentaciones con diseño automático inteligente. DesignAI engine adapta layouts en tiempo real.",
        logo: "✨",
        tags: ["DesignAI", "Presentaciones", "Auto-layout"],
    },
    {
        nombre: "Miro AI",
        categoria: "diseno",
        descripcion: "Colaboración visual inteligente con generación automática de diagramas y wireframes.",
        logo: "🧠",
        tags: ["Diagramas", "Wireframes", "Colaboración"],
    },
    {
        nombre: "Uizard",
        categoria: "diseno",
        descripcion: "Diseño de UI automático desde wireframes, mockups o descripciones.",
        logo: "🎨",
        tags: ["Wireframes", "Mockups", "Prototyping"],
    },
    {
        nombre: "Galileo AI",
        categoria: "diseno",
        descripcion: "Generación de designs completos desde prompts de texto.",
        logo: "🔭",
        tags: ["Text-to-Design", "UI Generation", "Figma"],
    },
    {
        nombre: "DiagramGPT",
        categoria: "diseno",
        descripcion: "Creación automática de diagramas técnicos y arquitecturas.",
        logo: "📊",
        tags: ["Diagramas", "Arquitectura", "Mermaid"],
    },
    // Seguridad & Análisis
    {
        nombre: "Snyk Code",
        categoria: "seguridad",
        descripcion: "Análisis de seguridad en tiempo real con IA para detectar vulnerabilidades.",
        logo: "🛡️",
        tags: ["Security", "SAST", "Real-time"],
    },
    {
        nombre: "SonarLint AI",
        categoria: "seguridad",
        descripcion: "Análisis de calidad de código con sugerencias inteligentes.",
        logo: "⚡",
        tags: ["Code Quality", "Linting", "Best Practices"],
    },
    {
        nombre: "DeepCode",
        categoria: "seguridad",
        descripcion: "Revisión automática de código con ML para encontrar bugs.",
        logo: "🔍",
        tags: ["Bug Detection", "ML", "Code Review"],
    },
];
