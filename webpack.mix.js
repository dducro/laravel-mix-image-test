let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'js')
    .copyDirectory('resources/img', 'public/img')
    .setPublicPath('public');
