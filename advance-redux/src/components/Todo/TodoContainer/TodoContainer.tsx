import { Button } from "@/components/ui/button";
import { TodoCard } from "..";
import AddTodoModal from "../AddTodoModal/AddTodoModal";

export function TodoContainer() {
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <AddTodoModal />
        <Button>Filter</Button>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
}
