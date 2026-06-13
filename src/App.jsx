import { useEffect, useMemo, useRef, useState } from "react";
import portraitUrl from "../assets/tan-xicheng.jpg";

const contact = {
  phone: "18638210329",
  email: "xwcz2903@163.com",
  city: "深圳",
};

const experiences = [
  {
    time: "2026.05 至今",
    title: "神州数码（深圳）有限公司",
    role: "HR",
    detail:
      "支持招聘发布、简历筛选、电话邀约、面试协调与候选人接待；协助入转调离流程、合同归档、人事系统维护、HR 政策落地与数据报表输出。",
  },
  {
    time: "2025.10 - 2026.03",
    title: "深圳大学艺术学部党政办",
    role: "办公室助理",
    detail:
      "参与文件流转、会议筹备、纪要整理、公文撰写、数据统计及外宾接待；组织三八女生运动会、元旦晚会、中秋晚会等院级活动。",
  },
  {
    time: "2025.07 - 2025.09",
    title: "河南世盐网络科技有限公司",
    role: "教学主管",
    detail:
      "负责播音、表演艺考集训教学与路径规划，制定专业教学大纲，辅导学生上百人；2026 届统考本科过线率 100%。",
  },
  {
    time: "2024.12 - 2025.05",
    title: "河南通烨建设工程有限公司",
    role: "大客户销售",
    detail:
      "跟进政府采购及工程类招投标项目 15+ 个，参与标书和投标文件准备 8+ 个，重点项目涉及合同总金额约 800 万元。",
  },
];

const projects = [
  {
    period: "2025.09 - 2025.11",
    label: "National Games",
    title: "中华人民共和国第十五届运动会开幕式文体表演导演组",
    summary:
      "围绕《圆梦未来》主题，参与“同根同源”“同心同缘”“同梦同圆”三大篇章的创意执行、节目编排、动线规划和现场合成。",
    points: [
      "统筹康辉、李梓萌两位播音员彩排及正式演出日程，完成稿件校对、版本控制与现场提示标注。",
      "协助将岭南醒狮、粤剧水袖、龙舟竞渡、鳌鱼空飘等文化元素落到舞台动线。",
      "联动舞美、灯光、技术保障、安保与志愿者团队，保障创意与视听效果准确落地。",
    ],
  },
  {
    period: "2025.09 - 2025.12",
    label: "Para Games",
    title: "第十二届残疾人运动会暨第九届特殊奥林匹克运动会开幕式文体表演导演组",
    summary:
      "参与“爱之光”“梦之翼”“手牵手”三大篇章文体表演段落的节目编排、创意执行、排练统筹、现场调度与跨部门协同。",
    points: [
      "协助制定分篇章、分场次排练节奏，跟进场外排练至场内合成联排。",
      "在联排及合成中担任现场执行，处理站位调整、候场动线与节目衔接问题。",
      "配合音乐、舞美、视觉等部门完成节目合成，协调粤港澳多地演员与志愿者团队。",
    ],
  },
];

