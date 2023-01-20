

## System Requirements
### Deno
[Deno](https://deno.land/manual@v1.29.1/getting_started/installation)
## Getting Started


initialize enviroment
```
deno task init
```

install libraries
```
deno task  std
```
create .env file 
```
env=dev
```
start the development server
```
deno task  dev
```

### Release

Nice to have, enable push to allwaus follow
```
git config --global push.followTags true
```

create a release
```
deno task release  0.0.1-pre -m"hello world"
```

deploy release
```
git push --follow-tags
```



## FAQ
export DENO_TLS_CA_STORE=system