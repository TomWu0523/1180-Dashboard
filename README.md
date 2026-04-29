# Getinge SW China Installed Base Dashboard

本目录是一个静态网页原型，用于展示 SW China installed base，并支持在 1180 Magnus OR Table、Tegris Dashboard 与 IC MIC Dashboard 之间切换。

## 本地运行

```bash
python3 -m http.server 8080
```

然后访问：

```text
http://localhost:8080
```

## 数据替换

当前测试数据写在 `js/app.js` 的 `dashboards` 配置中，每个产品看板包含：

- `provinceData`：各省总装机量、最新装机场地、日期和地图坐标
- `users`：用户排名
- `partners`：合作伙伴销售排名
- `updates`：底部滚动动态
- `monthlyTrend`：近 12 个月趋势
- `yearlyTrend`：近五年装机趋势
- `productModels`：项目录入中的产品型号选项
- `productLineOptions`：可选的二级产品线筛选项，例如 1180 下的 B0-B5、IC MIC 下的 S600 与 Novito

后续可以改成读取 CSV、Excel 或接口数据。
