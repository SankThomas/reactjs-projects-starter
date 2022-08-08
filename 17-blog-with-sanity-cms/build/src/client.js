import client from "@sanity/client"

export default client({
  projectId: "1b7vvq1e",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-07-28",
})
