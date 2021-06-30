# FEC - Review Service for Steam

> This proxy server repo is a part of a larger service oriented architecture.  Several services own their own data and can only be accessed by the proxy server.  Users connections to individual services are routed through the proxy server.

>The react code for the proxy server is limited to a header and footer component.  It will still require webpack bundling for local development and Grunt for automatic depoyment to an AWS S3 bucket.

>Docker is used for deoployment of the Express App to an AWS EC2 instance

## Table of Contents

1. [Technology](#Technology)
1. [Architecture](#Architecture)
1. [Related Projects](#RelatedProjects)
1. [Requirements](#requirements)
1. [Installation](#Installation)
1. [Development](#development)
1. [Deployment](#deployment)
1. [ReviewApp](#ReviewApp)
1. [Testing](#Testing)

## Technology

![Untitled presentation (3)](https://user-images.githubusercontent.com/71040019/115333143-ff237680-a14d-11eb-9d00-12b2e1963bdf.jpg)

## Architecture

Web Browsers do not directly interact with the individual services.  All traffic is routed through the proxy server.  Below is a web sequence diagram showing the interaction between proxy server and one of the services (review).

![FEC (4)](https://user-images.githubusercontent.com/71040019/115333049-d56a4f80-a14d-11eb-90f6-c4c63b9dfd1f.png)

## Related Projects

  My Review Service:
  - https://github.com/rpt26-fec-pathfinder/tim-review-service

  Other Services:
  - https://github.com/rpt26-fec-pathfinder/anthony-photo-gallery-service
  - https://github.com/rpt26-fec-pathfinder/james-metadata-service
  - https://github.com/rpt26-fec-pathfinder/calvin-more-like-this-service


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- Docker
- MySQL

## Installation


```
$ npm install
```



## Development

In seperate dos windows:

```
$ npm run start-dev
$ npm run react-dev
```

## Deployment

### Docker Deployment for Server

While connected to the AWS EC2 instance via SSH
```
$ docker build -t timdanderson1/fecproxy:1.9 .
$ docker run --restart always -p 3000:3000 timdanderson1/fecproxy:1.9
```
### Grunt / AWS S3 Deployment for Front End
For automatic bundle, uglify and upload run:
```
$ grunt deploy
```

## ReviewApp

The review app uses react and styled components.

## Screenshots

### Navbar with SSL Encryption

<img width="1619" alt="Screen Shot 2021-06-17 at 10 43 46 AM" src="https://user-images.githubusercontent.com/71040019/123905602-8566f080-d927-11eb-9c9f-57ba9e2bb435.png">

### Image Gallery

<img width="1741" alt="Screen Shot 2021-06-29 at 10 17 34 PM" src="https://user-images.githubusercontent.com/71040019/123905800-d971d500-d927-11eb-898c-acc529425578.png">

### Metadata

![119093027-072c3b80-b9c4-11eb-9c14-a8f8c71cdc25](https://user-images.githubusercontent.com/71040019/123905657-9adc1a80-d927-11eb-99b5-3ec7a154b5ae.png)

### More Like This

![119093037-0b585900-b9c4-11eb-8fdf-db1a1f0d4e16](https://user-images.githubusercontent.com/71040019/123905667-9dd70b00-d927-11eb-8026-a53eafc2dfe7.png)

### Reviews

![119093055-10b5a380-b9c4-11eb-8882-0009ffea45e3](https://user-images.githubusercontent.com/71040019/123905672-a0396500-d927-11eb-8534-5fcb55f35b6d.png)

### Footer

![119093069-14492a80-b9c4-11eb-9289-db3fe175c47f](https://user-images.githubusercontent.com/71040019/123905676-a2032880-d927-11eb-9cdf-f24afffd4f53.png)

