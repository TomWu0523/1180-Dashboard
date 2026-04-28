const dashboards = {
  magnus1180: {
    title: "1180 Magnus OR Table 装机看板",
    rankingTitle: "1180 Magnus 用户排名",
    modalTitle: "1180 手术床项目录入与更新",
    totalUnitsLabel: "台 1180 Magnus",
    visual: {
      type: "image",
      src: "assets/1180-magnus-hybrid-column.png",
      alt: "1180 Magnus operating table system"
    },
    productModels: ["1180 Magnus OR Table"],
    productLineOptions: [
      { value: "all", label: "全部" },
      { value: "b0", label: "B0", ratio: 0.12 },
      { value: "b1", label: "B1", ratio: 0.16 },
      { value: "b2", label: "B2", ratio: 0.18 },
      { value: "b3", label: "B3", ratio: 0.2 },
      { value: "b4", label: "B4", ratio: 0.18 },
      { value: "b5", label: "B5", ratio: 0.16 }
    ],
    provinceData: [
      { name: "上海市", value: 18, latestSite: "瑞金医院北部院区", latestDate: "2026-04-18", coord: [121.47, 31.23] },
      { name: "浙江省", value: 16, latestSite: "浙江大学医学院附属邵逸夫医院", latestDate: "2026-04-10", coord: [120.15, 30.28] },
      { name: "江苏省", value: 15, latestSite: "南京鼓楼医院江北院区", latestDate: "2026-03-29", coord: [118.76, 32.06] },
      { name: "广东省", value: 14, latestSite: "中山大学附属第一医院南沙院区", latestDate: "2026-04-05", coord: [113.27, 23.13] },
      { name: "四川省", value: 12, latestSite: "四川大学华西医院天府院区", latestDate: "2026-03-22", coord: [104.06, 30.67] },
      { name: "湖北省", value: 10, latestSite: "武汉协和医院车谷院区", latestDate: "2026-04-01", coord: [114.3, 30.59] },
      { name: "湖南省", value: 9, latestSite: "湘雅三医院", latestDate: "2026-02-28", coord: [112.98, 28.19] },
      { name: "重庆市", value: 8, latestSite: "重庆医科大学附属第一医院", latestDate: "2026-03-17", coord: [106.55, 29.56] },
      { name: "福建省", value: 7, latestSite: "福建医科大学附属协和医院", latestDate: "2026-02-18", coord: [119.3, 26.08] },
      { name: "安徽省", value: 6, latestSite: "中国科大附一院", latestDate: "2026-01-25", coord: [117.28, 31.86] },
      { name: "广西壮族自治区", value: 5, latestSite: "广西医科大学第一附属医院", latestDate: "2026-01-18", coord: [108.32, 22.82] },
      { name: "云南省", value: 4, latestSite: "昆明医科大学第一附属医院", latestDate: "2025-12-19", coord: [102.71, 25.04] },
      { name: "贵州省", value: 3, latestSite: "贵州省人民医院", latestDate: "2025-12-05", coord: [106.71, 26.58] },
      { name: "江西省", value: 3, latestSite: "南昌大学第一附属医院", latestDate: "2025-11-22", coord: [115.86, 28.68] },
      { name: "海南省", value: 2, latestSite: "海南省人民医院", latestDate: "2025-11-08", coord: [110.35, 20.02] }
    ],
    users: [
      { name: "上海交通大学医学院附属瑞金医院", province: "上海", value: 6 },
      { name: "四川大学华西医院", province: "四川", value: 5 },
      { name: "浙江大学医学院附属邵逸夫医院", province: "浙江", value: 5 },
      { name: "南京鼓楼医院", province: "江苏", value: 4 },
      { name: "中山大学附属第一医院", province: "广东", value: 4 },
      { name: "华中科技大学同济医学院附属协和医院", province: "湖北", value: 3 },
      { name: "中南大学湘雅医院", province: "湖南", value: 3 },
      { name: "重庆医科大学附属第一医院", province: "重庆", value: 2 }
    ],
    partners: [
      { name: "华东洁定医疗系统服务商", province: "沪苏浙", value: 21 },
      { name: "南区手术室解决方案伙伴", province: "粤桂琼", value: 17 },
      { name: "西南医院项目联盟", province: "川渝云贵", value: 14 },
      { name: "华中临床工程渠道", province: "鄂湘赣", value: 12 },
      { name: "福建精密设备有限公司", province: "福建", value: 7 },
      { name: "安徽智慧手术室伙伴", province: "安徽", value: 6 }
    ],
    updates: [
      { date: "04-18", status: "装机", text: "上海瑞金医院北部院区完成 1180 Magnus 交付 2 台" },
      { date: "04-10", status: "签约", text: "浙江大学医学院附属邵逸夫医院新增复合手术室项目" },
      { date: "04-05", status: "装机", text: "中山大学附属第一医院南沙院区完成验收" },
      { date: "04-01", status: "签约", text: "武汉协和医院车谷院区确认 1180 Magnus 配置方案" },
      { date: "03-29", status: "装机", text: "南京鼓楼医院江北院区新增 1 台" },
      { date: "03-22", status: "装机", text: "四川大学华西医院天府院区完成首间 OR table 安装" }
    ],
    monthlyTrend: [
      { month: "2025-05", installed: 6 },
      { month: "2025-06", installed: 7 },
      { month: "2025-07", installed: 5 },
      { month: "2025-08", installed: 8 },
      { month: "2025-09", installed: 6 },
      { month: "2025-10", installed: 9 },
      { month: "2025-11", installed: 8 },
      { month: "2025-12", installed: 10 },
      { month: "2026-01", installed: 7 },
      { month: "2026-02", installed: 8 },
      { month: "2026-03", installed: 11 },
      { month: "2026-04", installed: 10 }
    ]
  },
  tegris: {
    title: "Tegris Dashboard 装机看板",
    rankingTitle: "Tegris 用户排名",
    modalTitle: "Tegris 一体化手术室项目录入与更新",
    totalUnitsLabel: "套 Tegris 系统",
    visual: {
      type: "image",
      src: "assets/tegris-int-or-1.png",
      alt: "Tegris integrated operating room system",
      tags: ["Tegris VOIP", "Tegris Classic", "TIGERS"]
    },
    productModels: ["Tegris VOIP", "Tegris Classic", "TIGERS"],
    provinceData: [
      { name: "上海市", value: 11, latestSite: "复旦大学附属中山医院", latestDate: "2026-04-16", coord: [121.47, 31.23] },
      { name: "广东省", value: 10, latestSite: "广东省人民医院手术中心", latestDate: "2026-04-12", coord: [113.27, 23.13] },
      { name: "浙江省", value: 9, latestSite: "浙江大学医学院附属第一医院总部一期", latestDate: "2026-04-02", coord: [120.15, 30.28] },
      { name: "江苏省", value: 8, latestSite: "苏州大学附属第一医院总院", latestDate: "2026-03-27", coord: [118.76, 32.06] },
      { name: "四川省", value: 7, latestSite: "四川省人民医院东院", latestDate: "2026-03-19", coord: [104.06, 30.67] },
      { name: "重庆市", value: 6, latestSite: "陆军军医大学第一附属医院", latestDate: "2026-03-08", coord: [106.55, 29.56] },
      { name: "湖北省", value: 6, latestSite: "武汉大学人民医院东院区", latestDate: "2026-02-26", coord: [114.3, 30.59] },
      { name: "湖南省", value: 5, latestSite: "湖南省人民医院马王堆院区", latestDate: "2026-02-18", coord: [112.98, 28.19] },
      { name: "福建省", value: 4, latestSite: "厦门大学附属心血管病医院", latestDate: "2026-01-30", coord: [119.3, 26.08] },
      { name: "安徽省", value: 4, latestSite: "安徽医科大学第一附属医院高新院区", latestDate: "2026-01-22", coord: [117.28, 31.86] },
      { name: "广西壮族自治区", value: 3, latestSite: "广西壮族自治区人民医院", latestDate: "2025-12-28", coord: [108.32, 22.82] },
      { name: "云南省", value: 3, latestSite: "云南省第一人民医院", latestDate: "2025-12-11", coord: [102.71, 25.04] },
      { name: "贵州省", value: 2, latestSite: "贵州医科大学附属医院", latestDate: "2025-11-27", coord: [106.71, 26.58] },
      { name: "江西省", value: 2, latestSite: "江西省人民医院红谷滩院区", latestDate: "2025-11-14", coord: [115.86, 28.68] },
      { name: "海南省", value: 1, latestSite: "海南医学院第一附属医院", latestDate: "2025-10-31", coord: [110.35, 20.02] }
    ],
    users: [
      { name: "复旦大学附属中山医院", province: "上海", value: 4 },
      { name: "广东省人民医院", province: "广东", value: 4 },
      { name: "浙江大学医学院附属第一医院", province: "浙江", value: 3 },
      { name: "苏州大学附属第一医院", province: "江苏", value: 3 },
      { name: "四川省人民医院", province: "四川", value: 3 },
      { name: "陆军军医大学第一附属医院", province: "重庆", value: 2 },
      { name: "武汉大学人民医院", province: "湖北", value: 2 },
      { name: "湖南省人民医院", province: "湖南", value: 2 }
    ],
    partners: [
      { name: "华东智慧手术室集成伙伴", province: "沪苏浙", value: 14 },
      { name: "南区数字 OR 解决方案伙伴", province: "粤桂琼", value: 12 },
      { name: "西南一体化手术室联盟", province: "川渝云贵", value: 10 },
      { name: "华中院内通讯渠道", province: "鄂湘赣", value: 8 },
      { name: "福建手术影像集成有限公司", province: "福建", value: 4 },
      { name: "安徽数字化手术室伙伴", province: "安徽", value: 4 }
    ],
    updates: [
      { date: "04-16", status: "装机", text: "复旦大学附属中山医院完成 Tegris Classic 手术间联调" },
      { date: "04-12", status: "签约", text: "广东省人民医院新增 Tegris VOIP 一体化通讯项目" },
      { date: "04-02", status: "装机", text: "浙江大学医学院附属第一医院总部一期 TIGERS 完成验收" },
      { date: "03-27", status: "签约", text: "苏州大学附属第一医院确认 Tegris Classic 扩容方案" },
      { date: "03-19", status: "装机", text: "四川省人民医院东院 Tegris VOIP 完成上线" },
      { date: "03-08", status: "装机", text: "陆军军医大学第一附属医院完成数字 OR 集成测试" }
    ],
    monthlyTrend: [
      { month: "2025-05", installed: 3 },
      { month: "2025-06", installed: 4 },
      { month: "2025-07", installed: 4 },
      { month: "2025-08", installed: 5 },
      { month: "2025-09", installed: 4 },
      { month: "2025-10", installed: 6 },
      { month: "2025-11", installed: 5 },
      { month: "2025-12", installed: 7 },
      { month: "2026-01", installed: 5 },
      { month: "2026-02", installed: 6 },
      { month: "2026-03", installed: 8 },
      { month: "2026-04", installed: 7 }
    ]
  },
  icMic: {
    title: "IC MIC Dashboard 装机看板",
    rankingTitle: "IC MIC 用户排名",
    modalTitle: "IC MIC 项目录入与更新",
    totalUnitsLabel: "台 IC MIC 设备",
    visual: {
      type: "image",
      src: "assets/ic-mic-dashboard.jpg",
      alt: "Getinge IC MIC washer disinfector"
    },
    productModels: ["S600", "Novito"],
    productLineOptions: [
      { value: "all", label: "全部 IC MIC" },
      { value: "s600", label: "S600" },
      { value: "novito", label: "Novito" }
    ],
    provinceData: [
      { name: "上海市", value: 24, latestSite: "上海交通大学医学院附属仁济医院", latestDate: "2026-04-20", coord: [121.47, 31.23] },
      { name: "浙江省", value: 21, latestSite: "浙江省人民医院朝晖院区", latestDate: "2026-04-14", coord: [120.15, 30.28] },
      { name: "江苏省", value: 19, latestSite: "江苏省人民医院浦口分院", latestDate: "2026-04-06", coord: [118.76, 32.06] },
      { name: "广东省", value: 17, latestSite: "南方医科大学南方医院", latestDate: "2026-03-30", coord: [113.27, 23.13] },
      { name: "四川省", value: 14, latestSite: "成都市第三人民医院", latestDate: "2026-03-24", coord: [104.06, 30.67] },
      { name: "湖北省", value: 12, latestSite: "湖北省妇幼保健院光谷院区", latestDate: "2026-03-13", coord: [114.3, 30.59] },
      { name: "湖南省", value: 11, latestSite: "湖南省肿瘤医院", latestDate: "2026-03-02", coord: [112.98, 28.19] },
      { name: "重庆市", value: 10, latestSite: "重庆大学附属肿瘤医院", latestDate: "2026-02-22", coord: [106.55, 29.56] },
      { name: "福建省", value: 8, latestSite: "福建省立医院金山院区", latestDate: "2026-02-08", coord: [119.3, 26.08] },
      { name: "安徽省", value: 7, latestSite: "安徽省立医院南区", latestDate: "2026-01-29", coord: [117.28, 31.86] },
      { name: "广西壮族自治区", value: 6, latestSite: "柳州市人民医院", latestDate: "2026-01-16", coord: [108.32, 22.82] },
      { name: "云南省", value: 5, latestSite: "昆明市延安医院", latestDate: "2025-12-27", coord: [102.71, 25.04] },
      { name: "贵州省", value: 4, latestSite: "贵阳市第一人民医院", latestDate: "2025-12-15", coord: [106.71, 26.58] },
      { name: "江西省", value: 4, latestSite: "南昌市第一医院", latestDate: "2025-11-29", coord: [115.86, 28.68] },
      { name: "海南省", value: 3, latestSite: "三亚中心医院", latestDate: "2025-11-10", coord: [110.35, 20.02] }
    ],
    users: [
      { name: "上海交通大学医学院附属仁济医院", province: "上海", value: 8 },
      { name: "浙江省人民医院", province: "浙江", value: 7 },
      { name: "江苏省人民医院", province: "江苏", value: 6 },
      { name: "南方医科大学南方医院", province: "广东", value: 6 },
      { name: "成都市第三人民医院", province: "四川", value: 5 },
      { name: "湖北省妇幼保健院", province: "湖北", value: 4 },
      { name: "湖南省肿瘤医院", province: "湖南", value: 4 },
      { name: "重庆大学附属肿瘤医院", province: "重庆", value: 3 }
    ],
    partners: [
      { name: "华东 CSSD 设备服务商", province: "沪苏浙", value: 33 },
      { name: "南区感染控制解决方案伙伴", province: "粤桂琼", value: 26 },
      { name: "西南消毒供应中心联盟", province: "川渝云贵", value: 23 },
      { name: "华中院感工程渠道", province: "鄂湘赣", value: 21 },
      { name: "福建消供设备有限公司", province: "福建", value: 8 },
      { name: "安徽洁净供应室伙伴", province: "安徽", value: 7 }
    ],
    updates: [
      { date: "04-20", status: "装机", text: "上海仁济医院新增 IC MIC 清洗消毒设备 3 台" },
      { date: "04-14", status: "签约", text: "浙江省人民医院确认 CSSD 扩容项目" },
      { date: "04-06", status: "装机", text: "江苏省人民医院浦口分院完成 MIC 设备验收" },
      { date: "03-30", status: "装机", text: "南方医科大学南方医院完成 IC 产线联调" },
      { date: "03-24", status: "签约", text: "成都市第三人民医院新增清洗消毒中心配置" },
      { date: "03-13", status: "装机", text: "湖北省妇幼保健院光谷院区完成交付" }
    ],
    monthlyTrend: [
      { month: "2025-05", installed: 8 },
      { month: "2025-06", installed: 9 },
      { month: "2025-07", installed: 8 },
      { month: "2025-08", installed: 11 },
      { month: "2025-09", installed: 9 },
      { month: "2025-10", installed: 12 },
      { month: "2025-11", installed: 10 },
      { month: "2025-12", installed: 13 },
      { month: "2026-01", installed: 10 },
      { month: "2026-02", installed: 11 },
      { month: "2026-03", installed: 15 },
      { month: "2026-04", installed: 13 }
    ]
  }
};

