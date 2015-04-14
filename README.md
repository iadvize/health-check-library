# health-check-library

> Expose an health-check API to *-worker or a health-check route for already existing API

**Kubernetes** (Google Container Engine, Clever-cloud and so on...) requires every processes to expose an HTTP API so it can ensure the service is up. 

<p align="center">
    <img src="https://cloud.githubusercontent.com/assets/138050/7140277/be87ed10-e2ca-11e4-96ec-b6e086321bac.gif" style="width:1000%" />
</p>

Instead of duplicating code everywhere in the code, the `health-check-library` simply expose a route in a language-agnostic and unified way.

# Specification

`health-check-library` **MUST** expose a **GET /_health** route that yield a **200 HTTP status code**.
`health-check-library` follows [semver](http://semver.org) so any non-backward-compatible change will be a major release.

# Features

- Language agnostic, if it's not supported in your current language **simply send a PR that follows the above conventions**
- Framework agnostic, if the framework you use is not supported **simply send a PR that follows the above conventions**

# Currently supported

## JavaScript

### JavaScript / pure (without an existing HTTP API)

Use this when your NodeJS process (a.k.a worker) does not currently expose an HTTP API.

```
// Usage
require('health-check-library')(port [, callback]);
```

If `health-check-library` was not able to bind to the specified port it will throw an error and make the worker crash (that's [a good thing](http://en.wikipedia.org/wiki/Fail-fast)).

```
require('health-check-library/javascript/pure')(8080, function onListening(){
    console.log('ready');
});
```

### JavaScript / hapi

Use this when your NodeJS process already exposes an HTTP API with HAPI. Please note that HAPI should always* be used in NodeJS, don't forget to document your API with [swaggerize-hapi](https://github.com/krakenjs/swaggerize-hapi).

If `health-check-library` was not able to register itself to the HAPI server it will throw an error and will make the process crash (that's [a good thing](http://en.wikipedia.org/wiki/Fail-fast)).

```
require('health-check-library').register(server);
```

* always = 99.9% of the time
