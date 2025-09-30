"use client";

import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  FiHome,
  FiFileText,
  FiCreditCard,
  FiBarChart2,
  FiTarget,
} from "react-icons/fi";

const navLinks = [
  { icon: <FiHome />, text: "Dashboard" },
  { icon: <FiCreditCard />, text: "Transactions" },
  { icon: <FiFileText />, text: "Bills" },
  { icon: <FiBarChart2 />, text: "Insights" },
  { icon: <FiTarget />, text: "Goals" },
];

const burnRateData = [
  { day: 0, amount: 100 },
  { day: 2, amount: 95 },
  { day: 4, amount: 85 },
  { day: 6, amount: 92 },
  { day: 8, amount: 87 },
  { day: 10, amount: 90 },
  { day: 12, amount: 96 },
];

const pieData = [
  { name: "Needs", value: 45 },
  { name: "Wants", value: 35 },
  { name: "Guilt", value: 20 },
];

function CustomActiveDot({
  cx,
  cy,
}: {
  cx?: number;
  cy?: number;
}) {
  if (cx === undefined || cy === undefined) return <g />;
  return (
    <g>
      <rect
        x={cx - 18}
        y={cy - 14}
        rx={5}
        ry={5}
        width={36}
        height={18}
        fill="#ec6b4f"
        opacity="0.95"
      />
      <circle cx={cx} cy={cy + 14} r={4} fill="#ec6b4f" />
    </g>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-[#fff9f6]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#fff9f6] pt-8 px-7 border-r border-[#ede7e2] min-h-screen">
        <div className="flex items-center mb-12">
          <span className="text-2xl font-bold text-[#ec6b4f] mr-3">💡</span>
          <span className="text-2xl font-bold text-[#212121] tracking-wide">SmartSpend</span>
        </div>
        <nav className="flex flex-col gap-6 text-[#212121]">
          {navLinks.map(({ icon, text }, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 cursor-pointer text-base font-normal hover:text-[#ec6b4f]"
            >
              <span className="text-lg">{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </nav>
      </aside>
      {/* Main content */}
      <main className="flex-1 p-8 bg-[#fff9f6]">
        {/* Top bar */}
        <div className="flex justify-end items-center gap-4 mb-6">
          <button className="bg-[#ec6b4f] text-white rounded px-7 py-2 text-base font-semibold shadow-sm">
            Alerts &
          </button>
          <div className="w-10 h-10 rounded-full bg-[#eee] overflow-hidden flex items-center justify-center">
            {/* Replace src with actual user avatar */}
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        {/* Dashboard grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-7">
          {/* Current Balance */}
          <div className="bg-white rounded-xl p-6 shadow border border-[#f8f3ee]">
            <h2 className="text-[#161616] font-bold text-lg mb-1">Current Balance</h2>
            <p className="font-extrabold text-4xl text-[#161616] mb-1">$1,900</p>
            <p className="text-[#c49777] text-base">After upcoming bills: $150</p>
          </div>
          {/* Days Left */}
          <div className="bg-white rounded-xl p-6 shadow border border-[#f8f3ee]">
            <h2 className="text-[#161616] font-bold text-lg mb-1">Days Left</h2>
            <p className="font-extrabold text-4xl text-[#161616] mb-2">
              34 <span className="text-base font-normal align-bottom">today</span>
            </p>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-full h-2 rounded-full bg-[#ecf1ed] overflow-hidden">
                <div className="bg-[#499e70] h-2 rounded-full" style={{ width: "70%" }} />
              </div>
              <span className="text-[#c49777] font-normal text-base">48</span>
            </div>
            <p className="text-[#499e70] font-medium text-base">Power-Save</p>
          </div>
          {/* Daily Burn */}
          <div className="bg-white rounded-xl p-6 shadow border border-[#f8f3ee]">
            <h2 className="text-[#161616] font-bold text-lg mb-1">Daily Burn</h2>
            <p className="font-extrabold text-4xl text-[#161616]">$45</p>
          </div>
          {/* Burn Rate Chart */}
          <div className="bg-white col-span-2 rounded-xl p-6 shadow border border-[#f8f3ee] h-56 flex flex-col">
            <h2 className="text-[#161616] font-bold text-lg mb-2">Burn Rate</h2>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={burnRateData}
                margin={{ left: 3, right: 3, top: 15, bottom: 12 }}
              >
                <defs>
                  <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ec6b4f" stopOpacity={0.18} />
                    <stop offset="100%" stopColor="#fff" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="day"
                  tick={{ fontSize: 16, fill: "#c49777", fontWeight: "bold" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  domain={[80, 100]}
                  tick={{ fontSize: 16, fill: "#c49777", fontWeight: "bold" }}
                  tickFormatter={(v) => `$${v}`}
                  axisLine={false}
                  tickLine={false}
                />
                <Area
                  type="monotone"
                  dataKey="amount"
                  stroke="#ec6b4f"
                  strokeWidth={2}
                  dot={false}
                  fill="url(#colorRate)"
                  activeDot={CustomActiveDot}
                />
                <Tooltip
                  contentStyle={{
                    background: "#fff",
                    border: "1px solid #f2e9e3",
                    borderRadius: "8px",
                    fontSize: "13px",
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          {/* Alerts Pie */}
          <div className="bg-white rounded-xl p-6 shadow border border-[#f8f3ee] flex flex-col items-center">
            <h2 className="text-[#161616] font-bold text-lg mb-2">Alerts & Insights</h2>
            <div className="flex items-center">
              <PieChart width={90} height={90} className="-ml-1">
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={40}
                  dataKey="value"
                  stroke="#fff"
                  strokeWidth={3}
                  startAngle={90}
                  endAngle={-270}
                >
                  {pieData.map((_, idx) => (
                    <Cell key={`cell-${idx}`} fill="#ec6b4f" />
                  ))}
                </Pie>
              </PieChart>
              <div className="ml-6 text-base font-semibold text-[#161616]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-4 h-4 rounded-full bg-[#ec6b4f] block" /> Needs
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-4 h-4 rounded-full bg-[#ec6b4f] block" /> Wants
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#ec6b4f] block" /> Guilt
                </div>
              </div>
            </div>
          </div>
          {/* Insights */}
          <div className="bg-white rounded-xl p-6 shadow border border-[#f8f3ee] flex flex-col justify-between">
            <h2 className="text-[#161616] font-bold text-lg mb-2">Insights</h2>
            <p className="text-[#161616] mb-3 text-base flex-1">
              Late-night spending <span className="text-[#ec6b4f] font-bold">• 20%</span> this week week
            </p>
            <button className="border border-[#ec6b4f] text-[#ec6b4f] rounded px-3 py-2 w-full font-bold">
              See all Insights
            </button>
          </div>
          {/* Upcoming Bills */}
          <div className="bg-white rounded-xl p-6 shadow border border-[#f8f3ee] flex flex-col justify-between">
            <h2 className="text-[#161616] font-bold text-lg mb-2">Upcoming Bills</h2>
            <div className="text-[#161616] mb-2 text-base">
              <span className="font-bold">Rent</span> In 2 days
            </div>
            <div className="text-[#161616] mb-3 text-base">
              <span className="font-bold">Electricity</span> In 5 days
            </div>
            <button className="border border-[#ec6b4f] text-[#ec6b4f] rounded px-3 py-2 w-full font-bold">
              + Add Bill
            </button>
          </div>
          {/* Achievements */}
          <div className="bg-white rounded-xl p-6 shadow border border-[#f8f3ee] flex flex-col justify-between">
            <h2 className="text-[#161616] font-bold text-lg mb-2">Achievements</h2>
            <p className="text-[#161616] mb-3 text-base">🌱 7-day streak 🎉</p>
            <button className="border border-[#ec6b4f] text-[#ec6b4f] rounded px-3 py-2 w-full font-bold">
              View all
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
