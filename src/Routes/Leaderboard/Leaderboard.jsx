import React from 'react';

// Dummy data for leaderboard
const leaderboardData = [
  { id: 1, username: 'User1', tokens: 150 },
  { id: 2, username: 'User2', tokens: 120 },
  { id: 3, username: 'User3', tokens: 100 },
  { id: 4, username: 'User4', tokens: 90 },
  { id: 5, username: 'User5', tokens: 80 },
  { id: 6, username: 'User6', tokens: 70 },
  { id: 7, username: 'User7', tokens: 60 },
  { id: 8, username: 'User8', tokens: 50 },
  { id: 9, username: 'User9', tokens: 40 },
  { id: 10, username: 'User10', tokens: 30 },
];

const LeaderboardPage = () => {
  return (
    <div className="bg-indigo-900 text-white min-h-screen">
      <header className="bg-indigo-800 py-4 text-center">
        <h1 className="text-3xl font-bold">QuizPlay Learn Leaderboard</h1>
      </header>
      <div className="container mx-auto py-8">
        {/* Overall Leaderboard Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overall Leaderboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {leaderboardData.map((user, index) => (
              <div key={user.id} className="bg-indigo-700 hover:bg-indigo-600 text-white p-4 rounded-lg cursor-pointer">
                <div className="mt-2">
                  <p className="text-lg font-semibold">{user.username}</p>
                  <p className="text-sm">Tokens Earned: {user.tokens}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Other sections like Weekly/Monthly Leaderboard, Friends Leaderboard, Achievements/Badges, etc. */}
      </div>
    </div>
  );
}

export default LeaderboardPage;
