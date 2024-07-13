import { useState } from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "./homeSlice";
function Home() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const id = useSelector((state) => state.user.userName);
  function handleClick(e) {
    e.preventDefault();
    dispatch(updateName(userName));
    navigate("/catalog");
  }
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <h1 className={styles.brandHeading}>Quality That You Feel</h1>
        <p className={styles.brandInfo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          consequuntur enim autem incidunt perferendis quia.
        </p>
        <div className={styles.userInfo}>
          {!id ? (
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Enter Name To Start Buying"
              className={styles.userInput}
            />
          ) : (
            <Link to="/catalog" className={styles.brandBtn}>
              Continue Shopping
            </Link>
          )}
          {userName && (
            <button className={styles.brandBtn} onClick={handleClick}>
              Start Buying...
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
