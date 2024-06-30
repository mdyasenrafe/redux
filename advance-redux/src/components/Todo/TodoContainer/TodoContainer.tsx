import { TodoCard, TodoFilter } from "..";
import AddTodoModal from "../AddTodoModal/AddTodoModal";
import { TTodo } from "@/redux/features/todo/types";
import { useGetTodosQuery } from "@/api/api";

export function TodoContainer() {
  // const { todos } = useAppSelector((state) => state.todos);
  const { data, isLoading } = useGetTodosQuery(undefined);

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {isLoading ? (
            <p>loading...</p>
          ) : (
            data?.map((item: TTodo) => <TodoCard item={item} key={item.id} />)
          )}
        </div>
      </div>
    </div>
  );
}
