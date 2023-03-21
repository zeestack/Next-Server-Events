"use client";

import { setSlice, store } from "@/store";

import { User } from "@/store/userSlice";
import { useRef } from "react";

function Preloader({ data }: { data: User }) {
  const loaded = useRef(false);

  if (!loaded.current) {
    store.dispatch(setSlice(data));
    loaded.current = true;
  }

  return null;
}

export default Preloader;
