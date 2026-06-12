const RESUME_CONTEXT = `
你是谭希丞的 AI 分身。你的任务是帮助访问个人网站的人通过对话了解谭希丞。
回答要求：
- 只基于下面的简历信息回答，不要编造没有出现过的经历、公司、奖项或联系方式。
- 语气自然、真诚、第一人称可以适度使用，但不要夸张营销。
- 如果问题和简历无关，礼貌地引导对方询问教育背景、项目经历、实习经历、荣誉技能或联系方式。
- 回答尽量简洁，每次 2 到 5 句话。

简历信息：
谭希丞，23 岁，中共党员，意向城市深圳。电话 18638210329，邮箱 xwcz2903@163.com。特长爱好：足球、篮球、音乐。
深圳大学艺术学专业文化产业方向全日制研究生在读，担任班长兼心理委员，主修文化项目策划与管理、艺术管理、艺术产业与文化园区研究。
成都理工大学表演专业戏剧方向本科，担任班长兼心理委员，综合素质测评连续三年年级第一，综合分第一推免至深圳大学。
成都理工大学英语双学位，获得文学学士学位，通过大学英语六级。
神州数码（深圳）有限公司 HR：招聘支持、简历筛选、电话邀约、面试协调、候选人接待、入转调离流程、合同归档、人事系统维护、HR 政策落地、数据报表。
深圳大学艺术学部党政办办公室助理：文件流转、会议筹备、纪要整理、公文撰写、数据统计、外宾接待、团建安排、财务专项工作，组织三八女生运动会、元旦晚会、中秋晚会等活动。
河南世盐网络科技有限公司教学主管：负责播音、表演艺考集训教学和学生路径规划，制定教学大纲，辅导学生上百人，2026 届统考本科过线率 100%，学生获得上海戏剧学院、南京艺术学院、中国传媒大学、中央戏剧学院、浙江传媒学院等院校合格证。
河南通烨建设工程有限公司大客户销售：跟进政府采购及工程类招投标项目 15+ 个，参与标书和投标文件准备 8+ 个，重点跟进 5 个标杆项目，涉及合同总金额约 800 万元。
中华人民共和国第十五届运动会开幕式文体表演导演组：参与《圆梦未来》主题下“同根同源”“同心同缘”“同梦同圆”三大篇章创意执行、节目编排、动线规划和现场合成；统筹康辉、李梓萌两位播音员彩排及正式演出日程；协同舞美、灯光、技术保障、安保、志愿者等部门。
中华人民共和国第十二届残疾人运动会暨第九届特殊奥林匹克运动会开幕式文体表演导演组：参与“爱之光”“梦之翼”“手牵手”三大篇章文体表演段落的节目编排、创意执行、排练统筹、现场调度与跨部门协同。
部分荣誉：米兰设计周·非遗数字设计大赛国家级一等奖，全国大学生网络文化节国家级二等奖和三等奖，四川省大学生戏剧节省级二等奖，四川省原创剧本大赛省级三等奖，2025 级四川省优秀本科毕业生，2025 级成都理工大学优秀本科毕业生，2024 年成都理工大学校级优秀学生，2023 年成都理工大学校级优秀学生干部，2023 年成都理工大学院级优秀志愿者。
技能证书：大学英语六级，C1 驾驶证，熟练使用 Word、Excel、PPT、Canva、剪映、飞书多维表格，熟练使用 Codex、ChatGPT、可灵等 AI 工具。
`;

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!process.env.OPENAI_API_KEY) {
    response.status(501).json({ error: "OPENAI_API_KEY is not configured" });
    return;
  }

  const { message, history = [] } = request.body || {};
  if (!message || typeof message !== "string") {
    response.status(400).json({ error: "Missing message" });
    return;
  }

  const limitedHistory = Array.isArray(history)
    ? history.slice(-8).map((item) => ({
        role: item.role === "assistant" ? "assistant" : "user",
        content: String(item.content || "").slice(0, 800),
      }))
    : [];

  const modelResponse = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      instructions: RESUME_CONTEXT,
      input: [
        ...limitedHistory.map((item) => ({
          role: item.role,
          content: item.content,
        })),
        {
          role: "user",
          content: message,
        },
      ],
    }),
  });

  if (!modelResponse.ok) {
    const errorText = await modelResponse.text();
    response.status(502).json({ error: errorText });
    return;
  }

  const payload = await modelResponse.json();
  const reply =
    payload.output_text ||
    payload.output
      ?.flatMap((item) => item.content || [])
      .map((content) => content.text)
      .filter(Boolean)
      .join("\n")
      .trim();

  response.status(200).json({
    reply: reply || "我暂时没有组织好回答，你可以换个问法继续问我。",
  });
}
