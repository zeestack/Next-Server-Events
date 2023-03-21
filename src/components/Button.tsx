"use client";

import { AppDispatch, RootState, setTodos, store } from "@/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function Button() {
  const dispatcher = useAppDispatch();

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        dispatcher(setTodos({ name: "do the task#", id: "" }));
      }}
    >
      Add New Task
    </button>
  );
}
