import { Navigate, useParams } from "react-router-dom";
import Roadmap from "./Roadmap";

/** Legacy /stages/:id routes → full roadmap (optionally scroll to stage) */
export default function StagePage() {
  const { stageId } = useParams();
  const numeric = stageId && /^\d+$/.test(stageId) ? stageId : null;

  if (numeric) {
    return <Navigate to={`/roadmap#stage-${numeric}`} replace />;
  }

  const slugMap = { digital: 1, connect: 2, complete: 3, home: 4, future: 5 };
  const id = slugMap[stageId];
  if (id) {
    return <Navigate to={`/roadmap#stage-${id}`} replace />;
  }

  return <Roadmap />;
}
