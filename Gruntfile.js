module.exports = function(grunt) {

	  // Project configuration.
	     grunt.initConfig({
	         pkg: grunt.file.readJSON('package.json'),
		 copy: {
		   main: {
		       src: 'src/**',
		       dest: 'dest/',
		   },
		   sec: {
		   	files: [
			        {expand: true, src: ['src/*'], dest: 'dest/'}, // includes files in path
			         {expand: true, src: ['src/core/sub/*.html'], dest: 'dest/'} // includes files in path
			      	//{expand: true, src: ['src/**'], dest: 'dest/'}, // includes files in path and its subdirs
			    ]
		   }
		 }

	      });
	  // Default task(s).
	  grunt.loadNpmTasks('grunt-contrib-copy');
	  grunt.registerTask('default', ['copy:sec']);
	 };
