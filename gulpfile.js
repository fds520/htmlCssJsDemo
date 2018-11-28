/*const sourcemaps = require('gulp-sourcemaps');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css'); //压缩css
const path = require('path');
const imagemin = require('gulp-imagemin'); //图片压缩
const uglify = require('gulp-uglify'); //压缩js
const rename = require("gulp-rename");*/
const gulp = require('gulp');
const zip = require('gulp-zip');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

// const sass = require('gulp-sass');
// const babel = require("gulp-babel");

// 静态服务器 + 监听 less/html 文件
gulp.task('server', function () {
  browserSync.init({
    server: "./src/taobao/"
  });
  gulp.watch("./src/*/html/*.html").on('change', reload);
  gulp.watch("./src/*/js/*.js").on('change', reload);
  gulp.watch("./src/*/css/*.css").on('change', reload);
  gulp.watch("./src/*/images/*").on('change', reload);
});

// 打包工具
gulp.task('zip', function () {
    gulp.src('./src/**')
        .pipe(zip('zipName.zip'))
        .pipe(gulp.dest('dist'));
});

/*
 * 对less进行编译并压缩
 */
/*
gulp.task('less', function () {
  gulp.src('./src/less/!**!/!*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    // .pipe(sourcemaps.init())
    // .pipe(sourcemaps.write("."))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'Android >= 4.0'],
      cascade: true, //默认true，非浏览器前缀会缩进对齐
      remove: true //默认true，去除不必要前缀
    }))
    .pipe(cleanCSS({ compatibility: 'ie7' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./assets/css'));
});

/!* 输出样式
 * 嵌套输出 nested
 * 展开输出 expanded
 * 紧凑输出 compact
 * 压缩输出 compressed
 * *!/
gulp.task('sass', function () {
  return gulp.src('./src/sass/!**!/!*.scss')
    .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'Android >= 4.0'],
      cascade: true, //默认true，非浏览器前缀会缩进对齐
      remove: true //默认true，去除不必要前缀
    }))
    .pipe(cleanCSS({ compatibility: 'ie7' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./assets/css'));
});

/!*
 * 图片进行压缩
 *!/
gulp.task('imagemin', function () {
  gulp.src('./src/images/!**!/!*')
      .pipe(imagemin([
          imagemin.gifsicle({
              interlaced: true // 类型：Boolean 默认：false 隔行扫描gif进行渲染
          }),
          imagemin.jpegtran({
              progressive: true // 类型：Boolean 默认：false 无损压缩jpg图片
          }),
          imagemin.optipng({optimizationLevel: 5}), // 类型：Number  默认：3  取值范围：0-7（优化等级）
          imagemin.svgo({
              plugins: [
                  {
                      removeViewBox: false // 不要移除svg的viewbox属性
                  },
                  {cleanupIDs: false}
              ]
          })
      ], {
          verbose: true
      }))
    .pipe(gulp.dest('./assets/images'));
});

/!*
 * 压缩js
 *!/
gulp.task('script', function () {
  gulp.src('./src/js/!*.js')
    // .pipe(sourcemaps.init())
    .pipe(uglify())
    // .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./assets/js'))
})

gulp.task('dev', ['serve'], function () {
  gulp.watch('src/js/!*.js', ['script']);
});

gulp.task('toless', function () {
  gulp.watch('src/!**!/!*.less', ['less']);
});*/
