export default async function ProjectsLists() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments?_start=0&_limit=5"
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return await response.json();
}
