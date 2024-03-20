import axios from "axios";
import { List } from "components/List";
import { ISearchRes } from "models/ISearchRes";

export const ListPage = async () => {
  const { data: fruitList } = await axios.get<ISearchRes[]>(
    "https://www.fruityvice.com/api/fruit/all",
  );

  return (
    <div className="flex justify-center items-center">
      <div className="w-[800px] text-white">
        <List fruits={fruitList} title="FRUITS LIST" subtitle="ALL" />
      </div>
    </div>
  );
};
