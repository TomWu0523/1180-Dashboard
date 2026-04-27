# Getinge SW China 1180 Magnus OR Table Dashboard

本目录是一个静态网页原型，用于展示 SW China 1180 Magnus OR table installed base。

## 本地运行

```bash
python3 -m http.server 8080
```

然后访问：

```text
http://localhost:8080
```

## 数据替换

当前数据写在 `js/app.js` 中：

- `provinceData`：各省总装机量、最新装机场地、日期和地图坐标
- `users`：1180 Magnus 用户排名
- `partners`：合作伙伴销售排名
- `updates`：底部滚动动态

后续可以改成读取 CSV、Excel 或接口数据。
