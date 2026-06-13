const root = document.getElementById("root");

const contact = {
  phone: "18638210329",
  email: "xwcz2903@163.com",
  city: "深圳",
};

const experiences = [
  ["2026.05 至今", "神州数码（深圳）有限公司", "HR", "支持招聘发布、简历筛选、电话邀约、面试协调、候选人接待及 HR 政策落地。"],
  ["2025.10 - 2026.03", "深圳大学艺术学部党政办", "办公室助理", "参与文件流转、会议筹备、纪要整理、公文撰写、数据统计及外宾接待。"],
  ["2025.07 - 2025.09", "河南世盐网络科技有限公司", "教学主管", "负责播音、表演艺考集训教学与路径规划，2026 届统考本科过线率 100%。"],
  ["2024.12 - 2025.05", "河南通烨建设工程有限公司", "大客户销售", "跟进政府采购及工程类招投标项目 15+ 个，参与标书与投标文件准备。"],
];

const projects = [
  {
    period: "2025.09 - 2025.11",
    label: "National Games",
    title: "中华人民共和国第十五届运动会开幕式文体表演导演组",
    summary: "围绕《圆梦未来》主题，参与三大篇章创意执行、节目编排、动线规划和现场合成。",
    points: ["统筹康辉、李梓萌两位播音员彩排及正式演出日程。", "协助将岭南醒狮、粤剧水袖、龙舟竞渡等文化元素落到舞台动线。", "联动舞美、灯光、技术保障、安保与志愿者团队。"],
  },
  {
    period: "2025.09 - 2025.12",
    label: "Para Games",
    title: "第十二届残疾人运动会暨第九届特殊奥林匹克运动会开幕式文体表演导演组",
    summary: "参与“爱之光”“梦之翼”“手牵手”三大篇章的节目编排、创意执行、排练统筹与现场调度。",
    points: ["协助制定分篇章、分场次排练节奏。", "在联排及合成中担任现场执行，处理站位调整与节目衔接。", "协调粤港澳多地演员与志愿者团队。"],
  },
];

const strengths = [
  ["复杂现场执行", "有大型开幕式导演组经历，能在多团队、多轮排练、多版本方案中保持节奏和细节稳定。"],
  ["组织沟通", "长期担任班长兼心理委员，实习中频繁处理跨部门协同、外宾接待、会议与活动组织。"],
  ["表达与教学", "表演专业和英语双学位背景，具备舞台表达、文本理解、教学规划和公众沟通能力。"],
  ["流程与工具", "熟悉 Office、Canva、剪映、飞书多维表格及 AI 工具，能将重复事项整理成清晰流程。"],
];

const honors = [
  "米兰设计周·非遗数字设计大赛国家级一等奖",
  "全国大学生网络文化节国家级二等奖、三等奖",
  "四川省大学生戏剧节省级二等奖",
  "四川省原创剧本大赛省级三等奖",
  "2025 级四川省优秀本科毕业生",
  "2024 年成都理工大学校级优秀学生",
];

const quickQuestions = [
  "用一分钟介绍一下谭希丞",
  "他最有代表性的项目是什么？",
  "他适合什么样的岗位或工作场景？",
  "怎么联系他？",
];

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

function getFallbackAnswer(question) {
  if (/项目|代表|导演|开幕式|十五|残疾|特奥/.test(question)) {
    return "我最有代表性的经历是参与十五运会开幕式和残特奥会开幕式文体表演导演组。两段经历都涉及创意执行、节目编排、动线规划、排练统筹和现场合成。";
  }
  if (/联系|电话|邮箱|城市|深圳/.test(question)) {
    return `可以通过电话 ${contact.phone} 或邮箱 ${contact.email} 联系我。我目前的意向城市是深圳。`;
  }
  if (/优势|能力|适合|岗位|工作/.test(question)) {
    return "我比较适合需要组织协调、项目执行、活动统筹、HR 支持、文化项目策划或对外沟通的工作场景。";
  }
  if (/教育|学校|专业|学历|研究生|本科/.test(question)) {
    return "我目前是深圳大学艺术学专业文化产业方向全日制研究生，本科毕业于成都理工大学表演专业，同时辅修英语双学位。";
  }
  return "我可以基于简历信息介绍谭希丞。你可以具体问他的教育背景、导演组项目、实习经历、荣誉奖项、工具技能或联系方式。";
}

