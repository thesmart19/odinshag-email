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
                    { src: 'source/templates/mailing/images/header-stripe.png',             dest: 'build/images/header-stripe.png' },
                    { src: 'source/templates/mailing/images/notification-mailing.png',      dest: 'build/images/notification-mailing.png' },
                    { src: 'source/templates/mailing/images/logo.png',                      dest: 'build/images/logo.png' },
                    { src: 'source/templates/mailing/images/attention.png',                 dest: 'build/images/attention.png' },
                    { src: 'source/templates/mailing/images/facebook.png',                  dest: 'build/images/facebook.png' },
                    { src: 'source/templates/mailing/images/odnoklassniki.png',             dest: 'build/images/odnoklassniki.png' },
                    { src: 'source/templates/mailing/images/twitter.png',                   dest: 'build/images/twitter.png' },
                    { src: 'source/templates/mailing/images/vk.png',                        dest: 'build/images/vk.png' },
                    { src: 'source/templates/mailing/images/letter.png',                    dest: 'build/images/letter.png' },
                    { src: 'source/templates/mailing/images/shadow-bottom.png',             dest: 'build/images/shadow-bottom.png' },
                    { src: 'source/templates/mailing/images/shadow-bottom-left.png',        dest: 'build/images/shadow-bottom-left.png' },
                    { src: 'source/templates/mailing/images/shadow-bottom-right.png',       dest: 'build/images/shadow-bottom-right.png' },
                    { src: 'source/templates/mailing/images/shadow-left.png',               dest: 'build/images/shadow-left.png' },
                    { src: 'source/templates/mailing/images/shadow-right.png',              dest: 'build/images/shadow-right.png' },
                    { src: 'source/templates/mailing/images/shadow-top.png',                dest: 'build/images/shadow-top.png' },
                    { src: 'source/templates/mailing/images/shadow-top-left.png',           dest: 'build/images/shadow-top-left.png' },
                    { src: 'source/templates/mailing/images/shadow-top-right.png',          dest: 'build/images/shadow-top-right.png' },
                    // файлы для рассылки
                    { src: 'source/templates/mailing/images/banner.png',   dest: 'build/images/banner.png' },
                    { src: 'source/templates/mailing/images/banner.png',   dest: 'build/banner.png' }
                ]
            }
        },
    });
    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-copy');
    // Task(s)
    grunt.registerTask('default', ['jade', 'copy']);
};