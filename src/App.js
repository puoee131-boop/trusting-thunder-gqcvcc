import React from "react";
import {
  Layout,
  Menu,
  Card,
  Row,
  Col,
  Statistic,
  Badge,
  Tag,
  Button,
  Dropdown,
  Space,
  Typography,
  Table,
  Progress,
  ConfigProvider,
  Avatar,
} from "antd";
import {
  HomeOutlined,
  DesktopOutlined,
  FileTextOutlined,
  ToolOutlined,
  BarChartOutlined,
  SettingOutlined,
  BellOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  DownOutlined,
  ReloadOutlined,
  RightOutlined,
  ScanOutlined,
  PlusOutlined,
  EyeOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  FileExcelOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

// 顶部统计卡片数据
const topStats = [
  {
    title: "设备总数",
    value: 3,
    suffix: "台",
    desc: "全部空压机",
    color: "#1a1a2e",
  },
  { title: "运行中", value: 2, suffix: "台", desc: "66.7%", color: "#22c55e" },
  { title: "告警中", value: 1, suffix: "台", desc: "33.3%", color: "#ef4444" },
  {
    title: "今日工单",
    value: 8,
    suffix: "单",
    desc: "较昨日 +25%",
    color: "#1a1a2e",
  },
  {
    title: "待处理工单",
    value: 5,
    suffix: "单",
    desc: "较昨日 -16.7%",
    color: "#1a1a2e",
  },
  {
    title: "工单闭环率",
    value: 100,
    suffix: "%",
    desc: "今日",
    color: "#1677ff",
  },
];

// 设备卡片数据
const devices = [
  {
    title: "空压机 #1（一用）",
    status: "运行中",
    statusColor: "success",
    model: "GA75+",
    code: "AC-001",
    pressure: "0.72 MPa",
    temp: "68 °C",
    runtime: "1280 h",
    health: 92,
    healthColor: "#22c55e",
  },
  {
    title: "空压机 #2（备用）",
    status: "运行中",
    statusColor: "success",
    model: "GA75+",
    code: "AC-002",
    pressure: "0.70 MPa",
    temp: "65 °C",
    runtime: "980 h",
    health: 88,
    healthColor: "#22c55e",
  },
  {
    title: "空压机 #3（检修中）",
    status: "告警中",
    statusColor: "error",
    model: "GA75+",
    code: "AC-003",
    pressure: "-",
    temp: "-",
    runtime: "-",
    health: 45,
    healthColor: "#ef4444",
  },
];

// 告警数据
const alerts = [
  {
    title: "空压机 #3 高温告警",
    desc: "排气温度超过阈值 95°C",
    time: "10:25:30",
    level: "高危",
    color: "red",
    icon: "🔥",
  },
  {
    title: "空压机 #3 油压偏低",
    desc: "油压低于阈值 0.15MPa",
    time: "10:20:15",
    level: "中危",
    color: "orange",
    icon: "⚠️",
  },
  {
    title: "空压机 #3 振动异常",
    desc: "振动值超过阈值 8.5mm/s",
    time: "10:18:45",
    level: "中危",
    color: "orange",
    icon: "📳",
  },
  {
    title: "空压机 #1 保养提醒",
    desc: "距离下次保养还有 120 小时",
    time: "09:30:00",
    level: "提醒",
    color: "blue",
    icon: "🔔",
  },
];

// 工单分布数据
const workOrderData = [
  { name: "待接单", value: 5, percent: "20.8%", color: "#1677ff" },
  { name: "处理中", value: 8, percent: "33.3%", color: "#f59e0b" },
  { name: "待验收", value: 3, percent: "12.5%", color: "#8b5cf6" },
  { name: "已完成", value: 8, percent: "33.3%", color: "#22c55e" },
];

// 最新工单
const latestOrders = [
  {
    title: "空压机 #3 高温故障",
    code: "WO-20240520-001",
    status: "处理中",
    statusColor: "processing",
    icon: "🔧",
  },
  {
    title: "空压机 #1 定期保养",
    code: "WO-20240519-008",
    status: "已完成",
    statusColor: "success",
    icon: "✅",
  },
  {
    title: "空压机 #2 滤芯更换",
    code: "WO-20240519-007",
    status: "已完成",
    statusColor: "success",
    icon: "✅",
  },
  {
    title: "空压机 #3 油压异常",
    code: "WO-20240520-002",
    status: "待接单",
    statusColor: "default",
    icon: "🔧",
  },
];

// 快捷操作
const quickActions = [
  {
    title: "扫码报修",
    desc: "微信扫码快速报修",
    icon: <ScanOutlined />,
    color: "#22c55e",
  },
  {
    title: "创建工单",
    desc: "手动创建维修工单",
    icon: <PlusOutlined />,
    color: "#1677ff",
  },
  {
    title: "设备巡检",
    desc: "执行设备巡检任务",
    icon: <EyeOutlined />,
    color: "#8b5cf6",
  },
  {
    title: "保养计划",
    desc: "查看保养计划列表",
    icon: <CalendarOutlined />,
    color: "#f59e0b",
  },
  {
    title: "备件申请",
    desc: "申请备件物料",
    icon: <AppstoreOutlined />,
    color: "#ec4899",
  },
  {
    title: "报表中心",
    desc: "查看各类报表",
    icon: <FileExcelOutlined />,
    color: "#14b8a6",
  },
];

// 侧边栏菜单
const menuItems = [
  {
    key: "home",
    icon: <HomeOutlined />,
    label: "首页",
  },
  {
    key: "monitor",
    icon: <DesktopOutlined />,
    label: "设备监控",
    children: [
      { key: "monitor-1", label: "设备总览" },
      { key: "monitor-2", label: "设备列表" },
      { key: "monitor-3", label: "实时监测" },
      { key: "monitor-4", label: "告警管理" },
    ],
  },
  {
    key: "workorder",
    icon: <FileTextOutlined />,
    label: "工单管理",
    children: [
      { key: "wo-1", label: "工单中心" },
      { key: "wo-2", label: "我的工单" },
      { key: "wo-3", label: "工单统计" },
    ],
  },
  {
    key: "maintenance",
    icon: <ToolOutlined />,
    label: "维护管理",
    children: [
      { key: "maint-1", label: "保养计划" },
      { key: "maint-2", label: "维护记录" },
      { key: "maint-3", label: "备件管理" },
    ],
  },
  {
    key: "analysis",
    icon: <BarChartOutlined />,
    label: "数据分析",
    children: [
      { key: "ana-1", label: "健康分析" },
      { key: "ana-2", label: "故障分析" },
      { key: "ana-3", label: "报表中心" },
    ],
  },
  {
    key: "system",
    icon: <SettingOutlined />,
    label: "系统管理",
    children: [
      { key: "sys-1", label: "设备档案" },
      { key: "sys-2", label: "人员管理" },
      { key: "sys-3", label: "策略配置" },
      { key: "sys-4", label: "系统设置" },
    ],
  },
];

// 改进的 SVG 环形图组件 - 更大更饱满
function DonutChart() {
  const total = workOrderData.reduce((sum, d) => sum + d.value, 0);
  let currentAngle = 0;
  const size = 160;
  const center = size / 2;
  const radius = 65;
  const innerRadius = 42;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ flexShrink: 0 }}
      >
        {workOrderData.map((item, index) => {
          const angle = (item.value / total) * 360;
          const startAngle = currentAngle;
          currentAngle += angle;
          const endAngle = currentAngle;

          const startRad = ((startAngle - 90) * Math.PI) / 180;
          const endRad = ((endAngle - 90) * Math.PI) / 180;

          const x1 = center + radius * Math.cos(startRad);
          const y1 = center + radius * Math.sin(startRad);
          const x2 = center + radius * Math.cos(endRad);
          const y2 = center + radius * Math.sin(endRad);

          const x3 = center + innerRadius * Math.cos(endRad);
          const y3 = center + innerRadius * Math.sin(endRad);
          const x4 = center + innerRadius * Math.cos(startRad);
          const y4 = center + innerRadius * Math.sin(startRad);

          const largeArc = angle > 180 ? 1 : 0;

          return (
            <path
              key={index}
              d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4} Z`}
              fill={item.color}
              stroke="#fff"
              strokeWidth="3"
            />
          );
        })}
        <text
          x={center}
          y={center - 5}
          textAnchor="middle"
          fontSize="11"
          fill="#94a3b8"
        >
          总计
        </text>
        <text
          x={center}
          y={center + 14}
          textAnchor="middle"
          fontSize="22"
          fontWeight="bold"
          fill="#1e293b"
        >
          {total}
        </text>
        <text
          x={center}
          y={center + 28}
          textAnchor="middle"
          fontSize="11"
          fill="#94a3b8"
        >
          单
        </text>
      </svg>
      <div
        style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}
      >
        {workOrderData.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 13,
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: item.color,
                flexShrink: 0,
              }}
            />
            <span style={{ width: 55, color: "#475569", fontWeight: 500 }}>
              {item.name}
            </span>
            <span
              style={{
                width: 25,
                fontWeight: 700,
                color: "#1e293b",
                textAlign: "right",
              }}
            >
              {item.value}
            </span>
            <span style={{ color: "#94a3b8", fontSize: 12 }}>
              ({item.percent})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 改进的折线图组件 - 更大更饱满
function LineChart() {
  const data = [
    { day: "05-14", v1: 85, v2: 72, v3: 55 },
    { day: "05-15", v1: 83, v2: 70, v3: 52 },
    { day: "05-16", v1: 86, v2: 68, v3: 48 },
    { day: "05-17", v1: 84, v2: 65, v3: 45 },
    { day: "05-18", v1: 87, v2: 63, v3: 42 },
    { day: "05-19", v1: 85, v2: 60, v3: 38 },
    { day: "05-20", v1: 82, v2: 58, v3: 35 },
  ];

  const width = 500;
  const height = 200;
  const padding = { top: 30, right: 20, bottom: 30, left: 40 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const maxVal = 100;
  const xScale = chartWidth / (data.length - 1);
  const yScale = chartHeight / maxVal;

  const getPoints = (key) =>
    data
      .map((d, i) => {
        const x = padding.left + i * xScale;
        const y = padding.top + chartHeight - d[key] * yScale;
        return `${x},${y}`;
      })
      .join(" ");

  // 生成平滑曲线点
  const getSmoothPoints = (key) => {
    return data.map((d, i) => {
      const x = padding.left + i * xScale;
      const y = padding.top + chartHeight - d[key] * yScale;
      return { x, y };
    });
  };

  const smoothLine = (points) => {
    if (points.length < 2) return "";
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpx1 = prev.x + (curr.x - prev.x) / 3;
      const cpy1 = prev.y;
      const cpx2 = curr.x - (curr.x - prev.x) / 3;
      const cpy2 = curr.y;
      d += ` C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${curr.x} ${curr.y}`;
    }
    return d;
  };

  const points1 = getSmoothPoints("v1");
  const points2 = getSmoothPoints("v2");
  const points3 = getSmoothPoints("v3");

  return (
    <div>
      <div style={{ display: "flex", gap: 20, marginBottom: 8, fontSize: 12 }}>
        <span>
          <span style={{ color: "#22c55e", marginRight: 6, fontWeight: 700 }}>
            ━━
          </span>
          空压机 #1
        </span>
        <span>
          <span style={{ color: "#1677ff", marginRight: 6, fontWeight: 700 }}>
            ━━
          </span>
          空压机 #2
        </span>
        <span>
          <span style={{ color: "#ef4444", marginRight: 6, fontWeight: 700 }}>
            ━━
          </span>
          空压机 #3
        </span>
      </div>
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        {/* 背景网格 */}
        {[0, 25, 50, 75, 100].map((val) => (
          <line
            key={val}
            x1={padding.left}
            y1={padding.top + chartHeight - val * yScale}
            x2={width - padding.right}
            y2={padding.top + chartHeight - val * yScale}
            stroke="#e2e8f0"
            strokeWidth="1"
            strokeDasharray={val === 0 ? "" : "4,4"}
          />
        ))}

        {/* 三条平滑曲线 */}
        <path
          d={smoothLine(points1)}
          fill="none"
          stroke="#22c55e"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d={smoothLine(points2)}
          fill="none"
          stroke="#1677ff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d={smoothLine(points3)}
          fill="none"
          stroke="#ef4444"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* 数据点 */}
        {points1.map((p, i) => (
          <circle
            key={`p1-${i}`}
            cx={p.x}
            cy={p.y}
            r="3"
            fill="#22c55e"
            stroke="#fff"
            strokeWidth="2"
          />
        ))}
        {points2.map((p, i) => (
          <circle
            key={`p2-${i}`}
            cx={p.x}
            cy={p.y}
            r="3"
            fill="#1677ff"
            stroke="#fff"
            strokeWidth="2"
          />
        ))}
        {points3.map((p, i) => (
          <circle
            key={`p3-${i}`}
            cx={p.x}
            cy={p.y}
            r="3"
            fill="#ef4444"
            stroke="#fff"
            strokeWidth="2"
          />
        ))}

        {/* X轴标签 */}
        {data.map((d, i) => (
          <text
            key={i}
            x={padding.left + i * xScale}
            y={height - 5}
            textAnchor="middle"
            fontSize="11"
            fill="#64748b"
          >
            {d.day}
          </text>
        ))}

        {/* Y轴标签 */}
        {[0, 25, 50, 75, 100].map((val) => (
          <text
            key={val}
            x={padding.left - 8}
            y={padding.top + chartHeight - val * yScale + 4}
            textAnchor="end"
            fontSize="11"
            fill="#94a3b8"
          >
            {val}
          </text>
        ))}
      </svg>
    </div>
  );
}

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 8,
          colorPrimary: "#1677ff",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        },
      }}
    >
      <Layout style={{ minHeight: "100vh", background: "#f4f7fb" }}>
        {/* 侧边栏 */}
        <Sider
          width={240}
          style={{
            background: "#1a1a2e",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 100,
            overflow: "auto",
          }}
        >
          <div
            style={{
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: "#1677ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 18,
              }}
            >
              ⚙️
            </div>
            <div>
              <div style={{ color: "#fff", fontSize: 15, fontWeight: 600 }}>
                空压机运维工单系统
              </div>
            </div>
          </div>

          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["home"]}
            defaultOpenKeys={["monitor"]}
            items={menuItems}
            style={{
              background: "#1a1a2e",
              borderRight: "none",
              padding: "0 12px",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: 20,
              left: 16,
              right: 16,
              padding: "12px 16px",
              borderRadius: 8,
              background: "rgba(255,255,255,0.05)",
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "#94a3b8",
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            <MenuFoldOutlined />
            <span>收起菜单</span>
          </div>
        </Sider>

        {/* 主内容区 */}
        <Layout style={{ marginLeft: 240, background: "#f4f7fb" }}>
          {/* 顶部 Header */}
          <Header
            style={{
              background: "#fff",
              padding: "0 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 64,
              borderBottom: "1px solid #e8eef6",
              position: "sticky",
              top: 0,
              zIndex: 99,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <Button type="primary" style={{ borderRadius: 6 }}>
                首页
              </Button>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <Space style={{ color: "#64748b", fontSize: 13 }}>
                <ReloadOutlined />
                <span>刷新</span>
              </Space>

              <Badge count={12} size="small">
                <BellOutlined style={{ fontSize: 18, color: "#64748b" }} />
              </Badge>

              <Badge count={5} size="small">
                <MessageOutlined style={{ fontSize: 18, color: "#64748b" }} />
              </Badge>

              <QuestionCircleOutlined
                style={{ fontSize: 18, color: "#64748b" }}
              />

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Avatar style={{ background: "#1677ff" }}>张</Avatar>
                <div style={{ lineHeight: 1.2 }}>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>张主管</div>
                  <div style={{ fontSize: 12, color: "#94a3b8" }}>设备主管</div>
                </div>
                <DownOutlined style={{ fontSize: 12, color: "#94a3b8" }} />
              </div>
            </div>
          </Header>

          <Content style={{ padding: "20px 24px" }}>
            {/* 时间戳 */}
            <div
              style={{
                textAlign: "right",
                marginBottom: 16,
                color: "#94a3b8",
                fontSize: 13,
              }}
            >
              2024-05-20 10:30:00 <ReloadOutlined style={{ marginLeft: 8 }} />
            </div>

            {/* 顶部统计卡片 */}
            <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
              {topStats.map((item, index) => (
                <Col xs={24} sm={12} md={8} lg={6} xl={4} key={index}>
                  <Card
                    bordered={false}
                    style={{
                      borderRadius: 12,
                      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                    }}
                    bodyStyle={{ padding: "16px 20px" }}
                  >
                    <div
                      style={{
                        color: "#64748b",
                        fontSize: 13,
                        marginBottom: 8,
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 4,
                        marginBottom: 4,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 28,
                          fontWeight: 700,
                          color: item.color,
                        }}
                      >
                        {item.value}
                      </span>
                      <span style={{ fontSize: 13, color: "#94a3b8" }}>
                        {item.suffix}
                      </span>
                    </div>
                    <div style={{ color: "#94a3b8", fontSize: 12 }}>
                      {item.desc}
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* 设备状态 + 实时告警 - 关键修复：统一高度 */}
            <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
              <Col xs={24} lg={16}>
                <Card
                  bordered={false}
                  style={{ borderRadius: 12, height: "100%" }}
                  bodyStyle={{ height: "100%" }}
                  title={
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <div
                        style={{
                          width: 3,
                          height: 16,
                          background: "#1677ff",
                          borderRadius: 2,
                        }}
                      />
                      <span style={{ fontWeight: 600 }}>设备状态总览</span>
                    </div>
                  }
                  extra={
                    <a style={{ color: "#1677ff", fontSize: 13 }}>
                      查看全部设备 <RightOutlined />
                    </a>
                  }
                >
                  <Row gutter={[16, 16]}>
                    {devices.map((device, index) => (
                      <Col xs={24} md={8} key={index}>
                        <Card
                          bordered={false}
                          style={{
                            borderRadius: 10,
                            background: "#fafbfc",
                            border: "1px solid #e8eef6",
                            height: "100%",
                          }}
                          bodyStyle={{
                            padding: 14,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginBottom: 10,
                            }}
                          >
                            <Tag
                              color={
                                device.statusColor === "success"
                                  ? "success"
                                  : "error"
                              }
                              style={{ fontSize: 12, margin: 0 }}
                            >
                              {device.status}
                            </Tag>
                            <div
                              style={{
                                fontSize: 13,
                                fontWeight: 500,
                                color: "#1e293b",
                              }}
                            >
                              {device.title}
                            </div>
                          </div>

                          <div
                            style={{
                              width: "100%",
                              height: 70,
                              background:
                                "linear-gradient(135deg, #e8eef6 0%, #f1f5f9 100%)",
                              borderRadius: 8,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginBottom: 10,
                              fontSize: 36,
                            }}
                          >
                            🏭
                          </div>

                          <div
                            style={{
                              fontSize: 12,
                              color: "#64748b",
                              marginBottom: 3,
                            }}
                          >
                            型号：{device.model}
                          </div>
                          <div
                            style={{
                              fontSize: 12,
                              color: "#64748b",
                              marginBottom: 10,
                            }}
                          >
                            编号：{device.code}
                          </div>

                          <Row gutter={8} style={{ marginBottom: 10, flex: 1 }}>
                            <Col span={8} style={{ textAlign: "center" }}>
                              <div
                                style={{
                                  fontSize: 11,
                                  color: "#94a3b8",
                                  marginBottom: 2,
                                }}
                              >
                                运行压力
                              </div>
                              <div
                                style={{
                                  fontSize: 13,
                                  fontWeight: 600,
                                  color: "#1e293b",
                                }}
                              >
                                {device.pressure}
                              </div>
                            </Col>
                            <Col span={8} style={{ textAlign: "center" }}>
                              <div
                                style={{
                                  fontSize: 11,
                                  color: "#94a3b8",
                                  marginBottom: 2,
                                }}
                              >
                                排气温度
                              </div>
                              <div
                                style={{
                                  fontSize: 13,
                                  fontWeight: 600,
                                  color: "#1e293b",
                                }}
                              >
                                {device.temp}
                              </div>
                            </Col>
                            <Col span={8} style={{ textAlign: "center" }}>
                              <div
                                style={{
                                  fontSize: 11,
                                  color: "#94a3b8",
                                  marginBottom: 2,
                                }}
                              >
                                运行时长
                              </div>
                              <div
                                style={{
                                  fontSize: 13,
                                  fontWeight: 600,
                                  color: "#1e293b",
                                }}
                              >
                                {device.runtime}
                              </div>
                            </Col>
                          </Row>

                          <div style={{ marginTop: "auto" }}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 6,
                              }}
                            >
                              <span style={{ fontSize: 12, color: "#64748b" }}>
                                健康评分
                              </span>
                              <span
                                style={{
                                  fontSize: 16,
                                  fontWeight: 700,
                                  color: device.healthColor,
                                }}
                              >
                                {device.health} 分
                              </span>
                            </div>
                            <Progress
                              percent={device.health}
                              showInfo={false}
                              strokeColor={device.healthColor}
                              trailColor="#e8eef6"
                              size="small"
                              strokeWidth={6}
                            />
                          </div>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Card>
              </Col>

              <Col xs={24} lg={8}>
                <Card
                  bordered={false}
                  style={{ borderRadius: 12, height: "100%" }}
                  bodyStyle={{ height: "100%" }}
                  title={
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <div
                        style={{
                          width: 3,
                          height: 16,
                          background: "#ef4444",
                          borderRadius: 2,
                        }}
                      />
                      <span style={{ fontWeight: 600 }}>实时告警</span>
                    </div>
                  }
                  extra={
                    <a style={{ color: "#1677ff", fontSize: 13 }}>
                      查看全部 <RightOutlined />
                    </a>
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 0,
                      height: "100%",
                    }}
                  >
                    {alerts.map((alert, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          padding: "12px 0",
                          borderBottom:
                            index < alerts.length - 1
                              ? "1px solid #f1f5f9"
                              : "none",
                          flex: 1,
                        }}
                      >
                        <div style={{ fontSize: 18, marginTop: 2 }}>
                          {alert.icon}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            style={{
                              fontSize: 14,
                              fontWeight: 500,
                              color:
                                alert.color === "red" ? "#ef4444" : "#1e293b",
                              marginBottom: 3,
                            }}
                          >
                            {alert.title}
                          </div>
                          <div
                            style={{
                              fontSize: 12,
                              color: "#64748b",
                              marginBottom: 4,
                              lineHeight: 1.4,
                            }}
                          >
                            {alert.desc}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <span style={{ fontSize: 11, color: "#94a3b8" }}>
                              {alert.time}
                            </span>
                            <Tag
                              color={
                                alert.color === "red"
                                  ? "red"
                                  : alert.color === "orange"
                                  ? "orange"
                                  : "blue"
                              }
                              style={{
                                fontSize: 11,
                                padding: "0 6px",
                                lineHeight: "18px",
                              }}
                            >
                              {alert.level}
                            </Tag>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </Col>
            </Row>

            {/* 设备健康趋势 + 工单分布 + 最新工单 - 关键修复：统一高度，图表更大 */}
            <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
              <Col xs={24} xl={8}>
                <Card
                  bordered={false}
                  style={{ borderRadius: 12, height: "100%" }}
                  bodyStyle={{ height: "100%" }}
                  title={
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <div
                          style={{
                            width: 3,
                            height: 16,
                            background: "#1677ff",
                            borderRadius: 2,
                          }}
                        />
                        <span style={{ fontWeight: 600 }}>设备健康趋势</span>
                      </div>
                      <Button size="small" style={{ fontSize: 12 }}>
                        近7天 <DownOutlined />
                      </Button>
                    </div>
                  }
                >
                  <div
                    style={{
                      height: "calc(100% - 40px)",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <LineChart />
                    <div
                      style={{
                        marginTop: 12,
                        padding: "10px 14px",
                        background: "#eff6ff",
                        borderRadius: 8,
                        fontSize: 12,
                        color: "#1677ff",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <BellOutlined />
                      空压机 #3 健康评分持续下降，建议及时处理
                    </div>
                  </div>
                </Card>
              </Col>

              <Col xs={24} md={12} xl={8}>
                <Card
                  bordered={false}
                  style={{ borderRadius: 12, height: "100%" }}
                  bodyStyle={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  title={
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <div
                          style={{
                            width: 3,
                            height: 16,
                            background: "#f59e0b",
                            borderRadius: 2,
                          }}
                        />
                        <span style={{ fontWeight: 600 }}>工单状态分布</span>
                      </div>
                      <a style={{ color: "#1677ff", fontSize: 13 }}>
                        查看全部 <RightOutlined />
                      </a>
                    </div>
                  }
                >
                  <DonutChart />
                </Card>
              </Col>

              <Col xs={24} md={12} xl={8}>
                <Card
                  bordered={false}
                  style={{ borderRadius: 12, height: "100%" }}
                  bodyStyle={{ height: "100%" }}
                  title={
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <div
                          style={{
                            width: 3,
                            height: 16,
                            background: "#22c55e",
                            borderRadius: 2,
                          }}
                        />
                        <span style={{ fontWeight: 600 }}>最新工单</span>
                      </div>
                      <a style={{ color: "#1677ff", fontSize: 13 }}>
                        查看全部 <RightOutlined />
                      </a>
                    </div>
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 0,
                      height: "100%",
                    }}
                  >
                    {latestOrders.map((order, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          padding: "14px 0",
                          borderBottom:
                            index < latestOrders.length - 1
                              ? "1px solid #f1f5f9"
                              : "none",
                          flex: 1,
                        }}
                      >
                        <div style={{ fontSize: 20 }}>{order.icon}</div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            style={{
                              fontSize: 14,
                              fontWeight: 500,
                              marginBottom: 3,
                              color: "#1e293b",
                            }}
                          >
                            {order.title}
                          </div>
                          <div style={{ fontSize: 12, color: "#94a3b8" }}>
                            工单号：{order.code}
                          </div>
                        </div>
                        <Tag
                          color={order.statusColor}
                          style={{ fontSize: 12, flexShrink: 0 }}
                        >
                          {order.status}
                        </Tag>
                      </div>
                    ))}
                  </div>
                </Card>
              </Col>
            </Row>

            {/* 快捷操作 */}
            <Card
              bordered={false}
              style={{ borderRadius: 12, marginBottom: 20 }}
              title={
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      width: 3,
                      height: 16,
                      background: "#1677ff",
                      borderRadius: 2,
                    }}
                  />
                  <span style={{ fontWeight: 600 }}>快捷操作</span>
                </div>
              }
            >
              <Row gutter={[16, 16]}>
                {quickActions.map((item, index) => (
                  <Col xs={24} sm={12} md={8} lg={6} xl={4} key={index}>
                    <Card
                      hoverable
                      bordered={false}
                      style={{
                        borderRadius: 10,
                        border: "1px solid #e8eef6",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                      bodyStyle={{
                        padding: "14px",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 10,
                          background: `${item.color}15`,
                          color: item.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 18,
                          flexShrink: 0,
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: 14,
                            fontWeight: 500,
                            marginBottom: 2,
                            color: "#1e293b",
                          }}
                        >
                          {item.title}
                        </div>
                        <div style={{ fontSize: 12, color: "#94a3b8" }}>
                          {item.desc}
                        </div>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>

            {/* 底部 */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 0",
                color: "#94a3b8",
                fontSize: 12,
              }}
            >
              <span>© 2024 智能制造工厂空压机运维工单系统</span>
              <div style={{ display: "flex", gap: 16 }}>
                <span>版本 1.0.0</span>
                <span>技术支持</span>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
