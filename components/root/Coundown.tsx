import React, { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  let data = [
    {
      time: timeLeft.days,
      title: "days",
      color: "tomato",
    },
    {
      time: timeLeft.hours,
      title: "hours",
      color: "purple",
    },
    {
      time: timeLeft.minutes,
      title: "minutes",
      color: "green",
    },
    {
      time: timeLeft.seconds,
      title: "seconds",
      color: "blue",
    },
  ];

  return (
    // <div>
    //   {timeLeft.days > 0 && (
    //     <div>
    //       Days: {formatTime(timeLeft.days)}, Hours: {formatTime(timeLeft.hours)}
    //       , Minutes: {formatTime(timeLeft.minutes)}, Seconds:{" "}
    //       {formatTime(timeLeft.seconds)}
    //     </div>
    //   )}
    //   {timeLeft.days <= 0 && <div>Countdown Finished!</div>}
    // </div>
    <div>
      <ul className="flex items-center justify-start gap-1 md:gap-4">
        {data.map((item) => (
          <li
            key={item.title}
            className={`border-[#3e95cf72] h-[80px] md:h-[100px] w-[80px] md:w-[100px] p-2 px-4 md:px-7 border-[1px] flex_center flex-col rounded-md`}
            style={{
              backgroundColor: item.color,
              color: "white",
            }}
          >
            <span className=" text-[1.3rem] md:text-[2.5rem] my-1">
              {item.time}
            </span>
            <span className="tracking-[3px] uppercase md:py-2 text-[0.7rem]">
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countdown;
