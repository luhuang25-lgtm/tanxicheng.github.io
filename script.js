const focusData = {
  stage: {
    kicker: "National Games",
    title: "把创意变成可执行的舞台调度",
    body:
      "在十五运会开幕式导演组中，参与三大篇章创意执行、节目编排、动线规划与现场合成，协同舞美、灯光、技术保障等多部门推进落地。",
    color: "#86b7ff",
    nodes: ["创意", "动线", "合成", "播音", "舞美", "灯光"],
  },
  people: {
    kicker: "Organization",
    title: "在多方协作里保持节奏和秩序",
    body:
      "从党政办行政工作、院级活动筹备到大型开幕式现场执行，持续处理会议、接待、演职人员协同和跨部门信息传达。",
    color: "#f2c879",
    nodes: ["会议", "接待", "协作", "排练", "志愿者", "外宾"],
  },
  data: {
    kicker: "HR Operations",
    title: "把流程沉淀成准确的数据和档案",
    body:
      "在 HR 实习中维护人事系统数据、整理入转调离材料、输出基础统计报表，并配合 HRBP 推动制度和重点项目落地。",
    color: "#77d4be",
    nodes: ["系统", "报表", "合同", "档案", "周报", "核查"],
  },
  teaching: {
    kicker: "Teaching",
    title: "把专业表达转化为可成长的路径",
    body:
      "作为艺考教学主管，制定播音、表演方向教学大纲并辅导上百名学生，2026 届统考本科过线率达到 100%。",
    color: "#ff9b8a",
    nodes: ["大纲", "表达", "路径", "辅导", "统考", "校考"],
  },
};

const resumeKnowledge = [
  {
    title: "个人定位",
    keywords: ["介绍", "是谁", "一分钟", "概况", "定位", "个人"],
    answer:
      "谭希丞是深圳大学艺术学专业文化产业方向研究生，本科毕业于成都理工大学表演专业，并辅修英语双学位。他的经历横跨大型文体活动导演组、HR、党政行政、艺考教学和大客户销售，核心优势是组织协同、现场执行、内容表达和流程管理。",
  },
  {
    title: "教育背景",
    keywords: ["教育", "学校", "学历", "专业", "深圳大学", "成都理工", "英语", "研究生", "本科"],
    answer:
      "教育上，他目前就读于深圳大学艺术学专业文化产业方向研究生，担任班长兼心理委员；本科为成都理工大学表演专业戏剧方向，综合素质测评连续三年年级第一，并以综合分第一推免至深圳大学。他还辅修英语专业，获得文学学士学位，通过大学英语六级。",
  },
  {
    title: "代表项目",
    keywords: ["项目", "代表", "十五运", "残特奥", "开幕式", "导演组", "舞台", "大型活动"],
    answer:
      "他最有代表性的项目是第十五届全国运动会开幕式文体表演导演组经历。简历中提到，他参与《圆梦未来》主题下三大篇章的创意执行、节目编排、动线规划和现场合成，并统筹康辉、李梓萌两位播音员的彩排及正式演出日程。另一个重要项目是残特奥会开幕式文体表演导演组，负责节目编排、排练统筹、现场执行和跨部门协同。",
  },
  {
    title: "HR 经历",
    keywords: ["hr", "人力", "招聘", "神州数码", "入职", "数据", "报表"],
    answer:
      "在神州数码（深圳）有限公司 HR 实习中，他负责招聘支持、简历筛选、电话邀约、面试协调和候选人接待；同时协助员工入职、转岗、调任、离职等流程，维护人事系统数据，输出基础统计报表，并配合 HRBP 推动政策和重点项目落地。",
  },
  {
    title: "行政与组织",
    keywords: ["行政", "党政办", "办公室", "活动", "组织", "沟通", "会议"],
    answer:
      "在深圳大学艺术学部党政办担任办公室助理期间，他参与文件流转、会议筹备、纪要整理、公文撰写、数据统计、外宾接待和财务专项工作，还组织过三八女生运动会、元旦晚会、中秋晚会等院级活动。这段经历能体现他的组织沟通和细节执行能力。",
  },
  {
    title: "教学表达",
    keywords: ["教学", "艺考", "学生", "表演", "播音", "主管", "成绩"],
    answer:
      "在河南世盐网络科技有限公司担任教学主管时，他负责播音、表演艺考方向的集训教学和学生路径规划，制定专业教学大纲，辅导学生上百人。简历中写到，2026 届统考本科过线率 100%，并有学生取得上海戏剧学院、南京艺术学院、中国传媒大学、中央戏剧学院、浙江传媒学院等院校合格证。",
  },
  {
    title: "销售与招投标",
    keywords: ["销售", "客户", "招投标", "投标", "政府采购", "工程", "合同"],
    answer:
      "在河南通烨建设工程有限公司的大客户销售实习中，他跟进政府采购及企事业单位工程类招投标项目 15+ 个，参与标书整理和投标文件准备 8+ 个，重点跟进 5 个标杆项目，涉及合同总金额约 800 万元。这段经历体现了信息搜集、流程推进和客户对接能力。",
  },
  {
    title: "荣誉证书",
    keywords: ["荣誉", "获奖", "奖项", "证书", "技能", "软件", "ai", "工具"],
    answer:
      "他的部分荣誉包括米兰设计周·非遗数字设计大赛国家级一等奖，全国大学生网络文化节国家级二等奖、三等奖，四川省大学生戏剧节省级二等奖，四川省原创剧本大赛省级三等奖，四川省优秀本科毕业生和成都理工大学优秀本科毕业生。技能方面，通过大学英语六级，持 C1 驾驶证，熟悉 Word、Excel、PPT、Canva、剪映、飞书多维表格，以及 Codex、ChatGPT、可灵等 AI 工具。",
  },
  {
    title: "适合场景",
    keywords: ["适合", "岗位", "工作", "优势", "能力", "为什么", "场景"],
    answer:
      "从简历看，他适合文化项目策划与执行、大型活动统筹、校园或公共文化活动运营、HR 助理/HRBP 支持、行政统筹、内容策划与教育培训相关工作。优势在于既懂舞台表达和内容组织，也有流程、数据、沟通和现场调度经验。",
  },
  {
    title: "联系方式",
    keywords: ["联系", "电话", "邮箱", "微信", "城市", "深圳"],
    answer:
      "可以通过邮箱 xwcz2903@163.com 或电话 18638210329 联系谭希丞。他的意向城市是深圳。",
  },
];

