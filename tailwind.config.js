tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"},
        base: { DEFAULT: '#f4f6fb', dark: '#0b1220' },
        surface: { DEFAULT: '#ffffff', dark: '#121a2b' }
      }
    },
    fontFamily: {
      'body': [
        'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue',
        'Arial', 'Noto Sans', 'sans-serif'
      ],
      'sans': [
        'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue',
        'Arial', 'Noto Sans', 'sans-serif'
      ]
    }
  }
};

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
}
