var gulp = require('gulp');
var gulpSass = require('gulp-sass');

gulp.task('buildcss', function(){
    return gulp.src('./dev-assets/style.scss')
    .pipe(gulpSass())
    .pipe(gulp.dest('./prod-assets'));
});