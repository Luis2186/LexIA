# 🎨 Frontend AI - Interfaces Inteligentes

Guía completa para implementar Inteligencia Artificial en el desarrollo frontend, creando interfaces más inteligentes, personalizadas y eficientes.

## 📋 Índice
- [Introducción](#introducción)
- [1. Generación Automática de UI/UX](#1-generación-automática-de-uiux)
- [2. Personalización Basada en Comportamiento](#2-personalización-basada-en-comportamiento)
- [3. Componentes Adaptativos](#3-componentes-adaptativos)
- [4. Testing Visual Inteligente](#4-testing-visual-inteligente)
- [5. Optimización de Performance](#5-optimización-de-performance)
- [Casos de Uso Específicos](#casos-de-uso-específicos)
- [Herramientas y Frameworks](#herramientas-y-frameworks)
- [Implementación en LexIA](#implementación-en-lexia)
- [Métricas y ROI](#métricas-y-roi)

---

## 🎯 Introducción

El frontend es la cara visible de cualquier aplicación y donde la IA puede tener el mayor impacto inmediato en la experiencia del usuario. Esta guía cubre todas las formas en que la IA puede revolucionar el desarrollo frontend.

### 🔄 Beneficios Clave:
- **🚀 Desarrollo 3x más rápido**: Generación automática de componentes
- **🎯 UX personalizada**: Interfaces que se adaptan al usuario
- **🐛 Menos errores**: Validación automática y testing inteligente
- **📱 Responsive automático**: Layouts que se ajustan inteligentemente
- **♿ Accesibilidad automática**: Cumplimiento WCAG automático

---

## 1. Generación Automática de UI/UX

### 🤖 AI Code Generation

#### 1.1 Componentes Generados por IA

```typescript
// Ejemplo: Prompt para generar componente de formulario
// "Crea un formulario de contacto con validación en tiempo real para Astro + Tailwind"

---
// src/components/AIContactForm.astro
export interface Props {
  onSubmit?: (data: FormData) => void;
  theme?: 'light' | 'dark';
  validation?: 'realtime' | 'onsubmit';
}

const { 
  onSubmit, 
  theme = 'light', 
  validation = 'realtime' 
} = Astro.props;

const themeClasses = {
  light: 'bg-white text-gray-900 border-gray-300',
  dark: 'bg-gray-800 text-white border-gray-600'
};
---

<form 
  id="ai-contact-form" 
  class={`p-6 rounded-lg shadow-lg ${themeClasses[theme]} max-w-md mx-auto`}
>
  <!-- Nombre -->
  <div class="mb-4">
    <label for="name" class="block text-sm font-medium mb-2">
      Nombre *
    </label>
    <input
      type="text"
      id="name"
      name="name"
      required
      class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      data-ai-validate="name"
    />
    <div id="name-error" class="text-red-500 text-sm mt-1 hidden"></div>
  </div>

  <!-- Email -->
  <div class="mb-4">
    <label for="email" class="block text-sm font-medium mb-2">
      Email *
    </label>
    <input
      type="email"
      id="email"
      name="email"
      required
      class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      data-ai-validate="email"
    />
    <div id="email-error" class="text-red-500 text-sm mt-1 hidden"></div>
  </div>

  <!-- Mensaje -->
  <div class="mb-6">
    <label for="message" class="block text-sm font-medium mb-2">
      Mensaje *
    </label>
    <textarea
      id="message"
      name="message"
      rows="4"
      required
      class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
      data-ai-validate="message"
    ></textarea>
    <div id="message-error" class="text-red-500 text-sm mt-1 hidden"></div>
  </div>

  <!-- Botón Submit -->
  <button
    type="submit"
    class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
    id="submit-btn"
  >
    <span id="submit-text">Enviar Mensaje</span>
    <div id="submit-loading" class="hidden">
      <svg class="animate-spin h-5 w-5 mx-auto" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
  </button>
</form>

<script>
  // IA para validación inteligente en tiempo real
  class AIFormValidator {
    private static patterns = {
      name: /^[a-zA-ZÀ-ÿ\s]{2,50}$/,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: /^.{10,500}$/
    };

    private static errorMessages = {
      name: 'El nombre debe tener entre 2 y 50 caracteres, solo letras y espacios',
      email: 'Por favor ingresa un email válido',
      message: 'El mensaje debe tener entre 10 y 500 caracteres'
    };

    static validateField(field: HTMLInputElement | HTMLTextAreaElement): boolean {
      const fieldName = field.name as keyof typeof this.patterns;
      const pattern = this.patterns[fieldName];
      const errorDiv = document.getElementById(`${fieldName}-error`);
      
      if (!pattern.test(field.value)) {
        this.showError(field, errorDiv, this.errorMessages[fieldName]);
        return false;
      } else {
        this.clearError(field, errorDiv);
        return true;
      }
    }

    static showError(field: HTMLElement, errorDiv: HTMLElement | null, message: string) {
      field.classList.add('border-red-500');
      field.classList.remove('border-gray-300', 'border-gray-600');
      if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.classList.remove('hidden');
      }
    }

    static clearError(field: HTMLElement, errorDiv: HTMLElement | null) {
      field.classList.remove('border-red-500');
      field.classList.add('border-gray-300');
      if (errorDiv) {
        errorDiv.classList.add('hidden');
      }
    }

    static async aiEnhancedValidation(field: HTMLInputElement): Promise<boolean> {
      // IA para validaciones más inteligentes
      if (field.name === 'email') {
        // Verificar si el dominio del email existe
        const domain = field.value.split('@')[1];
        if (domain) {
          try {
            const response = await fetch(`/api/validate-domain?domain=${domain}`);
            const { isValid } = await response.json();
            if (!isValid) {
              const errorDiv = document.getElementById('email-error');
              this.showError(field, errorDiv, 'Este dominio de email no parece ser válido');
              return false;
            }
          } catch (error) {
            console.log('Domain validation failed, using basic validation');
          }
        }
      }
      
      return this.validateField(field);
    }
  }

  // Setup de validación en tiempo real
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ai-contact-form') as HTMLFormElement;
    const validation = form.dataset.validation;
    
    if (validation === 'realtime') {
      const fields = form.querySelectorAll('[data-ai-validate]');
      fields.forEach(field => {
        field.addEventListener('input', async (e) => {
          await AIFormValidator.aiEnhancedValidation(e.target as HTMLInputElement);
        });
      });
    }

    // Handle form submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement;
      const submitText = document.getElementById('submit-text');
      const submitLoading = document.getElementById('submit-loading');
      
      // Validar todos los campos
      const fields = form.querySelectorAll('[data-ai-validate]') as NodeListOf<HTMLInputElement>;
      let isValid = true;
      
      for (const field of fields) {
        const fieldValid = await AIFormValidator.aiEnhancedValidation(field);
        if (!fieldValid) isValid = false;
      }
      
      if (!isValid) return;
      
      // Mostrar loading
      submitBtn.disabled = true;
      submitText?.classList.add('hidden');
      submitLoading?.classList.remove('hidden');
      
      try {
        const formData = new FormData(form);
        const response = await fetch('/api/contact', {
          method: 'POST',
          body: formData
        });
        
        if (response.ok) {
          // Éxito
          form.innerHTML = `
            <div class="text-center py-8">
              <div class="text-green-500 text-5xl mb-4">✓</div>
              <h3 class="text-xl font-semibold mb-2">¡Mensaje enviado!</h3>
              <p class="text-gray-600">Te responderemos pronto.</p>
            </div>
          `;
        } else {
          throw new Error('Error al enviar el formulario');
        }
      } catch (error) {
        alert('Error al enviar el formulario. Por favor intenta de nuevo.');
      } finally {
        submitBtn.disabled = false;
        submitText?.classList.remove('hidden');
        submitLoading?.classList.add('hidden');
      }
    });
  });
</script>
```

#### 1.2 Design Systems Generados por IA

```typescript
// src/utils/ai-design-system.ts
export class AIDesignSystem {
  private static brandColors: Record<string, string> = {};
  private static designTokens: Record<string, any> = {};
  
  static async generateDesignSystem(brandDescription: string): Promise<any> {
    // IA para generar sistema de diseño basado en descripción de marca
    const prompt = `
      Genera un sistema de diseño coherente para una marca con esta descripción: "${brandDescription}"
      
      Incluye:
      - Paleta de colores (primario, secundario, neutros)
      - Tipografía (jerarquías y tamaños)
      - Espaciado (sistema de 8pt grid)
      - Componentes base (botones, inputs, cards)
      - Animaciones y transiciones
    `;
    
    const designSystem = await this.callDesignAI(prompt);
    
    return {
      colors: this.generateColorPalette(designSystem.brand),
      typography: this.generateTypographyScale(),
      spacing: this.generateSpacingScale(),
      components: this.generateComponentThemes(designSystem),
      animations: this.generateAnimationTokens()
    };
  }
  
  private static generateColorPalette(brand: any): Record<string, any> {
    return {
      primary: {
        50: brand.primary.lightest,
        100: brand.primary.lighter,
        200: brand.primary.light,
        300: brand.primary.normal,
        400: brand.primary.dark,
        500: brand.primary.darker,
        600: brand.primary.darkest
      },
      secondary: {
        // Similar structure
      },
      neutral: {
        // Grays and blacks
      },
      semantic: {
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6'
      }
    };
  }
  
  static generateTailwindConfig(designSystem: any): string {
    // Generar configuración de Tailwind automáticamente
    return `
      module.exports = {
        theme: {
          extend: {
            colors: ${JSON.stringify(designSystem.colors, null, 2)},
            fontFamily: ${JSON.stringify(designSystem.typography.families, null, 2)},
            spacing: ${JSON.stringify(designSystem.spacing, null, 2)},
            animation: ${JSON.stringify(designSystem.animations, null, 2)}
          }
        }
      }
    `;
  }
}
```

### 🎨 AI-Powered Design Tools

#### 1.3 Layout Automático Inteligente

```typescript
// src/components/AILayout.astro
---
export interface Props {
  content: Array<{
    type: 'text' | 'image' | 'video' | 'cta' | 'form';
    data: any;
    priority: number;
  }>;
  deviceType?: 'mobile' | 'tablet' | 'desktop';
  layoutStyle?: 'minimal' | 'magazine' | 'corporate' | 'creative';
}

const { content, deviceType = 'desktop', layoutStyle = 'minimal' } = Astro.props;

// IA para determinar el mejor layout basado en contenido
function generateOptimalLayout(content: any[], style: string, device: string) {
  // Algoritmo de IA para organizar contenido
  const sortedContent = content.sort((a, b) => b.priority - a.priority);
  
  const layouts = {
    minimal: {
      mobile: 'flex flex-col space-y-4',
      tablet: 'grid grid-cols-2 gap-6',
      desktop: 'grid grid-cols-3 gap-8'
    },
    magazine: {
      mobile: 'flex flex-col space-y-6',
      tablet: 'grid grid-cols-12 gap-4',
      desktop: 'grid grid-cols-12 gap-6'
    },
    corporate: {
      mobile: 'flex flex-col space-y-4',
      tablet: 'grid grid-cols-2 gap-6',
      desktop: 'flex flex-wrap justify-between'
    }
  };
  
  return layouts[style][device];
}

const layoutClasses = generateOptimalLayout(content, layoutStyle, deviceType);
---

<div class={`ai-generated-layout ${layoutClasses}`}>
  {content.map((item, index) => {
    // IA determina el tamaño y posición de cada elemento
    const itemClasses = generateItemClasses(item, index, layoutStyle, deviceType);
    
    return (
      <div class={itemClasses}>
        {item.type === 'text' && (
          <div class="prose prose-lg" set:html={item.data.html} />
        )}
        
        {item.type === 'image' && (
          <img 
            src={item.data.src} 
            alt={item.data.alt}
            class="w-full h-auto object-cover rounded-lg"
            loading="lazy"
          />
        )}
        
        {item.type === 'cta' && (
          <button class="ai-cta-button bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors">
            {item.data.text}
          </button>
        )}
      </div>
    );
  })}
</div>

<script>
  // IA para optimización dinámica del layout
  class AILayoutOptimizer {
    private static observer: ResizeObserver;
    
    static initialize() {
      this.observer = new ResizeObserver(entries => {
        entries.forEach(entry => {
          this.optimizeLayout(entry.target as HTMLElement);
        });
      });
      
      const layouts = document.querySelectorAll('.ai-generated-layout');
      layouts.forEach(layout => {
        this.observer.observe(layout);
      });
    }
    
    static optimizeLayout(element: HTMLElement) {
      const width = element.offsetWidth;
      const height = element.offsetHeight;
      
      // IA para ajustar layout basado en dimensiones reales
      if (width < 640) {
        element.className = element.className.replace(/grid-cols-\d+/, 'flex flex-col');
      } else if (width < 1024) {
        element.className = element.className.replace(/grid-cols-\d+/, 'grid-cols-2');
      } else {
        element.className = element.className.replace(/grid-cols-\d+/, 'grid-cols-3');
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    AILayoutOptimizer.initialize();
  });
</script>
```

---

## 2. Personalización Basada en Comportamiento

### 🧠 User Behavior Analytics

#### 2.1 Sistema de Tracking Inteligente

```typescript
// src/utils/ai-user-tracking.ts
export class AIUserTracking {
  private static userId: string | null = null;
  private static sessionData: Map<string, any> = new Map();
  private static behaviorPatterns: any[] = [];
  
  static initialize(userId?: string) {
    this.userId = userId || this.generateAnonymousId();
    this.startSessionTracking();
    this.loadUserPreferences();
  }
  
  private static generateAnonymousId(): string {
    return 'anon_' + Math.random().toString(36).substr(2, 9);
  }
  
  static trackInteraction(event: {
    type: 'click' | 'scroll' | 'hover' | 'focus' | 'form_interaction';
    element: string;
    context: any;
    timestamp?: number;
  }) {
    const interaction = {
      ...event,
      timestamp: event.timestamp || Date.now(),
      userId: this.userId,
      sessionId: this.getSessionId(),
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      device: this.getDeviceInfo()
    };
    
    this.behaviorPatterns.push(interaction);
    this.analyzePatterns();
    
    // Enviar a backend para análisis más profundo
    this.sendToAnalytics(interaction);
  }
  
  private static analyzePatterns() {
    const recentPatterns = this.behaviorPatterns.slice(-50); // últimas 50 interacciones
    
    // IA para detectar patrones de comportamiento
    const patterns = {
      preferredContentType: this.detectContentPreference(recentPatterns),
      navigationStyle: this.detectNavigationStyle(recentPatterns),
      engagementLevel: this.calculateEngagementLevel(recentPatterns),
      deviceUsage: this.analyzeDeviceUsage(recentPatterns)
    };
    
    this.sessionData.set('patterns', patterns);
    this.updateUIBasedOnPatterns(patterns);
  }
  
  private static detectContentPreference(patterns: any[]): string {
    const contentInteractions = patterns.filter(p => 
      p.type === 'click' && p.element.includes('content')
    );
    
    const preferences = contentInteractions.reduce((acc, interaction) => {
      const contentType = interaction.context.contentType;
      acc[contentType] = (acc[contentType] || 0) + 1;
      return acc;
    }, {});
    
    return Object.keys(preferences).reduce((a, b) => 
      preferences[a] > preferences[b] ? a : b
    ) || 'text';
  }
  
  private static updateUIBasedOnPatterns(patterns: any) {
    // Personalizar UI basado en patrones detectados
    if (patterns.preferredContentType === 'visual') {
      this.enhanceVisualElements();
    }
    
    if (patterns.navigationStyle === 'quick') {
      this.showAdvancedNavigation();
    }
    
    if (patterns.engagementLevel === 'high') {
      this.showAdditionalContent();
    }
  }
  
  static async sendToAnalytics(interaction: any) {
    try {
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(interaction)
      });
    } catch (error) {
      console.log('Analytics tracking failed:', error);
    }
  }
}

// Auto-inicializar tracking
document.addEventListener('DOMContentLoaded', () => {
  AIUserTracking.initialize();
  
  // Setup de event listeners automáticos
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    AIUserTracking.trackInteraction({
      type: 'click',
      element: target.tagName + (target.id ? '#' + target.id : '') + (target.className ? '.' + target.className.split(' ')[0] : ''),
      context: {
        text: target.textContent?.slice(0, 50),
        href: target.getAttribute('href'),
        position: { x: e.clientX, y: e.clientY }
      }
    });
  });
  
  // Tracking de scroll inteligente
  let scrollTimeout: number;
  document.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      AIUserTracking.trackInteraction({
        type: 'scroll',
        element: 'window',
        context: {
          scrollY: window.scrollY,
          scrollProgress: window.scrollY / (document.body.scrollHeight - window.innerHeight)
        }
      });
    }, 500);
  });
});
```

#### 2.2 Personalización Dinámica de Componentes

```typescript
// src/components/AIPersonalizedHero.astro
---
export interface Props {
  defaultContent: {
    title: string;
    subtitle: string;
    cta: string;
    image: string;
  };
  userId?: string;
}

const { defaultContent, userId } = Astro.props;
---

<section id="personalized-hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
  <!-- Background que se adapta al usuario -->
  <div id="hero-background" class="absolute inset-0 transition-all duration-1000">
    <img 
      id="hero-image" 
      src={defaultContent.image} 
      alt="Hero background"
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
  </div>
  
  <!-- Contenido principal -->
  <div class="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
    <h1 id="hero-title" class="text-5xl md:text-7xl font-bold mb-6 transition-all duration-500">
      {defaultContent.title}
    </h1>
    
    <p id="hero-subtitle" class="text-xl md:text-2xl mb-8 opacity-90 transition-all duration-500">
      {defaultContent.subtitle}
    </p>
    
    <div id="hero-cta-container" class="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
      <button id="hero-cta" class="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
        {defaultContent.cta}
      </button>
    </div>
  </div>
  
  <!-- Elementos decorativos que se adaptan -->
  <div id="floating-elements" class="absolute inset-0 pointer-events-none">
    <!-- Partículas que responden al comportamiento del usuario -->
  </div>
</section>

<script>
  class AIPersonalizedHero {
    private static personalizations = {
      technical: {
        title: 'Construye el Futuro con IA',
        subtitle: 'Herramientas avanzadas para desarrolladores que piensan en grande',
        cta: 'Explorar Documentación',
        background: '/images/tech-bg.jpg',
        particles: 'code'
      },
      business: {
        title: 'Transforma tu Negocio con IA',
        subtitle: 'Soluciones inteligentes que impulsan el crecimiento',
        cta: 'Ver Casos de Éxito',
        background: '/images/business-bg.jpg',
        particles: 'growth'
      },
      creative: {
        title: 'Creatividad Sin Límites',
        subtitle: 'IA que potencia tu imaginación y creatividad',
        cta: 'Comenzar a Crear',
        background: '/images/creative-bg.jpg',
        particles: 'art'
      }
    };
    
    static async initialize(userId?: string) {
      if (!userId) {
        // Usar datos del localStorage o cookies
        userId = localStorage.getItem('lexia_user_id') || 'anonymous';
      }
      
      // Obtener perfil del usuario
      const userProfile = await this.getUserProfile(userId);
      
      // Personalizar hero basado en el perfil
      this.personalizeHero(userProfile);
      
      // Setup de adaptación en tiempo real
      this.setupRealtimeAdaptation();
    }
    
    static async getUserProfile(userId: string): Promise<any> {
      try {
        const response = await fetch(`/api/user-profile/${userId}`);
        const profile = await response.json();
        
        return {
          type: profile.userType || 'business', // technical, business, creative
          interests: profile.interests || [],
          visitHistory: profile.visitHistory || [],
          engagementLevel: profile.engagementLevel || 'medium'
        };
      } catch (error) {
        // Fallback a detección basada en comportamiento
        return this.detectUserTypeFromBehavior();
      }
    }
    
    static detectUserTypeFromBehavior(): any {
      // IA para detectar tipo de usuario basado en comportamiento actual
      const currentUrl = window.location.pathname;
      const referrer = document.referrer;
      
      if (currentUrl.includes('/docs') || currentUrl.includes('/api')) {
        return { type: 'technical', interests: ['development', 'apis'] };
      }
      
      if (currentUrl.includes('/business') || currentUrl.includes('/enterprise')) {
        return { type: 'business', interests: ['growth', 'solutions'] };
      }
      
      return { type: 'creative', interests: ['design', 'innovation'] };
    }
    
    static personalizeHero(profile: any) {
      const personalization = this.personalizations[profile.type] || this.personalizations.business;
      
      // Animar cambios
      this.animateContentChange('hero-title', personalization.title);
      this.animateContentChange('hero-subtitle', personalization.subtitle);
      this.animateContentChange('hero-cta', personalization.cta);
      this.animateBackgroundChange(personalization.background);
      this.initializeParticles(personalization.particles);
    }
    
    static animateContentChange(elementId: string, newContent: string) {
      const element = document.getElementById(elementId);
      if (!element) return;
      
      // Fade out
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        element.textContent = newContent;
        // Fade in
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, 250);
    }
    
    static animateBackgroundChange(newBackground: string) {
      const bgElement = document.getElementById('hero-image') as HTMLImageElement;
      if (!bgElement) return;
      
      // Precargar nueva imagen
      const newImg = new Image();
      newImg.onload = () => {
        bgElement.style.opacity = '0.7';
        setTimeout(() => {
          bgElement.src = newBackground;
          bgElement.style.opacity = '1';
        }, 300);
      };
      newImg.src = newBackground;
    }
    
    static initializeParticles(type: string) {
      const container = document.getElementById('floating-elements');
      if (!container) return;
      
      // Limpiar partículas existentes
      container.innerHTML = '';
      
      // Generar partículas basadas en el tipo
      const particleConfigs = {
        code: { symbols: ['<', '>', '{', '}', '(', ')', ';'], color: '#00ff88' },
        growth: { symbols: ['↗', '📈', '💼', '🚀', '⭐'], color: '#4ade80' },
        art: { symbols: ['✨', '🎨', '🌟', '💫', '🎭'], color: '#f472b6' }
      };
      
      const config = particleConfigs[type] || particleConfigs.growth;
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.textContent = config.symbols[Math.floor(Math.random() * config.symbols.length)];
        particle.style.cssText = `
          position: absolute;
          color: ${config.color};
          font-size: ${Math.random() * 20 + 10}px;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          opacity: ${Math.random() * 0.5 + 0.2};
          animation: float-${i} ${Math.random() * 10 + 10}s linear infinite;
        `;
        
        // Crear animación única para cada partícula
        const style = document.createElement('style');
        style.textContent = `
          @keyframes float-${i} {
            0% { transform: translateY(0px) rotate(0deg); }
            100% { transform: translateY(-100vh) rotate(360deg); }
          }
        `;
        document.head.appendChild(style);
        
        container.appendChild(particle);
      }
    }
    
    static setupRealtimeAdaptation() {
      // Escuchar cambios en el comportamiento del usuario
      document.addEventListener('aiUserBehaviorUpdate', (e: any) => {
        const newProfile = e.detail.profile;
        this.personalizeHero(newProfile);
      });
      
      // Adaptación basada en tiempo en la página
      setTimeout(() => {
        this.enhanceEngagement();
      }, 30000); // Después de 30 segundos
    }
    
    static enhanceEngagement() {
      // Agregar elementos interactivos adicionales para usuarios comprometidos
      const ctaContainer = document.getElementById('hero-cta-container');
      if (!ctaContainer) return;
      
      const secondaryCta = document.createElement('button');
      secondaryCta.className = 'bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-gray-900';
      secondaryCta.textContent = 'Ver Demo';
      secondaryCta.style.opacity = '0';
      secondaryCta.style.transform = 'translateY(20px)';
      
      ctaContainer.appendChild(secondaryCta);
      
      // Animar entrada
      setTimeout(() => {
        secondaryCta.style.opacity = '1';
        secondaryCta.style.transform = 'translateY(0)';
      }, 100);
    }
  }
  
  // Inicializar cuando el DOM esté listo
  document.addEventListener('DOMContentLoaded', () => {
    AIPersonalizedHero.initialize();
  });
</script>
```

---

## 3. Componentes Adaptativos

### 🔄 Smart Components

#### 3.1 Navegación Inteligente

```typescript
// src/components/AINavigation.astro
---
export interface Props {
  menuItems: Array<{
    label: string;
    href: string;
    category: 'docs' | 'product' | 'company' | 'resources';
    priority: number;
  }>;
  userType?: 'developer' | 'business' | 'designer';
}

const { menuItems, userType = 'business' } = Astro.props;

// IA para organizar menú basado en tipo de usuario
function organizeMenuForUser(items: any[], userType: string) {
  const priorities = {
    developer: { docs: 10, product: 8, resources: 6, company: 2 },
    business: { product: 10, company: 8, docs: 6, resources: 4 },
    designer: { product: 10, resources: 8, docs: 6, company: 4 }
  };
  
  return items.sort((a, b) => {
    const priorityA = priorities[userType][a.category] + a.priority;
    const priorityB = priorities[userType][b.category] + b.priority;
    return priorityB - priorityA;
  });
}

const organizedItems = organizeMenuForUser(menuItems, userType);
---

<nav class="ai-smart-navigation bg-white shadow-lg border-b sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="/" class="text-2xl font-bold text-blue-600">LexIA</a>
      </div>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-4" id="desktop-menu">
          {organizedItems.slice(0, 5).map((item) => (
            <a
              href={item.href}
              class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              data-category={item.category}
              data-priority={item.priority}
            >
              {item.label}
            </a>
          ))}
          
          <!-- More menu para items adicionales -->
          {organizedItems.length > 5 && (
            <div class="relative" id="more-menu">
              <button
                id="more-menu-trigger"
                class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
              >
                Más
                <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              
              <div
                id="more-menu-dropdown"
                class="hidden absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border"
              >
                {organizedItems.slice(5).map((item) => (
                  <a
                    href={item.href}
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <!-- User Context Indicators -->
      <div class="hidden md:flex items-center space-x-4">
        <div id="user-context-indicator" class="text-xs text-gray-500">
          <!-- Se llena dinámicamente con IA -->
        </div>
        
        <!-- Search inteligente -->
        <div class="relative">
          <input
            type="text"
            id="ai-search"
            placeholder="Buscar..."
            class="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div id="search-suggestions" class="hidden absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-lg shadow-lg max-h-64 overflow-y-auto">
            <!-- Sugerencias generadas por IA -->
          </div>
        </div>
      </div>
      
      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button
          id="mobile-menu-trigger"
          class="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  
  <!-- Mobile menu -->
  <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {organizedItems.map((item) => (
        <a
          href={item.href}
          class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
        >
          {item.label}
        </a>
      ))}
    </div>
  </div>
</nav>

<script>
  class AISmartNavigation {
    private static userBehavior: any = {};
    private static searchHistory: string[] = [];
    
    static initialize() {
      this.setupMobileMenu();
      this.setupMoreMenu();
      this.setupIntelligentSearch();
      this.setupBehaviorTracking();
      this.loadUserContext();
    }
    
    static setupMobileMenu() {
      const trigger = document.getElementById('mobile-menu-trigger');
      const menu = document.getElementById('mobile-menu');
      
      trigger?.addEventListener('click', () => {
        menu?.classList.toggle('hidden');
      });
    }
    
    static setupMoreMenu() {
      const trigger = document.getElementById('more-menu-trigger');
      const dropdown = document.getElementById('more-menu-dropdown');
      
      trigger?.addEventListener('click', () => {
        dropdown?.classList.toggle('hidden');
      });
      
      // Cerrar al hacer click fuera
      document.addEventListener('click', (e) => {
        if (!trigger?.contains(e.target as Node) && !dropdown?.contains(e.target as Node)) {
          dropdown?.classList.add('hidden');
        }
      });
    }
    
    static setupIntelligentSearch() {
      const searchInput = document.getElementById('ai-search') as HTMLInputElement;
      const suggestionsContainer = document.getElementById('search-suggestions');
      let searchTimeout: number;
      
      searchInput?.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = (e.target as HTMLInputElement).value;
        
        if (query.length < 2) {
          suggestionsContainer?.classList.add('hidden');
          return;
        }
        
        searchTimeout = setTimeout(() => {
          this.generateSearchSuggestions(query);
        }, 300);
      });
      
      searchInput?.addEventListener('focus', () => {
        if (searchInput.value.length >= 2) {
          suggestionsContainer?.classList.remove('hidden');
        }
      });
      
      searchInput?.addEventListener('blur', () => {
        setTimeout(() => {
          suggestionsContainer?.classList.add('hidden');
        }, 200);
      });
    }
    
    static async generateSearchSuggestions(query: string) {
      const suggestionsContainer = document.getElementById('search-suggestions');
      if (!suggestionsContainer) return;
      
      try {
        // IA para generar sugerencias contextuales
        const response = await fetch('/api/search/suggestions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query,
            userType: this.getUserType(),
            context: this.getCurrentPageContext(),
            history: this.searchHistory.slice(-5)
          })
        });
        
        const suggestions = await response.json();
        
        suggestionsContainer.innerHTML = suggestions.map((suggestion: any) => `
          <div class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between" data-suggestion="${suggestion.text}">
            <span>${suggestion.text}</span>
            <span class="text-xs text-gray-400">${suggestion.category}</span>
          </div>
        `).join('');
        
        // Setup click handlers para sugerencias
        suggestionsContainer.querySelectorAll('[data-suggestion]').forEach(item => {
          item.addEventListener('click', (e) => {
            const suggestion = (e.currentTarget as HTMLElement).dataset.suggestion;
            if (suggestion) {
              (document.getElementById('ai-search') as HTMLInputElement).value = suggestion;
              this.performSearch(suggestion);
              suggestionsContainer.classList.add('hidden');
            }
          });
        });
        
        suggestionsContainer.classList.remove('hidden');
        
      } catch (error) {
        console.log('Search suggestions failed:', error);
        suggestionsContainer.classList.add('hidden');
      }
    }
    
    static performSearch(query: string) {
      this.searchHistory.push(query);
      // Implementar lógica de búsqueda
      window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }
    
    static setupBehaviorTracking() {
      // Tracking de clicks en navegación
      document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
          const target = e.currentTarget as HTMLAnchorElement;
          this.trackNavigationClick({
            href: target.href,
            text: target.textContent || '',
            category: target.dataset.category || 'unknown'
          });
        });
      });
    }
    
    static trackNavigationClick(data: any) {
      // Enviar datos de comportamiento para personalización futura
      fetch('/api/analytics/navigation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          referrer: document.referrer
        })
      }).catch(() => {
        // Almacenar localmente si falla la conexión
        const stored = localStorage.getItem('navigation_analytics') || '[]';
        const analytics = JSON.parse(stored);
        analytics.push(data);
        localStorage.setItem('navigation_analytics', JSON.stringify(analytics));
      });
    }
    
    static loadUserContext() {
      // Mostrar contexto del usuario en la navegación
      const indicator = document.getElementById('user-context-indicator');
      if (!indicator) return;
      
      const userType = this.getUserType();
      const contextMessages = {
        developer: '👨‍💻 Modo Desarrollador',
        business: '💼 Modo Empresa',
        designer: '🎨 Modo Diseñador'
      };
      
      indicator.textContent = contextMessages[userType] || '';
    }
    
    static getUserType(): string {
      // Detectar tipo de usuario basado en comportamiento o localStorage
      return localStorage.getItem('user_type') || 'business';
    }
    
    static getCurrentPageContext(): any {
      return {
        path: window.location.pathname,
        title: document.title,
        section: this.detectCurrentSection()
      };
    }
    
    static detectCurrentSection(): string {
      const path = window.location.pathname;
      if (path.includes('/docs')) return 'documentation';
      if (path.includes('/blog')) return 'blog';
      if (path.includes('/about')) return 'company';
      return 'home';
    }
  }
  
  // Inicializar navegación inteligente
  document.addEventListener('DOMContentLoaded', () => {
    AISmartNavigation.initialize();
  });
</script>
```

*Continuaré con el resto de las secciones en el siguiente paso...*