const chatHistory = [];

const tabs = document.querySelectorAll(".focus-tab");
const kicker = document.querySelector("#focus-kicker");
const title = document.querySelector("#focus-result-title");
const body = document.querySelector("#focus-result-body");
const canvas = document.querySelector("#orbit-canvas");
const ctx = canvas?.getContext("2d");
const chatForm = document.querySelector("#chat-form");
const chatInput = document.querySelector("#chat-input");
const chatMessages = document.querySelector("#chat-messages");
const chatStatus = document.querySelector("#chat-status");
const promptButtons = document.querySelectorAll("[data-question]");
const chatJumpLinks = document.querySelectorAll("[data-chat-jump]");
let activeKey = "stage";
let time = 0;

function setFocus(key) {
  const data = focusData[key];
  activeKey = key;
  kicker.textContent = data.kicker;
  title.textContent = data.title;
  body.textContent = data.body;
  tabs.forEach((tab) => {
    const isActive = tab.dataset.focus === key;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => setFocus(tab.dataset.focus));
});

function scoreKnowledge(question, item) {
  const normalized = question.toLowerCase();
  return item.keywords.reduce((score, keyword) => {
    return normalized.includes(keyword.toLowerCase()) ? score + 1 : score;
  }, 0);
}

function localResumeReply(question) {
  const ranked = resumeKnowledge
    .map((item) => ({ item, score: scoreKnowledge(question, item) }))
    .sort((a, b) => b.score - a.score);

  if (ranked[0]?.score > 0) {
    return ranked[0].item.answer;
  }

  return "这个问题如果和谭希丞的简历有关，我可以继续展开。你可以问他的教育背景、十五运会开幕式项目、HR 实习、艺考教学成果、获奖证书，或者联系方式。";
}

function addChatMessage(role, text, options = {}) {
  if (!chatMessages) return null;
  const message = document.createElement("div");
  message.className = `chat-message ${role}`;
  if (options.thinking) {
    message.classList.add("is-thinking");
  }

  const label = document.createElement("span");
  label.textContent = role === "user" ? "你" : "AI 分身";

  const content = document.createElement("p");
  content.textContent = text;

  message.append(label, content);
  chatMessages.append(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return message;
}

async function callRemoteModel(question) {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: question,
      history: chatHistory.slice(-8),
    }),
  });

  if (!response.ok) {
    throw new Error("remote model unavailable");
  }

  const payload = await response.json();
  if (!payload.reply) {
    throw new Error("empty model reply");
  }

  return payload.reply;
}

