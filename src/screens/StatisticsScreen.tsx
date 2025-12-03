import React, { useState } from "react";
import { motion } from "motion/react";
import { BottomNav } from "../components/common/BottomNav";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, Award, Target, Search } from "lucide-react";

export function StatisticsScreen() {
  const [timeFilter, setTimeFilter] = useState<"day" | "week" | "month">(
    "week"
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Podaci za različite vremenske periode
  const getDailyData = (filter: "day" | "week" | "month") => {
    switch (filter) {
      case "day":
        return [
          { hour: "9", points: 30 },
          { hour: "12", points: 45 },
          { hour: "15", points: 60 },
          { hour: "18", points: 40 },
        ];
      case "week":
        return [
          { day: "Pon", points: 120 },
          { day: "Uto", points: 150 },
          { day: "Sri", points: 90 },
          { day: "Čet", points: 180 },
          { day: "Pet", points: 140 },
          { day: "Sub", points: 200 },
          { day: "Ned", points: 160 },
        ];
      case "month":
        return [
          { day: "1.ned", points: 450 },
          { day: "2.ned", points: 520 },
          { day: "3.ned", points: 480 },
          { day: "4.ned", points: 600 },
        ];
      default:
        return [];
    }
  };

  const getCo2Data = (filter: "day" | "week" | "month") => {
    switch (filter) {
      case "day":
        return [
          { period: "Jutro", co2: 4 },
          { period: "Podne", co2: 8 },
          { period: "Veče", co2: 6 },
        ];
      case "week":
        return [
          { week: "Sed 1", co2: 12 },
          { week: "Sed 2", co2: 15 },
          { week: "Sed 3", co2: 18 },
          { week: "Sed 4", co2: 22 },
        ];
      case "month":
        return [
          { month: "Sep", co2: 45 },
          { month: "Okt", co2: 38 },
          { month: "Nov", co2: 32 },
        ];
      default:
        return [];
    }
  };

  const getCategoryData = (filter: "day" | "week" | "month") => {
    switch (filter) {
      case "day":
        return [
          { name: "Reciklaža", value: 40, color: "#16A34A" },
          { name: "Transport", value: 30, color: "#4ADE80" },
          { name: "Energija", value: 20, color: "#22C55E" },
          { name: "Voda", value: 10, color: "#86EFAC" },
        ];
      case "week":
        return [
          { name: "Reciklaža", value: 35, color: "#16A34A" },
          { name: "Transport", value: 28, color: "#4ADE80" },
          { name: "Energija", value: 20, color: "#22C55E" },
          { name: "Voda", value: 17, color: "#86EFAC" },
        ];
      case "month":
        return [
          { name: "Reciklaža", value: 32, color: "#16A34A" },
          { name: "Transport", value: 25, color: "#4ADE80" },
          { name: "Energija", value: 23, color: "#22C55E" },
          { name: "Voda", value: 20, color: "#86EFAC" },
        ];
      default:
        return [];
    }
  };

  const getAchievements = (filter: "day" | "week" | "month") => {
    switch (filter) {
      case "day":
        return {
          streak: "1 dan 🔥",
          challenges: "3 završena",
          points: "140 pts",
        };
      case "week":
        return {
          streak: "5 dana 🔥",
          challenges: "8 završenih",
          points: "1,050 pts",
        };
      case "month":
        return {
          streak: "12 dana 🌤",
          challenges: "8 završenih",
          points: "2,450 pts",
        };
      default:
        return {
          streak: "12 dana 🌤",
          challenges: "8 završenih",
          points: "2,450 pts",
        };
    }
  };

  const getSummaryStats = (filter: "day" | "week" | "month") => {
    switch (filter) {
      case "day":
        return [
          {
            icon: TrendingUp,
            label: "Trend",
            value: "+5%",
            color: "from-green-500 to-emerald-600",
          },
          {
            icon: Award,
            label: "Rang",
            value: "#42",
            color: "from-yellow-500 to-orange-600",
          },
          {
            icon: Target,
            label: "Cilj",
            value: "45%",
            color: "from-blue-500 to-cyan-600",
          },
        ];
      case "week":
        return [
          {
            icon: TrendingUp,
            label: "Trend",
            value: "+18%",
            color: "from-green-500 to-emerald-600",
          },
          {
            icon: Award,
            label: "Rang",
            value: "#42",
            color: "from-yellow-500 to-orange-600",
          },
          {
            icon: Target,
            label: "Cilj",
            value: "85%",
            color: "from-blue-500 to-cyan-600",
          },
        ];
      case "month":
        return [
          {
            icon: TrendingUp,
            label: "Trend",
            value: "+22%",
            color: "from-green-500 to-emerald-600",
          },
          {
            icon: Award,
            label: "Rang",
            value: "#42",
            color: "from-yellow-500 to-orange-600",
          },
          {
            icon: Target,
            label: "Cilj",
            value: "92%",
            color: "from-blue-500 to-cyan-600",
          },
        ];
      default:
        return [];
    }
  };

  const dailyData = getDailyData(timeFilter);
  const co2Data = getCo2Data(timeFilter);
  const categoryData = getCategoryData(timeFilter);
  const achievements = getAchievements(timeFilter);
  const summaryStats = getSummaryStats(timeFilter);

  const totalPoints = categoryData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 pb-24">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-3xl mb-2"
        >
          Statistika{" "}
          <svg
            className="inline-block"
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 512 512"
          >
            <path
              fill="#2bc154"
              d="M376 160v32h65.372L252 381.373l-72-72L76.686 412.686l22.628 22.628L180 354.627l72 72l212-211.999V280h32V160z"
            ></path>
            <path fill="#2bc154" d="M48 104H16v392h480v-32H48z"></path>
          </svg>
        </motion.h1>
        <p className="text-green-300">
          Tvoj napredak u oktobru: +18% u odnosu na septembar
        </p>
      </div>

      {/* Search Bar */}
      <div className="px-6 mb-4">
        <div className="relative">
         
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="px-6 mb-6">
        <div className="flex gap-3 bg-slate-800/50 backdrop-blur-lg rounded-xl p-2 border border-slate-700/50">
          {(["day", "week", "month"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setTimeFilter(filter)}
              className={`flex-1 py-2 rounded-lg transition-all ${
                timeFilter === filter
                  ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                  : "text-slate-400 hover:text-slate-300"
              }`}
            >
              {filter === "day"
                ? "Danas"
                : filter === "week"
                ? "Sedmica"
                : "Mjesec"}
            </button>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="px-6 mb-6">
        <div className="grid grid-cols-3 gap-3">
          {summaryStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-4 border border-slate-700/50"
            >
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2`}
              >
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-slate-400 text-xs">{stat.label}</p>
              <p className="text-white text-xl mt-1">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Daily Progress Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="px-6 mb-6"
      >
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-5 border border-slate-700/50">
          <h3 className="text-white text-lg mb-4">
            {timeFilter === "day"
              ? "Dnevni napredak (sati)"
              : timeFilter === "week"
              ? "Sedmični napredak"
              : "Mjesečni napredak"}
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis
                dataKey={
                  timeFilter === "day"
                    ? "hour"
                    : timeFilter === "week"
                    ? "day"
                    : "day"
                }
                stroke="#94a3b8"
              />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                  color: "#fff",
                }}
                formatter={(value) => [`${value} pts`, "Poeni"]}
              />
              <Line
                type="monotone"
                dataKey="points"
                stroke="#4ADE80"
                strokeWidth={3}
                dot={{ fill: "#16A34A", r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Weekly CO2 Reduction Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="px-6 mb-6"
      >
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-5 border border-slate-700/50">
          <h3 className="text-white text-lg mb-4">
            {timeFilter === "day"
              ? "Dnevno smanjenje CO₂"
              : timeFilter === "week"
              ? "Sedmično smanjenje CO₂"
              : "Mjesečno smanjenje CO₂"}
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={co2Data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis
                dataKey={
                  timeFilter === "day"
                    ? "period"
                    : timeFilter === "week"
                    ? "week"
                    : "month"
                }
                stroke="#94a3b8"
              />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                  color: "#fff",
                }}
                formatter={(value) => [`${value} kg`, "CO₂"]}
              />
              <Bar dataKey="co2" fill="#4ADE80" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Eco Points by Category */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="px-6 mb-6"
      >
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-5 border border-slate-700/50">
          <h3 className="text-white text-lg mb-4">Eko poeni po kategorijama</h3>
          <div className="flex items-center justify-between">
            <ResponsiveContainer width="50%" height={180}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                  formatter={(value) => [`${value}%`, "Udeo"]}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-3">
              {categoryData.map((category) => (
                <div
                  key={category.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="text-slate-300 text-sm">
                      {category.name}
                    </span>
                  </div>
                  <span className="text-white">{category.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Achievement Summary */}
      <div className="px-6 mb-6">
        <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30">
          <h3 className="text-white text-lg mb-4">
            {timeFilter === "day"
              ? "Današnja postignuća"
              : timeFilter === "week"
              ? "Sedmična postignuća"
              : "Mjesečna postignuća"}
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Najduža aktivna serija</span>
              <span className="text-green-400">{achievements.streak}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Ukupno izazova</span>
              <span className="text-green-400">{achievements.challenges}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">
                Poeni ovog{" "}
                {timeFilter === "day"
                  ? "dana"
                  : timeFilter === "week"
                  ? "sedmice"
                  : "mjeseca"}
              </span>
              <span className="text-green-400">{achievements.points}</span>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}