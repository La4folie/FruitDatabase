import axios from "axios";
import { ISearchRes } from "models/ISearchRes";
import { DetailPage } from "./DetailPage";
import { Suspense } from "react";
import { LoadingOverlay } from "components/LoadingOverlay";

interface IProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const { data: fruitList } = await axios.get<ISearchRes[]>(
    "https://www.fruityvice.com/api/fruit/all",
  );
  return fruitList.map(({ id }) => ({
    id: id.toString(),
  }));
}

export default async function Detail({ params }: IProps) {
  return (
    <Suspense fallback={<LoadingOverlay />}>
      <DetailPage params={params} />
    </Suspense>
  );
}
