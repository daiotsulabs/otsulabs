import { Container } from "@chakra-ui/react";

function Layout({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <Container className={`relative h-screen w-screen m-0 p-0 ${className}`} maxW="screen">
      {children}
    </Container>
  )
}

export { Layout }