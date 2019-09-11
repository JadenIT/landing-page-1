const { task, src, dest, watch, series } = require('gulp')
const del = require('del')
const pug = require('gulp-pug')
const sass = require('gulp-sass')

task('pug', () => {
    return src('./src/pug/index.pug')
        .pipe((pug()))
        .pipe(dest('./dist'))
})

task('clear', () => {
    return del('./dist')
})

task('sass', () => {
    return src('./src/scss/index.scss')
        .pipe(sass())
        .pipe(dest('./dist'))
})

task('watch', () => {
    watch('./src', series('clear', 'pug', 'sass'))
})

task('build', series('clear', 'pug', 'sass'))