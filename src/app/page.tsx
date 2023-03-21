"use client";

import { useEffect, useState } from "react";

import { Input } from "@/components/Input";
import MainApp from "@/components/App";
import { Provider } from "react-redux";
import { Table } from "@/components/table";
import { store } from "@/store";
import styles from "./page.module.css";

type DataItem = {
  id: string;
  email: string;
  name: string;
};

export default function Home() {
  return (
    <Provider store={store}>
      <MainApp></MainApp>
    </Provider>
  );
}
