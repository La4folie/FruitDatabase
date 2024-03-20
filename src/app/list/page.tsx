import axios from "axios";
import { List } from "components/List";
import { ISearchRes } from "models/ISearchRes";

const ListPage = async () => {
  const { data: fruitList } = await axios.get<ISearchRes[]>(
    "https://www.fruityvice.com/api/fruit/all",
  );

  return (
    <div className="flex justify-center items-center">
      <div className="w-[800px] ">
        <List fruits={fruitList} />
      </div>
    </div>
  );
};
export default ListPage;
