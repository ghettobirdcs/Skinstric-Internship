import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export function usePhaseOne() {
  const [loading, setLoading] = useState(false);

  const submitPhaseOne = useCallback(async (formData) => {
    setLoading(true);

    try {
      // Save to localStorage
      localStorage.setItem("Name", formData["name"]);
      localStorage.setItem("Location", formData["location"]);

      await axios.post(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne",
        formData,
      );
    } catch {
      setLoading(false);
      toast.error("Something went wrong!");
    }

    setLoading(false);
  }, []);

  return { loading, submitPhaseOne };
}

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
