//instancia para usar o gulp
	var gulp = require('gulp'),
	// minifica as imagens
	imagemin = require('gulp-imagemin'),
	// limpa diretorios
	clean = require('gulp-clean'),
	// concatena um conjunto de arquivos
	// concat = require('gulp-concat'),
	// replace html não sendo usada
	// htmlReplace = require('gulp-html-replace'),
	// uglify minifica os arquivos css e js
	uglify = require('gulp-uglify'),

	usemin = require('gulp-usemin'),

	cssmin = require('gulp-cssmin'),

	browserSync = require('browser-sync');

	//tarefa padrão
	gulp.task('default',['copy'],function(){
		//como nehuma das tarefas abaixo não retorna nada, elas serão executadas assincrono - AO MESMO TEMPO
		gulp.start('build-img','usemin');
	});
	// limpa a pasta onde as imagens otimizadas seram salvas
	gulp.task('clean', function(){
		return gulp.src('dist')
				.pipe(clean());
	});

	//copia arquivos que não estão relacionados com otimização
	gulp.task('copy',['clean'], function(){
		gulp.src('src/library/font-awesome/fonts/*')
						.pipe(gulp.dest('dist/fonts'));
		return gulp.src('src/library/**/*')
				.pipe(gulp.dest('dist/library'));
	});

	//otimiza as imagens originais de src para dist(distribuição)
	gulp.task('build-img', function(){

		// salva a otimização criando uma nova pasta images
		gulp.src('src/images/**/*')
				//processa todas as imagens acima e otimiza
				.pipe( imagemin() )
				//salva conteudo
				.pipe( gulp.dest('dist/images') );
	});

	gulp.task('usemin',function(){
		gulp.src('src/*.html')
				.pipe(usemin({ // pega todos os builds em comments html e change to 
					'js' : [uglify],
					'css' : [cssmin]
				}))
				.pipe(gulp.dest('dist'));
	});
	//inicia um servidor
	gulp.task('server', function(){

		browserSync.init({
			server: {
				// o servidor inicia na pasta src
				baseDir: 'src'
				// a opcao abaixo é usado caso haja um servidor diferente
				//proxy: "localhost:3000"
			}
		});
		// não usa abertura de metodo no reload
		gulp.watch('src/**/*').on('change',browserSync.reload);
	});

