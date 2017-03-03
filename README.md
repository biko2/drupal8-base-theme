# Requerimientos

* [Node 4 o superior](http://nodejs.org)
* [Ruby 2.2.4](https://www.ruby-lang.org/)

# Preparación del entorno

* Instalar Node
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.7/install.sh | bash
$ *relog
$ nvm install 6

* Instalar Ruby (recomendado con `rvm`)
$ curl -L https://get.rvm.io | bash -s stable --autolibs=enabled

* Instalar las dependencias de ruby y node
$ cd themes/tema-base/
$ rvm install 2.2.4

```sh
$ bundle install (si no reconoce el comando bundle install $gem install bundler)
$ npm install
```


# Commandos
npm start

npm api

npm run deploy
