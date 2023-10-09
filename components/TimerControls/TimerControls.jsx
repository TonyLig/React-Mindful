import CustomButton1 from "../CustomButton1/CustomButtom1";

export default function TimerControls({
  countDownStarted,
  startTimer,
  stopTimer,
  onToggle,
  toggleForm,
  handleChange,
  timeInput,
}) {
  return (
    <>
      <div>
        {!countDownStarted ? (
          <CustomButton1 onClick={startTimer}>Start</CustomButton1>
        ) : (
          <CustomButton1 onClick={stopTimer}>Stop</CustomButton1>
        )}

        <CustomButton1 onClick={onToggle}>Set Time</CustomButton1>
      </div>
      {toggleForm ? (
        <div className="input-form">
          <input
            type="number"
            placeholder="Enter Time"
            onChange={handleChange}
            defaultValue={timeInput.toString()}
            name="time"
          />
        </div>
      ) : null}
    </>
  );
}
