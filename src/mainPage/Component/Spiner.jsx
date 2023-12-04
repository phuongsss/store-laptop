import styles from "./Spiner.module.css";

function Spiner() {
  return (
    <div className=" absolute top-0 bottom-0 left-0 right-0 bg-[rgba(169, 39, 39, 0.2)]  backdrop-blur-xl flex justify-center items-center">
      <div className={styles.spiner}></div>
    </div>
  );
}

export default Spiner;
