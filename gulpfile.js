const gulp = require("gulp");
const gulpTS = require("gulp-typescript");
const gulpTSLint = require('gulp-tslint').default;
const gulpSourcemaps = require('gulp-sourcemaps');
const gulpNodemon = require('gulp-nodemon');

const tsLint = require('tslint');
const del = require('del');
const path = require('path');

const project = gulpTS.createProject("tsconfig.json");
const typeCheck = tsLint.Linter.createProgram('tsconfig.json');


gulp.task('lint', function() {
    return gulp.src('./src/**/*.ts')
        .pipe(gulpTSLint({
            configuration: 'tslint.json',
            formatter: 'verbose',
            program: typeCheck
        }))
        .pipe(gulpTSLint.report());
});

gulp.task('build', gulp.series(['lint'], () => {
    del.sync(['./build/**/*.*']);
    const tsCompile = gulp.src('./src/**/*.ts')
        .pipe(gulpSourcemaps.init())
        .pipe(project());

    return tsCompile.js.pipe(gulpSourcemaps.write({
        sourceRoot: file => path.relative(path.join(file.cwd, file.path), file.base)
    }))
    .pipe(gulp.dest('./build/'));
}));

gulp.task('watch', gulp.series(['build'], () => {
    gulp.watch('./src/**/*.ts', gulp.series(['build']));
}));

gulp.task('start',gulp.series(['build'], () => {
    return gulpNodemon({
        script: './build/tsumugi.js',
        watch: './build/tsumugi.js'
    });
}));

/**
 * @todo Fix the issue with nodemon not starting
 */
gulp.task('serve', gulp.series(['watch'], () => {
    return gulpNodemon({
        script: './build/tsumugi.js',
        watch: './build/'
    });
}));



