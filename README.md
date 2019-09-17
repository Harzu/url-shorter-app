<h1 align="center">Shorter Url</p><h1 align="center">

## Description
Service for shorted url.
Service use Nestjs([Nest TS Starter kit](https://github.com/nestjs/typescript-starter)) and Redis

## Start app

```bash
# With docker
$ docker-compose up -d

# With npm
$ npm install
$ docker-compose up -d storage
$ npm start


# Before start <============================>
app | [Nest] 1 - 09/17/2019, 2:00:46 PM [NestFactory] Starting Nest application...
app | [Nest] 1 - 09/17/2019, 2:00:46 PM [InstanceLoader] AppModule dependencies initialized +54ms
app | [Nest] 1 - 09/17/2019, 2:00:46 PM [RoutesResolver] AppController {/}: +21ms
app | [Nest] 1 - 09/17/2019, 2:00:46 PM [RouterExplorer] Mapped {/, GET} route +10ms
app | [Nest] 1 - 09/17/2019, 2:00:46 PM [RoutesResolver] ShortedUrlController {/}: +1ms
app | [Nest] 1 - 09/17/2019, 2:00:46 PM [RouterExplorer] Mapped {/generate, POST} route +3ms
app | [Nest] 1 - 09/17/2019, 2:00:46 PM [RouterExplorer] Mapped {/:hash, GET} route +3ms
app | [Nest] 1 - 09/17/2019, 2:00:46 PM [NestApplication] Nest application successfully started +6ms
```

<p>Before start go to <a href="http://localhost:3000">http://localhost:3000</a> for use app.</p>