### users （用户）
1. login
    登录(github)

    `get /passport/github`

   
  
    




1. Get an user information（需验证）

    获取用户信息

    ` GET  /user/:uid`


    返回参数

    | 参数        | 类型    |  描述    |
    | --------   | -----:  | :----:  |
    | id         | number  |  用户id  |
    | avatar     | string  |  用户头像 |
    | name       | srting  |  用户名   |
    | role       | number  |  用户角色 |
    //1登录 ,0未登录,2管理员
    获取用户自己的信息
   ` GET  /user`
 


1. List volumes in one's collection

    查看某个用户收藏的所有谱册

    ` GET   /user/collection/:uid/`

    查看自己收藏的所有谱册

     ` GET   /user/collection/`

  
    请求参数

    | 参数        | 类型    |  描述    |
    | --------   | -----:  | :----:  |
    | offset     | number  |  当前页数 |
    | pagesize   | number  |  单页数目 |
    | owned      | boolean  |  是否只查询自己创建的谱册 |

    
    返回参数

    | 参数        | 类型    |  描述    |
    | --------   | -----:  | :----:  |
    | data      | array  |  谱册列表   |
    s.p.需要判断每一个谱册的status 为1的渲染,为2的已经被删除,为0的不可删除
  


 

    
2. Add a volume to collection （需验证）

    收藏某个谱册

    ` POST   /user/collection`

    请求参数

    | 参数        | 类型    |  描述  |
    | --------   | -----:  | :----: |
    | vid        | number  |  谱册id |
    
    请求实例

    ```json
        {
            vid:123456;
        }
    ```

    

3. Delete a volume from a collection （需验证）

    取消收藏某个谱册
    ` DELETE   /user/collection`

### volumes （谱册）

1. List volumes

    展示所有谱册

    ` GET  /volume`


    请求参数

    | 参数        | 类型    |  描述    |
    | --------   | -----:  | :----:  |
    | offset     | number  |  当前页数 |
    | pagesize   | number  |  单页数目 |
    | role       | String  |  谱册规则 |
    
 

<!-- 2. List volumes created by a user

    展示某个id的用户创建的所有的谱册的信息

    ` GET  /volume/user/:uid`

    **完成 有待分页** -->

2. Get a single volume

    通过谱册id获取一个谱册的信息

    ` GET  /volume/:vid`


3. Create a volume （需验证）

    创建一个谱册

    ` POST  /volume`

    
    请求参数

    | 参数        | 类型    |  描述    |
    | --------   | -----:  | :----:  |
    | name       | string    |  谱册名   |
    | describe   | string    |  描述   |
    
    
    返回示例
    {
    "status": 1,
    "comment": null,
    "id": 2,
    "title": "未命名",
    "describe": "测试用",
    "photo": null,
    "createAt": null,
    "updateAt": null
   }

  
 


4. Edit a volume （需验证）

    编辑一个自己创建的谱册

    ` PUT /volume/:vid`
    上传头像

     `POST /upload`

      返回参数

    | 参数        | 类型    |  描述    |
    | --------   | -----:  | :----:  |
    | url      | string  |  上传返回连接 |




    请求参数

    | 参数        | 类型    |  描述    |
    | --------   | -----:  | :----:  |
    | title      | string  |  标题   |
    | describe   | string  |  描述   |
    | url        | string  |  封面连接 |
    

    P.S.编辑的时候前端先把已知信息渲染给用户,三项都要传

6. Delete a volume （需验证）

    删除一个自己的谱册

    ` DELETE  volume/:vid`


7.  List scores in a volume

    返回一个给定id的谱册里的所有谱子

    ` GET  /volume/:vid/score`

    请求参数

    | 参数        | 类型    |  描述    |
    | --------   | -----:  | :----:  |
    | offset     | number  |  当前页数 |
    | pagesize   | number  |  单页数目 |
 

     返回参数

    | 参数        | 类型    |  描述    |
    | --------   | -----:  | :----:  |
    | total      | number  |  总记录数 |
    | data      | array  |  谱册列表   |
    
  


8. Add a score to a volume （需验证）

    往一个特定谱册里添加一个谱子

    `POST  /volume/:vid/score`

    请求参数

    | 参数        | 类型    |  描述    |
    | --------   | -----:  | :----:  |
    | sid        | number  |  谱子id  |
  



9. Delete a score from a volume （需验证）

    从一个谱册里删除一个谱子

    ` DELETE  /volume/:vid/score/:sid`
  
  



10. Search comment 

    查询一个谱册的评论信息

    `Get /volume/:vid/comment`

    请求参数

    | 参数        | 类型    |  描述    |
    | --------   | -----:  | :----:  |
    | offset     | number  |  当前页数 |
    | pagesize   | number  |  单页数目 |


     返回参数

    | 参数        | 类型    |  描述    |
    | --------   | -----:  | :----:  |
    | time       | number  |  评论时间 |
    | text       | string |  评论内容  |
    | id         | number  |  评论id  |
    | subcomment | array   |  子评论信息|
    |   user      | object  | 评论者信息 |
   

    user信息
    | 参数        | 类型    |  描述    |
    | --------   | -----:  | :----:  |
    | name       | srting  |  用户名  |
    |  avatar    | string |  用户头像  |
    | id         | number  |  用户id  |

    subcomment信息
    | 参数        | 类型    |  描述    |
    | time       | number  | 评论时间  |
    | text       | string  |  评论内容 |
    | id         | number  |  评论id   |
    | fatheruser | array   | 子评论信息 |
    |   user     | object  | 评论者信息 |
   
    
  




11. Create comment

    添加评论

    `POST /volume/:vid/comment`

    请求参数

    | 参数        | 类型    |  描述    |
    | --------   | -----:  | :----:  |
    | replyid    | number  |  可选若没有直接评论到谱册上 |
    | text       | String  |  评论内容 |



12. delecte comment

    删除评论

    `DELETE /comment/:cid `

    删除子评论
    `DELETE /subcomment/:cid `
<!-- ### collection（收藏的谱册）

1. List volumes in one's collection

    查看某个用户收藏的所有谱册（不传参数返回自己的收藏）

    ` GET   /collection/user`

    ` GET   /collection/user/:uid`

2. Add a volume to collection （需验证）

    收藏某个谱册

    ` POST   /collection/volume/:vid`

3. Delete a volume from a collection （需验证）

    取消收藏某个谱册

    ` DELETE  /collection/volume/:vid` -->





### search （搜索）

1.  Search volumes

    根据post请求中的过滤参数，返回符合的谱册信息

    `POST  /volume/search`