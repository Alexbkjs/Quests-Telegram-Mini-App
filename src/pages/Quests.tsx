import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import QuestCard from "../components/QuestCard";
import { useFetchQuests } from "../hooks/useFetchQuests";
import { Quest } from "../utils/types";
import "../styles/App.css"; // Import the CSS for the spinner

const Quests: React.FC = () => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { questsData, loading, error } = useFetchQuests(page);
  useEffect(() => {
    if (questsData.length < 3) {
      setHasMore(false);
    }
  }, [questsData]);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (containerRef.current) {
      const lastElement = containerRef.current.lastElementChild;
      if (lastElement) {
        observerRef.current.observe(lastElement);
      }
    }

    return () => observerRef.current?.disconnect();
  }, [loading, hasMore, questsData]);

  return (
    <div className="min-h-screen flex flex-col main text-white flex-grow">
      <Header pageName="Вибір квесту" />
      <div className="w-full p-4 my-auto sm:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto flex-grow">
        <div
          ref={containerRef}
          className="mx-auto max-w-md flex flex-col gap-[1rem] pb-16"
        >
          {questsData.map((quest: Quest) => (
            <QuestCard key={quest.id} quest={quest} />
          ))}
          {loading && <div className="text-center p-4 spinner"></div>}
        </div>
        {error && <div className="text-center p-4">{error}</div>}
      </div>
    </div>
  );
};

export default Quests;