const provinceNames = [
  "上海市", "浙江省", "江苏省", "广东省", "四川省", "湖北省", "湖南省", "重庆市", "福建省", "安徽省",
  "广西壮族自治区", "云南省", "贵州省", "江西省", "海南省", "北京市", "天津市", "河北省", "山西省",
  "内蒙古自治区", "辽宁省", "吉林省", "黑龙江省", "山东省", "河南省", "西藏自治区", "陕西省", "甘肃省",
  "青海省", "宁夏回族自治区", "新疆维吾尔自治区"
];

let currentDashboardKey = "magnus1180";
let currentProductLineKey = "all";
let trendChart;
let mapChart;
let chinaGeoJson;

const projectFields = [
  "partNumber",
  "productModel",
  "serialNumber",
  "installProvince",
  "hospitalName",
  "channelName",
  "salesName",
  "orderDate",
  "installDate",
  "acceptanceDate",
  "warrantyExpireDate"
];

const formatNumber = new Intl.NumberFormat("zh-CN");

function currentDashboard() {
  return dashboards[currentDashboardKey];
}

function currentProductLine() {
  return currentDashboard().productLineOptions?.find((line) => line.value === currentProductLineKey);
}

function lineAdjustedValue(value, productLine) {
  if (productLine?.ratio) {
    return Math.max(1, Math.round(value * productLine.ratio));
  }

  if (productLine?.value === "s600") {
    return Math.max(1, Math.round(value * 0.62));
  }

  if (productLine?.value === "novito") {
    return Math.max(1, value - Math.max(1, Math.round(value * 0.62)));
  }

  return value;
}

