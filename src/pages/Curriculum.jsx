import { Link, useParams } from "react-router-dom";
import { BookOpen, Clock, Lock } from "lucide-react";
import { Layout } from "../components/Layout";
import { PageHeader } from "../components/ui";
import { LESSONS, YEARS, getYear } from "../data/curriculum";

export default function CurriculumPage() {
  const { yearId } = useParams();
  const year = getYear(yearId) || YEARS[0];
  const lessons = LESSONS[year.id] || [];

  return (
    <Layout>
      <PageHeader
        label="Curriculum"
        title={`${year.label} — Financial Literacy`}
        desc={`Ages ${year.age} · ${year.lessons} lessons · Aligned to National Curriculum`}
      />

      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Year tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {YEARS.map((y) => (
            <Link
              key={y.id}
              to={`/curriculum/${y.id}`}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                y.id === year.id
                  ? "bg-ca-blue text-white"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
              }`}
            >
              {y.label}
            </Link>
          ))}
        </div>

        {/* Lesson grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              to={lesson.placeholder ? "#" : `/curriculum/${year.id}/${lesson.id}`}
              onClick={lesson.placeholder ? (e) => e.preventDefault() : undefined}
              className={`card group relative ${
                lesson.placeholder
                  ? "cursor-default opacity-60"
                  : "hover:border-ca-blue/40 hover:shadow-lg"
              }`}
            >
              {lesson.placeholder && (
                <div className="absolute right-4 top-4">
                  <Lock className="h-4 w-4 text-slate-400" />
                </div>
              )}
              <span className="text-xs font-bold uppercase tracking-widest text-ca-blue">
                Lesson {lesson.number}
              </span>
              <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-ca-blue">
                {lesson.title}
              </h3>
              <div className="mt-3 flex items-center gap-3 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {lesson.duration}
                </span>
                {!lesson.placeholder && (
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" /> {lesson.resources?.length || 0} resources
                  </span>
                )}
              </div>
              {lesson.tags && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {lesson.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-ca-blue-light px-2.5 py-0.5 text-xs font-medium text-ca-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
