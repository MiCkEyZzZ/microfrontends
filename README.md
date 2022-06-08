## Микрофронтенд (Microfrontend)

#### Пример построения приложения с применением архитектуры микрофронтенд (microfrontend)
Монолит разбит на четыре части: ```container, marketing, auth, dashboard``` подразумевается, что над проектом работает четыре команды.
Каждая из команд, отвечает за свою часть кода.

* ```container``` - это корневая часть приложения;
* ```marketing``` - отвечает за главную страницу и страницу с тарифами;
* ```auth``` - отвечает за авторизацию пользователя;
* ```dashboard``` - отвечает за страницу

#### Используемые технологии:
* ``React.js``
* ``Vue.js``
* ``Webpack`` подробнее [ModuleFederationPlugin](https://webpack.js.org/plugins/module-federation-plugin/)
* ``Яндекс Cloud`` подробнее [Object Storage](https://console.cloud.yandex.ru/folders/b1ggnu6b1efi8k7cuv1d)

#### Для запуска приложения:
```github
git@github.com:MiCkEyZzZ/microfrontends.git
cd microfrontends

cd container
npm install
npm run start

cd marketing
npm install
npm run start

cd auth
npm install
npm run start

cd dashboard
npm install
npm run start
```
