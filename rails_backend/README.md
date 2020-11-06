# README

***The project dependencies require that Bundler 2 be installed, which requires at least Ruby v2.3.0 and RubyGems v2.5.0.
To install Bundler 2, simply run "gem install bundler". For more information, visit https://bundler.io/guides/bundler_2_upgrade.html***

## To Install:

Run command `bundle install`

Configure database in database.yml
> *The database is currently configured for PG as the DBMS to be used*

Run `rake db:reset` and `rake db:migrate`

## To Run Server:

`rails s -p 3001` (for Vagrant: rails s -p 3001 -b 0.0.0.0)


