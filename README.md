[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Chat App with Next.js, Laravel and Ably

This repository serves as a code container for the tutorial I wrote on [Ably's Blog](#todo).

> Blog link will be updated once the article is published.

## Features

- [x] Laravel for event broadcasting
- [x] Next.js for frontend UI
- [x] Ably for realtime messaging

## Prerequisites

These things are required before setting up the project.

- Git
- Ubuntu 18.04 or 20.04
- Node.js [Read Guide](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)
- PHP [Read Guide](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-20-04)

## Getting Started

Follow these instructions to get the project up and running.

```bash
# Clone the repo
$ git clone https://github.com/ravgeetdhillon/chat-app-nextjs-laravel-ably.git

# Change directory
$ cd chat-app-nextjs-laravel-ably
```

### For Laravel

```bash
# Navigate to backend directory that holds laravel code
$ cd backend

# Install dependencies
$ composer install

# Served at http://localhost:8000
$ php artisan serve
```

### For Next.js

```bash
# Navigate to frontend directory that holds next.js code
$ cd frontend

# Install dependencies
$ npm install

# Served at http://localhost:3000
$ npm run dev
```

> For detailed instructions, [read the blog](#todo).

## Tech Stack

* [Next](https://nextjs.org) - Frontend
* [Laravel](https://laravel.com) - Backend
* [Ably](https://ably.com) - Realtime Messaging API

## Authors

- [Ravgeet Dhillon](https://github.com/ravgeetdhillon)

## Extra

- You are welcome to make [issues and feature requests](https://github.com/ravgeetdhillon/chat-app-nextjs-laravel-ably/issues).
- In case you get stuck somewhere, feel free to contact me via [Mail](mailto:ravgeetdhillon@gmail.com).
