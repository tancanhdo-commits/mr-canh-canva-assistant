"use client";
import { useState } from "react";

/* ================== UNIT DATA BY GRADE ================== */
const unitsByGrade: Record<string, string[]> = {
  "6": [
    "Unit 1: My New School",
    "Unit 2: My Home",
    "Unit 3: My Friends",
    "Review 1 (Units 1–3)",
    "Unit 4: My Neighbourhood",
    "Unit 5: Natural Wonders of the World",
    "Unit 6: Our Tet Holiday",
    "Review 2 (Units 4–6)",
    "Unit 7: Television",
    "Unit 8: Sports and Games",
    "Unit 9: Cities of the World",
    "Review 3 (Units 7–9)",
    "Unit 10: Our Houses in the Future",
    "Unit 11: Our Greener World",
    "Unit 12: Robots",
    "Review 4 (Units 10–12)",
  ],
  "7": [
    "Unit 1: Hobbies",
    "Unit 2: Healthy Living",
    "Unit 3: Community Service",
    "Review 1 (Units 1–3)",
    "Unit 4: Music and Arts",
    "Unit 5: Food and Drink",
    "Unit 6: A Visit to a School",
    "Review 2 (Units 4–6)",
    "Unit 7: Traffic",
    "Unit 8: Films",
    "Unit 9: Festivals Around the World",
    "Review 3 (Units 7–9)",
    "Unit 10: Energy Sources",
    "Unit 11: Travelling in the Future",
    "Unit 12: English-Speaking Countries",
    "Review 4 (Units 10–12)",
  ],
  "8": [
    "Unit 1: Leisure Time",
    "Unit 2: Life in the Countryside",
    "Unit 3: Teenagers",
    "Review 1 (Units 1–3)",
    "Unit 4: Ethnic Groups of Viet Nam",
    "Unit 5: Our Customs and Traditions",
    "Unit 6: Lifestyles",
    "Review 2 (Units 4–6)",
    "Unit 7: Environmental Protection",
    "Unit 8: Shopping",
    "Unit 9: Natural Disasters",
    "Review 3 (Units 7–9)",
    "Unit 10: Communication in the Future",
    "Unit 11: Science and Technology",
    "Unit 12: Life on Other Planets",
    "Review 4 (Units 10–12)",
  ],
  "9": [
    "Unit 1: Local Community",
    "Unit 2: City Life",
    "Unit 3: Healthy Living for Teens",
    "Review 1 (Units 1–3)",
    "Unit 4: Remembering the Past",
    "Unit 5: Our Experiences",
    "Unit 6: Vietnamese Lifestyle: Then and Now",
    "Review 2 (Units 4–6)",
    "Unit 7: Natural Wonders of the World",
    "Unit 8: Tourism",
    "Unit 9: World Englishes",
    "Review 3 (Units 7–9)",
    "Unit 10: Planet Earth",
    "Unit 11: Electronic Devices",
    "Unit 12: Career Choices",
    "Review 4 (Units 10–12)",
  ],
};

type Skill =
  | "Vocabulary"
  | "Grammar"
  | "Reading"
  | "Speaking"
  | "Writing"
  | "Looking Back + Project-based Learning";

/* ================== PAGE ================== */
export default function Home() {
  const [grade, setGrade] = useState("6");
  const [unit, setUnit] = useState("");
  const [skill, setSkill] = useState<Skill>("Vocabulary");
  const [copied, setCopied] = useState(false);

  const taskBySkill: Record<Skill, string> = {
    Vocabulary:
      "Create a VOCABULARY WORKSHEET with visuals and practice activities.",
    Grammar:
      "Create a GRAMMAR PRACTICE WORKSHEET with explanation and exercises.",
    Reading:
      "Create a READING COMPREHENSION WORKSHEET with pre/while/post tasks.",
    Speaking:
      "Create a SPEAKING ACTIVITY with prompts, pair/group work.",
    Writing:
      "Create a WRITING TASK with guidance, sentence starters, checklist.",
    "Looking Back + Project-based Learning":
      "Create a REVIEW and PROJECT-BASED LEARNING task.",
  };

  const generateAndCopyPrompt = async () => {
    if (!unit) {
      alert("⚠️ Vui lòng chọn Unit trước.");
      return;
    }

    const prompt = `
You are Mr. Cảnh’s AI teaching assistant for Vietnamese lower secondary students.

GRADE: ${grade}
SUBJECT: English (Lower Secondary – Vietnam)
UNIT: ${unit}
SKILL FOCUS: ${skill}

TASK:
${taskBySkill[skill]}

Design student-friendly, visual materials aligned with MOET Global Success.
`.trim();

    await navigator.clipboard.writeText(prompt);
    setCopied(true);

    alert(
      "✅ Prompt đã được sao chép!\n\n" +
        "Trong Canva AI Code:\n" +
        "👉 Click vào ô nhập\n" +
        "👉 Nhấn Ctrl + V (Cmd + V trên Mac)\n" +
        "👉 Nhấn Generate"
    );

    window.open("https://www.canva.com/ai/code", "_blank");
  };

  return (
    <main style={{ maxWidth: 960, margin: "40px auto", fontFamily: "Arial" }}>
      {/* HEADER */}
      <header style={{ textAlign: "center", marginBottom: 30 }}>
        <h2 style={{ color: "#dc2626", fontWeight: 700 }}>
          Trường PTDTBT TH & THCS Ba Trang
        </h2>

        <p style={{ color: "#374151" }}>
          Xã Đặng Thùy Trâm, Quảng Ngãi
        </p>

        <h1
          style={{
            color: "#facc15",
            fontWeight: 800,
            textShadow: "1px 1px 2px rgba(0,0,0,0.25)",
          }}
        >
          🎓 Mr. Cảnh’s Canva AI Teaching Assistant
        </h1>
      </header>

      {/* GRADE */}
      <label>Grade</label>
      <select
        value={grade}
        onChange={(e) => {
          setGrade(e.target.value);
          setUnit("");
        }}
        style={{ width: "100%", padding: 10 }}
      >
        <option value="6">Grade 6</option>
        <option value="7">Grade 7</option>
        <option value="8">Grade 8</option>
        <option value="9">Grade 9</option>
      </select>

      {/* UNIT */}
      <label style={{ display: "block", marginTop: 14 }}>Unit</label>
      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        style={{ width: "100%", padding: 10 }}
      >
        <option value="">-- Select a unit --</option>
        {unitsByGrade[grade].map((u) => (
          <option key={u} value={u}>
            {u}
          </option>
        ))}
      </select>

      {/* SKILL */}
      <label style={{ display: "block", marginTop: 14 }}>Skill Focus</label>
      <select
        value={skill}
        onChange={(e) => setSkill(e.target.value as Skill)}
        style={{ width: "100%", padding: 10 }}
      >
        {(Object.keys(taskBySkill) as Skill[]).map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>

      {/* BUTTON */}
      <button
        onClick={generateAndCopyPrompt}
        style={{
          marginTop: 28,
          padding: "16px",
          fontSize: 16,
          background: copied ? "#16a34a" : "#1e3a8a",
          color: "white",
          border: "none",
          borderRadius: 6,
          width: "100%",
        }}
      >
        {copied
          ? "✔ PROMPT ĐÃ COPY – DÁN VÀO CANVA"
          : "GENERATE LESSON & OPEN CANVA"}
      </button>
    </main>
  );
}
