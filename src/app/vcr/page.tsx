"use client";
import { VCR } from "@/components";
import { useEffect } from "react";

let isMount = false;

export default function VCRContainer() {
  useEffect(() => {
    isMount = true;
  }, []);
  return (
    <div className="text-red h-screen w-screen bg-[#2B3F56] flex">
      {isMount ? <VCR /> : null}
    </div>
  );
}
