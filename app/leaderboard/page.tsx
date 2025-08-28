import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { mockLeaderboardUsers } from "@/lib/leaderboard-data";
import { Trophy, Medal, Award } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
export default function LeaderboardPage() {
  const topThree = mockLeaderboardUsers.slice(0, 3);
  const restOfUsers = mockLeaderboardUsers.slice(3);

  const getPodiumIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-8 w-8 text-yellow-500" />;
      case 2:
        return <Medal className="h-8 w-8 text-gray-400" />;
      case 3:
        return <Award className="h-8 w-8 text-amber-600" />;
      default:
        return null;
    }
  };

  const getPodiumStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200 shadow-lg";
      case 2:
        return "bg-gradient-to-br from-gray-50 to-slate-50 border-gray-200 shadow-md";
      case 3:
        return "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 shadow-md";
      default:
        return "";
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <section className="relative mt-4 overflow-hidden rounded-[4px] bg-gradient-to-br from-emerald-50 via-white to-emerald-50 border border-emerald-100 shadow-sm">
          <div className="px-6 py-12 sm:py-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">Leaderboard</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Compete with the best developers and climb the ranks! Earn XP by
              completing courses, solving challenges, and building amazing
              projects.
            </p>
            <div className="mt-6 flex justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span>1st Place</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <span>2nd Place</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                <span>3rd Place</span>
              </div>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-3 gap-8">
          {topThree.map((user) => (
            <div
              key={user.id}
              className={`border-2 p-6 text-center rounded-[4px] transition-all duration-300 ${getPodiumStyle(
                user.rank
              )}`}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  {getPodiumIcon(user.rank)}
                </div>
              </div>
              <div className="h-20 w-20 mx-auto mb-6">
                <Image
                  src={user.image}
                  alt={user.name}
                  width={100}
                  height={100}
                  className="object-cover w-20 h-20"
                />
              </div>
              <h3 className="font-bold text-xl mb-2 text-black">{user.name}</h3>
              <p className="text-sm text-gray-600 mb-4">@{user.username}</p>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {user.xp.toLocaleString()}
              </div>
              <p className="text-sm text-gray-600 font-medium">XP Points</p>
              <div className="mt-4">
                <Badge className="bg-blue-100 text-blue-700 border-0 px-3 py-1">
                  #{user.rank} Rank
                </Badge>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[4px] border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-8 py-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">
              Complete Rankings
            </h2>
            <p className="text-gray-600 mt-1">
              See where you stand among all learners
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr className="text-left">
                  <th className="p-6 font-semibold text-gray-700 text-sm uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="p-6 font-semibold text-gray-700 text-sm uppercase tracking-wider">
                    User
                  </th>
                  <th className="p-6 font-semibold text-gray-700 text-sm uppercase tracking-wider">
                    XP Points
                  </th>
                  <th className="p-6 font-semibold text-gray-700 text-sm uppercase tracking-wider">
                    Courses
                  </th>
                  <th className="p-6 font-semibold text-gray-700 text-sm uppercase tracking-wider">
                    Achievements
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockLeaderboardUsers.map((user, index) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200"
                  >
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            user.rank === 1
                              ? "bg-yellow-100 text-yellow-700"
                              : user.rank === 2
                              ? "bg-gray-100 text-gray-700"
                              : user.rank === 3
                              ? "bg-amber-100 text-amber-700"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          #{user.rank}
                        </div>
                        {user.rank <= 3 && getPodiumIcon(user.rank)}
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10">
                          <Image
                            src={user.image}
                            alt={user.name}
                            width={100}
                            height={100}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-black">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            @{user.username}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {user.xp.toLocaleString()}
                      </div>
                    </td>
                    <td className="p-6">
                      <Badge className="bg-blue-100 text-blue-700 border-0 px-3 py-1 font-medium">
                        {user.coursesCompleted} courses
                      </Badge>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                          <Trophy className="h-4 w-4 text-yellow-600" />
                        </div>
                        <span className="font-semibold text-black">
                          {user.achievements}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-8 text-center rounded-[4px] transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {mockLeaderboardUsers.length}
            </div>
            <p className="text-lg text-gray-700 font-semibold">
              Active Learners
            </p>
            <p className="text-sm text-gray-600 mt-2">Join the competition!</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-8 text-center rounded-[4px] transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Award className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {mockLeaderboardUsers.reduce(
                (acc, user) => acc + user.achievements,
                0
              )}
            </div>
            <p className="text-lg text-gray-700 font-semibold">
              Total Achievements
            </p>
            <p className="text-sm text-gray-600 mt-2">Unlock your potential!</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 p-8 text-center rounded-[4px] transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Medal className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {mockLeaderboardUsers
                .reduce((acc, user) => acc + user.xp, 0)
                .toLocaleString()}
            </div>
            <p className="text-lg text-gray-700 font-semibold">
              Total XP Earned
            </p>
            <p className="text-sm text-gray-600 mt-2">Knowledge is power!</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
