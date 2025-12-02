import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import { BottomNav } from "../components/common/BottomNav";
import {
  Search,
  Trophy,
  Medal,
  Award,
  Camera,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import "../styles/CommunityScreen.css";

type User = {
  id: number;
  name: string;
  points: number;
  level: number;
  avatar?: string;
  badge: "bronze" | "silver" | "gold";
  rank: number;
  photoChallenges: number;
  challengesCompleted: number;
  fullName: string;
};

export function CommunityScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<
    "all" | "bronze" | "silver" | "gold"
  >("all");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const users: User[] = [
    {
      id: 1,
      name: "Ana",
      fullName: "Ana Petrović",
      points: 5240,
      level: 8,
      badge: "gold",
      rank: 1,
      photoChallenges: 28,
      challengesCompleted: 45,
    },
    {
      id: 2,
      name: "Nikola",
      fullName: "Nikola Jovanović",
      points: 4890,
      level: 7,
      badge: "gold",
      rank: 2,
      photoChallenges: 24,
      challengesCompleted: 42,
    },
    {
      id: 3,
      name: "Jelena",
      fullName: "Jelena Marković",
      points: 4320,
      level: 7,
      badge: "gold",
      rank: 3,
      photoChallenges: 21,
      challengesCompleted: 38,
    },
    {
      id: 4,
      name: "Stefan",
      fullName: "Stefan Ilić",
      points: 3870,
      level: 6,
      badge: "silver",
      rank: 4,
      photoChallenges: 18,
      challengesCompleted: 34,
    },
    {
      id: 5,
      name: "Milica",
      fullName: "Milica Đorđević",
      points: 3540,
      level: 6,
      badge: "silver",
      rank: 5,
      photoChallenges: 16,
      challengesCompleted: 31,
    },
    {
      id: 6,
      name: "Luka",
      fullName: "Luka Nikolić",
      points: 3210,
      level: 5,
      badge: "silver",
      rank: 6,
      photoChallenges: 14,
      challengesCompleted: 28,
    },
    {
      id: 7,
      name: "Tijana",
      fullName: "Tijana Stanković",
      points: 2890,
      level: 5,
      badge: "silver",
      rank: 7,
      photoChallenges: 12,
      challengesCompleted: 25,
    },
    {
      id: 8,
      name: "Marko",
      fullName: "Marko Pavlović",
      points: 2450,
      level: 3,
      badge: "bronze",
      rank: 8,
      photoChallenges: 10,
      challengesCompleted: 22,
    },
    {
      id: 9,
      name: "Sara",
      fullName: "Sara Simić",
      points: 2120,
      level: 4,
      badge: "bronze",
      rank: 9,
      photoChallenges: 8,
      challengesCompleted: 19,
    },
    {
      id: 10,
      name: "David",
      fullName: "David Kostić",
      points: 1980,
      level: 4,
      badge: "bronze",
      rank: 10,
      photoChallenges: 6,
      challengesCompleted: 16,
    },
  ];

  const filteredUsers = useMemo(() => {
    return users
      .filter((user) => {
        const matchesSearch =
          user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.name.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesFilter =
          activeFilter === "all" || user.badge === activeFilter;

        return matchesSearch && matchesFilter;
      })
      .sort((a, b) => a.rank - b.rank);
  }, [searchQuery, activeFilter]);

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "gold":
        return "yellow-500";
      case "silver":
        return "slate-400";
      case "bronze":
        return "amber-600";
      default:
        return "slate-500";
    }
  };

  const getBadgeTextColor = (badge: string) => {
    switch (badge) {
      case "gold":
        return "text-yellow-500";
      case "silver":
        return "text-slate-300";
      case "bronze":
        return "text-amber-600";
      default:
        return "text-slate-400";
    }
  };

  const getBadgeBgColor = (badge: string) => {
    switch (badge) {
      case "gold":
        return "bg-yellow-500/10";
      case "silver":
        return "bg-slate-500/10";
      case "bronze":
        return "bg-amber-600/10";
      default:
        return "bg-slate-600/10";
    }
  };

  const getBadgeBorderColor = (badge: string) => {
    switch (badge) {
      case "gold":
        return "border-yellow-500/20";
      case "silver":
        return "border-slate-400/20";
      case "bronze":
        return "border-amber-600/20";
      default:
        return "border-slate-500/20";
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="community-rank-icon-gold" />;
    if (rank === 2) return <Medal className="community-rank-icon-silver" />;
    if (rank === 3) return <Medal className="community-rank-icon-bronze" />;
    return null;
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return "text-yellow-400";
    if (rank === 2) return "text-slate-300";
    if (rank === 3) return "text-amber-600";
    return "text-slate-400";
  };

  const topThreeUsers = filteredUsers.filter((user) => user.rank <= 3);
  const otherUsers = filteredUsers.filter((user) => user.rank > 3);

  return (
    <div className="community-screen">
      {/* Header */}
      <div className="community-header">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="community-title"
        >
          Zajednica{" "}
          <svg
            className="inline-block"
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 512 512"
          >
            <circle cx={152} cy={184} r={72} fill="#2bc154"></circle>
            <path
              fill="#2bc154"
              d="M234 296c-28.16-14.3-59.24-20-82-20c-44.58 0-136 27.34-136 82v42h150v-16.07c0-19 8-38.05 22-53.93c11.17-12.68 26.81-24.45 46-34"
            ></path>
            <path
              fill="#2bc154"
              d="M340 288c-52.07 0-156 32.16-156 96v48h312v-48c0-63.84-103.93-96-156-96"
            ></path>
            <circle cx={340} cy={168} r={88} fill="#2bc154"></circle>
          </svg>
        </motion.h1>
        <p className="community-subtitle">Top 10 EcoGuarda</p>

        {/* Search Bar */}
        <div className="community-search">
          <Search className="community-search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
            placeholder="Pronađi korisnika…"
            className="community-search-input"
          />
        </div>

        {/* Filter Tabs */}
        <div className="community-filter-tabs">
          {[
            { key: "all", label: "Svi" },
            { key: "bronze", label: "Bronzani" },
            { key: "silver", label: "Srebrni" },
            { key: "gold", label: "Zlatni" },
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key as any)}
              className={`community-filter-tab ${
                activeFilter === filter.key ? "active" : ""
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="community-leaderboard">
        {topThreeUsers.length > 0 && (
          <div className="community-podium">
            {/* 2nd Place */}
            {topThreeUsers.find((u) => u.rank === 2) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="community-podium-item second"
                onClick={() =>
                  setSelectedUser(
                    topThreeUsers.find((u) => u.rank === 2) || null
                  )
                }
              >
                <div className="community-podium-rank second">2</div>
                <div className="community-podium-avatar">
                  {topThreeUsers
                    .find((u) => u.rank === 2)
                    ?.name.split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <p className="community-podium-name">
                  {topThreeUsers.find((u) => u.rank === 2)?.name}
                </p>
                <p className="community-podium-points">
                  {topThreeUsers.find((u) => u.rank === 2)?.points} pts
                </p>
              </motion.div>
            )}

            {/* 1st Place */}
            {topThreeUsers.find((u) => u.rank === 1) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="community-podium-item first"
                onClick={() =>
                  setSelectedUser(
                    topThreeUsers.find((u) => u.rank === 1) || null
                  )
                }
              >
                <div className="community-podium-rank first">1</div>
                <div className="community-podium-avatar">
                  {topThreeUsers
                    .find((u) => u.rank === 1)
                    ?.name.split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <p className="community-podium-name">
                  {topThreeUsers.find((u) => u.rank === 1)?.name}
                </p>
                <p className="community-podium-points">
                  {topThreeUsers.find((u) => u.rank === 1)?.points} pts
                </p>
              </motion.div>
            )}

            {/* 3rd Place */}
            {topThreeUsers.find((u) => u.rank === 3) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="community-podium-item third"
                onClick={() =>
                  setSelectedUser(
                    topThreeUsers.find((u) => u.rank === 3) || null
                  )
                }
              >
                <div className="community-podium-rank third">3</div>
                <div className="community-podium-avatar">
                  {topThreeUsers
                    .find((u) => u.rank === 3)
                    ?.name.split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <p className="community-podium-name">
                  {topThreeUsers.find((u) => u.rank === 3)?.name}
                </p>
                <p className="community-podium-points">
                  {topThreeUsers.find((u) => u.rank === 3)?.points} pts
                </p>
              </motion.div>
            )}
          </div>
        )}

        {/* User Details Modal */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-md w-full border border-slate-700/50"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${
                      getBadgeColor(selectedUser.badge) === "yellow-500"
                        ? "from-yellow-500 to-yellow-600"
                        : getBadgeColor(selectedUser.badge) === "slate-400"
                        ? "from-slate-400 to-slate-600"
                        : "from-amber-600 to-amber-800"
                    } flex items-center justify-center text-white text-xl font-bold`}
                  >
                    {selectedUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold">
                      {selectedUser.fullName}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeBgColor(
                          selectedUser.badge
                        )} ${getBadgeTextColor(
                          selectedUser.badge
                        )} border ${getBadgeBorderColor(selectedUser.badge)}`}
                      >
                        {selectedUser.badge.charAt(0).toUpperCase() +
                          selectedUser.badge.slice(1)}
                      </span>
                      <span className="text-slate-300 text-sm">
                        Level {selectedUser.level}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                  <Camera className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <p className="text-slate-300 text-sm">Foto izazovi</p>
                  <p className="text-white text-2xl font-bold">
                    {selectedUser.photoChallenges}
                  </p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <p className="text-slate-300 text-sm">Završeni izazovi</p>
                  <p className="text-white text-2xl font-bold">
                    {selectedUser.challengesCompleted}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-xl p-4 border border-green-500/30">
                <p className="text-slate-300 text-sm mb-1">Ukupno poena</p>
                <p className="text-white text-3xl font-bold">
                  {selectedUser.points.toLocaleString()}
                </p>
              </div>
            </motion.div>
          </div>
        )}

        {/* Leaderboard List */}
        <div className="community-user-list">
          {otherUsers.map((user) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: user.rank * 0.05 }}
              className={`community-user-item ${
                user.rank <= 3 ? "community-user-item-top" : ""
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <div className="community-user-content">
                {/* Rank */}
                <div className="community-user-rank">
                  {getRankIcon(user.rank) || (
                    <span
                      className={`community-user-rank-number ${getRankColor(
                        user.rank
                      )}`}
                    >
                      {user.rank}
                    </span>
                  )}
                </div>

                {/* Avatar */}
                <div
                  className={`community-user-avatar ${getBadgeColor(
                    user.badge
                  )}`}
                >
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                {/* Info */}
                <div className="community-user-info">
                  <div className="community-user-info-header">
                    <h4 className="community-user-name">{user.fullName}</h4>
                    <div className="flex items-center gap-2">
                      <span className="community-user-level">
                        Level {user.level}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${getBadgeBgColor(
                          user.badge
                        )} ${getBadgeTextColor(user.badge)}`}
                      >
                        {user.badge.charAt(0).toUpperCase() +
                          user.badge.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="community-user-stats">
                    <div className="community-user-stat-items">
                      <div className="community-user-stat">
                        <Camera className="community-user-stat-icon" />
                        <span>{user.photoChallenges}</span>
                      </div>
                      <div className="community-user-stat">
                        <CheckCircle className="community-user-stat-icon" />
                        <span>{user.challengesCompleted}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Points */}
                <div className="community-user-points">
                  <p className="community-user-points-value">
                    {user.points.toLocaleString()}
                  </p>
                  <p className="community-user-points-label">poena</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400">
              Nema korisnika koji odgovaraju pretrazi
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("all");
              }}
              className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors"
            >
              Poništi filtere
            </button>
          </div>
        )}

        {/* Statistics Summary */}
        <div className="mt-8 px-6">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-5 border border-slate-700/50">
            <h3 className="text-white text-lg mb-4">Statistika rangova</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">
                  {users.filter((u) => u.badge === "gold").length}
                </div>
                <div className="text-slate-400 text-sm">Zlatni</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-300 mb-1">
                  {users.filter((u) => u.badge === "silver").length}
                </div>
                <div className="text-slate-400 text-sm">Srebrni</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">
                  {users.filter((u) => u.badge === "bronze").length}
                </div>
                <div className="text-slate-400 text-sm">Bronzani</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
