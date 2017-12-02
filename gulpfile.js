const gulp = require('gulp')
const runSequence = require('run-sequence')
const nodemon = require('gulp-nodemon')
const ts = require('gulp-typescript')
// const eslint = require('gulp-eslint')
const tslint = require('gulp-tslint')
const del = require('del')

const tsProject = ts.createProject('tsconfig.json')

gulp.task('tslint', () =>
  gulp
    .src('src/**/*')
    .pipe(
      tslint({
        formatter: 'verbose',
        configuration: './tslint.json',
      })
    )
    .pipe(tslint.report())
)

gulp.task('clean:dist', () => {
  return del(['dist/**', '!dist']) // '!dist/public', '!dist/public/**'
})

gulp.task('copy:public', () => {
  gulp.src('./src/public')
  .pipe(gulp.dest('dist'))
})

gulp.task('transpile', () => {
  let tsResult = gulp.src('src/**/*.ts') // or tsProject.src()
  .pipe(tsProject())
  return tsResult.js.pipe(gulp.dest('dist'))
})

gulp.task('build', () => {
  runSequence('tslint', 'clean:dist', 'transpile', 'copy:public')
})

gulp.task('server', ()=>{
  const stream = nodemon({
    'watch': ['src'],
    'ext': 'ts',
    'ignore': ['src/**/*.spec.ts'],
    'exec': 'ts-node ./src/index.ts',
  })
  stream
  .on('restart', function() {
    console.log('restarted!') // eslint-disable-line
  })
  .on('crash', function() {
    console.error('Application has crashed!\n') // eslint-disable-line
     stream.emit('restart', 10) // restart the server in 10 seconds
  })
})

gulp.task('default', () => {
  runSequence('build', 'watch', 'server')
})
