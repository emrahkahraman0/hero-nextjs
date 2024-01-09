export default async function ProjectsListsDetails(slug) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${slug}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch user with user`);
  }

  return response.json();
}
