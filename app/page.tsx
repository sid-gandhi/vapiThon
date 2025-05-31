import Orb from "@/components/vapi/orb";
import RetroCard from "@/components/RetroCard";
import Siri from "@/components/vapi/siri";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <RetroCard />
      <Siri theme="ios9" />
    </main>
  );
}
