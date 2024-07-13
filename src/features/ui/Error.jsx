import { Link, useRouteError } from "react-router-dom";
import styles from "./Error.module.css";
function Error() {
  const error = useRouteError();
  return (
    <div className={styles.error}>
      <h1 className={styles.errorHeading}>
        Opss Somthing Went Wrong <span className={styles.errorCartoon}>☹</span>
      </h1>
      <p className={styles.errorMsg}>{error.message || error.data}</p>
      <Link to={-1} className={styles.errorLink}>
        &larr; Go back
      </Link>
    </div>
  );
}

export default Error;
