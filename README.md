# Team Data
> React application that fetches and displays data from an API

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Languages](#languages)
* [Library](#library)
* [API](#api)
* [To View](#to-view)
* [Code Examples](#code-examples)
* [Status](#status)

## General Info
The purpose of this project was to create and deploy a React application to display information about football teams. I decided to do this project in order to develop my skills in React and using APIs.


## Screenshots

<img src="https://github.com/ElChickenSpicy/Team-Data/blob/master/public/team-data-snip.PNG" width="300">

## Languages
* HTML
* CSS
* JavaScript

## Library
* React

## API
* https://www.thesportsdb.com/api/v1/json/1/searchteams.php

## To View
Head over to https://frosty-swartz-5de2f9.netlify.app/ to view the page in action!

## Code Examples
App.js
```js
  async myFetch(endpoint) {
    const response = await fetch(endpoint);
    if (response.ok) {
      let jsonResponse = await response.json();
```
SearchBar.js
```js
    handleChange(e) {
        let requestString = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + e.target.value;
        this.props.onChange(requestString);
    };
```


## Status
Project is: _Completed_

