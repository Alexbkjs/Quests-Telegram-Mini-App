import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from "../components/Header";
import QuestCard from "../components/QuestCard";
import { Quest } from "../utils/types";
import { getAllQuests } from "../api/quests";
import Spinner from "../components/Spinner";

const Quests: React.FC = () => {
  const [questsData, setQuestsData] = useState<Quest[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch quests from the API
  const fetchQuests = async (page: number) => {
    try {
      const response = await getAllQuests(page);
      return response.data;
    } catch (err) {
      console.error("Error fetching quests:", err);
      setError("Error fetching quests");
      return [];
    }
  };

  useEffect(() => {
    // Fetch initial data
    const fetchInitialData = async () => {
      const initialQuests = await fetchQuests(page);
      if (initialQuests.length === 0) {
        setHasMore(false);
      } else {
        setQuestsData(initialQuests);
        // Pre-fetch next page of data
        const nextQuests = await fetchQuests(page + 1);
        if (nextQuests.length > 0) {
          setHasMore(true);
        } else {
          setHasMore(false);
        }
      }
    };

    fetchInitialData();
  }, []); // Empty dependency array to run only on mount

  const loadMoreData = async () => {
    if (!hasMore) return; // Prevent loading if no more data

    const newQuests = await fetchQuests(page + 1);
    if (newQuests.length === 0) {
      setHasMore(false); // No more data available
    } else {
      setQuestsData((prevQuests) => [...prevQuests, ...newQuests]);
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col main text-white flex-grow">
      <InfiniteScroll
        dataLength={questsData.length}
        next={loadMoreData}
        hasMore={hasMore}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b className="text-blue-200 text-sm">
              Ти переглянув усі квести!🎉🎉🎉
            </b>
          </p>
        }
        // Trigger loading more items before reaching the end
        scrollThreshold={0.9} // Load when scrolled 90% down
      >
        <Header pageName="Вибір квесту" />
        <div className="w-full p-4 my-auto sm:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto flex-grow">
          <div className="mx-auto max-w-md flex flex-col gap-[1rem] pb-16">
            {questsData.map((quest: Quest) => (
              <QuestCard key={quest.id} quest={quest} />
            ))}
          </div>
          {error && <div className="text-center p-4">{error}</div>}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Quests;
