// hooks/useFetchQuests.ts
import { useState, useEffect } from "react";
import { Quest } from "../utils/types";
import { getAllQuests } from "../api/quests";

export const useFetchQuests = (page: number) => {
  const [questsData, setQuestsData] = useState<Quest[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchQuests = async () => {
      setLoading(true);
      try {
        const response = await getAllQuests(page);
        const fetchedQuests = response.data;

        if (fetchedQuests.length === 0) {
          setHasMore(false);
        } else {
          setQuestsData((prevQuests) => [...prevQuests, ...fetchedQuests]);
        }
      } catch (error) {
        setError("Error fetching quests");
        console.error("Error fetching quests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuests();
  }, [page]);

  return { questsData, loading, error, hasMore };
};
