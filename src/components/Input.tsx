"use client";

import { useState } from "react";

type InputProps = {
  onButtonClick?: ({ name, email }: { name: string; email: string }) => void;
};

export function Input({ onButtonClick }: InputProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <div className="space-x-10 flex flex-row items-end">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Please Enter Name:</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Please Entern Email:</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </div>

      <button
        className="btn btn-primary"
        onClick={() =>
          onButtonClick ? onButtonClick!({ name, email }) : undefined
        }
      >
        Enter
      </button>
    </div>
  );
}
