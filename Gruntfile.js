module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
		transport: {
            options: {
               alias: '<%= pkg.spm.alias %>',
                paths: ['.'],
            },
			//test是其中一个任务，只是一个名字而已 ，可以随便取
            test: {
                files: [{
                        //cwd: 'js',
                        src: ['a.js','b.js','start.js'],
                        dest: '.test/'
                    }]
            }
        },
        concat: {
            options: {
                alias: '<%= pkg.spm.alias %>',
                paths: ['.test/'],
                include: 'all'
            },
			//index只是一个任务名字而已 随便叫
            index: {
                files: [{
                        expand: true,
                        cwd: '.test/',
						//src是入口文件,比如我的start.js
                        src: ['start.js'],
                        dest: 'dist/',
                        ext: '.js'
                    }]
            }
        },
		uglify : {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build : {
                src : ['sea.js','dist/start.js'],
                dest : 'dist/start.min.js'
            }
        }
    });
	
    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-cmd-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// 注册任务
    grunt.registerTask('build', ['transport','concat','uglify']);
	
};
