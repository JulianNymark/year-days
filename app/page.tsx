const Day = () => {
  return <input type="checkbox" />;
};

const Year = ({
  year,
  justifyEnd,
  leapYear,
}: {
  year: string;
  justifyEnd?: boolean;
  leapYear?: boolean;
}) => {
  const months = [
    { days: 31, name: "jan" },
    { days: 28 + (!!leapYear ? 1 : 0), name: "feb" },
    { days: 31, name: "mar" },
    { days: 30, name: "apr" },
    { days: 31, name: "may" },
    { days: 30, name: "jun" },
    { days: 31, name: "jul" },
    { days: 31, name: "aug" },
    { days: 30, name: "sep" },
    { days: 31, name: "oct" },
    { days: 30, name: "nov" },
    { days: 31, name: "dec" },
  ];

  return (
    <div className={`flex w-full ${justifyEnd ? "justify-end" : ""}`}>
      <div className="flex w-fit justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl">{year}</h1>
          <div className="flex m-4">
            {months.map((monthDays) => {
              return (
                <div className="w-[2em] text-center" key={monthDays.name}>
                  <div>
                    <span>{monthDays.name}</span>
                    <div className="flex flex-col">
                      {[...Array(monthDays.days)].map((day) => (
                        <Day key={day} />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <Year year={"2024"} justifyEnd />
        <Year year={"2025"} />
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <style>{`
.my_button {
  border-radius: 8px;
  border: 1px solid oklch(90% 0 100);
  background: oklch(90% 0 100);
  color: black;
  padding-inline: 20px;
  padding-block: 10px;
  margin: 10px;
}

.my_button:hover {
  background: oklch(100% 0 100);
  box-shadow: 0 0 20px 2px white;
}

`}</style>
        <button className="my_button">check today</button>
      </div>
    </div>
  );
}
