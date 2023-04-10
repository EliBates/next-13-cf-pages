export const config = { runtime: "experimental-edge" };

export const metadata = {
  title: 'My Page Title',
};

export default function Page() {
  return (
    <main>
      <h1>{metadata.title}</h1>
    </main>
  )
}
