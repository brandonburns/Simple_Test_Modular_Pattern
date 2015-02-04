module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-simple-mocha');
	grunt.loadNpmTasks('grunt-contrib-jscs');

	grunt.initConfig({
		jshint: {
			dev: {
				options: {
					node: true,
					globals: {
						describe: true,
						it: true,
						before: true,
						after: true
					}
				},
				src: ['Gruntfile.js', 'test.js', 'app.js', 'hello.js']
			}
		},
		jscs: {
      all: {
        options: {
        	"standard": "google"
        },
        files: {
          src: ['Gruntfile.js', 'test.js', 'app.js', 'hello.js'] 
        }
      }
    },
		simplemocha: {
			all: {
				src: ['test.js']
			}
		}
	});

	grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha']);
	grunt.registerTask('default', ['test']);
};