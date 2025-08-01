import type { CookieConsentConfig } from 'vanilla-cookieconsent';

// Extend the Window interface to include the dataLayer object
declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    gtag: (...args: any[]) => void;
  }
}

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom right',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {
      services: {
        ga4: {
          label:
            '<a href="https://marketingplatform.google.com/about/analytics/terms/es/" target="_blank">Google Analytics</a>',
          onAccept: () => {
            console.log('ga accepted');

            window.gtag("consent", "update", {
              ad_storage: "granted",
              ad_user_data: "granted",
              ad_personalization: "granted",
              analytics_storage: "granted",
            }); 
          },
          onReject: () => {
            console.log('ga rejected');
          },
          cookies: [
            {
              name: /^_ga/,
            },
          ],
        },
      },
    },
  },
  language: {
    default: 'es',
    autoDetect: 'browser',
    translations: {
      es: {
          consentModal: {
              title: "",
              description: "Este sitio web utiliza cookies para mejorar su experiencia de navegación y analizar el tráfico. Al hacer clic en 'Aceptar todo', consiente el uso de todas las cookies. Puede gestionar sus preferencias o rechazar las cookies no esenciales.",
              acceptAllBtn: "Aceptar todo",
              acceptNecessaryBtn: "Rechazar todo",
              showPreferencesBtn: "Gestionar preferencias",
              footer: "<a href=\"/privacy-policy\">Política de privacidad</a>"
          },
          preferencesModal: {
              title: "Preferencias de Consentimiento",
              acceptAllBtn: "Aceptar todo",
              acceptNecessaryBtn: "Rechazar todo",
              savePreferencesBtn: "Guardar preferencias",
              closeIconLabel: "Cerrar modal",
              serviceCounterLabel: "Servicios",
              sections: [
                  {
                      title: "Uso de Cookies",
                      description: "Este sitio web utiliza cookies para mejorar su experiencia de navegación y analizar el tráfico. Al hacer clic en 'Aceptar todo', consiente el uso de todas las cookies. Puede gestionar sus preferencias o rechazar las cookies no esenciales."
                  },
                  {
                      title: "Cookies Estrictamente Necesarias <span class=\"pm__badge\">Siempre Habilitado</span>",
                      description: "Cookies necesarias para el funcionamiento del sitio web.",
                      linkedCategory: "necessary"
                  },
                  {
                      title: "Cookies Analíticas",
                      description: "Utilizamos las cookies para analizar el tráfico con Google Analytics.",
                      linkedCategory: "analytics"
                  }
              ]
          }
      },
      en: {
        consentModal: {
          title: "",
          description: 'This website uses cookies to enhance your browsing experience and analyze traffic. By clicking "Accept All", you consent to the use of all cookies. You can manage your preferences or reject non-essential cookies.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences',
          footer:
            '<a href="/privacy-policy">Privacy Policy</a>',
        },
        preferencesModal: {
          title: 'Consent Preferences Center',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close modal',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Cookie Usage',
              description: 'This website uses cookies to enhance your browsing experience and analyze traffic. By clicking "Accept All", you consent to the use of all cookies. You can manage your preferences or reject non-essential cookies.',
            },
            {
              title: 'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description: 'Cookies necessary for the website to function.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analytics Cookies',
              description: 'We use cookies to analyze traffic with Google Analytics.',
              linkedCategory: 'analytics',
            }
          ],
        },
      },
    },
  },
};
