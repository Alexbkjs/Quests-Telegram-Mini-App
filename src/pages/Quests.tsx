import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import QuestCard from "../components/QuestCard";
import axios from "axios";

// Define a type for quest data
interface Quest {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  award: string;
}

const Quests: React.FC = () => {
  // State to store quests data
  const [quests, setQuests] = useState<Quest[]>([]);
  // State to manage loading state
  const [loading, setLoading] = useState(false);
  // State to track the current page
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchQuests = async () => {
      setLoading(true); // Set loading to true before starting the fetch
      try {
        // Fetch quests from the API
        const response = await axios.get<Quest[]>(
          `https://quests-express-vercel-backend.vercel.app/api/v1/quests?page=${page}`
        );
        setQuests(response.data); // Update quests state with the fetched data
      } catch (error) {
        console.error("Error fetching quests:", error);
      }
      setLoading(false); // Set loading to false after the fetch is complete
    };

    fetchQuests(); // Fetch quests when the component mounts or page changes
  }, [page]); // Dependency array ensures fetch runs when page changes

  const handlePageChange = (newPage: number) => {
    setPage(newPage); // Update the page state to load new data
  };

  return (
    <div className="min-h-screen flex flex-col main text-white flex-grow">
      <Header pageName="Вибір квесту" />
      <div className="w-full p-4 my-auto sm:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto flex-grow">
        <div className="mx-auto max-w-md flex flex-col gap-auto">
          {quests.map((quest) => (
            <QuestCard key={quest.id} quest={quest} />
          ))}
          {loading && <div className="text-center p-4">Loading...</div>}
          <div className="text-center p-4">
            {/* Button to switch to Page 1 */}
            <button
              onClick={() => handlePageChange(1)}
              className={`bg-${
                page === 1 ? "purple-500" : "gray-500"
              } text-white py-2 px-4 rounded mx-2`}
            >
              Page 1
            </button>
            {/* Button to switch to Page 2 */}
            <button
              onClick={() => handlePageChange(2)}
              className={`bg-${
                page === 2 ? "purple-500" : "gray-500"
              } text-white py-2 px-4 rounded mx-2`}
            >
              Page 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quests;
