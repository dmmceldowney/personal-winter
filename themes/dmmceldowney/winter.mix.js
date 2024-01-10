const mix = require('laravel-mix');
mix.setPublicPath(__dirname);

// Render Tailwind style
// mix.sass('../../node_modules/bulma', 'assets/css/bulma').sass('../../node_modules/bulma-divider', 'assets/css/bulma-divider');

mix.sass('assets/sass/app.scss', 'assets/css/styles.css');
