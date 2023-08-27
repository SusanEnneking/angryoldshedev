# AngryOldSheDev


## Old lady software engineer gripe blogs and other experiments ##

This code supports a gripey old female software engineer's blog posts with
some hopefully useful content sprinkled in.  

The main goal for starting the site is to use OpenAI to write blog posts
from ChatGPT queries.

###Main components:###

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
```
docker-compose up -d
```
(This article)[https://hevodata.com/learn/docker-mysql/] has some good info regarding how to get into the container and change the root password.

2.  Run your create script (Database/blog.sql)
