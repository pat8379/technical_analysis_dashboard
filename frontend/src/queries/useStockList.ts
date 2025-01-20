import { useQuery } from "@tanstack/react-query";
import { base_url } from "@utils/enums";
import { fetchData } from "@utils/fetch";

const fetchStockList = async () => {
  const res = await fetchData(base_url + "/chart/stock-list", true);

  return res;
};

export const useStockList = () =>
  useQuery({
    queryKey: ["useStockList"],
    queryFn: () => fetchStockList(),
  });
