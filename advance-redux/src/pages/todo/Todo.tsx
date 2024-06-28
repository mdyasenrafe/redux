import { TodoCard, TodoContainer } from "@/components/Todo";
import { Container } from "@/components/atoms";

export function Todo() {
  return (
    <Container>
      <h1>My Todo</h1>
      <TodoContainer />
      <TodoCard />
    </Container>
  );
}
