import Analogs from "@components/analogs/analogs-container";
import SearchAnalogs from "@components/seach-analogs/search-analogs-container";

import styles from "./SeachAnalogs.module.scss";

const SeachAnalogs = () => {
  return (
    <>
      <SearchAnalogs />
      <Analogs />
    </>
  );
};

export default SeachAnalogs;
