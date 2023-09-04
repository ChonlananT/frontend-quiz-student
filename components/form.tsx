// import { API_URL } from "@/utils/api";
import { Input, Button, Card, Title, Stack, Box } from "@mantine/core";
import Modal from "react-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, type Form } from "@components/utils/types";

export default function Form() {
  return (
    <Card withBorder shadow="xs" p="xl" bg-color="cyan.2" radius="md  ">
      <Title order={1} color="teal" style={{ marginBottom: "20px" }}>
        Donate
      </Title>
      
      useFo

      <form>
      
        <Stack spacing={"xs"}>
          <Input.Wrapper>
            <Input.Label>First Name</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Last Name</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Email</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Donation Amount</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>
          <Button color="black">
            Submit
          </Button>
        </Stack>
      </form>
      
    </Card>
  );
}
