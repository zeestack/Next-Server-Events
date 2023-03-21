import { Todo } from "@/store";

export function Display({
  todos,
  resolve,
}: {
  todos: Todo[];
  resolve: (id: string) => void;
}) {
  return (
    <div>
      <code> {`Total Tasks todo: ${todos ? todos.length : 0}`} </code>
      <div className="space-y-4">
        {todos.map((todo) => (
          <div key={todo.id} className="flex flex-row items-center space-x-4">
            <li key={todo.id} className="text-xl">
              {`${todo.name} ${todo.id}`}
            </li>
            <button
              className="btn btn-outline btn-sm"
              onClick={() => resolve(todo.id)}
            >
              Mark Complete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
