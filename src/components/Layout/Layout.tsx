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
          className="w-[100px] h-[100px] rounded-full bg-black text-[#f5f5f5] text-[15px] uppercase tracking-[1.5px] font-normal fixed right-[150px] bottom-[70px]"
        >
          Back
        </Button>
      )}
    </Container>
  );
}

export { Layout };
