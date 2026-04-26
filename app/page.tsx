import { TopBar } from "@/components/TopBar";
import { OfficeScene } from "@/components/OfficeScene";
import { getAllAgentContents } from "@/lib/content.server";

export default function HomePage() {
  const contents = getAllAgentContents();

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-bg-deep">
      <TopBar />
      <OfficeScene contents={contents} />
    </main>
  );
}
