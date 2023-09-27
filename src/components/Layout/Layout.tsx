import { Button, Container } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

function Layout({
  children,
  className,
  showBackButton = false,
}: {
  children: React.ReactNode;
  className?: string;
  showBackButton?: boolean;
}) {
  const router = useRouter();
  return (
    <Container
      className={`relative h-screen w-screen m-0 p-0 ${className}`}
      maxW="screen"
    >
      {children}
      {showBackButton && (
        <Button
          onClick={() => router.back()}
          variant="unstyled"
          className="w-[45px] h-[45px] md:w-[100px] md:h-[100px] bg-[#0101014d] rounded-full text-[#f5f5f5] text-[8px] md:text-[15px] uppercase tracking-[0.8px] md:tracking-[1.5px] font-normal fixed right-5 bottom-8 md:right-[150px] md:bottom-[70px]"
          backdropFilter={"blur(25px)"}
        >
          Back
        </Button>
      )}
    </Container>
  );
}

export { Layout };
