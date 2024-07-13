import { useLoaderData } from "react-router-dom";
import { getCatalog } from "../services/apiCatalog";
import CatalogItem from "./CatalogItem";
import styles from "./Catalog.module.css";
function Catalog() {
  const cataLog = useLoaderData();
  return (
    <ul className={styles.catalogContainer}>
      {cataLog.map((item) => (
        <CatalogItem item={item} key={item.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const catalog = await getCatalog();
  return catalog;
}
export default Catalog;
