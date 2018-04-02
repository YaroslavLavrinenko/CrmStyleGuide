var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin');


gulp.task('deploy', ['less', 'minify-css']);


gulp.task('less', function () {
  return gulp.src('app/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(autoprefixer({
        browsers: ['last 5 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-css',['less'], function () {
  return gulp.src('dist/css/*.css')
      .pipe(cssmin({
          restructure: false,
          sourceMap: true,
          debug: true
      }))
      .pipe(gulp.dest('dist/css/'));
});
