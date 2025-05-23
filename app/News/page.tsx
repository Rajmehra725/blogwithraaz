"use client";

import React, { useEffect, useState } from "react";

interface Article {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

const API_KEY = "293cf473654e4363b1f26f3c4d38676d"; // Replace with your API key
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=293cf473654e4363b1f26f3c4d38676d`;

const NewsPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(NEWS_API_URL);
        if (!response.ok) throw new Error("Failed to fetch news");
        const data = await response.json();
        setArticles(data.articles);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white p-6 md:p-12">
      <h1 className="text-4xl font-bold mb-8 text-center border-b-4 border-blue-500 pb-2">
        Latest Science News
      </h1>

      {loading && <p className="text-center text-lg">Loading news...</p>}
      {error && <p className="text-center text-red-500 text-lg">{error}</p>}

      <div className="grid gap-8 md:grid-cols-3">
        {articles.map((article, idx) => (
          <a
            key={idx}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {article.urlToImage ? (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="h-48 w-full object-cover"
              />
            ) : (
              <div className="h-48 w-full bg-gray-700 flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-300 flex-grow">
                {article.description
                  ? article.description
                  : "No description available."}
              </p>
              <p className="mt-4 text-sm text-gray-400">
                Published: {new Date(article.publishedAt).toLocaleString()}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
