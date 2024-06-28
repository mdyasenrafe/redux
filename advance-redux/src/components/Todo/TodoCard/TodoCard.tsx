export function TodoCard() {
  return (
    <div className="bg-white  rounded-md flex justify-between items-center p-3 border">
      <input type="checkbox" name="" id="" />
      <p>Todo Title</p>
      <p>description</p>
      <div>
        <button>del</button>
        <button>edit</button>
      </div>
    </div>
  );
}
