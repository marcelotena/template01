var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat');

var jsSources = [
    //añade aquí archivos .js para concatenar en el script final
    //'components/scripts/*******.js'
    'components/scripts/bootstrap.min.js',
    'components/scripts/classie.js',
    'components/scripts/custom.js',
    'components/scripts/elastic_grid.js',
    'components/scripts/elastic_grid.encode.js',
    'components/scripts/elastic_grid.min.js',
    'components/scripts/jquery.elastislide.js',
    'components/scripts/modernizr.custom.js'
];
var sassSources = ['components/sass/style.scss'];

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(concat('script.js'))
        .pipe(browserify())
        .pipe(gulp.dest('builds/development/js'))
});

gulp.task('compass', function() {
    gulp.src(sassSources)
        .pipe(compass({
            sass: 'components/sass',
            image: 'builds/development/images',
            style: 'expanded'
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest('builds/development/css'))
});

gulp.task('default', ['js', 'compass']);

gulp.task('watch', function() {
    gulp.watch(jsSources, ['js']);
    gulp.watch('components/sass/*.scss', ['compass']);
});