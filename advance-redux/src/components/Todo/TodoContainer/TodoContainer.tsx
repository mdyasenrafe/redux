import { useAppSelector } from "@/redux/hooks";
import { TodoCard, TodoFilter } from "..";
import AddTodoModal from "../AddTodoModal/AddTodoModal";
import { TTodo } from "@/redux/features/todo/types";

export function TodoContainer() {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos.map((item: TTodo) => (
            <TodoCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
