Gulp plugin for [ng-conventions](https://github.com/seeekr/ng-conventions).

# Installation

`npm install --save-dev gulp-ng-conventions`

# Usage

gulpfile.js
```
var gulp = require('gulp')
var ngConventions = require('gulp-ng-conventions')

gulp.task('default', function () {
    return gulp.src('src/**/*')
        .pipe(ngConventions()) // this line
        .pipe(gulp.dest('out'))
})
```
