import React from "react";
import {
  IoWalletOutline,
  IoAnalytics,
  IoSettingsOutline,
} from "react-icons/io5";
import {
  BiTransfer,
  BiDollarCircle,
  BiCreditCard,
  BiTrendingUp,
  BiTrendingDown,
} from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Top Navigation */}
      <nav className="bg-white p-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-gray-800">Simbrella Vault</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-indigo-600 font-semibold">
              Dashboard
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              Wallets
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              Transactions
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              Analytics
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              Services
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <FaBell size={20} />
          </button>
          <div className="flex items-center space-x-2">
            <HiOutlineUserCircle size={24} className="text-gray-600" />
            <span className="text-gray-800 font-medium">Sarah Johnson</span>
            <BsArrowRightShort
              size={20}
              className="transform rotate-90 text-gray-600"
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h2>

        {/* Wallets Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Main Wallet */}
          <div className="bg-white p-6 rounded-lg shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <IoWalletOutline size={24} className="text-indigo-600" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Main Wallet
                  </h3>
                </div>
                <span className="text-green-500 text-sm font-semibold">
                  Active
                </span>
                <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                  ...
                </button>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">$2,450.00</p>
              <p className="text-sm text-gray-500">+$120.50 this month</p>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                <BiDollarCircle className="mr-1" /> Send Money
              </button>
              <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                <FiPlus className="mr-1" /> Top-Up
              </button>
            </div>
          </div>

          {/* Savings Wallet */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <IoWalletOutline size={24} className="text-purple-600" />
                <h3 className="text-lg font-medium text-gray-800">Savings</h3>
              </div>
              <span className="text-yellow-500 text-sm font-semibold">
                Inactive
              </span>
              <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                ...
              </button>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">$8,920.00</p>
            <p className="text-sm text-gray-500">+$500.00 this month</p>
          </div>

          {/* Business Wallet */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <BiCreditCard size={24} className="text-blue-600" />
                <h3 className="text-lg font-medium text-gray-800">Business</h3>
              </div>
              <span className="text-yellow-500 text-sm font-semibold">
                Inactive
              </span>
              <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                ...
              </button>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">$1,280.00</p>
            <p className="text-sm text-gray-500">-$45.20 this month</p>
          </div>
        </div>

        {/* Monthly Spending & Recent Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Monthly Spending Chart (Placeholder) */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-800">
                Monthly Spending
              </h3>
              <select className="border rounded-md px-2 py-1 text-sm">
                <option>Last 6 months</option>
              </select>
            </div>
            <div className="h-64 flex items-end pb-4">
              {/* Simple SVG graph placeholder based on the image */}
              <svg
                viewBox="0 0 600 200"
                preserveAspectRatio="none"
                className="w-full h-full"
              >
                {/* Grid lines */}
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="200"
                  stroke="#e0e0e0"
                  strokeWidth="1"
                ></line>
                <line
                  x1="100"
                  y1="0"
                  x2="100"
                  y2="200"
                  stroke="#e0e0e0"
                  strokeWidth="1"
                ></line>
                <line
                  x1="200"
                  y1="0"
                  x2="200"
                  y2="200"
                  stroke="#e0e0e0"
                  strokeWidth="1"
                ></line>
                <line
                  x1="300"
                  y1="0"
                  x2="300"
                  y2="200"
                  stroke="#e0e0e0"
                  strokeWidth="1"
                ></line>
                <line
                  x1="400"
                  y1="0"
                  x2="400"
                  y2="200"
                  stroke="#e0e0e0"
                  strokeWidth="1"
                ></line>
                <line
                  x1="500"
                  y1="0"
                  x2="500"
                  y2="200"
                  stroke="#e0e0e0"
                  strokeWidth="1"
                ></line>
                <line
                  x1="600"
                  y1="0"
                  x2="600"
                  y2="200"
                  stroke="#e0e0e0"
                  strokeWidth="1"
                ></line>

                <line
                  x1="0"
                  y1="200"
                  x2="600"
                  y2="200"
                  stroke="#e0e0e0"
                  strokeWidth="1"
                ></line>
                <line
                  x1="0"
                  y1="150"
                  x2="600"
                  y2="150"
                  stroke="#e0e0e0"
                  strokeWidth="1"
                ></line>
                <line
                  x1="0"
                  y1="100"
                  x2="600"
                  y2="100"
                  stroke="#e0e0e0"
                  strokeWidth="1"
                ></line>
                <line
                  x1="0"
                  y1="50"
                  x2="600"
                  y2="50"
                  stroke="#e0e0e0"
                  strokeWidth="1"
                ></line>

                {/* The main graph line */}
                <polyline
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="3"
                  points="0,130 100,60 200,160 300,100 400,20 500,80 600,40"
                />
                {/* Area under the graph */}
                <polygon
                  fill="url(#graphGradient)"
                  points="0,130 100,60 200,160 300,100 400,20 500,80 600,40 600,200 0,200"
                />

                {/* Gradient Definition */}
                <defs>
                  <linearGradient
                    id="graphGradient"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Labels (simplified, for visual representation) */}
                <text
                  x="0"
                  y="195"
                  className="text-xs fill-gray-500"
                  textAnchor="start"
                >
                  0
                </text>
                <text
                  x="0"
                  y="145"
                  className="text-xs fill-gray-500"
                  textAnchor="start"
                >
                  400
                </text>
                <text
                  x="0"
                  y="95"
                  className="text-xs fill-gray-500"
                  textAnchor="start"
                >
                  800
                </text>
                <text
                  x="0"
                  y="45"
                  className="text-xs fill-gray-500"
                  textAnchor="start"
                >
                  1200
                </text>
                <text
                  x="0"
                  y="-5"
                  className="text-xs fill-gray-500"
                  textAnchor="start"
                >
                  1600
                </text>

                <text
                  x="20"
                  y="215"
                  className="text-xs fill-gray-500"
                  textAnchor="middle"
                >
                  Jan
                </text>
                <text
                  x="120"
                  y="215"
                  className="text-xs fill-gray-500"
                  textAnchor="middle"
                >
                  Feb
                </text>
                <text
                  x="220"
                  y="215"
                  className="text-xs fill-gray-500"
                  textAnchor="middle"
                >
                  Mar
                </text>
                <text
                  x="320"
                  y="215"
                  className="text-xs fill-gray-500"
                  textAnchor="middle"
                >
                  Apr
                </text>
                <text
                  x="420"
                  y="215"
                  className="text-xs fill-gray-500"
                  textAnchor="middle"
                >
                  May
                </text>
                <text
                  x="520"
                  y="215"
                  className="text-xs fill-gray-500"
                  textAnchor="middle"
                >
                  Jun
                </text>
              </svg>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-800">
                Recent Transactions
              </h3>
              <a href="#" className="text-indigo-600 hover:underline text-sm">
                View all
              </a>
            </div>
            <div className="space-y-4">
              {/* Transaction Item 1 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <BiTrendingDown size={20} className="text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Payment Received
                    </p>
                    <p className="text-sm text-gray-500">From John Doe</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-500">+$250.00</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>

              {/* Transaction Item 2 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <BiTrendingUp size={20} className="text-red-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Grocery Shopping
                    </p>
                    <p className="text-sm text-gray-500">Walmart Store</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-red-500">-$85.30</p>
                  <p className="text-xs text-gray-500">5 hours ago</p>
                </div>
              </div>

              {/* Transaction Item 3 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <BiCreditCard size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Mobile Recharge</p>
                    <p className="text-sm text-gray-500">Airtime Top-up</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-red-500">-$25.00</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>

              {/* Transaction Item 4 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <BiDollarCircle size={20} className="text-purple-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Electricity Bill
                    </p>
                    <p className="text-sm text-gray-500">Monthly payment</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-red-500">-$120.00</p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Transfer */}
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center justify-center text-center">
              <div className="p-3 bg-gray-100 rounded-full mb-3">
                <BiTransfer size={24} className="text-indigo-600" />
              </div>
              <p className="font-medium text-gray-800">Transfer</p>
            </div>
            {/* Add Wallet */}
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center justify-center text-center">
              <div className="p-3 bg-gray-100 rounded-full mb-3">
                <FiPlus size={24} className="text-purple-600" />
              </div>
              <p className="font-medium text-gray-800">Add Wallet</p>
            </div>
            {/* Analytics */}
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center justify-center text-center">
              <div className="p-3 bg-gray-100 rounded-full mb-3">
                <IoAnalytics size={24} className="text-teal-600" />
              </div>
              <p className="font-medium text-gray-800">Analytics</p>
            </div>
            {/* Settings */}
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center justify-center text-center">
              <div className="p-3 bg-gray-100 rounded-full mb-3">
                <IoSettingsOutline size={24} className="text-orange-600" />
              </div>
              <p className="font-medium text-gray-800">Settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
