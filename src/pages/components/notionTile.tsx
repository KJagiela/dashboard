import { UseTRPCQueryResult } from "@trpc/react-query/shared";
import { Fragment } from "react";
import { api } from "~/utils/api";
import { Task } from "~/utils/constants";

type RenderedContentProps = {
  task: UseTRPCQueryResult<Task, any>;
  mutation: any;
};

function RenderedContent({ task, mutation }: RenderedContentProps) {
  if (!task || !task.data) {
    return (
      <Fragment>
        <h3 className="text-2xl font-bold">Loading...</h3>
      </Fragment>
    )
  }

  const handleCompleted = () => {
    mutation.mutate(task.data.id);
  }

  return (
    <Fragment>
      <div className="flex justify-between gap-2">
        <h3 className="text-2xl font-bold">{task.data.title}</h3>
        <p>{task.data.dueDate}</p>
      </div>
      <div className="flex justify-end">
        <button className="bg-coolgray rounded p-2" onClick={handleCompleted} disabled={mutation.isLoading}>Mark as done</button>
      </div>
    </Fragment>
  )

}

export default function NotionTile() {
  const task = api.notion.topPriority.useQuery();
  const mutation = api.notion.complete.useMutation({ onSuccess: () => { task.refetch() } })

  // TODO: change div color if the task is well overdue
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 w-4/5">
      <RenderedContent task={task} mutation={mutation} />
    </div>
  );
}