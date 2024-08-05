import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import QuestCard from "../components/QuestCard";
import axios from "axios";

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
  const [displayedQuests, setDisplayedQuests] = useState<Quest[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 3; // Number of quests per page
  const totalPages = Math.ceil(quests.length / pageSize);

  useEffect(() => {
    if (initialQuests.length === 0) {
      const fetchQuests = async () => {
        setLoading(true);
        try {
          const response = await axios.get<Quest[]>(
            `https://quests-express-vercel-backend.vercel.app/api/v1/quests?page=1`
          );
          setQuests(response.data);
        } catch (error) {
          console.error("Error fetching quests:", error);
        }
        setLoading(false);
      };

      fetchQuests();
    }
  }, [initialQuests.length]);

  useEffect(() => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setDisplayedQuests(quests.slice(startIndex, endIndex));
  }, [quests, page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="min-h-screen flex flex-col main text-white flex-grow">
      <Header pageName="Вибір квесту" />
      <div className="w-full p-4 my-auto sm:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto flex-grow">
        <div className="mx-auto max-w-md flex flex-col gap-auto">
          {displayedQuests.map((quest) => (
            <QuestCard key={quest.id} quest={quest} />
          ))}
          {loading && <div className="text-center p-4">Loading...</div>}
          <div className="text-center p-4 mx-8 gap-8 flex justify-center ">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="btn btn-primary flex-grow "
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              className="btn btn-primary flex-grow "
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quests;
