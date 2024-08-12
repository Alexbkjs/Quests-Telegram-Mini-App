import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import QuestCard from "../components/QuestCard";
import axios from "axios";

import "../App.css"; // Import the CSS for the spinner

interface Quest {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  award: string;
}

const Quests: React.FC = () => {
  const location = useLocation();
  const initialQuests = location.state?.quests || [];
  const [quests, setQuests] = useState<Quest[]>(initialQuests);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 3;
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const fetchQuests = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Quest[]>(
          `https://quests-express-vercel-backend.vercel.app/api/v1/quests?page=${page}`
        );
        if (response.data.length < pageSize) {
          setHasMore(false);
        }
        setQuests((prevQuests) => [...prevQuests, ...response.data]);
      } catch (error) {
        console.error("Error fetching quests:", error);
      }
      setLoading(false);
    };

    if (initialQuests.length === 0 || page > 1) {
      fetchQuests();
    }
  }, [page, initialQuests.length]);

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
  }, [loading, hasMore, quests]);

  const loadMore = () => {
    if (hasMore && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col main text-white flex-grow">
      <Header pageName="Вибір квесту" className="mt-12" />
      <div className="w-full p-4 my-auto sm:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto flex-grow">
        <div
          ref={containerRef}
          className="mx-auto max-w-md flex flex-col gap-[1rem] pb-16"
        >
          {quests.map((quest) => (
            <QuestCard key={quest.id} quest={quest} />
          ))}
        </div>
        <div className="p-4">
          {loading && <div className="text-center p-4 spinner"></div>}
        </div>
      </div>
    </div>
  );
};

export default Quests;
