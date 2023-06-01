import { FC } from "react";
import { Input } from "../../../../common/Input/Input";
import { getCourseDuration } from "../../../../helpers/getCourseDuration";

interface IDuration {
  duration: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Duration: FC<IDuration> = ({ duration, onChange }) => {
  return (
    <div>
      <h2>Duration</h2>
      <Input
        value={duration}
        onChange={onChange}
        type="number"
        labelText="Duration"
        placeholderText="Enter duration..."
        data-testid="durationInput"
      />
      <p>Duration: {getCourseDuration(duration)}</p>
    </div>
  );
};