function dashboardLinePrefix(dashboard) {
  return dashboard.title
    .replace(" Dashboard 装机看板", "")
    .replace(" 装机看板", "");
}

function currentDashboardData() {
  const dashboard = currentDashboard();
  const productLine = currentProductLine();

  if (!productLine || productLine.value === "all") {
    return dashboard;
  }

  const lineLabel = productLine.label;
  const linePrefix = dashboardLinePrefix(dashboard);

  return {
    ...dashboard,
    title: `${linePrefix} ${lineLabel} Dashboard 装机看板`,
    rankingTitle: `${linePrefix} ${lineLabel} 用户排名`,
    modalTitle: `${linePrefix} ${lineLabel} 项目录入与更新`,
    totalUnitsLabel: `台 ${lineLabel} 设备`,
    provinceData: dashboard.provinceData.map((item) => ({
      ...item,
      value: lineAdjustedValue(item.value, productLine),
      latestSite: `${item.latestSite} ${lineLabel} 项目`
    })),
    users: dashboard.users.map((item) => ({
      ...item,
      value: lineAdjustedValue(item.value, productLine)
    })),
    partners: dashboard.partners.map((item) => ({
      ...item,
      value: lineAdjustedValue(item.value, productLine)
    })),
    updates: dashboard.updates.map((item) => ({
      ...item,
      text: item.text.replace("IC MIC", lineLabel).replace("IC 产线", `${lineLabel} 产线`).replace("MIC 设备", `${lineLabel} 设备`)
    })),
    monthlyTrend: dashboard.monthlyTrend.map((item) => ({
      ...item,
      installed: lineAdjustedValue(item.installed, productLine)
    }))
  };
}

