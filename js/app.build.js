({

	// launch : node r.js -o js/app.build.js

    appDir: "../",
    baseUrl: "js",
    dir: "../../untimelytales-build/",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    //optimize: "none",
    optimize: "uglify",

    paths: {
    	'jquery':		'libs/jquery-1.9.1.min',
		'underscore': 	'libs/underscore-min', 
		'backbone': 	'libs/backbone-min',
		'sm2':			'libs/soundmanager2-nodebug-jsmin', // soundmanager2
		'mixins': 		'libs/mixins',
		'validate': 	'libs/jquery.validate.min'
    },

    modules: [
        //Optimize the application files. 
        {
            name: "main"
        }
    ]
})