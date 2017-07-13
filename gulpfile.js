var gulp = require('gulp'),
    minify = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    imagemin = require('gulp-imagemin'),
    bs = require('browser-sync').create();
    
gulp.task('default', ['browsersync', 'watch']);

gulp.task('browsersync', function () {
    bs.init({
        server: "./",
        port: 8080
    });
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', ['style']);
    gulp.watch('src/js/script.js', ['script']);
    bs.watch('*.html').on('change', bs.reload);
});

gulp.task('style', function() {
    return gulp.src('src/sass/main.scss', {style : 'expended'})
            .pipe(sass({includePaths: ['src/sass/**']}))
            .pipe(rename({suffix: '.min'}))
            .pipe(minify())
            .pipe(gulp.dest('css/'))
            .pipe(notify({message: 'Style task is finished'}))
            .pipe(bs.reload({stream: true}));;
});

gulp.task('script', function() {
    return gulp.src('src/js/script.js')
            .pipe(rename({suffix: '.min'}))
            .pipe(uglify())
            .pipe(gulp.dest('js/'))
            .pipe(notify({message: 'Script task is finished'}))
            .pipe(bs.reload({stream: true}));
});

gulp.task('imagemin', function() {
    return gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img/'));
});


// //подключение бибилиотек
// var gulp = require('gulp'),
//     sass = require('gulp-sass'),
//     browserSync = require('browser-sync'),
//     concat = require('gulp-concat'),
//     uglify = require('gulp-uglifyjs'),
//     cssnano = require('gulp-cssnano'),
//     rename = require('gulp-rename'),
//     del = require('del'),
//     imagemin = require('gulp-imagemin'),
//     pngquant = require('imagemin-pngquant'),
//     cache = require('gulp-cache'),
//     autoprefixer = require('gulp-autoprefixer');
//
// gulp.task('sass', function(){
//     return gulp.src('app/sass/**/*.scss')
//         .pipe(sass())
//         .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
//         .pipe(gulp.dest('app/css'))
//         .pipe(browserSync.reload({stream: true}))
// });
//
// gulp.task('scripts', function(){
//     return gulp.src([
//         'app/libs/jquery/dist/jquery.min.js',
//         // 'app/libs/wow.min.js',
//         'app/libs/owl/owl.carousel.min.js'
//     ])
//         .pipe(concat('libs.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('app/js'));
// });
//
// gulp.task('css-libs', ['sass'], function(){
//     return gulp.src('app/css/libs.css')
//         .pipe(cssnano())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest('app/css'));
// });
//
// gulp.task('browser-sync', function(){
//     browserSync({
//         server: {
//             baseDir: 'app'
//         },
//         notify: false
//     });
// });
//
// gulp.task('clean', function(){
//     return del.sync('dist');
// });
//
// gulp.task('clear', function(){
//     return cache.clearAll();
// });
//
// gulp.task ('img', function(){
//     return gulp.src('app/images/**/*')
//         .pipe(cache(imagemin({
//             interlaced: true,
//             progressive: true,
//             svgPlugins: [{removeViewBox: false}],
//             use: [pngquant()]
//         })))
//         .pipe(gulp.dest('dist/images'));
// });
// gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function(){
//     gulp.watch('app/sass/**/*.scss', ['sass']);
//     gulp.watch('app/*.html', browserSync.reload);
//     gulp.watch('app/js/**/*.js', browserSync.reload);
// });
//
// gulp.task('default', ['watch']);
//
// gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function(){
//     var buildCss = gulp.src([
//         'app/css/style.css',
//         'app/css/libs.min.css'
//     ])
//         .pipe(gulp.dest('dist/css'));
//
//     var buildFonts = gulp.src('app/fonts/**/*')
//         .pipe(gulp.dest('dist/fonts'));
//
//     var buildJs = gulp.src('app/js/**/*')
//         .pipe(gulp.dest('dist/js'));
//
//     var buildHtml = gulp.src('app/*.html')
//         .pipe(gulp.dest('dist'));
//});