function projectStorageKey() {
  return `getinge-${currentDashboardKey}-projects-v1`;
}

function renderDashboardChrome() {
  const dashboard = currentDashboardData();
  document.title = `Getinge SW China ${dashboard.title}`;
  document.querySelector("#dashboardTitle").textContent = dashboard.title;
  document.querySelector("#userRankingTitle").textContent = dashboard.rankingTitle;
  document.querySelector("#projectModalTitle").textContent = dashboard.modalTitle;
  document.querySelector("#totalUnitsLabel").textContent = dashboard.totalUnitsLabel;
  document.querySelector("#productVisual").setAttribute("aria-label", dashboard.visual.alt);

  const visual = document.querySelector("#productVisual");
  if (dashboard.visual.type === "image") {
    visual.classList.remove("product-visual--system");
    visual.innerHTML = `<img src="${dashboard.visual.src}" alt="${dashboard.visual.alt}" />`;
  } else {
    visual.classList.add("product-visual--system");
    visual.innerHTML = `
      <div class="tegris-visual" aria-hidden="true">
        <span class="tegris-screen"></span>
        <span class="tegris-link"></span>
        <span class="tegris-console"></span>
        <div class="tegris-tags">
          ${dashboard.visual.tags.map((tag) => `<b>${tag}</b>`).join("")}
        </div>
      </div>
    `;
  }
}

