#!/bin/bash

# 注意： 发布交易要修改为自己项目对应的仓库配置

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo "start .........."
echo DIR = $DIR

cd $DIR

# 生成静态文件
yarn docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.06linux.com' > CNAME

# 确保脚本抛出遇到的错误
set -e

git init
git add -A
git commit -m 'deploy'

# 发布到 gh-pages 分支 
# 需要在github 中配置密钥，参考：个人账号--settings--SSH and GPG keys
git push -f git@github.com:06linux/06linux_wiki.git master:gh-pages

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 把上面的 <USERNAME> 换成你自己的 Github 用户名，<REPO> 换成仓库名，比如我这里就是：
# git push -f git@github.com:wtyqer/blog.git master:gh-pages

cd $DIR

