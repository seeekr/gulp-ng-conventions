var gulp = require('gulp')
var ngConventions = require('../build/index')

gulp.task('default', function () {
    return gulp.src('src/**/*')
        .pipe(ngConventions())
        .pipe(gulp.dest('out'))
})
