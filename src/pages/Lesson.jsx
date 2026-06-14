import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  FileText,
  Lightbulb,
  BookMarked,
  Presentation,
  AlertTriangle,
  Users,
  Calculator,
  Heart,
} from "lucide-react";
import { Layout } from "../components/Layout";
import { getLesson, getYear } from "../data/curriculum";

const RESOURCE_ICONS = { pptx: Presentation, pdf: FileText };

function ResourceRow({ res }) {
  const Icon = RESOURCE_ICONS[res.type] || FileText;
  const inner = (
    <>
      <Icon className="h-5 w-5 text-ca-blue" />
      <div>
        <p className="font-medium text-slate-900">{res.name}</p>
        <p className="text-xs text-slate-500">
          {res.type.toUpperCase()}
          {res.size ? ` · ${res.size}` : ""}
        </p>
      </div>
    </>
  );

  if (res.href) {
    return (
      <a
        href={res.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 transition hover:border-ca-blue/30 hover:bg-white"
      >
        <div className="flex items-center gap-3">{inner}</div>
        <span className="rounded-full bg-ca-yellow px-4 py-2 text-xs font-bold text-slate-900">Download</span>
      </a>
    );
  }

  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
      <div className="flex items-center gap-3">{inner}</div>
      <button type="button" className="rounded-full bg-ca-yellow px-4 py-2 text-xs font-bold text-slate-900">
        Download
      </button>
    </div>
  );
}