const strengths = [
  {
    title: "复杂现场执行",
    text: "有大型开幕式导演组经历，能在多团队、多轮排练、多版本方案中保持节奏和细节稳定。",
  },
  {
    title: "组织沟通",
    text: "长期担任班长兼心理委员，实习中频繁处理跨部门协同、外宾接待、会议与活动组织。",
  },
  {
    title: "表达与教学",
    text: "表演专业和英语双学位背景，具备舞台表达、文本理解、教学规划和公众沟通能力。",
  },
  {
    title: "流程与工具",
    text: "熟悉 Office、Canva、剪映、飞书多维表格及 AI 工具，能将重复事项整理成清晰流程。",
  },
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

const fallbackAnswers = [
  {
    test: /项目|代表|导演|开幕式|十五|残疾|特奥/,
    answer:
      "我最有代表性的经历是参与十五运会开幕式和残特奥会开幕式文体表演导演组。两段经历都涉及创意执行、节目编排、动线规划、排练统筹和现场合成，也让我更熟悉大型文化项目从方案到落地的完整链路。",
  },
  {
    test: /联系|电话|邮箱|城市|深圳/,
    answer: `可以通过电话 ${contact.phone} 或邮箱 ${contact.email} 联系我。我目前的意向城市是深圳。`,
  },
  {
    test: /优势|能力|适合|岗位|工作/,
    answer:
      "我比较适合需要组织协调、项目执行、活动统筹、HR 支持、文化项目策划或对外沟通的工作场景。我的优势是能把复杂信息拆成流程，同时在现场压力下保持稳定沟通和执行。",
  },
  {
    test: /教育|学校|专业|学历|研究生|本科/,
    answer:
      "我目前是深圳大学艺术学专业文化产业方向全日制研究生，本科毕业于成都理工大学表演专业，同时辅修英语双学位。本科阶段综合素质测评连续三年年级第一，并推免至深圳大学。",
  },
];

function HeroVideo() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video || !canvas.captureStream) return undefined;

    const ctx = canvas.getContext("2d");
    let frameId;
    let start = performance.now();

    const draw = (time) => {
      const t = (time - start) / 1000;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(0, "#02050b");
      gradient.addColorStop(0.45, "#07101d");
      gradient.addColorStop(1, "#03070c");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < 42; i += 1) {
        const x = ((i * 97 + t * 18) % (w + 180)) - 90;
        const y = (Math.sin(t * 0.55 + i) * 96 + h * ((i % 9) / 9 + 0.08)) % h;
        const alpha = 0.035 + (i % 6) * 0.009;
        ctx.strokeStyle = `rgba(129, 228, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 180 + (i % 5) * 44, y + 42 * Math.sin(t + i));
        ctx.stroke();
      }

      for (let i = 0; i < 18; i += 1) {
        const pulse = 0.5 + Math.sin(t * 1.1 + i) * 0.5;
        const x = (w * (0.12 + ((i * 0.19) % 0.82)) + t * (14 + i)) % w;
        const y = h * (0.18 + ((i * 0.11) % 0.66));
        const r = 2 + pulse * 4;
        ctx.fillStyle = `rgba(90, 220, 255, ${0.08 + pulse * 0.12})`;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      const halo = ctx.createRadialGradient(w * 0.68, h * 0.36, 20, w * 0.68, h * 0.36, w * 0.46);
      halo.addColorStop(0, "rgba(54, 183, 255, 0.2)");
      halo.addColorStop(0.48, "rgba(54, 183, 255, 0.05)");
      halo.addColorStop(1, "rgba(54, 183, 255, 0)");
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, w, h);

      frameId = requestAnimationFrame(draw);
    };

    frameId = requestAnimationFrame(draw);
    const stream = canvas.captureStream(30);
    video.srcObject = stream;
    video.play().catch(() => {});

    return () => {
      cancelAnimationFrame(frameId);
      stream.getTracks().forEach((track) => track.stop());
      video.srcObject = null;
      start = 0;
    };
  }, []);

  return (
    <>
      <video ref={videoRef} className="hero-video" muted playsInline autoPlay aria-hidden="true" />
      <canvas ref={canvasRef} className="hero-canvas-source" width="1280" height="720" aria-hidden="true" />
    </>
  );
}

function ChatPanel() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "你好，我是谭希丞的 AI 分身。你可以问我教育背景、项目经历、实习经历、能力优势或联系方式。",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const ask = async (question) => {
    const clean = question.trim();
    if (!clean || loading) return;

    const history = messages.slice(-8);
    setMessages((items) => [...items, { role: "user", content: clean }]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: clean, history }),
      });

      if (!response.ok) throw new Error("API unavailable");
      const data = await response.json();
      setMessages((items) => [...items, { role: "assistant", content: data.reply }]);
    } catch {
      const matched = fallbackAnswers.find((item) => item.test.test(clean));
      setMessages((items) => [
        ...items,
        {
          role: "assistant",
          content:
            matched?.answer ||
            "我可以基于简历信息介绍谭希丞。你可以具体问他的教育背景、导演组项目、实习经历、荣誉奖项、工具技能或联系方式。",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai" className="chat-section">
      <div className="section-kicker">AI Persona</div>
      <div className="section-head split">
        <h2>和谭希丞的 AI 分身聊聊</h2>
        <p>对话入口保留在页面中部，方便访客快速了解简历背后的具体经历。</p>
      </div>
      <div className="chat-shell">
        <div className="prompt-rail">
          {quickQuestions.map((question) => (
            <button key={question} type="button" onClick={() => ask(question)}>
              {question}
            </button>
          ))}
        </div>
        <div className="chat-window">
          <div className="chat-log">
            {messages.map((message, index) => (
              <div className={`message ${message.role}`} key={`${message.role}-${index}`}>
                {message.content}
              </div>
            ))}
            {loading && <div className="message assistant">正在整理回答...</div>}
          </div>
          <form
            className="chat-form"
            onSubmit={(event) => {
              event.preventDefault();
              ask(input);
            }}
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="输入你想了解的问题"
              aria-label="向谭希丞的 AI 分身提问"
            />
            <button type="submit" disabled={loading}>
              发送
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="site-shell">
      <header className="nav">
        <a className="brand" href="#top" aria-label="返回首页">
          TXC
        </a>
        <nav aria-label="主导航">
          <a href="#profile">个人经历</a>
          <a href="#projects">精选项目</a>
          <a href="#strengths">个人优势</a>
          <a href="#contact">联系</a>
        </nav>
        <a className="nav-cta" href={`mailto:${contact.email}`}>
          联系我
        </a>
      </header>

      <main>
        <section id="top" className="hero">
          <HeroVideo />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <p className="hero-kicker">Culture Project · Stage Execution · HR Operation</p>
            <h1>谭希丞</h1>
            <p className="hero-lede">
              深圳大学艺术学硕士在读，把大型文体活动执行、组织协同与人力资源实践，转化为稳定、清晰、可落地的工作方式。
            </p>
            <div className="hero-actions">
              <a href="#projects">查看项目</a>
              <a href="#ai" className="ghost-link">
                对话 AI 分身
              </a>
            </div>
          </div>
          <div className="hero-status" aria-label="个人状态">
            <span>Based in {contact.city}</span>
            <span>Open to culture, HR and project roles</span>
          </div>
        </section>

        <section id="profile" className="section profile-section">
          <div className="section-kicker">Profile</div>
          <div className="profile-layout">
            <figure className="portrait-card">
              <img src={portraitUrl} alt="谭希丞人物照片" />
            </figure>
            <div className="profile-copy">
              <div className="section-head">
                <h2>复合背景，偏执行型的人。</h2>
                <p>
                  我目前就读于深圳大学艺术学专业文化产业方向，研究和实践都围绕文化项目策划、艺术管理与现场执行展开。本科毕业于成都理工大学表演专业，同时辅修英语双学位。
                </p>
              </div>
              <div className="profile-facts">
                <div>
                  <span>身份</span>
                  <strong>中共党员 / 研究生在读</strong>
                </div>
                <div>
                  <span>城市</span>
                  <strong>{contact.city}</strong>
                </div>
                <div>
                  <span>电话</span>
                  <strong>{contact.phone}</strong>
                </div>
                <div>
                  <span>邮箱</span>
                  <strong>{contact.email}</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="experience-strip">
            {experiences.map((item) => (
              <article key={`${item.title}-${item.time}`} className="experience-card">
                <span>{item.time}</span>
                <h3>{item.title}</h3>
                <p className="role">{item.role}</p>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-kicker">Selected Projects</div>
          <div className="section-head split">
            <h2>精选项目</h2>
            <p>用大卡片展示最能体现组织能力、现场执行和文化表达的项目经历。</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-index">0{index + 1}</div>
                <div className="project-meta">
                  <span>{project.label}</span>
                  <span>{project.period}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="strengths" className="section strengths-section">
          <div className="section-kicker">Strengths</div>
          <div className="section-head split">
            <h2>个人优势</h2>
            <p>不是堆标签，而是把能力落到真实场景。</p>
          </div>
          <div className="strength-grid">
            {strengths.map((item) => (
              <article className="strength-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="honor-panel">
            <h3>荣誉与证书</h3>
            <div className="honor-list">
              {honors.map((honor) => (
                <span key={honor}>{honor}</span>
              ))}
            </div>
          </div>
        </section>

        <ChatPanel />

        <section id="contact" className="contact-section">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>让我们把想法推进到现场。</h2>
          </div>
          <div className="contact-actions">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          </div>
          <footer>
            <span>© {year} 谭希丞</span>
            <span>Designed for tanxicheng.com</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
