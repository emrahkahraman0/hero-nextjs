export default async function Posts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5"
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return await response.json();
}
