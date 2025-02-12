import { base_url } from "@utils/enums";
import { fetchData } from "@utils/fetch";

interface ChatParam {
  message: string;
  file?: string;
}

export const chatPrompt = async (param: ChatParam) => {
  const formdata = new FormData();
  const data = JSON.stringify(param);
  formdata.append("json", data);

  return await fetchData(
    base_url + "/llm",
    {
      method: "POST",
      body: data,
    },
    false,
    false,
    "json"
  );
};
