## Overview ##

This is an app that allows you to view the number of availalbe parking spots in all public parking garages in Santa Monica. All information is retrieved from the City of Santa Monica's [Parking Data API](https://parking.api.smgov.net/).

This project was built with [AngularJS](https://angularjs.org/) using the [LumX](http://ui.lumapps.com/) front-end framework.

## Functionality ##

This app is completely responsive, and the UI will adapt to replicate typical design patters for native mobile apps when the screen width is less than 768px.

The map section of the app displays the locations of all public parking garages in Santa Monica. Garages are color-coded based on ther number of available spots.

The table section of the app, by defautl, displays all garages in order of the number of available spots. A search box allows users to filter the table instantly, and table items can be reordered by tapping on the table headers.

## Running the App ##

To run the app locally run the following:
```
Node server.js
```
Then navigate to localhost:8080.


## License ##

BSD.
