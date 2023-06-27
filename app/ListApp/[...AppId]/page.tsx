export const metadata = {
  title: "App Detail",
};

export default function AppDetail({ params }: { params: { AppId: string[] } }) {
  const { AppId } = params;
  console.log(AppId);
  return (
    <main className="flex min-h-screen flex-row gap-5 bg-slate-600 text-white">
      {AppId.map((app) => (
        <div key={app}>{app}</div>
      ))}
    </main>
  );
}
