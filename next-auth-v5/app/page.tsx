import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils";
const font = Poppins({
  subsets:["latin"],
  weight: ["600"]
})
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--t-gradient-stops))] from-sky-400 to blue-800">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font0semibold text-blue-500 drop-shadow-md", font.className)}>
          Auth
        </h1>
        <p className="text-blue-400 text-lg">
          A simple authenticatin service
        </p>
      </div>
      <LoginButton>
      <Button variant={"secondary"} size={"lg"}>Sign in</Button>
      </LoginButton>
    </main>
  );
}
