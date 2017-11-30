const gulp = require('gulp')
const ts = require('gulp-typescript')

const tsProject = ts.createProject('tsconfig.json')

gulp.task('scripts', () => {
    tsProject().src()
    .pipe(tsProject())
    return 
})