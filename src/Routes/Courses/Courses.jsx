import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  
  {
    id: 1,
    title: "Machine Learning Basics",
    description: "Understand the fundamentals of machine learning, algorithms, and real-world applications.",
    imageUrl: "https://images.codebasics.io/filters:format(webp)/images/1.1.419/courses/thumbnails/machine-learning-for-beginners.webp",
    price: "₹500",
  },
  {
    id: 2,
    title: "Data Structures and Algorithms",
    description: "Dive deep into data structures and algorithms to prepare for coding interviews.",
    imageUrl: "https://i.ytimg.com/vi/8hly31xKli0/maxresdefault.jpg",
    price: "₹1500",
  },
  {
    id: 3,
    title: "Web Development with React",
    description: "Build modern web applications with React, including hooks, state management, and routing.",
    imageUrl: "https://www.creativeitinstitute.com/images/course/course_1674371266.jpg",
    price: "₹1500",
  },
  {
    id: 4,
    title: "Introduction to Python",
    description: "Learn the basics of Python programming with hands-on examples and exercises.",
    imageUrl: "https://www.etudemy.com/wp-content/uploads/2022/01/Computer-Courses-in-Perinthalmanna-python-Copy.jpg",
    price: "Free",
  },
  
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-10">
      <div className="max-w-7xl bg-gray-900 mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Explore Our Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {courses.map((course) => (
            <div key={course.id} className="bg-gray-700 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out">
              <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white">{course.title}</h2>
                <p className="mt-2 text-white">{course.description}</p>
                <div className="flex justify-between items-center mt-4">
                  {/* <span className="text-lg font-bold text-blue-500">{course.price}</span> */}
                  <Link to={`/courses/${course.id}`} className="text-sm text-blue-500 hover:underline">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
