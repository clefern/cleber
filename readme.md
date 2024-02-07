URL to deploy:
https://git.heroku.com/cleber.git

Repository:
https://github.com/clefern/cleber

I need to create a composer in order to make it work in heroku:
Error:

remote:  !     WARNING: No 'composer.json' found!
remote:  !
remote:  !     Your project only contains an 'index.php', no 'composer.json'.
remote:  !
remote:  !     Using 'index.php' to declare app type as PHP is deprecated and
remote:  !     may lead to unexpected behavior.
remote:  !
remote:  !     Please consider updating your codebase to utilize Composer and
remote:  !     modern dependency management in order to benefit from the latest
remote:  !     PHP runtimes and improved application performance, as well as
remote:  !     control over the PHP versions and extensions available.
remote:  !
remote:  !     For an introduction to dependency management with Composer and
remote:  !     how to get the most out of PHP on Heroku, refer to the docs at
remote:  !     https://getcomposer.org/doc/00-intro.md and
remote:  !     https://devcenter.heroku.com/articles/getting-started-with-php
remote:
remote: -----> Bootstrapping...
remote: -----> Preparing platform package installation...
remote:        NOTICE: No runtime required in composer.lock; using PHP ^8.0.0 <8.4
remote: -----> Installing platform packages...
remote:        - apache (2.4.58)
remote:        - php (8.3.2)
remote:        - composer (2.2.22)
remote:        - nginx (1.24.0)
remote: -----> Installing dependencies...
remote:        Composer version 2.2.22 2023-09-29 10:53:45
remote: -----> Preparing runtime environment...
remote:        NOTICE: No Procfile, using 'web: heroku-php-apache2'.
remote: -----> Checking for additional extensions to install...
remote: -----> Discovering process types
remote:        Procfile declares types -> web
remote:
remote: -----> Compressing...
remote:        Done: 20.6M
remote: -----> Launching...
remote:        Released v31
remote:        https://cleber.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/cleber.git
   994a5d3..ad3b8cd  main -> main