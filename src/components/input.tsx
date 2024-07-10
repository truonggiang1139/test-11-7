import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

type InputProps = {
  handleRequest: (value: string) => void;
};
export default function Input({ handleRequest }: InputProps) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      request: "",
    },
  });

  const handleSubmit = (value: typeof form.values) => {
    const { request } = value;
    if (request) {
      handleRequest(request);
      form.setFieldValue("request", "");
    }
  };
  return (
    <form
      onSubmit={form.onSubmit(handleSubmit)}
      className="flex gap-2 justify-center"
    >
      <TextInput
        key={form.key("request")}
        {...form.getInputProps("request")}
        w={300}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
}