function renderFallback() {
  if (!root || root.childElementCount > 0) return;

  root.innerHTML = `
    <div class="site-shell">
      <header class="nav">
        <a class="brand" href="#top" aria-label="返回首页">TXC</a>
        <nav aria-label="主导航">
          <a href="#profile">个人经历</a>
          <a href="#projects">精选项目</a>
          <a href="#strengths">个人优势</a>
          <a href="#contact">联系</a>
        </nav>
        <a class="nav-cta" href="mailto:${contact.email}">联系我</a>
      </header>
      <main>
        <section id="top" class="hero">
          <canvas class="hero-video" id="fallback-canvas" width="1280" height="720" aria-hidden="true"></canvas>
          <div class="hero-grid" aria-hidden="true"></div>
          <div class="hero-content">
            <p class="hero-kicker">Culture Project · Stage Execution · HR Operation</p>
            <h1>谭希丞</h1>
            <p class="hero-lede">深圳大学艺术学硕士在读，把大型文体活动执行、组织协同与人力资源实践，转化为稳定、清晰、可落地的工作方式。</p>
            <div class="hero-actions">
              <a href="#projects">查看项目</a>
              <a href="#ai" class="ghost-link">对话 AI 分身</a>
            </div>
          </div>
          <div class="hero-status" aria-label="个人状态">
            <span>Based in ${contact.city}</span>
            <span>Open to culture, HR and project roles</span>
          </div>
        </section>
        <section id="profile" class="section profile-section">
          <div class="section-kicker">Profile</div>
          <div class="profile-layout">
            <figure class="portrait-card"><img src="/assets/tan-xicheng.jpg" alt="谭希丞人物照片" /></figure>
            <div class="profile-copy">
              <div class="section-head">
                <h2>复合背景，偏执行型的人。</h2>
                <p>我目前就读于深圳大学艺术学专业文化产业方向，研究和实践都围绕文化项目策划、艺术管理与现场执行展开。本科毕业于成都理工大学表演专业，同时辅修英语双学位。</p>
              </div>
              <div class="profile-facts">
                <div><span>身份</span><strong>中共党员 / 研究生在读</strong></div>
                <div><span>城市</span><strong>${contact.city}</strong></div>
                <div><span>电话</span><strong>${contact.phone}</strong></div>
                <div><span>邮箱</span><strong>${contact.email}</strong></div>
              </div>
            </div>
          </div>
          <div class="experience-strip">
            ${experiences.map(([time, title, role, detail]) => `<article class="experience-card"><span>${time}</span><h3>${title}</h3><p class="role">${role}</p><p>${detail}</p></article>`).join("")}
          </div>
        </section>
        <section id="projects" class="section projects-section">
          <div class="section-kicker">Selected Projects</div>
          <div class="section-head split"><h2>精选项目</h2><p>用大卡片展示最能体现组织能力、现场执行和文化表达的项目经历。</p></div>
          <div class="project-grid">
            ${projects.map((project, index) => `<article class="project-card"><div class="project-index">0${index + 1}</div><div class="project-meta"><span>${project.label}</span><span>${project.period}</span></div><h3>${project.title}</h3><p>${project.summary}</p><ul>${project.points.map((point) => `<li>${point}</li>`).join("")}</ul></article>`).join("")}
          </div>
        </section>
        <section id="strengths" class="section strengths-section">
          <div class="section-kicker">Strengths</div>
          <div class="section-head split"><h2>个人优势</h2><p>不是堆标签，而是把能力落到真实场景。</p></div>
          <div class="strength-grid">
            ${strengths.map(([title, text]) => `<article class="strength-card"><h3>${title}</h3><p>${text}</p></article>`).join("")}
          </div>
          <div class="honor-panel"><h3>荣誉与证书</h3><div class="honor-list">${honors.map((honor) => `<span>${honor}</span>`).join("")}</div></div>
        </section>
        <section id="ai" class="chat-section">
          <div class="section-kicker">AI Persona</div>
          <div class="section-head split"><h2>和谭希丞的 AI 分身聊聊</h2><p>对话入口保留在页面中部，方便访客快速了解简历背后的具体经历。</p></div>
          <div class="chat-shell">
            <div class="prompt-rail">${quickQuestions.map((question) => `<button type="button" data-question="${escapeHtml(question)}">${question}</button>`).join("")}</div>
            <div class="chat-window">
              <div class="chat-log" id="fallback-chat-log"><div class="message assistant">你好，我是谭希丞的 AI 分身。你可以问我教育背景、项目经历、实习经历、能力优势或联系方式。</div></div>
              <form class="chat-form" id="fallback-chat-form">
                <input id="fallback-chat-input" placeholder="输入你想了解的问题" aria-label="向谭希丞的 AI 分身提问" />
                <button type="submit">发送</button>
              </form>
            </div>
          </div>
        </section>
        <section id="contact" class="contact-section">
          <div><p class="section-kicker">Contact</p><h2>让我们把想法推进到现场。</h2></div>
          <div class="contact-actions"><a href="mailto:${contact.email}">${contact.email}</a><a href="tel:${contact.phone}">${contact.phone}</a></div>
          <footer><span>© ${new Date().getFullYear()} 谭希丞</span><span>Designed for tanxicheng.com</span></footer>
        </section>
      </main>
    </div>
  `;

  setupFallbackChat();
  animateFallbackCanvas();
}

function setupFallbackChat() {
  const form = document.getElementById("fallback-chat-form");
  const input = document.getElementById("fallback-chat-input");
  const log = document.getElementById("fallback-chat-log");
  const append = (role, content) => {
    const node = document.createElement("div");
    node.className = `message ${role}`;
    node.textContent = content;
    log.appendChild(node);
    log.scrollTop = log.scrollHeight;
  };
  const ask = (question) => {
    const clean = question.trim();
    if (!clean) return;
    append("user", clean);
    append("assistant", getFallbackAnswer(clean));
    input.value = "";
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    ask(input.value);
  });
  document.querySelectorAll("[data-question]").forEach((button) => {
    button.addEventListener("click", () => ask(button.dataset.question || ""));
  });
}

function animateFallbackCanvas() {
  const canvas = document.getElementById("fallback-canvas");
  const ctx = canvas?.getContext("2d");
  if (!canvas || !ctx) return;

  const draw = (time) => {
    const t = time / 1000;
    const { width: w, height: h } = canvas;
    const gradient = ctx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, "#02050b");
    gradient.addColorStop(0.45, "#07101d");
    gradient.addColorStop(1, "#03070c");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    for (let i = 0; i < 42; i += 1) {
      const x = ((i * 97 + t * 18) % (w + 180)) - 90;
      const y = (Math.sin(t * 0.55 + i) * 96 + h * ((i % 9) / 9 + 0.08)) % h;
      ctx.strokeStyle = `rgba(129, 228, 255, ${0.035 + (i % 6) * 0.009})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 180 + (i % 5) * 44, y + 42 * Math.sin(t + i));
      ctx.stroke();
    }

    requestAnimationFrame(draw);
  };

  requestAnimationFrame(draw);
}

window.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(renderFallback, 700);
});