async function handleChatSubmit(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion) return;

  addChatMessage("user", cleanQuestion);
  chatHistory.push({ role: "user", content: cleanQuestion });

  if (chatInput && chatForm) {
    chatInput.value = "";
    chatInput.disabled = true;
    chatForm.querySelector("button").disabled = true;
  }

  if (chatStatus) {
    chatStatus.textContent = "正在思考...";
  }
  const thinking = addChatMessage("assistant", "我在根据简历信息整理回答。", {
    thinking: true,
  });

  let reply = "";
  let usedLocalFallback = false;

  try {
    reply = await callRemoteModel(cleanQuestion);
  } catch (error) {
    reply = localResumeReply(cleanQuestion);
    usedLocalFallback = true;
  }

  thinking?.remove();
  addChatMessage("assistant", reply);
  chatHistory.push({ role: "assistant", content: reply });

  if (chatStatus) {
    chatStatus.textContent = usedLocalFallback
      ? "当前使用本地简历知识库回答"
      : "当前使用大语言模型回答";
  }

  if (chatInput && chatForm) {
    chatInput.disabled = false;
    chatForm.querySelector("button").disabled = false;
    chatInput.focus();
  }
}

chatForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  handleChatSubmit(chatInput?.value || "");
});

promptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    handleChatSubmit(button.dataset.question || "");
  });
});

function jumpToChat(event) {
  event.preventDefault();
  const chatSection = document.querySelector("#ai");
  if (!chatSection) return;

  chatSection.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", "#ai");
  window.setTimeout(() => {
    chatInput?.focus({ preventScroll: true });
  }, 650);
}

chatJumpLinks.forEach((link) => {
  link.addEventListener("click", jumpToChat);
});

function fitCanvas() {
  if (!canvas || !ctx) return;
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(rect.width * ratio));
  canvas.height = Math.max(1, Math.floor(rect.height * ratio));
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function drawOrbit() {
  if (!canvas || !ctx) return;
  const rect = canvas.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  const centerX = width * 0.5;
  const centerY = height * 0.42;
  const data = focusData[activeKey];

  ctx.clearRect(0, 0, width, height);
  ctx.save();
  ctx.globalAlpha = 0.96;

  const rings = [0.22, 0.34, 0.46];
  rings.forEach((scale, index) => {
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, width * scale, height * scale * 0.46, 0, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.09 + index * 0.035})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  const pulse = 1 + Math.sin(time * 0.03) * 0.04;
  ctx.beginPath();
  ctx.arc(centerX, centerY, 48 * pulse, 0, Math.PI * 2);
  ctx.fillStyle = data.color;
  ctx.globalAlpha = 0.88;
  ctx.fill();
  ctx.globalAlpha = 1;

  ctx.fillStyle = "#101114";
  ctx.font =
    "700 15px -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("谭希丞", centerX, centerY);

  data.nodes.forEach((label, index) => {
    const angle = time * 0.008 + index * ((Math.PI * 2) / data.nodes.length);
    const radiusX = width * (0.23 + (index % 3) * 0.075);
    const radiusY = height * (0.12 + (index % 3) * 0.045);
    const x = centerX + Math.cos(angle) * radiusX;
    const y = centerY + Math.sin(angle) * radiusY;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fillStyle = data.color;
    ctx.fill();

    ctx.fillStyle = "rgba(245, 245, 247, 0.86)";
    ctx.font =
      "650 13px -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif";
    ctx.fillText(label, x, y - 18);
  });

  ctx.restore();
  time += 1;
  requestAnimationFrame(drawOrbit);
}

const revealTargets = document.querySelectorAll(
  ".section-heading, .metric-grid article, .timeline-item, .experience-card, .focus-copy, .focus-panel, .chat-intro, .chat-card, .project-item, .award-list, .skill-cloud, .contact > *",
);

revealTargets.forEach((element) => element.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 },
);

revealTargets.forEach((element) => observer.observe(element));

window.addEventListener("resize", fitCanvas);
fitCanvas();
drawOrbit();
