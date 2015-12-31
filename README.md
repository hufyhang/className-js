### className.JS

A JavaScript API for conditionally joining class names together. 

#### Install

npm install --save-dev classname-js

#### Usage

##### Import className.JS

~~~js
var className = require('classname-js');
~~~

##### In browser

To use className.JS in browser, just include className.js via `<script>` tag. The `className` method is attached to `window`.

##### Generate classNames

~~~js
var className = require('classname-js');
className('foo', 'bar'); // 'foo bar'
~~~

##### Supported types

className.js supports `string`, `number`, `boolean`, `array`, `object`, and even `function`.

Below is a comprehensive example:

~~~js
var className = require('classname-js');
className('btn', ['info', 'big'], {
        hide: function () {
            return btnElement.isActive ? true : false;
        },
        responsive: isResponsive || false
    });

// Suppose that `btnElement.isActive` and `isResponsive` are both true
// 'btn info big hide responsive'
~~~

### License

MIT