export default function TimerControls({ isActive, toggleTimer, resetTimer }) {
  return (
    <div>
      <button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
