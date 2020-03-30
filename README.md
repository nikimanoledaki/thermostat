# Thermostat

## Description
A single page application with the model logic of a thermostat app that calls on the OpenWeatherMap API. This web app is fully tested with Jasmine. This project was created as part of Week 5 at Makers.

## Getting started
```
$ git clone https://github.com/nikimanoledaki/thermostat.git
$ open ./views/index.html
```

## Run the tests
Launch the Jasmine tests from the root of the directory.
```
$ open SpecRunner.html
```

No installation is needed. A new page should pop up in your browser.

## User Stories
```
As a user
So that I can check that my thermostat is turned on
I want my thermostat to start at 20 degrees

As a user
So that I can be warm
I want to be able to increase the thermostat's temperature

As a user
So that I can control the temperature
I want to be able to decrease the thermostat's temperature

As a user
So that it does not get cold in my house
I want my thermostat's minimum temperature set to 10 degrees

As a user
So that I can save energy 
I want a power saving mode with a max temperature of 25 degrees

As a user
So that I can be very warm
I want a thermostat with a maximum temperature of 32 degrees

As a user
So that I am always conscious of the energy I consume
I want the power saving mode on by default

As a user
So that I can set the temperature to the initial value
I want a reset function

As a user
So that I can be informed 
I want to see the thermostat's current energy usage

As a user
So that I can change the temperature accordingly
I want to see the weather information for my city
```