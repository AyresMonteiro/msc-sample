# msc-sample

This is a project for a presentation to ParaíbaJS dev community.

## How to Run

- **Prerequisites**: Have node.js v16 or above and yarn package manager installed in your environment.

Run command on your terminal:

    $ yarn build && yarn start


In another terminal, you can seed the database using

    $ ./seed-db.sh


## Model-Service-Controller (MSC) Architecture

This REST API archictecture is based on three layers:

- **Controller Layer**: Handles HTTP requests and deal with validation and presentation errors, being responsible for returning responses to the client with their respective status codes. It also call services to handle core business logic.

- **Service Layer**: Handles core business logic. I.e: perform a payment, sign up, log in, retrieve resource list, etc. It is called by controllers and can call Model Layer to persist, retrieve, update and delete data.

- **Model Layer**: Abstracts data sources. Can abstract Databases, External Applications (other REST APIs), AIs and other sources of data.

### Architecture Illustration:

![MSC Architecture](https://raw.githubusercontent.com/AyresMonteiro/msc-sample/main/static/msc-sample.jpg)
