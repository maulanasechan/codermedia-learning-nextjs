import { useQuery } from "@tanstack/react-query";

type postType = {
  id: string;
  title: string;
};

const POSTS: postType[] = [
  { id: "1", title: "post 1" },
  { id: "2", title: "post 2" },
];

function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default function Tanstack() {
  const postsQuery = useQuery({
    queryKey: ["listPost"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  if(postsQuery.isLoading) return <h1>Loading...</h1>
  if(postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>

  return <div>Tanstack</div>;
}
