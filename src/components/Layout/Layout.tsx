import { Container } from "@chakra-ui/react";
import { Header } from "../Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="relative h-screen w-screen m-0 p-0" maxW="screen">
      <Header />
      {children}
    </Container>
  )
}

export { Layout }