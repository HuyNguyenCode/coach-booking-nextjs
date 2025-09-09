"use client";

import { useState } from "react";
import CoachManager from "./CoachManage";
import SpecialityManage from "./SpecialityManage";
// import StudentManage from "./StudentManage";
import UserManage from "./UserManage";

const tabs = [
  { id: "coach", label: "Coach Manager" },
  { id: "speciality", label: "Speciality Manage" },
  { id: "student", label: "Student Manage" },
  { id: "user", label: "User Redux" },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("coach");

  const renderContent = () => {
    switch (activeTab) {
      case "coach":
        return <CoachManager />;
      case "speciality":
        return <SpecialityManage />;
      case "student":
      // return <StudentManage />;
      case "user":
        return <UserManage />;
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Admin Dashboard
      </h1>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "15px", marginBottom: "30px" }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "10px 20px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              background: activeTab === tab.id ? "#0070f3" : "#f0f0f0",
              color: activeTab === tab.id ? "#fff" : "#000",
              cursor: "pointer",
              transition: "0.2s",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Nội dung theo tab */}
      <div
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {renderContent()}
      </div>
    </div>
  );
}