function renderKpis() {
  const dashboard = currentDashboardData();
  const totalUnits = dashboard.provinceData.reduce((sum, item) => sum + item.value, 0);
  const quarterUnits = dashboard.updates.length + Math.round(totalUnits * 0.14);

  document.querySelector("#totalUnits").textContent = formatNumber.format(totalUnits);
  document.querySelector("#coveredProvinces").textContent = dashboard.provinceData.length;
  document.querySelector("#quarterUnits").textContent = quarterUnits;
  document.querySelector("#partnerCount").textContent = dashboard.partners.length;
}

function renderRanking(targetId, items) {
  const maxValue = Math.max(...items.map((item) => item.value));
  const target = document.querySelector(targetId);

  target.innerHTML = items
    .map((item, index) => {
      const width = Math.max(8, Math.round((item.value / maxValue) * 100));

      return `
        <article class="ranking-item">
          <span class="rank-no">${index + 1}</span>
          <div class="ranking-body">
            <div class="ranking-name-row">
              <span class="ranking-name" title="${item.name}">${item.name}</span>
              <span class="ranking-province">${item.province}</span>
            </div>
            <div class="bar-shell" aria-hidden="true">
              <div class="bar-fill" style="--bar-width: ${width}%"></div>
            </div>
          </div>
          <strong class="ranking-value">${item.value}</strong>
        </article>
      `;
    })
    .join("");
}

function renderTicker() {
  const track = document.querySelector("#newsTicker");
  const updates = currentDashboardData().updates;
  const items = [...updates, ...updates]
    .map(
      (item) => `
        <div class="ticker-item">
          <span class="ticker-time">${item.date}</span>
          <span class="ticker-status">${item.status}</span>
          <span>${item.text}</span>
        </div>
      `
    )
    .join("");

  track.innerHTML = items;
}

