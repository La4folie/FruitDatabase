import { LoadingOverlay } from "components/LoadingOverlay";
import { Suspense } from "react";
import { ListPage } from "./ListPage";

const List = async () => {
  return (
    <Suspense fallback={<LoadingOverlay />}>
      <ListPage />
    </Suspense>
  );
};
export default List;
