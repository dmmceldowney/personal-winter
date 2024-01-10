# Hello!

Welcome to my personal Winter CMS site project. This is gonna be a fun one.

My main goals with this project are:

1. Learn how to build into Winter CMS, because it's completly FOSS.
2. Give myself some place to post blogs for content that I write that is tied directly to my name.
3. Provide a place for other people to see the stuff I'm working on.

The stack used here will be:

- Winter CMS/Laravel/PHP for page content
- MySQL for Database integration

Once this site is live and has replaced the plain HTML version of this site, I will work on creating a docker-compose file that will launch a PHP server to serve Winter locally *and* run MySQL.

# Setup

Basic setup is:
1. Pull down project (duh)
2. Install all dependencies to vendor/npm (`composer install` && `npm install` should be run from the command line)
3. Launch MySQL via Docker (`docker-compose up -d`)
4. Build everything in winter you'll need:
    - `php artisan winter:up` will build your databases & seed an admin user
    - `php artisan mix:compile` will build be needed to create your CSS if it isn't already there (it should be)
5. Launch webserver via Artisan (`php artisan serve`)
6. Navigate to `localhost:8000` and take a gander at my resumé!

# License
This project uses the MIT license.