function renderTrendChart() {
  const monthlyTrend = currentDashboardData().monthlyTrend;
  const target = document.querySelector("#installTrend");
  trendChart = trendChart || echarts.init(target);
  const trendLine = monthlyTrend.map((item, index, source) => {
    const windowItems = source.slice(Math.max(0, index - 2), index + 1);
    const average = windowItems.reduce((sum, current) => sum + current.installed, 0) / windowItems.length;
    return Number(average.toFixed(1));
  });

  trendChart.setOption({
    grid: {
      top: 34,
      right: 10,
      bottom: 34,
      left: 30
    },
    tooltip: {
      trigger: "axis",
      borderWidth: 0,
      backgroundColor: "rgba(16, 32, 61, 0.94)",
      textStyle: { color: "#fff" },
      axisPointer: { type: "shadow" },
      formatter(items) {
        const year = items[0]?.axisValue || "";
        const lines = items.map((item) => `${item.marker}${item.seriesName}：${item.value} 台`);
        return `<strong>${year}</strong><br/>${lines.join("<br/>")}`;
      }
    },
    legend: {
      top: 0,
      right: 0,
      itemWidth: 10,
      itemHeight: 8,
      textStyle: {
        color: "#4f6080",
        fontSize: 11
      }
    },
    xAxis: {
      type: "category",
      data: monthlyTrend.map((item) => item.month.slice(5)),
      axisTick: { show: false },
      axisLine: { lineStyle: { color: "#d7e2e8" } },
      axisLabel: {
        color: "#4f6080",
        fontSize: 11,
        interval: 1
      }
    },
    yAxis: {
      type: "value",
      minInterval: 1,
      splitLine: { lineStyle: { color: "#e7eef4" } },
      axisLabel: {
        color: "#4f6080",
        fontSize: 11
      }
    },
    series: [
      {
        name: "月度新增",
        type: "bar",
        barWidth: 12,
        data: monthlyTrend.map((item) => item.installed),
        itemStyle: {
          color: "#4ba3c7",
          borderRadius: [4, 4, 0, 0]
        }
      },
      {
        name: "3月均线",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        data: trendLine,
        lineStyle: {
          width: 3,
          color: "#18274a"
        },
        itemStyle: {
          color: "#18274a",
          borderColor: "#ffffff",
          borderWidth: 2
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "rgba(24, 39, 74, 0.18)" },
              { offset: 1, color: "rgba(24, 39, 74, 0.02)" }
            ]
          }
        }
      }
    ]
  }, true);
}

function latestScatterData() {
  return currentDashboardData().provinceData.map((item) => ({
    name: item.latestSite,
    value: [...item.coord, item.value],
    province: item.name,
    latestDate: item.latestDate
  }));
}

function getStoredProjects() {
  try {
    return JSON.parse(localStorage.getItem(projectStorageKey())) || [];
  } catch {
    return [];
  }
}

function setStoredProjects(projects) {
  localStorage.setItem(projectStorageKey(), JSON.stringify(projects));
}

function defaultProductModel() {
  const dashboard = currentDashboard();
  if (currentDashboardKey === "icMic" && currentProductLineKey !== "all") {
    return currentProductLine()?.label || dashboard.productModels[0];
  }

  return dashboard.productModels[0];
}

function getProjectFormData() {
  const data = {};
  projectFields.forEach((field) => {
    data[field] = document.querySelector(`#${field}`).value.trim();
  });

  return data;
}

function setProjectFormData(project = {}) {
  document.querySelector("#projectId").value = project.id || "";
  projectFields.forEach((field) => {
    const fieldElement = document.querySelector(`#${field}`);
    fieldElement.value = project[field] || (field === "productModel" ? defaultProductModel() : "");
  });

  document.querySelector("#formStatus").textContent = project.id
    ? `正在更新：${project.hospitalName || project.serialNumber}`
    : "新建项目";
}

function projectMatchesSearch(project, keyword) {
  if (!keyword) {
    return true;
  }

  const haystack = projectFields.map((field) => project[field]).join(" ").toLowerCase();
  return haystack.includes(keyword.toLowerCase());
}

