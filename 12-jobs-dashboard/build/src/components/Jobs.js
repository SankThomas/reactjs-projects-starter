import { useState } from "react";
import { jobs } from "../data";
import defaultImage from "../default.png";
import RightSidebar from "./RightSidebar";

export default function Jobs() {
  const [items] = useState(jobs);
  const [value, setValue] = useState(0);

  return (
    <>
      <section className="jobs">
        <h1>Browse Jobs</h1>

        <div className="jobs-cards">
          {items.map((item, index) => (
            <article
              key={index}
              onClick={() => setValue(index)}
              title="Click to view full job description on the right"
              className={`${index === value && "active"}`}
            >
              <div>
                <h2
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  {item.image ? (
                    <span>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                        }}
                      />
                    </span>
                  ) : (
                    <span>
                      <img
                        src={defaultImage}
                        alt={item.title}
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                        }}
                      />
                    </span>
                  )}
                  {item.title}
                </h2>
                <p>{item.salary}</p>
              </div>
              <div>
                <p>{item.company}</p>
                <ul>
                  <li>{item.location}</li>
                  &middot;
                  <li>{item.type}</li>
                  &middot;
                  <li>{item.applicants} applicants</li>
                </ul>
              </div>

              <h4>About</h4>
              <p>{`${item.about.substring(0, 350)}...`}</p>
              <button className="apply">Apply Now</button>
            </article>
          ))}
        </div>
      </section>

      <RightSidebar items={items} value={value} />
    </>
  );
}
