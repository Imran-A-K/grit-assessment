import RateCalendar from "@/components/RateCalendar";
import RoomCategory from "@/components/RoomCategory";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-10">
      <RateCalendar />
      <RoomCategory />
    </main>
  );
}
