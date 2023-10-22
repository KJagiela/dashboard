import { UseTRPCQueryResult } from "@trpc/react-query/shared";
import { Fragment } from "react";
import { api } from "~/utils/api";
import { Task } from "~/utils/constants";

type RenderedContentProps = {
  entries: any;
  mutation: any;
};

function RenderedContent({ entries, mutation }: RenderedContentProps) {
  // if (!entries || !entries.data) {
  //   return (
  //     <Fragment>
  //       <h3 className="text-2xl font-bold">Loading...</h3>
  //     </Fragment>
  //   )
  // }

  const addEntry = () => {
    mutation.mutate();
  }

  return (
    <Fragment>
      <div className="flex justify-between gap-2">
        {/* <h3 className="text-2xl font-bold">{entries.data.title}</h3> */}
        <p>{entries.data}</p>
      </div>
      <div className="flex justify-end">
        <button className="bg-coolgray rounded p-2" onClick={addEntry} disabled={mutation.isLoading}>Add new entry</button>
      </div>
    </Fragment>
  )

}

export default function MortgageTile() {
  const allEntries = api.mortgage.fetchAll.useQuery();
  const mutation = api.mortgage.addNew.useMutation({ onSuccess: () => { allEntries.refetch() } })

  // TODO: change div color if the task is well overdue
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 w-4/5">
      <RenderedContent entries={allEntries} mutation={mutation} />
    </div>
  );
}