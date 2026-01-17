import { TutorAvatar } from "@/components/TutorAvatar";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <TutorAvatar size="lg" />

      <h1 className="text-4xl font-bold">AI فيزيا</h1>

      <p className="text-muted-foreground text-lg">
        مدرس فيزياء ذكي لطلاب الثانوية العامة
      </p>
    </main>
  );
}
