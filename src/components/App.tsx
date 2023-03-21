"use client";

import { RootState, addOrUpdate } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Input } from "@/components/Input";
import { Table } from "@/components/table";
import styles from "./page.module.css";

type DataItem = {
  id: string;
  email: string;
  name: string;
};

export default function MainApp() {
  //const [state, setState] = useState<DataItem[]>([]);
  const state = useSelector((state: RootState) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3001/Items");
    eventSource.onmessage = ({ data }) => {
      const { item } = JSON.parse(data);
      dispatch(addOrUpdate(item));
    };
  }, [dispatch]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  //   function handleUpdateState(item: DataItem) {
  //     console.log(item);
  //     const newState = [...state];
  //     const index = newState.findIndex((i) => i.id === item.id);
  //     if (index === -1) {
  //       newState.push(item);
  //     } else {
  //       newState[index] = item;
  //     }
  //     setState(newState);
  //   }

  const handleSubmit = async (data: { name: string; email: string }) => {
    const response = await fetch("http://localhost:3001", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <main className="mx-20">
      <div className="p-4 space-y-10 w-full h-screen bg-yellow-200">
        <Input
          onButtonClick={async (value) => {
            await handleSubmit(value);
          }}
        />
        <div className="bg-green-200">
          <Table data={state} columns={["id", "name", "email"]} />
        </div>
      </div>
    </main>
  );
}
