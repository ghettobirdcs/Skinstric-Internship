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
