import { useAddTodosMutation } from "@/api/api";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TTodo } from "@/redux/features/todo/types";
import { DialogClose } from "@radix-ui/react-dialog";
import { FormEvent, useState } from "react";

export default function AddTodoModal() {
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescripiton] = useState("");

  // const dispatch = useAppDispatch();

  // apis
  const [addTodo] = useAddTodosMutation();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // console.log({  });
    const id = Math.random().toString(32).substring(2, 7);
    const bodyData: TTodo = {
      id,
      title: taskTitle,
      description,
      isCompleted: false,
    };
    // dispatch(addTodo(bodyData));
    addTodo(bodyData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl ">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add your tasks that you want to finish
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Name
              </Label>
              <Input
                id="task"
                className="col-span-3"
                onBlur={(e) => setTaskTitle(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                className="col-span-3"
                onBlur={(e) => setDescripiton(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
