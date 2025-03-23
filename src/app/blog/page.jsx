import Link from "next/link";
import React from "react";

const blogPage = () => {
  const blogs = [
    {
      key: "tech_ai_revolution",
      title: "The AI Revolution: Transforming Everyday Life",
      description:
        "Discover how artificial intelligence is reshaping industries, automating tasks, and enhancing human capabilities in ways we never imagined.",
    },
    {
      key: "fitness_mental_wellness",
      title: "The Connection Between Fitness and Mental Wellness",
      description:
        "Learn how regular physical activity can boost mental health, reduce stress, and improve overall well-being.",
    },
    {
      key: "travel_hidden_gems",
      title: "Hidden Travel Gems: Must-Visit Places Off the Beaten Path",
      description:
        "Explore stunning, lesser-known destinations around the world that offer unique experiences without the tourist crowds.",
    },
    {
      key: "finance_smart_investing",
      title: "Smart Investing: Strategies for Financial Growth",
      description:
        "A beginner-friendly guide to making smart investment choices, managing risks, and growing your wealth over time.",
    },
    {
      key: "productivity_time_management",
      title: "Mastering Time Management for Maximum Productivity",
      description:
        "Discover proven techniques to boost productivity, eliminate distractions, and make the most of your time each day.",
    },
  ];

  return (
    <div>
      <h1>Welcome to blog</h1>
      {blogs.map((blog) => (
        <div
          key={blog.key}
          className=" border-2  gap-3 p-3 text-center text-orange-600"
        >
          <h1 className=" text-3xl text-black">{blog.title}</h1>
          <h1 className=" text-2xl">{blog.description}</h1>
          <Link href={`/blog/${blog.key}`}>ViewDetails</Link>
        </div>
      ))}
    </div>
  );
};

export default blogPage;
