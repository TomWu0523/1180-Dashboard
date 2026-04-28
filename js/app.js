const provinceData = [
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
];

const users = [
  { name: "上海交通大学医学院附属瑞金医院", province: "上海", value: 6 },
  { name: "四川大学华西医院", province: "四川", value: 5 },
  { name: "浙江大学医学院附属邵逸夫医院", province: "浙江", value: 5 },
  { name: "南京鼓楼医院", province: "江苏", value: 4 },
  { name: "中山大学附属第一医院", province: "广东", value: 4 },
  { name: "华中科技大学同济医学院附属协和医院", province: "湖北", value: 3 },
  { name: "中南大学湘雅医院", province: "湖南", value: 3 },
  { name: "重庆医科大学附属第一医院", province: "重庆", value: 2 }
];

const partners = [
  { name: "华东洁定医疗系统服务商", province: "沪苏浙", value: 21 },
  { name: "南区手术室解决方案伙伴", province: "粤桂琼", value: 17 },
  { name: "西南医院项目联盟", province: "川渝云贵", value: 14 },
  { name: "华中临床工程渠道", province: "鄂湘赣", value: 12 },
  { name: "福建精密设备有限公司", province: "福建", value: 7 },
  { name: "安徽智慧手术室伙伴", province: "安徽", value: 6 }
];

const updates = [
  { date: "04-18", status: "装机", text: "上海瑞金医院北部院区完成 1180 Magnus 交付 2 台" },
  { date: "04-10", status: "签约", text: "浙江大学医学院附属邵逸夫医院新增复合手术室项目" },
  { date: "04-05", status: "装机", text: "中山大学附属第一医院南沙院区完成验收" },
  { date: "04-01", status: "签约", text: "武汉协和医院车谷院区确认 1180 Magnus 配置方案" },
  { date: "03-29", status: "装机", text: "南京鼓楼医院江北院区新增 1 台" },
  { date: "03-22", status: "装机", text: "四川大学华西医院天府院区完成首间 OR table 安装" }
];

const monthlyTrend = [
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
];

const projectStorageKey = "getinge-1180-projects-v1";
const projectFields = [
  "partNumber",
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

function renderKpis() {
  const totalUnits = provinceData.reduce((sum, item) => sum + item.value, 0);
  const quarterUnits = updates.length + 12;

  document.querySelector("#totalUnits").textContent = formatNumber.format(totalUnits);
  document.querySelector("#coveredProvinces").textContent = provinceData.length;
  document.querySelector("#quarterUnits").textContent = quarterUnits;
  document.querySelector("#partnerCount").textContent = partners.length;
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
  const chart = echarts.init(document.querySelector("#installTrend"));
  const trendLine = monthlyTrend.map((item, index, source) => {
    const windowItems = source.slice(Math.max(0, index - 2), index + 1);
    const average = windowItems.reduce((sum, current) => sum + current.installed, 0) / windowItems.length;
    return Number(average.toFixed(1));
  });

  const buildOption = () => ({
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
      minInterval: 20,
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
  });

  chart.setOption(buildOption());
  window.addEventListener("resize", () => chart.resize());
}

function latestScatterData() {
  return provinceData.map((item) => ({
    name: item.latestSite,
    value: [...item.coord, item.value],
    province: item.name,
    latestDate: item.latestDate
  }));
}

function getStoredProjects() {
  try {
    return JSON.parse(localStorage.getItem(projectStorageKey)) || [];
  } catch {
    return [];
  }
}

function setStoredProjects(projects) {
  localStorage.setItem(projectStorageKey, JSON.stringify(projects));
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
    document.querySelector(`#${field}`).value = project[field] || "";
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
        暂无匹配项目。保存新项目后，可按 SN、医院、PN、渠道、销售或省份搜索。
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
          SN：${project.serialNumber || "-"}<br/>
          PN：${project.partNumber || "-"}<br/>
          渠道：${project.channelName || "-"} ｜ 销售：${project.salesName || "-"}
        </span>
      </button>
    `)
    .join("");
}

function populateProvinceOptions() {
  const provinceNames = [
    "上海市", "浙江省", "江苏省", "广东省", "四川省", "湖北省", "湖南省", "重庆市", "福建省", "安徽省",
    "广西壮族自治区", "云南省", "贵州省", "江西省", "海南省", "北京市", "天津市", "河北省", "山西省",
    "内蒙古自治区", "辽宁省", "吉林省", "黑龙江省", "山东省", "河南省", "西藏自治区", "陕西省", "甘肃省",
    "青海省", "宁夏回族自治区", "新疆维吾尔自治区"
  ];
  const select = document.querySelector("#installProvince");

  select.innerHTML = `<option value="">请选择省份</option>${provinceNames
    .map((province) => `<option value="${province}">${province}</option>`)
    .join("")}`;
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

async function renderMap() {
  const chart = echarts.init(document.querySelector("#chinaMap"));
  const chinaGeo = await fetch("assets/china.json").then((response) => response.json());
  echarts.registerMap("china", chinaGeo);

  const buildOption = () => {
    const compact = window.innerWidth < 900;

    return {
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
    };
  };

  chart.setOption(buildOption());

  window.addEventListener("resize", () => {
    chart.resize();
    chart.setOption(buildOption());
  });
}

renderKpis();
renderRanking("#userRanking", users);
renderRanking("#partnerRanking", partners);
renderTrendChart();
renderTicker();
renderMap();
initializeProjectRegistry();
