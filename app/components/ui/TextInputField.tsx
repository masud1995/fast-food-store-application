import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const TextInputField = ({
  label,
  type,
  placeholder,
  name,
  error,
}: {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  error: string[] | undefined;
}) => {
  console.log(error);

  return (
    <div className="mb-4">
      <Label className="block mb-2" htmlFor={name}>
        {label}
      </Label>
      <Input type={type} id={name} name={name} placeholder={placeholder} />
      {error && error.length > 0 ? (
        <div className="mt-2">
          {error?.map((err) => (
            <div className="text-sm text-red-600">{err}</div>
          ))}
        </div>
      ) : (
        <div className="mt-2 text-sm text-red-600">{error}</div>
      )}
    </div>
  );
};

export default TextInputField;
