"use client";
import { useState } from "react";

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
  const [prompt, setPrompt] = useState("");

  const generatePrompt = () => {
    let taskDetails = "";

    if (skill === "Vocabulary") {
      taskDetails = `
Create a VOCABULARY WORKSHEET.

Include:
- A vocabulary box (word – meaning – example sentence)
- Visual support (icons or suggested images)
- Practice activities:
  + Matching words with meanings
  + Fill in the blanks
  + Choose the correct word
  + Odd one out (optional)

Assessment focus:
- Word recognition
- Understanding of meaning
- Contextual use
`;
    }

    if (skill === "Grammar") {
      taskDetails = `
Create a GRAMMAR PRACTICE WORKSHEET.

Include:
- A short, clear grammar explanation
- Simple and accurate example sentences
- Practice activities:
  + Choose the correct answer
  + Complete the sentences
  + Error correction
  + Sentence transformation (simple level)

Assessment focus:
- Form
- Meaning
- Basic use in context
`;
    }

    if (skill === "Reading") {
      taskDetails = `
Create a READING COMPREHENSION WORKSHEET.

Include:
- A short reading text suitable for the selected grade
- Pre-reading activities (prediction, guiding questions)
- While-reading tasks:
  + Multiple-choice questions
  + True / False statements
  + Short-answer questions
- Post-reading activities (reflection or discussion)

Assessment focus:
- Main ideas
- Key details
- Basic inference
`;
    }

    if (skill === "Speaking") {
      taskDetails = `
Create a SPEAKING ACTIVITY.

Include:
- Clear task instructions (pair work or group work)
- Useful vocabulary and sentence starters
- Speaking prompts or guiding questions
- Optional role-play or interview tasks

Assessment focus:
- Basic fluency
- Intelligible pronunciation
- Relevance and clarity of ideas
`;
    }

    if (skill === "Writing") {
      taskDetails = `
Create a WRITING TASK.

Include:
- Clear writing purpose and audience
- Simple structure guidance (outline or paragraph plan)
- Sentence starters or useful expressions
- Word limit appropriate for the selected grade

Assessment focus:
- Content relevance
- Organization
- Basic grammar and vocabulary accuracy
`;
    }

    if (skill === "Looking Back + Project-based Learning") {
      taskDetails = `
Create a REVIEW AND PROJECT-BASED TASK.

Include:
- Review activities:
  + Vocabulary revision
  + Grammar revision
  + Integrated skills (reading, writing, speaking)
- A small project task:
  + Clear group work instructions
  + Final product (poster, slides, or infographic)
  + Presentation or sharing activity
- A simple assessment rubric:
  + Language use
  + Content
  + Creativity
  + Teamwork
`;
    }

    const fullPrompt = `
You are Mr. Cảnh’s AI teaching assistant, specializing in the design of high-quality
visual and interactive learning materials for lower secondary English students
(Grades 6–9) in Vietnam.

Your work is fully aligned with the MOET Global Success curriculum (CTGDPT 2018),
with a strong emphasis on:
- In-depth language knowledge
- Systematic exploration of textbook content
- Development of deep understanding and higher-order thinking skills

GRADE:
${grade}

SUBJECT:
English (Lower Secondary – Vietnam, CTGDPT 2018)

UNIT:
${unit}

SKILL FOCUS:
${skill}

TASK DETAILS:
${taskDetails}

DESIGN & INTERACTION REQUIREMENTS:
- Use age-appropriate language for lower secondary students
- Clear, student-friendly and well-structured layout
- Visually attractive and suitable for Canva AI and Canva Code
- Provide explanations before practice tasks
- Include interactive quiz elements
- Teacher information:
  + Default name: CANH IT
  + Contact: 0988809539

FEEDBACK & MOTIVATION:
- Correct answers → GREEN (✓)
- Incorrect answers → RED (✗)
- Use positive messages such as:
  “Well done!”, “Great job!”, “Excellent!”, “Try again!”, “Almost there!”
- Allow students to retry when appropriate

USAGE CONTEXT:
Suitable for classroom teaching, homework assignments,
and self-study on phone or laptop.
`.trim();

    setPrompt(fullPrompt);
  };

  return (
    <main style={{ maxWidth: 900, margin: "40px auto", fontFamily: "Arial" }}>
      <h1>🎓 Mr. Cảnh’s Canva AI Teaching Assistant</h1>
      <p>
        Select grade, unit, and skill. The assistant will generate a ready-to-use
        prompt for Canva AI / Canva Code.
      </p>

      <label>Grade</label>
      <select
        style={{ width: "100%", padding: 8 }}
        onChange={(e) => setGrade(e.target.value)}
      >
        <option value="6">Grade 6</option>
        <option value="7">Grade 7</option>
        <option value="8">Grade 8</option>
        <option value="9">Grade 9</option>
      </select>

      <label style={{ display: "block", marginTop: 12 }}>Unit</label>
      <input
        placeholder="e.g. Unit 3 – My Friends"
        style={{ width: "100%", padding: 8 }}
        onChange={(e) => setUnit(e.target.value)}
      />

      <label style={{ display: "block", marginTop: 12 }}>Skill Focus</label>
      <select
        style={{ width: "100%", padding: 8 }}
        onChange={(e) => setSkill(e.target.value as Skill)}
      >
        <option>Vocabulary</option>
        <option>Grammar</option>
        <option>Reading</option>
        <option>Speaking</option>
        <option>Writing</option>
        <option>Looking Back + Project-based Learning</option>
      </select>

      <button
        onClick={generatePrompt}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          fontSize: 16,
          background: "#1e3a8a",
          color: "white",
          border: "none",
          borderRadius: 4,
        }}
      >
        GENERATE PROMPT
      </button>

      <pre
        style={{
          marginTop: 30,
          padding: 15,
          background: "#f9fafb",
          whiteSpace: "pre-wrap",
          border: "1px solid #ddd",
        }}
      >
        {prompt}
      </pre>
    </main>
  );
}
