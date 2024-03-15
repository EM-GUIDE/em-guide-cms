# EM GUIDE Website (CMS)

This repository contains the Content Management System (CMS) backend code of the EM GUIDE website, developed using [Strapi](https://strapi.io/). 

The goal was to create a website that loads quickly and is lightweight but allows flexible content editing.

Please refer to the [EM GUIDE (frontend)](https://github.com/EM-GUIDE/em-guide-site) for the frontend code of the EM GUIDE website. 

## Architecture

The overall architecture of the website is displayed below. The site's frontend is built using the [Astro](https://astro.build/) static site generator.

![alt text](https://github.com/EM-GUIDE/.github/blob/main/profile/em_guide_site_architecture.png?raw=true)

## 🔨 Development notes

Clone this repository to get the code of the EM GUIDE website CMS. 

Use the following command to start the EM GUIDE website CMS in development mode. 

``` bash
yarn develop
```

Use the following command to start the EM GUIDE website CMS in production mode. 

``` bash
yarn start
```

Use the following command to (re)build if needed.

``` bash
yarn build
```

## 🏛️ Deployment notes

The EM GUIDE website CMS can be deployed using a Docker Compose setup (including a database, web proxy, and the application). 

Clone this repository to your deployment droplet. 

Use the following code to start the EM GUIDE website CMS on your production droplet.

  ` docker compose up`

When making changes to the code, use the following commands to stop & rebuild the application.

   ` docker compose down`

   ` docker compose build`

**Important note**: never down or delete the database volume as it stores the state of your application (content, users, settings etc.).  

## 🐛 Troubleshooting

The following commands may help with troubleshooting your setup. 

Use the `-d` option to read the logs of all Docker services.

   ` docker compose up -d`

Rebuild the application without cache.

   `docker compose build strapi --no-cache`

Check the disk usage of your Docker assets to make sure that your droplet's dick is not full, and delete unused assets as needed. 

   `docker system df`