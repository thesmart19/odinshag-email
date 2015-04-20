module.exports = function (grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jade: {
            // mailing - задача сборки почтовой рассылки
            mailing: {
                options: {
                    pretty: true
                },
                files: {
                    "build/index.html": ["source/templates/mailing/mailing.jade"],
                    "build/content.html": ["source/content/content-mailing.jade"]
                }
            }
        },
        copy: {
            mailing: {
                files: [
                    // общие файлы
                    { src: 'source/templates/mailing/images/header-stripe.png',             dest: 'build/images/temp/header-stripe.png' },
                    { src: 'source/templates/mailing/images/notification.png',              dest: 'build/images/temp/notification.png' },
                    { src: 'source/templates/mailing/images/notification-mailing.png',      dest: 'build/images/temp/notification-mailing.png' },
                    { src: 'source/templates/mailing/images/logo.png',                      dest: 'build/images/temp/logo.png' },
                    { src: 'source/templates/mailing/images/attention.png',                 dest: 'build/images/temp/attention.png' },
                    { src: 'source/templates/mailing/images/facebook.png',                  dest: 'build/images/temp/facebook.png' },
                    { src: 'source/templates/mailing/images/odnoklassniki.png',             dest: 'build/images/temp/odnoklassniki.png' },
                    { src: 'source/templates/mailing/images/twitter.png',                   dest: 'build/images/temp/twitter.png' },
                    { src: 'source/templates/mailing/images/vk.png',                        dest: 'build/images/temp/vk.png' },
                    { src: 'source/templates/mailing/images/letter.png',                    dest: 'build/images/temp/letter.png' },
                    { src: 'source/templates/mailing/images/shadow-bottom.png',             dest: 'build/images/temp/shadow-bottom.png' },
                    { src: 'source/templates/mailing/images/shadow-bottom-left.png',        dest: 'build/images/temp/shadow-bottom-left.png' },
                    { src: 'source/templates/mailing/images/shadow-bottom-right.png',       dest: 'build/images/temp/shadow-bottom-right.png' },
                    { src: 'source/templates/mailing/images/shadow-left.png',               dest: 'build/images/temp/shadow-left.png' },
                    { src: 'source/templates/mailing/images/shadow-right.png',              dest: 'build/images/temp/shadow-right.png' },
                    { src: 'source/templates/mailing/images/shadow-top.png',                dest: 'build/images/temp/shadow-top.png' },
                    { src: 'source/templates/mailing/images/shadow-top-left.png',           dest: 'build/images/temp/shadow-top-left.png' },
                    { src: 'source/templates/mailing/images/shadow-top-right.png',          dest: 'build/images/temp/shadow-top-right.png' },
                    // файлы для рассылки
                    { src: 'source/templates/mailing/images/banner.png',        dest: 'build/images/temp/banner.png' },
                    { src: 'source/templates/mailing/images/100-products.png',  dest: 'build/images/temp/100-products.png' }
                ]
            }
        },
        imagemin: {
            mailing: {
                files: [{
                    expand: true,
                    cwd: 'build/images/temp/',
                    src: ['*.png'],
                    dest: 'build/images/'
                }]
            }
        },
        clean: {
            mailing: [ "build/images/temp" ]
        }
    });
    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    // Task(s)
    grunt.registerTask('default', ['jade', 'copy', 'imagemin', 'clean']);
};