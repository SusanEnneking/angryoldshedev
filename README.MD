# AngryOldSheDev


## Old lady software engineer gripe blogs and other experiments ##

This code supports a gripey old female software engineer's blog posts with
some hopefully useful content sprinkled in.  

The main goal for starting the site is to use OpenAI to write blog posts
from ChatGPT queries.

## Main components: ##

1.  MySQL db to house questions and other data items relating to posts
2.  Go Server to house service to run OpenAI and web site queries
3.  NextJS web site to respond to http requests
4.  Temporal.io workflow to run a regular job to generate posts

The idea is that all the angry old she developer has to do is populate the
database with compelling blog topics and let OpenAI generate the interesting blog content.  

It's an experiment, so there's going to be wonkiness.

### Create Database ###
1.  Start docker container(s)

In terminal, run:
```source local.env``` (your local.env needs to be set up by you based on the env.sample)
```
docker-compose up -d
```
Bringing up the db container will initialize your database if you don't have one out there.  If you have one out there and you want to re-initialize it, use ```docker system prune -a``` and ```docker volume prune```.\
[This article](https://hevodata.com/learn/docker-mysql/) has some good info regarding how to get into the container and change the root password.

### To Run Locally ###
1. Start docker container(s) (see above, this starts the db server)
2. Navigate to /client and run\
```npm install``` (just the first time)
```npm run dev```
3. Navigate to /server and run\
```source local.env``` (your local.env needs to be set up by you based on env.sample)
```go run main.go```

navigate to localhost:3000 to see the site.


## NOTES ##
[GO text to PDF](https://blog.logrocket.com/converting-text-file-pdf-go/)\
[Repository Pattern in Go](https://techinscribed.com/different-approaches-to-pass-database-connection-into-controllers-in-golang/?source=post_page-----d22d3fa76d91--------------------------------)

## I LIKE A FREEBIE ##
[MUI offers free templates](https://mui.com/material-ui/getting-started/templates/) :joy:
