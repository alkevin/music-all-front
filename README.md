# music-all-front
Front End for Project Music'All - projet annuel IPSSI 2020

The application is about creating a social network dedicated to musiciens and provide social space service to offert them the possibility to increase visibility and help them to manage an hobbie or professionnal carrier and organize event and meet people who maybe are searching for other people to work on or play a song.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.

------
>   Please note that this project is released with a Contributor [Code of Conduct](https://github.com/alkevin/music-all-front/blob/master/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
------

## Badges 

-------
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://github.com/alkevin/music-all-front/blob/master/CODE_OF_CONDUCT.md)
![GitHub](https://img.shields.io/github/license/alkevin/music-all-front?style=plastic)
![David](https://img.shields.io/david/WingsHell/tools-for-ci.svg?color=%234b1&style=plastic)
-------

## [![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-black.svg)](https://sonarcloud.io/dashboard?id=alkevin_music-all-front)

-------
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=alkevin_music-all-front&metric=alert_status)](https://sonarcloud.io/dashboard?id=alkevin_music-all-front)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=alkevin_music-all-front&metric=code_smells)](https://sonarcloud.io/dashboard?id=alkevin_music-all-front)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=alkevin_music-all-front&metric=coverage)](https://sonarcloud.io/dashboard?id=alkevin_music-all-front)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=alkevin_music-all-front&metric=security_rating)](https://sonarcloud.io/dashboard?id=alkevin_music-all-front)
-------
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=alkevin_music-all-front&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=alkevin_music-all-front)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=alkevin_music-all-front&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=alkevin_music-all-front)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=alkevin_music-all-front&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=alkevin_music-all-front)
-------

-------

## Wanna try ?

> Go to Heroku - [Music'All](https://music-all-front.herokuapp.com/)


## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy this project.

# Usage :

## You will need :
- [X] [Git](https://www.atlassian.com/fr/git/tutorials/install-git)
    - install on ubuntu dist:
    ```bash 
    sudo apt-get install git
    ```

- [X] [Docker](https://docs.docker.com/install/)
    - install on ubuntu dist: 
    ```bash 
    curl -ssL https://get.docker.com | sh 
    ```

- [X] git clone https://github.com/alkevin/music-all-front.git

- [X] in the root project
    ```bash
    docker build -t music-all-front .
    ```

- [X] launch the app
    ```bash
    docker run -it --env PORT=4200 -p 4200:4200 -v ${PWD}:/app music-all-front
    ```

- [X] go to [localhost](http://localhost:4200)

### OR PULL FROM REGISTRY
- [X] in the root project
    ```bash
    docker pull docker.pkg.github.com/alkevin/music-all-front/music-all-front:latest
    ```

- [X] launch the app
    ```bash
    docker run -it --env PORT=4200 -p 4200:4200 -v ${PWD}:/app music-all-front
    ```

- [X] go to [localhost](http://localhost:4200)

## Install if you don't use docker
- [X] git clone https://github.com/alkevin/music-all-front.git
- [X] [Angular-cli](https://cli.angular.io/)
    - install :
    ```bash 
    npm install -g @angular/cli
    ```
- [X] in the root project
    - install dependencies :
    ```bash 
    npm install
    ```
- [X] Launch the app
    ```bash 
    ng serve
    ```
- [X] go to [localhost](http://localhost:4200)

## Running The tests
- [X] unit tests
- [X] functionnal tests
- [X] integration tests

## Coding style tests
- [X] [hadolint](https://github.com/hadolint/hadolint)

## Deployment
We use [github actions](https://github.com/features/actions) to perform the CI/CD of this project with testing, analyse, packaging and deployment.

- [X] [heroku](https://music-all-front.herokuapp.com/)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/alkevin/music-all-front/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

For the versions available, see the [tags on this repository](https://github.com/alkevin/music-all-front/releases)

## Packaging

See all [package](https://github.com/alkevin/music-all-front/packages) available.

## Authors

> Alves Kévin - Initial work - [alkevin](https://github.com/alkevin)

See also the list of [contributors](https://github.com/alkevin/music-all-front/graphs/contributors) who participated in this project.

## License

Music-all-front is MIT licensed, as found in the [LICENSE][0] file.

[0]: https://github.com/alkevin/music-all-front/blob/master/LICENSE.md
