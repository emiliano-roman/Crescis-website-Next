const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    plugins: [
      'autoprefixer',
      'cssnano',
      // Desactivar PurgeCSS en desarrollo
      ...(process.env.NODE_ENV === 'production'
        ? [
            '@fullhuman/postcss-purgecss',
            {
              content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
              defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
            },
          ]
        : []),
    ],
  };
  
