export const categorias = [
    {
        key: 'generacion',
        nombre: 'Generación de Código',
        emoji: '🤖',
        descripcion: 'Herramientas especializadas en autocompletado, generación y refactoring de código',
        color: 'from-blue-500 to-cyan-500',
        cantidad: 4,
        destacadas: ['GitHub Copilot', 'Cursor', 'Tabnine'],
        herramientas: []
    },
    // ...agrega las demás categorías aquí siguiendo el patrón
];

export const herramientas = [
    {
        nombre: 'GitHub Copilot',
        categoria: 'generacion',
        descripcion: 'IA de autocompletado de código de GitHub.',
        logo: '🤖',
        tags: ['autocompletado', 'IA', 'GitHub']
    },
    {
        nombre: 'ChatGPT',
        categoria: 'chat',
        descripcion: 'Modelo conversacional avanzado de OpenAI para asistencia y generación de texto.',
        logo: '💬',
        tags: ['chat', 'asistente', 'OpenAI']
    },
    {
        nombre: 'Claude',
        categoria: 'chat',
        descripcion: 'Asistente IA de Anthropic enfocado en seguridad y contexto largo.',
        logo: '🧠',
        tags: ['chat', 'asistente', 'Anthropic']
    },
    {
        nombre: 'Cursor AI',
        categoria: 'ides',
        descripcion: 'Editor de código con IA nativa para desarrollo productivo.',
        logo: '⚡',
        tags: ['editor', 'IDE', 'IA']
    }
];
