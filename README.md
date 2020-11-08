# P04 Evaluate a news article with Natural Language Processing
This is the fourth project for the Udacity course "Front End Web Developer"

## Table of Contents

* [Description](#Description)
* [Functions](#Functions)
* [Extras](#Extras)
* [Author](#Author)


## Description
The goal of this project was to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.
The used API is provided by MeaningCloud, from where we are using the Sentiment Analysis.

## Functions

- opens on port 8085
- reads the input and checks if it is a valid URL
- the valid URL is sent to the meaningcloud API to be analysed
- returns the information from the API
- uses this information package to update the UI on the webpage

## Extras
- check for a valid URL, alerts in case there is a fault
- using JEST to test the URL check, with a given correct and wrong input

## Author
Matthias Gudernatsch
