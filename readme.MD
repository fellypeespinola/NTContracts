<div align="center">
  <h3 align="center">Contract Management System</h3>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


This project is a contract management system developed with TurboRepo for monorepo management, GraphQL for flexible data querying, NestJS as the back-end framework, and Nuxt for the front-end interface. It aims to provide a comprehensive solution for creating, editing, and tracking contracts.

### Built With

* [![TS][TS]][TS-url]
* [![Nest][Nest.js]][Nest-url]
* [![GraphQL][GraphQL]][GraphQL-url]
* [![Vue][Vue.js]][Vue-url]
* [![Vuetify][Vuetify]][Vuetify-url]
* [![Nuxt][Nuxt.js]][Nuxt-url]


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these simple steps.

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/fellypeespinola/NTContracts.git
   ```
2. Copy envs
   ```sh
   cp .env.example .env
   ```
3. Run docker compose
   ```sh
   docker compose up
   ```
4. Run migrations
   ```sh
   yarn run db:migrate
   ```
5. Run seeds
   ```sh
   yarn run db:seed
   ```
6. Access your brownser
   http://localhost:3000


<!-- USAGE  -->
## Usage

The system allows you to create, edit, and delete contracts, as well as monitor the status of each one. It is organized to support multiple clients and contracts, providing a user-friendly and fast interface.

## Diagram
![cc-digram]


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[cc-digram]: docs/create_contract_sequence_diagram.png
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Nest.js]: https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white
[Nest-url]: https://nestjs.com/
[Nuxt.js]: https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82
[Nuxt-url]: https://nuxt.com/
[Vuetify]: https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF
[Vuetify-url]: https://vuetifyjs.com/
[GraphQL]: https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white
[GraphQL-url]: https://graphql.org/
[TS]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TS-url]: https://www.typescriptlang.org/