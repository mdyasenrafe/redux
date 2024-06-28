import { TodoContainer } from "@/components/Todo";
import { Container } from "@/components/atoms";

export function Todo() {
  return (
    <Container>
      <h1
        className="text-center text-3xl font-s 
      my-10"
      >
        My Todo
      </h1>
      <TodoContainer />
    </Container>
  );
}
