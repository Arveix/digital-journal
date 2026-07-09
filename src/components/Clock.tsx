import { useEffect, useState } from "react";

type DateTimeValues = {
    day: string;
    month: string;
    date: string;
    fullYear: string;
    hours: string;
    minutes: string;
    seconds: string;
};

const DAYS_OF_WEEK = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
] as const;

const MONTHS_OF_YEAR = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
] as const;

function getCurrentDateTimeValues(now: Date): DateTimeValues {
    return {
        day: DAYS_OF_WEEK[now.getDay()],
        month: MONTHS_OF_YEAR[now.getMonth()],
        date: now.getDate().toString().padStart(2, "0"),
        fullYear: now.getFullYear().toString(),
        hours: now.getHours().toString().padStart(2, "0"),
        minutes: now.getMinutes().toString().padStart(2, "0"),
        seconds: now.getSeconds().toString().padStart(2, "0"),
    };
}

export default function Clock() {
    const [now, setNow] = useState(new Date());

    const dateTime = getCurrentDateTimeValues(now);

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-start leading-none clock">
            <div>{dateTime.hours}.{dateTime.minutes}.{dateTime.seconds}</div>
            <div>{dateTime.day}, {dateTime.date} {dateTime.month}</div>
        </div>
    );
}