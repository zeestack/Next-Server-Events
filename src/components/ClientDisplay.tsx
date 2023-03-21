"use client";

import { RootState, completeTask } from "@/store";
import { useDispatch, useSelector } from "react-redux";

import { Display } from "./Display";

export function ClientDisplay() {
  const todos = useSelector((store: RootState) => store.list);
  const dispatch = useDispatch();
  return <Display todos={todos} resolve={(id) => dispatch(completeTask(id))} />;
}
