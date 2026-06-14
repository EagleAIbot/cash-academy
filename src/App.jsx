import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import TeacherDashboard from "./pages/TeacherDashboard";
import CurriculumPage from "./pages/Curriculum";
import LessonPage from "./pages/Lesson";
import MoneyTown from "./pages/MoneyTown";
import Admin from "./pages/Admin";
import StagePage from "./pages/Stage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<TeacherDashboard />} />
      <Route path="/curriculum" element={<Navigate to="/curriculum/y3" replace />} />
      <Route path="/curriculum/:yearId" element={<CurriculumPage />} />
      <Route path="/curriculum/:yearId/:lessonId" element={<LessonPage />} />
      <Route path="/money-town" element={<MoneyTown />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/stages/:stageId" element={<StagePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
