const API = "http://localhost:9000/products";
export async function getCatalog() {
  const res = await fetch(API);
  if (!res.ok) throw new Error("Failed To Fetch");
  const data = await res.json();
  return data;
}
