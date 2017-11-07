const babel = require('gulp-babel');
const gulp = require('gulp');
const print = require('gulp-print');
const sourcemaps = require('gulp-sourcemaps');

const srcJsPath = 'src/**/*';

gulp.task('js', function () {
    return gulp.src(srcJsPath + '.js')
        .pipe(sourcemaps.init())
        .pipe(print())
        .pipe(babel({presets: ['es2015']}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('../view'));
});

gulp.task('watch', function(){
    gulp.watch(srcJsPath, ['js']);
});
