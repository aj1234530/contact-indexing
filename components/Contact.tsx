import React from "react";

function Contact({ name, phone }: { name: string; phone: number }) {
  return (
    <div className="border rounded-sm text-center  w-[300px]">
      <h1>{name}</h1>
      <h2>{phone}</h2>
    </div>
  );
}

export default Contact;
