var gulp = require('gulp'),
postcss = require('gulp-postcss'),
cssvars = require('postcss-simple-vars'),
cssnested = require('postcss-nested'),
cssimport = require('postcss-import'),
autoprefixer = require('autoprefixer');

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssimport, cssvars, cssnested, autoprefixer]))
    .on('error', function(errorInfo) {
        console.log(errorInfo.toString);
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});