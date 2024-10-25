FROM anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/node:16.17.1-nslt-8.6
# 拉取node镜像
WORKDIR /app
# 指定单曲工作目录
COPY . .
USER root
# 把容器外的内容复制进容器
RUN npm config set registry https://registry.npmmirror.com/
RUN npm install -g http-server
# npm换源 & 安装http-server

EXPOSE 8080
# 声明当前容器要访问的网络端口，比如这里起服务会用到 8080

CMD ["http-server", "-p", "8080"]
# 容器启动的时候执行的命令


# 我们在cmd里面执行一下下面的这个命令吧：
# docker build -t aaa:ccc .
# aaa是镜像名，ccc是镜像的标签