function renderProjectResults() {
  const projects = getStoredProjects().sort((a, b) => (b.updatedAt || "").localeCompare(a.updatedAt || ""));
  const keyword = document.querySelector("#projectSearchInput").value.trim();
  const activeId = document.querySelector("#projectId").value;
  const filtered = projects.filter((project) => projectMatchesSearch(project, keyword));
  const results = document.querySelector("#projectResults");

  document.querySelector("#projectSummary").textContent =
    `已录入 ${projects.length} 个项目${keyword ? `，匹配 ${filtered.length} 个` : ""}`;

  if (!filtered.length) {
    results.innerHTML = `
      <div class="project-result__meta">
        暂无匹配项目。保存新项目后，可按 SN、医院、PN、型号、渠道、销售或省份搜索。
      </div>
    `;
    return;
  }

  results.innerHTML = filtered
    .map((project) => `
      <button class="project-result ${project.id === activeId ? "active" : ""}" type="button" data-project-id="${project.id}">
        <span class="project-result__top">
          <strong class="project-result__hospital">${project.hospitalName || "未命名医院"}</strong>
          <span class="project-result__province">${project.installProvince || "未填省份"}</span>
        </span>
        <span class="project-result__meta">
          型号：${project.productModel || "-"}<br/>
          SN：${project.serialNumber || "-"}<br/>
          PN：${project.partNumber || "-"}<br/>
          渠道：${project.channelName || "-"} ｜ 销售：${project.salesName || "-"}
        </span>
      </button>
    `)
    .join("");
}

function populateProvinceOptions() {
  const select = document.querySelector("#installProvince");

  select.innerHTML = `<option value="">请选择省份</option>${provinceNames
    .map((province) => `<option value="${province}">${province}</option>`)
    .join("")}`;
}

function populateProductModelOptions() {
  const select = document.querySelector("#productModel");
  select.innerHTML = currentDashboard().productModels
    .map((model) => `<option value="${model}">${model}</option>`)
    .join("");
}

function renderProductLineSwitcher() {
  const control = document.querySelector("#productLineControl");
  const switcher = document.querySelector("#productLineSwitcher");
  const options = currentDashboard().productLineOptions || [];

  if (!options.length) {
    control.hidden = true;
    currentProductLineKey = "all";
    switcher.innerHTML = "";
    return;
  }

  control.hidden = false;
  if (!options.some((option) => option.value === currentProductLineKey)) {
    currentProductLineKey = options[0].value;
  }

  switcher.innerHTML = options
    .map((option) => `<option value="${option.value}">${option.label}</option>`)
    .join("");
  switcher.value = currentProductLineKey;
}

function showProjectModal() {
  const modal = document.querySelector("#projectModal");
  modal.hidden = false;
  document.body.classList.add("modal-open");
  renderProjectResults();
  setTimeout(() => document.querySelector("#projectSearchInput").focus(), 0);
}

function hideProjectModal() {
  document.querySelector("#projectModal").hidden = true;
  document.body.classList.remove("modal-open");
}

window.showProjectModal = showProjectModal;
window.hideProjectModal = hideProjectModal;

function saveProject(event) {
  event.preventDefault();

  const projects = getStoredProjects();
  const existingId = document.querySelector("#projectId").value;
  const data = getProjectFormData();
  const now = new Date().toISOString();
  const duplicate = projects.find(
    (project) => project.serialNumber === data.serialNumber && project.id !== existingId
  );

  if (duplicate) {
    document.querySelector("#formStatus").textContent = `SN 已存在：${duplicate.hospitalName || duplicate.serialNumber}`;
    return;
  }

  if (existingId) {
    const index = projects.findIndex((project) => project.id === existingId);
    if (index >= 0) {
      projects[index] = { ...projects[index], ...data, updatedAt: now };
      setStoredProjects(projects);
      setProjectFormData(projects[index]);
    }
  } else {
    const project = {
      id: `project-${Date.now()}`,
      dashboard: currentDashboardKey,
      ...data,
      createdAt: now,
      updatedAt: now
    };
    projects.push(project);
    setStoredProjects(projects);
    setProjectFormData(project);
  }

  renderProjectResults();
  document.querySelector("#formStatus").textContent = "项目已保存，可继续搜索或更新";
}

function initializeProjectRegistry() {
  populateProvinceOptions();
  populateProductModelOptions();

  document.querySelector("#openProjectModal").addEventListener("click", showProjectModal);
  document.querySelector("#closeProjectModal").addEventListener("click", hideProjectModal);
  document.querySelector("[data-close-project-modal]").addEventListener("click", hideProjectModal);
  document.querySelector("#projectSearchInput").addEventListener("input", renderProjectResults);
  document.querySelector("#projectForm").addEventListener("submit", saveProject);
  document.querySelector("#newProjectButton").addEventListener("click", () => {
    setProjectFormData();
    renderProjectResults();
    document.querySelector("#partNumber").focus();
  });
  document.querySelector("#projectResults").addEventListener("click", (event) => {
    const result = event.target.closest("[data-project-id]");
    if (!result) {
      return;
    }

    const project = getStoredProjects().find((item) => item.id === result.dataset.projectId);
    if (project) {
      setProjectFormData(project);
      renderProjectResults();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !document.querySelector("#projectModal").hidden) {
      hideProjectModal();
    }
  });
}

