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

export default function Home() {
  const [grade, setGrade] = useState("6");
  const [unit, setUnit] = useState("");
  const [skill, setSkill] = useState<Skill>("Vocabulary");
  const [copied, setCopied] = useState(false);

  const generateAndCopyPrompt = async () => {
    if (!unit) {
      alert("Please select a unit.");
      return;
    }

    const taskBySkill: Record<Skill, string> = {
      Vocabulary: `
Create a VOCABULARY WORKSHEET.
Include a vocabulary box, visual support, and practice activities
(matching, fill in the blanks, multiple choice, odd one out).
Assessment focus: word recognition, meaning, contextual use.
`,
      Grammar: `
Create a GRAMMAR PRACTICE WORKSHEET.
Include a short explanation, examples, and exercises
(MCQs, sentence completion, error correction, transformation).
Assessment focus: form, meaning, usage.
`,
      Reading: `
Create a READING COMPREHENSION WORKSHEET.
Include a short text, pre-reading, while-reading, and post-reading tasks.
Assessment focus: main ideas, details, inference.
`,
      Speaking: `
Create a SPEAKING ACTIVITY.
Include pair/group instructions, sentence starters, prompts or role-play.
Assessment focus: fluency, pronunciation, relevance.
`,
      Writing: `
Create a WRITING TASK.
Include clear purpose, structure guidance, sentence starters, word limit.
Assessment focus: content, organization, accuracy.
`,
      "Looking Back + Project-based Learning": `
Create a REVIEW AND PROJECT-BASED TASK.
Include revision activities and a small group project with a simple rubric.
Assessment focus: language use, content, creativity, teamwork.
`,
    };

    const prompt = `
You are Mr. Cảnh’s AI teaching assistant, specializing in the design of high-quality
visual and interactive learning materials for lower secondary English students
(Grades 6–9) in Vietnam.

Aligned with the MOET Global Success curriculum (CTGDPT 2018),
focusing on in-depth language knowledge, systematic textbook exploration,
and higher-order thinking skills.

GRADE: ${grade}
SUBJECT: English (Lower Secondary – Vietnam)
UNIT: ${unit}
SKILL FOCUS: ${skill}

TASK:
${taskBySkill[skill]}

DESIGN & INTERACTION:
- Age-appropriate language
- Clear, student-friendly layout
- Suitable for Canva AI and Canva Code
- Explanations before practice
- Interactive quiz elements

TEACHER INFO:
Name: CANH IT
Contact: 0988809539

FEEDBACK:
Correct → GREEN (✓)
Incorrect → RED (✗)
Use encouraging messages and allow retries.

USAGE:
Classroom teaching, homework assignments,
and self-study on phone or laptop.
`.trim();

    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <main style={{ maxWidth: 960, margin: "40px auto", fontFamily: "Arial" }}>
      {/* HEADER */}
      <header style={{ textAlign: "center", marginBottom: 30 }}>
        <h2>PTDTBT TH & THCS Ba Trang</h2>
        <p>Xã Đặng Thùy Trâm, Quảng Ngãi</p>
        <h1>🎓 Mr. Cảnh’s Canva AI Teaching Assistant</h1>
      </header>

      {/* GRADE */}
      <label>Grade</label>
      <select
        value={grade}
        onChange={(e) => {
          setGrade(e.target.value);
          setUnit("");
        }}
        style={{ width: "100%", padding: 8 }}
      >
        <option value="6">Grade 6</option>
        <option value="7">Grade 7</option>
        <option value="8">Grade 8</option>
        <option value="9">Grade 9</option>
      </select>

      {/* UNIT */}
      <label style={{ display: "block", marginTop: 12 }}>Unit</label>
      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        style={{ width: "100%", padding: 8 }}
      >
        <option value="">-- Select a unit --</option>
        {unitsByGrade[grade].map((u) => (
          <option key={u} value={u}>
            {u}
          </option>
        ))}
      </select>

      {/* SKILL */}
      <label style={{ display: "block", marginTop: 12 }}>Skill Focus</label>
      <select
        value={skill}
        onChange={(e) => setSkill(e.target.value as Skill)}
        style={{ width: "100%", padding: 8 }}
      >
        <option>Vocabulary</option>
        <option>Grammar</option>
        <option>Reading</option>
        <option>Speaking</option>
        <option>Writing</option>
        <option>Looking Back + Project-based Learning</option>
      </select>

      {/* BUTTON */}
      <button
        onClick={generateAndCopyPrompt}
        style={{
          marginTop: 24,
          padding: "14px 26px",
          fontSize: 16,
          background: copied ? "#16a34a" : "#1e3a8a",
          color: "white",
          border: "none",
          borderRadius: 6,
          width: "100%",
        }}
      >
        {copied ? "✔ PROMPT COPIED – PASTE INTO CANVA" : "GENERATE & COPY PROMPT"}
      </button>
    </main>
  );
}
