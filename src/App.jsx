import React from 'react';
import './App.css';
import "@nylas/components-agenda";

function App() {
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const diffTime = Math.abs(firstDayOfMonth - lastDayOfMonth);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return (
    <div>
      <div className="grid-container">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
        {Array(firstDayOfMonth.getDay())
          .fill(1)
          .map((_, i) => (
            <div key={i} />
          ))}
        {Array.from({ length: diffDays }, (_, i) => {
          const selected_date = new Date(
            today.getFullYear(),
            today.getMonth(),
            i + 1
          );
          return (
            <div key={selected_date.toISOString()}>
              {selected_date.getDate()}
              <nylas-agenda
                header_type="none"
                selected_date={selected_date}
                condensed_view={true}
                should_show_message_on_no_events=""
                id="6484c482-4eea-45fb-bd74-331756839f27"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;