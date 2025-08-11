import axios from "axios";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

export function usePhaseTwo() {
  const [loading, setLoading] = useState(false);

  const submitPhaseTwo = useCallback(async (base64Image) => {
    setLoading(true);

    try {
      const { data } = await axios.post(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
        { image: base64Image },
      );
      const result = data.data;

      localStorage.setItem("Race", JSON.stringify(result.race));
      localStorage.setItem("Age", JSON.stringify(result.age));
      localStorage.setItem("Gender", JSON.stringify(result.gender));

      toast.success("Image analyzed successfully!");
    } catch {
      setLoading(false);
      toast.error("Something went wrong!");
    }

    setLoading(false);
  }, []);

  return { loading, submitPhaseTwo };
}
