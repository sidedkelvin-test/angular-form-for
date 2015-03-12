var gulp = require('gulp');
var karma = require('gulp-karma');
var runSequence = require('run-sequence');

var sources = [
  'source/**/*.ts'
];
var stylesDirectory = "styles";
var testFiles = []; // Declared in the karma.conf.js
var distDirectory = 'dist';

/**
 * Main task: cleans, builds, run tests, and bundles up for distribution.
 */
gulp.task('all', function(callback) {
  runSequence(
    'clean',
    'build',
    'test',
    callback);
});

gulp.task('build', function(callback) {
  runSequence(
    ['compile', 'compileBootstrapTemplates', 'compileDefaultTemplates', 'compileStylesheets'],
    'uglify',
    'map',
    callback);
});

gulp.task('compile', function() {
  return buildHelper(sources, distDirectory , 'form-for.js');
});

gulp.task('compileBootstrapTemplates', function() {
  return buildTemplatesHelper('templates/bootstrap/**/*.html', 'formFor.bootstrapTemplates', 'form-for.bootstrap-templates.js');
});

gulp.task('compileDefaultTemplates', function() {
  return buildTemplatesHelper('templates/default/**/*.html', 'formFor.defaultTemplates', 'form-for.default-templates.js');
});

gulp.task('compileStylesheets', function() {
  var concat = require('gulp-concat');
  var stylus = require('gulp-stylus');
  var autoprefixer = require('autoprefixer-stylus');
  var nib = require('nib');

  return gulp.src(stylesDirectory + '/**/*.styl')
    .pipe(stylus({use: [nib(), autoprefixer()]}))
    .pipe(concat('form-for.css'))
    .pipe(gulp.dest(distDirectory));
});

gulp.task('clean', function() {
  var clean = require('gulp-clean');

  return gulp.src(distDirectory ).pipe(clean());
});

gulp.task('map', function() {
  var shell = require('gulp-shell');

  console.log('CWD: ' + process.cwd() + '/dist');

  return shell.task(
    'uglifyjs --compress --mangle --source-map form-for.min.js.map --source-map-root . -o form-for.min.js -- form-for.js',
    {cwd: process.cwd() + '/dist'}
  )();
});

gulp.task('test', function() {
  // Be sure to return the stream
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(error) {
      // Make sure failed tests cause gulp to exit non-zero
      throw error;
    });
});

gulp.task('test:watch', function() {
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});

// TODO Compile and bundle Stylus styles

gulp.task('uglify', function() {
  var fs = require('fs');
  var uglifyJs = require('uglify-js2');

  var code = fs.readFileSync('dist/form-for.js', 'utf8');

  var parsed = uglifyJs.parse(code);
  parsed.figure_out_scope();

  var compressed = parsed.transform(uglifyJs.Compressor());
  compressed.figure_out_scope();
  compressed.compute_char_frequency();
  compressed.mangle_names();

  var finalCode = compressed.print_to_string();

  fs.writeFileSync('dist/form-for.min.js', finalCode);
});

var buildHelper = function(sources, directory, outputFile) {
  var typeScriptCompiler = require('gulp-tsc');
  var ngAnnotate = require('gulp-ng-annotate');

  return gulp
    .src(sources)
    .pipe(typeScriptCompiler({
      module: "CommonJS",
      emitError: false,
      out: outputFile,
      target: 'ES5'
    }))
    .pipe(ngAnnotate())
    .pipe(gulp.dest(directory));
};

var buildTemplatesHelper = function(templatesDirectory, moduleName, outputFile) {
  var concat = require('gulp-concat');
  var ngAnnotate = require('gulp-ng-annotate');
  var templateCache = require('gulp-angular-templatecache');

  return gulp.src(templatesDirectory)
    .pipe(
    templateCache('templates.js',
      {
        module: moduleName,
        standalone: true,
        root: 'form-for/templates/' // Relative path for Directive :templateUrls
      }))
    .pipe(ngAnnotate())
    .pipe(concat(outputFile))
    .pipe(gulp.dest(distDirectory))
};