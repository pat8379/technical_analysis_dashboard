import { base_url } from "@utils/enums";
import { fetchData } from "@utils/fetch";

interface ChartParam {
  ticker: string;
  start_date?: Date | string;
  end_date?: Date | string;
}

export const chartPrompt = async (param: ChartParam) => {
  const data = JSON.stringify(param);

  return await fetchData(
    base_url + "/chart",
    {
      method: "POST",
      body: data,
    },
    false,
    false,
    "json"
  );
};
