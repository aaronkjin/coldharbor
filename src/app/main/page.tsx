"use client";

import { Header } from "../../components/main/Header";
import { NumberGrid } from "../../components/main/NumberGrid";
import { Footer } from "../../components/main/Footer";

export default function Main() {
  return (
    <div className="flex flex-col h-screen bg-lumon-bg text-lumon-text overflow-hidden">
      <Header />
      <div className="flex-grow flex items-center justify-center p-4">
        <NumberGrid />
      </div>
      <Footer />
    </div>
  );
}
