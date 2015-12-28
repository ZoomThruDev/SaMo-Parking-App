## Overview ##

This is an app that allows users to view the number of available parking spots in all public parking garages in Santa Monica. All information is retrieved from the City of Santa Monica's [Parking Data API](https://parking.api.smgov.net/).

This project was built with [AngularJS](https://angularjs.org/) using the [LumX](http://ui.lumapps.com/) front-end framework.

## Functionality ##

This app is responsive. When the screen width is less than 768px, the UI will adapt to replicate typical design patterns for native mobile apps.

The Map section of the app displays the locations of all public parking garages in Santa Monica. Garages are color-coded based on their available spots.

The Table section of the app, by default, displays all garages in order of the number of available spots. A search box allows users to filter the table instantly, and table items can be reordered by tapping on the table headers.

## Running the App ##

To run the app locally run the following:
```
Node server.js
```
Then navigate to localhost:8080.


## License ##

BSD

## To Do ##
- Prediction functionality and tab
- Analytics