async function ensureChinaMap() {
  if (!chinaGeoJson) {
    chinaGeoJson = await fetch("assets/china.json").then((response) => response.json());
    echarts.registerMap("china", chinaGeoJson);
  }
}

async function renderMap() {
  await ensureChinaMap();
  const provinceData = currentDashboardData().provinceData;
  mapChart = mapChart || echarts.init(document.querySelector("#chinaMap"));
  const compact = window.innerWidth < 900;

  mapChart.setOption({
    color: ["#4ba3c7", "#c99b4b"],
    tooltip: {
      trigger: "item",
      borderWidth: 0,
      backgroundColor: "rgba(16, 32, 61, 0.94)",
      textStyle: { color: "#fff" },
      formatter(params) {
        if (params.seriesType === "scatter") {
          return `
            <strong>${params.name}</strong><br/>
            省份：${params.data.province}<br/>
            最新日期：${params.data.latestDate}<br/>
            省内总装机：${params.value[2]} 台
          `;
        }

        const province = provinceData.find((item) => item.name === params.name);
        if (!province) {
          return `${params.name}<br/>暂无装机记录`;
        }

        return `
          <strong>${params.name}</strong><br/>
          总装机量：${province.value} 台<br/>
          最新场地：${province.latestSite}<br/>
          最新日期：${province.latestDate}
        `;
      }
    },
    visualMap: {
      min: 0,
      max: Math.max(...provinceData.map((item) => item.value)),
      show: false,
      inRange: {
        color: ["#edf3f7", "#a9cedb", "#4ba3c7", "#18274a"]
      }
    },
    geo: {
      map: "china",
      roam: true,
      zoom: 1.12,
      top: 24,
      bottom: 10,
      itemStyle: {
        areaColor: "#edf3f7",
        borderColor: "#ffffff",
        borderWidth: 1.1
      },
      emphasis: {
        label: { color: "#18274a", fontWeight: 700 },
        itemStyle: { areaColor: "#b8d6df" }
      }
    },
    series: [
      {
        name: "总装机量",
        type: "map",
        map: "china",
        geoIndex: 0,
        data: provinceData.map(({ name, value }) => ({ name, value }))
      },
      {
        name: "最新装机场地",
        type: "scatter",
        coordinateSystem: "geo",
        symbolSize(value) {
          return compact ? Math.max(8, Math.min(15, value[2] + 2)) : Math.max(9, Math.min(22, value[2] + 5));
        },
        itemStyle: {
          color: "#c99b4b",
          borderColor: "#ffffff",
          borderWidth: 2,
          shadowBlur: 12,
          shadowColor: "rgba(201, 155, 75, 0.45)"
        },
        label: {
          show: !compact,
          formatter: "{b}",
          color: "#10203d",
          fontSize: 10,
          position: "right",
          backgroundColor: "rgba(255, 255, 255, 0.78)",
          padding: [3, 5],
          borderRadius: 4
        },
        labelLayout: {
          hideOverlap: true,
          moveOverlap: "shiftY"
        },
        emphasis: {
          scale: 1.12
        },
        data: latestScatterData()
      }
    ]
  }, true);
}

function renderDashboard() {
  renderProductLineSwitcher();
  const dashboard = currentDashboardData();
  renderDashboardChrome();
  renderKpis();
  renderRanking("#userRanking", dashboard.users);
  renderRanking("#partnerRanking", dashboard.partners);
  renderTrendChart();
  renderTicker();
  renderMap();
  populateProductModelOptions();
  setProjectFormData();
  renderProjectResults();
}

function initializeProductSwitcher() {
  const switcher = document.querySelector("#productSwitcher");
  switcher.addEventListener("change", (event) => {
    currentDashboardKey = event.target.value;
    currentProductLineKey = "all";
    renderDashboard();
  });

  document.querySelector("#productLineSwitcher").addEventListener("change", (event) => {
    currentProductLineKey = event.target.value;
    renderDashboard();
  });
}

window.addEventListener("resize", () => {
  trendChart?.resize();
  mapChart?.resize();
  renderMap();
});

initializeProjectRegistry();
initializeProductSwitcher();
renderDashboard();
