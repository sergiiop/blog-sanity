import { createClient, groq } from "next-sanity";

export async function getProjects(){
  const client = createClient({
    projectId: 'q394hn14',
    dataset: 'production',
    apiVersion: '2023-04-14'
  })

  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}