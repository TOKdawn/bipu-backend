# EGG 搭建曲谱库后台

## 数据库
* 数据库: postgrespl

* ORM框架(数据库映射): sequelize


### 生成迁移文件

	sudo npm run migrate:new  

### 当一个model没有主建的时候会默认创建一个id字段作为主键

```javascript 
  async getUserCollection(uid, offset, pagesize, owned) {
        // this.Volume.belongsTo(this.CollectionVolume, { foreignKey: 'vid', sourceKey: 'id' });
        const data = await this.Volume.findAll({
            // attributes: ['vid', 'uid'],
            where: {
                id: {
                    $in: this.app.Sequelize.literal(
                        '(SELECT vid FROM "collectionVolume" WHERE uid = ' + uid + ')'
                    )
                }
            }
        });
        console.log(data)
        return data;
    }
```

```javascript 
    async getUserCollection(uid, offset, pagesize, owned) {
        this.CollectionVolume.hasMany(this.Volume, { foreignKey: 'id', sourceKey: 'vid' });
        const data = await this.CollectionVolume.findAll({
            include: [{
                model: this.Volume,
                all: true
            }],
            where: {
                uid
            }
        })
        console.log(data)
        return data;
    }
```