export default function LessonPage() {
  const { yearId, lessonId } = useParams();
  const lesson = getLesson(yearId, lessonId);
  const year = getYear(yearId);

  if (!lesson) {
    return (
      <Layout>
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="text-slate-600">Lesson not found.</p>
          <Link to="/curriculum" className="btn-primary mt-4 inline-flex">Back to Curriculum</Link>
        </div>
      </Layout>
    );
  }

  const vocabIsObjects = lesson.vocabulary?.[0]?.term;

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
          {lesson.unit && (
            <p className="text-xs font-bold uppercase tracking-widest text-ca-yellow-dark">{lesson.unit}</p>
          )}
          <p className="mt-1 text-xs font-bold uppercase tracking-widest text-ca-blue">
            {year?.label} · Lesson {lesson.number}
          </p>
          <h1 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">{lesson.title}</h1>
          <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-600">
            <span>{lesson.duration}</span>
            {lesson.role && <span>· Role: {lesson.role}</span>}
            {lesson.rolePlay && <span>· {lesson.rolePlay}</span>}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-10">
        <section className="card mb-6 border-l-4 border-l-ca-yellow bg-ca-yellow/5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 h-6 w-6 shrink-0 text-ca-yellow-dark" />
            <div>
              <h2 className="font-bold text-slate-900">Learning Objective</h2>
              <p className="mt-2 leading-relaxed text-slate-700">{lesson.objective}</p>
              {lesson.teacherObjective && (
                <p className="mt-2 text-sm text-slate-600">
                  <span className="font-semibold">Teacher objective:</span> {lesson.teacherObjective}
                </p>
              )}
            </div>
          </div>
        </section>

        {lesson.vocabulary?.length > 0 && (
          <section className="card mb-6">
            <h2 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
              <BookMarked className="h-5 w-5 text-ca-blue" /> Key Vocabulary
            </h2>
            {vocabIsObjects ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {lesson.vocabulary.map((v) => (
                  <div key={v.term} className="rounded-xl bg-ca-blue-light/50 px-4 py-3">
                    <p className="font-bold text-ca-blue">{v.term}</p>
                    <p className="mt-1 text-sm text-slate-700">{v.def}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {lesson.vocabulary.map((word) => (
                  <span key={word} className="rounded-full bg-ca-blue-light px-4 py-2 text-sm font-semibold text-ca-blue">
                    {word}
                  </span>
                ))}
              </div>
            )}
          </section>
        )}

        {(lesson.mathsSkills?.length > 0 || lesson.psheLinks?.length > 0) && (
          <section className="mb-6 grid gap-4 sm:grid-cols-2">
            {lesson.mathsSkills?.length > 0 && (
              <div className="card">
                <h2 className="mb-2 flex items-center gap-2 font-bold text-slate-900">
                  <Calculator className="h-5 w-5 text-ca-blue" /> Maths Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {lesson.mathsSkills.map((s) => (
                    <span key={s} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{s}</span>
                  ))}
                </div>
              </div>
            )}
            {lesson.psheLinks?.length > 0 && (
              <div className="card">
                <h2 className="mb-2 flex items-center gap-2 font-bold text-slate-900">
                  <Heart className="h-5 w-5 text-ca-blue" /> PSHE Links
                </h2>
                <div className="flex flex-wrap gap-2">
                  {lesson.psheLinks.map((s) => (
                    <span key={s} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{s}</span>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {lesson.misconceptions?.length > 0 && (
          <section className="card mb-6 border-amber-200 bg-amber-50">
            <h2 className="mb-3 flex items-center gap-2 font-bold text-slate-900">
              <AlertTriangle className="h-5 w-5 text-amber-600" /> Common Misconceptions
            </h2>
            <ul className="space-y-2">
              {lesson.misconceptions.map((m) => (
                <li key={m} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  {m}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="card mb-6">
          <h2 className="mb-3 font-bold text-slate-900">Lesson Overview</h2>
          <p className="leading-relaxed text-slate-700">{lesson.overview}</p>
        </section>

        {lesson.teachingInput?.length > 0 && (
          <section className="card mb-6">
            <h2 className="mb-4 font-bold text-slate-900">Teaching Input</h2>
            <ol className="space-y-3">
              {lesson.teachingInput.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ca-blue text-xs font-bold text-white">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </section>
        )}

        {lesson.mainTask && (
          <section className="card mb-6 border-ca-blue/20 bg-ca-blue-light/20">
            <h2 className="mb-3 flex items-center gap-2 font-bold text-slate-900">
              <Users className="h-5 w-5 text-ca-blue" /> Main Task
            </h2>
            <p className="leading-relaxed text-slate-700">{lesson.mainTask}</p>
          </section>
        )}

        {lesson.jobCards?.length > 0 && (
          <section className="card mb-6">
            <h2 className="mb-4 font-bold text-slate-900">Job Centre Role Cards</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {lesson.jobCards.map((job) => (
                <div key={job.role} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <p className="font-bold text-slate-900">Could you be a {job.role.toLowerCase()}?</p>
                  <ul className="mt-2 space-y-1">
                    {job.tasks.map((t) => (
                      <li key={t} className="text-sm text-slate-600">· {t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {lesson.plenary?.length > 0 && (
          <section className="card mb-6">
            <h2 className="mb-3 font-bold text-slate-900">Plenary</h2>
            <ul className="space-y-2">
              {lesson.plenary.map((p) => (
                <li key={p} className="text-sm leading-relaxed text-slate-700">· {p}</li>
              ))}
            </ul>
          </section>
        )}

        {lesson.resources?.length > 0 && (
          <section className="card mb-6">
            <h2 className="mb-4 font-bold text-slate-900">Resources</h2>
            <div className="space-y-3">
              {lesson.resources.map((res) => (
                <ResourceRow key={res.name} res={res} />
              ))}
            </div>
          </section>
        )}

        {lesson.downloads?.length > 0 && (
          <section className="card mb-6">
            <h2 className="mb-4 font-bold text-slate-900">Downloads & Worksheets</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {lesson.downloads.map((dl) => (
                <div key={dl} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4">
                  <Download className="h-5 w-5 text-ca-blue" />
                  <span className="text-sm font-medium text-slate-900">{dl}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {lesson.teacherNotes && (
          <section className="card border-ca-blue/20 bg-ca-blue-light/30">
            <h2 className="mb-3 font-bold text-slate-900">Teacher Notes</h2>
            <p className="leading-relaxed text-slate-700">{lesson.teacherNotes}</p>
          </section>
        )}

        <div className="mt-10 flex justify-between gap-4">
          {lesson.prevId ? (
            <Link to={`/curriculum/${yearId}/${lesson.prevId}`} className="btn-outline">← Previous Lesson</Link>
          ) : <span />}
          {lesson.nextId ? (
            <Link to={`/curriculum/${yearId}/${lesson.nextId}`} className="btn-primary">Next Lesson →</Link>
          ) : null}
        </div>
      </div>
    </Layout>
  );
}
