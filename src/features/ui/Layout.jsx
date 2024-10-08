import { Link, Outlet, useNavigation } from "react-router-dom";
import styles from "./Layout.module.css";
import Loader from "./Loader";
import Header from "./Header";
import { useSelector } from "react-redux";
function Layout() {
  const userName = useSelector((state) => state.user.userName);
  const items = useSelector((state) => state.cart.cart.length);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className={styles.layout}>
      {isLoading ? <Loader /> : ""}
      <Header />
      <div className={styles.application}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <ul className={styles.topList}>
          <li className={styles.topicon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.footerIcon}
              viewBox="0 0 512 512"
              fill="#333"
            >
              <path
                d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                fillRule="evenodd"
              />
            </svg>
          </li>
          <li className={styles.topicon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.footerIcon}
              viewBox="0 0 512 512"
              fill="#333"
            >
              <path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z" />
            </svg>
          </li>
          <li className={styles.topicon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.footerIcon}
              viewBox="0 0 512 512"
              fill="#333"
            >
              <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
              <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
            </svg>
          </li>
        </ul>
        <p>&copy;Copyright All rights reserved. </p>
      </div>
      <span className={styles.chatUs}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.icon}
          viewBox="0 0 512 512"
          fill="green"
        >
          <path
            d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"
            fillRule="evenodd"
          />
        </svg>
      </span>

      {userName && (
        <Link to="/cart">
          <span className={styles.cartUs}>
            <div className={styles.cart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                viewBox="0 0 512 512"
              >
                <circle
                  cx="176"
                  cy="416"
                  r="16"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
                <circle
                  cx="400"
                  cy="416"
                  r="16"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M48 80h64l48 272h256"
                />
                <path
                  d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
              </svg>
              <p className={styles.username}>{items}</p>
            </div>
            <p className={styles.username}>{userName}</p>
          </span>
        </Link>
      )}
    </div>
  );
}

export default Layout;

{
  /* <div className={styles.header}>I M HEADER</div> */
}
