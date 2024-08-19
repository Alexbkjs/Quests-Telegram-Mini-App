import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuestDetails } from "../api/quests";
import { Quest } from "../utils/types";
const useQuestDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [quest, setQuest] = useState<Quest | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestDetails = async () => {
      try {
        const response = await getQuestDetails(id as string);
        setQuest(response.data as Quest);
      } catch (err) {
        setError("Failed to fetch quest details");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestDetails();
  }, [id]);

  return { quest, loading, error };
};

export default useQuestDetails;
