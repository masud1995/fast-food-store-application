import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const TextInputField = ({
  label,
  type,
  placeholder,
  name,
}: {
  label: string;
  type: string;
  placeholder: string;
  name: string;
}) => {
  return (
    <div className="mb-4">
      <Label className="block mb-2" htmlFor={name}>
        {label}
      </Label>
      <Input type={type} id={name} name={name} placeholder={placeholder} />
    </div>
  );
};

export default TextInputField;
