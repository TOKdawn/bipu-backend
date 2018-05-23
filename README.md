## TODO List

1. 权限控制

2. 行为统计



## 实现思路

### 数据库

* user表

    存储用户数据关联谱册表

* volume表

    存储具体的谱子信息

    p.s. 谱子本体存储在github

### 用户手册

* 我们提倡用户通过谱册来进行谱子规划分类以及分享

* 我们推荐用户通过系统生成的专属谱册维护专属于自己的谱子库


* 虽然我们提供了谱册复制的功能,但我们不建议用户疯狂的复制别人谱册,请信任谱册所有者会维持谱册的质量

* 我们建议用户积极的维护自己的谱册质量,不要轻易删除,或者大幅改动谱册,因为你谱册的收藏者可能会因此产生困扰.

*  我们设计了谱册评论功能,我们推荐用户通过这里帮助谱册提供者维持谱册质量,而不是复制所有者谱册再自己进行更改

* 我们会定期挑选优质谱册在首页展示,让你的劳动成果被更多人看到,你也能在谱册页中观看到收藏此谱册的用户,被人认可的感觉是极好的.


### 应用部署

    node >=8.9.0

    install node
    npm i n -g
    n stable

    yum install postgresql
    yum install postgresql-server
    postgresql-setup initdb
    systemctl start postgresql
    
    sudo adduser dawn
    sudo su - postgres
    psql
    \password postgres
    CREATE DATABASE bipu OWNER dawn;
    GRANT ALL PRIVILEGES ON DATABASE bipu to dawn;
    systemctl restart postgresql.service


vim /var/lib/pgsql/data/pg_hba.conf
local all all trust
host all  all 127.0.0.1/32 trust

    git clone git@github.com:TOKdawn/bipu-backend.git
    npm i --production
    npm i egg-scripts --save