import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  FileText,
  Lightbulb,
  BookMarked,
  Presentation,
} from "lucide-react";
import { Layout } from "../components/Layout";
import { getLesson, getYear } from "../data/curriculum";

const RESOURCE_ICONS = {
  pptx: Presentation,
  pdf: FileText,
};

export default function LessonPage() {
  const { yearId, lessonId } = useParams();
  const lesson = getLesson(yearId, lessonId);
  const year = getYear(yearId);

  if (!lesson) {
    return (
      <Layout>
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="text-slate-600">Lesson not found.</p>
          <Link to="/curriculum" className="btn-primary mt-4 inline-flex">
            Back to Curriculum
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <Link
            to={`/curriculum/${yearId}`}
            className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-ca-blue hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to {year?.label}
          </Link>
          <p className="text-xs font-bold uppercase tracking-widest text-ca-blue">
            {year?.label} · Lesson {lesson.number}
          </p>
          <h1 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">{lesson.title}</h1>
          <p className="mt-2 text-slate-600">{lesson.duration}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-10">
        {/* Learning objective */}
        <section className="card mb-6 border-l-4 border-l-ca-yellow bg-ca-yellow/5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 h-6 w-6 shrink-0 text-ca-yellow-dark" />
            <div>
              <h2 className="font-bold text-slate-900">Learning Objective</h2>
              <p className="mt-2 leading-relaxed text-slate-700">{lesson.objective}</p>
            </div>
          </div>
        </section>

        {/* Vocabulary */}
        {lesson.vocabulary?.length > 0 && (
          <section className="card mb-6">
            <h2 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
              <BookMarked className="h-5 w-5 text-ca-blue" /> Vocabulary
            </h2>
            <div className="flex flex-wrap gap-2">
              {lesson.vocabulary.map((word) => (
                <span
                  key={word}
                  className="rounded-full bg-ca-blue-light px-4 py-2 text-sm font-semibold text-ca-blue"
                >
                  {word}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Overview */}
        <section className="card mb-6">
          <h2 className="mb-3 font-bold text-slate-900">Lesson Overview</h2>
          <p className="leading-relaxed text-slate-700">{lesson.overview}</p>
        </section>

        {/* Resources */}
        {lesson.resources?.length > 0 && (
          <section className="card mb-6">
            <h2 className="mb-4 font-bold text-slate-900">Resources</h2>
            <div className="space-y-3">
              {lesson.resources.map((res) => {
                const Icon = RESOURCE_ICONS[res.type] || FileText;
                return (
                  <div
                    key={res.name}
                    className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-ca-blue" />
                      <div>
                        <p className="font-medium text-slate-900">{res.name}</p>
                        <p className="text-xs text-slate-500">
                          {res.type.toUpperCase()} · {res.size}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="rounded-full bg-ca-yellow px-4 py-2 text-xs font-bold text-slate-900 transition hover:bg-ca-yellow-dark"
                    >
                      Download
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Downloads */}
        {lesson.downloads?.length > 0 && (
          <section className="card mb-6">
            <h2 className="mb-4 font-bold text-slate-900">Downloads & Worksheets</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {lesson.downloads.map((dl) => (
                <button
                  key={dl}
                  type="button"
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 text-left transition hover:border-ca-blue/30 hover:shadow-soft"
                >
                  <Download className="h-5 w-5 text-ca-blue" />
                  <span className="text-sm font-medium text-slate-900">{dl}</span>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Teacher notes */}
        {lesson.teacherNotes && (
          <section className="card border-ca-blue/20 bg-ca-blue-light/30">
            <h2 className="mb-3 font-bold text-slate-900">Teacher Notes</h2>
            <p className="leading-relaxed text-slate-700">{lesson.teacherNotes}</p>
          </section>
        )}

        {/* Nav */}
        <div className="mt-10 flex justify-between">
          {lesson.number > 1 && (
            <Link
              to={`/curriculum/${yearId}/${yearId}-l${lesson.number - 1}`}
              className="btn-outline"
            >
              ← Previous Lesson
            </Link>
          )}
          {lesson.number < 12 && (
            <Link
              to={`/curriculum/${yearId}/${yearId}-l${lesson.number + 1}`}
              className="btn-primary ml-auto"
            >
              Next Lesson →
            </Link>
          )}
        </div>
      </div>
    </Layout>
  );
}
