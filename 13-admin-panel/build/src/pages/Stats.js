import { useState } from "react"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function Stats() {
  const [showMonthly, setShowMonthly] = useState(true)

  const weekly = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Your Stats For The Past Week",
        data: [7, 8, 15, 14, 19, 20, 24],
      },
    ],
  }

  const monthly = {
    labels: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ],
    datasets: [
      {
        label: "Your Stats For The Past Month",
        data: [
          14, 16, 30, 28, 38, 40, 48, 56, 64, 72, 80, 88, 94, 102, 110, 118,
          116, 112, 108, 104, 108, 108, 112, 116, 120, 113, 109, 105, 102, 100,
        ],
      },
    ],
  }

  return (
    <>
      <section className="section">
        <h1>Your Website Statistics</h1>
        <p>
          Learn more about the activity and behavior of your site's visitors.
        </p>

        <br />
        <ul style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <li>
            <button
              onClick={() => setShowMonthly(true)}
              className={`btn ${showMonthly ? "btn-active" : "btn-gray"}`}
            >
              Weekly
            </button>
          </li>
          <li>
            <button
              onClick={() => setShowMonthly(false)}
              className={`btn ${!showMonthly ? "btn-active" : "btn-gray"}`}
            >
              Monthly
            </button>
          </li>
        </ul>

        {!showMonthly ? (
          <div style={{ marginTop: 32 }}>
            <h2>Your Site data for the past month</h2>
            <Bar data={monthly} />
          </div>
        ) : (
          <div style={{ marginTop: 32 }}>
            <h2>Your Site data for the past week</h2>
            <Bar data={weekly} />
          </div>
        )}
      </section>
    </>
  )
}
