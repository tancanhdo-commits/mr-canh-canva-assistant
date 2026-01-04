"use client";
import { useState } from "react";

type Skill =
  | "vocab"
  | "reading"
  | "speaking"
  | "writing"
  | "project";

export default function Home() {
  const [grade, setGrade] = useState("6");
  const [skill, setSkill] = useState<Skill>("reading");
  const [topic, setTopic] = useState("");
  const [prompt, setPrompt] = useState("");

  const generatePrompt = () => {
    let task = "";

    if (skill === "vocab") {
      task = `
Create a VOCABULARY AND GRAMMAR WORKSHEET.
- Vocabulary box with meanings or examples
- Short grammar explanation
- Practice exercises (fill in the blanks / choose the correct answer)
`;
    }

    if (skill === "reading") {
      task = `
Create a READING COMPREHENSION WORKSHEET.
- Short reading text suitable for Grade ${grade}
- Pre-reading, while-reading, and post-reading questions
`;
    }

    if (skill === "speaking") {
      task = `
Create a SPEAKING ACTIVITY.
- Clear task instructions
- Useful vocabulary or sentence starters
- Encourage students to express personal ideas
`;
    }

    if (skill === "writing") {
      task = `
Create a WRITING TASK.
- Clear writing purpose
- Simple structure guidance
- Example sentence starters
`;
    }

    if (skill === "project") {
      task = `
Create a SMALL PROJECT-BASED TASK.
- Group work
- Clear final product (poster / slides)
- Simple assessment criteria
`;
    }

    const fullPrompt = `
You are an AI teaching assistant specialized in designing VISUAL LEARNING MATERIALS
for lower secondary English students using CANVA AI.

GRADE:
${grade}

SUBJECT:
English (THCS)

TOPIC:
${topic}

TASK:
${task}

REQUIREMENTS:
- Age-appropriate language
- Clear and student-friendly design
- Suitable for Canva AI
- Can be used online or printed
`.trim();

    setPrompt(fullPrompt);
  };

  return (
    <div style={{ background: "#f2f5f9", minHeight: "100vh" }}>
      {/* HEADER */}
      <header
        style={{
          background: "#1e3a8a",
          color: "white",
          padding: "20px 0",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>
          🎓 Mr. Cảnh’s Canva AI Assistant
        </h1>
        <p style={{ margin: 0, opacity: 0.9 }}>
          English Teaching Assistant for Lower Secondary School
        </p>
      </header>

      {/* MAIN */}
      <main
        style={{
          maxWidth: 900,
          margin: "30px auto",
          background: "white",
          padding: 30,
          borderRadius: 8,
        }}
      >
        <p style={{ color: "#444" }}>
          Chọn lớp – kỹ năng – chủ đề. Trợ lý sẽ tạo prompt chuẩn để dùng trực tiếp trong Canva AI.
        </p>

        <label>Lớp</label>
        <select
          style={{ width: "100%", padding: 8 }}
          onChange={(e) => setGrade(e.target.value)}
        >
          <option value="6">Lớp 6</option>
          <option value="7">Lớp 7</option>
          <option value="8">Lớp 8</option>
          <option value="9">Lớp 9</option>
        </select>

        <label style={{ display: "block", marginTop: 12 }}>
          Kỹ năng
        </label>
        <select
          style={{ width: "100%", padding: 8 }}
          onChange={(e) => setSkill(e.target.value as Skill)}
        >
          <option value="vocab">Vocabulary & Grammar</option>
          <option value="reading">Reading</option>
          <option value="speaking">Speaking</option>
          <option value="writing">Writing</option>
          <option value="project">Project</option>
        </select>

        <label style={{ display: "block", marginTop: 12 }}>
          Chủ đề / Unit
        </label>
        <input
          placeholder="Ví dụ: Unit 3 – My Friends"
          style={{ width: "100%", padding: 8 }}
          onChange={(e) => setTopic(e.target.value)}
        />

        <button
          onClick={generatePrompt}
          style={{
            marginTop: 20,
            padding: "10px 20px",
            background: "#1e3a8a",
            color: "white",
            border: "none",
            borderRadius: 4,
            fontSize: 16,
          }}
        >
          GENERATE PROMPT
        </button>

        <pre
          style={{
            marginTop: 25,
            padding: 15,
            background: "#f9fafb",
            whiteSpace: "pre-wrap",
            border: "1px solid #ddd",
          }}
        >
          {prompt}
        </pre>
      </main>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: 15,
          fontSize: 14,
          color: "#555",
        }}
      >
        Designed by <strong>Mr. Cảnh</strong> – English Teacher
      </footer>
    </div>
  );
}
