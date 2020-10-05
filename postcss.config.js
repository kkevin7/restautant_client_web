const tailwindcss = require('tailwindcss');

module.export = {
    plugin: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ]
}