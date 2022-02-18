# Languages
[ENG](README.md)

# Pizza time

Демонстрационное приложение для продажи пиццы, которое реализовано с помощью Expo SDK

## Начало работы

Установите [expo](https://docs.expo.io/get-started/installation/) и соответствующие ему зависимости. Установите приложение отладки на свой смартфон и выполните действия, описанные в документации.
```
npm install --global expo-cli
```

### Необходимые компоненты

Какие вещи вам нужны для установки программного обеспечения и как их установить:

[nodejs](https://nodejs.org/en/) , yarn or npm, [expo](https://docs.expo.io/get-started/installation/), эмулятор андроид (для экспо - Expo Go)


### Установка и запуск
Установить необходимые зависимости для проекта:
```
npm install
```
Запустить проект командой:
```
expo start
```

В браузере откроется страница для выбора запуска. Для запуска через Expo Go, необходимо чтобы ПК и смартфон были подключены к одной сети (для режима LAN разработки). После входа в клиент приложения, необходимо просканировать qr код. В том случае если код отсканирован корректно, то начнется сборка приложения.

## Развертывание

Сборка:
```
expo build:android
```
WARNING: ***У вас должна быть учетная запись в expo***

## Разработано с помощью

<!-- List the main dependencies like frameworks, tooling, don't need to list all dependencies -->
* [EXPO](https://github.com/expo/expo)

## Используемые библиотеки
* typescript
* redux-toolkit
* redux-observable
* react native paper
* rxjs
* i18n
* firebase
* expo libs