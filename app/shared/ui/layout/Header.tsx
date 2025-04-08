import { WandSparkles } from "lucide-react";
import { NavLink } from "../components";
import { Button } from "@/components/ui/button";

export function Header() {
  const isLoggedIn = false;
  return (
    <nav className="container flex items-center justify-between py-4 lg:py-8 px-2 mx-auto">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <WandSparkles className="w-5 h-5 lg:w-6 lg:h-6 text-[#A855F7] hover:rotate-12 transform transition duration-300 ease-in-out" />
          <span className="font-extrabold lg:text-xl text-[#A855F7]">
            ClipPilot.ai
          </span>
        </NavLink>
      </div>
      <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
        <NavLink href="/#pricing">Pricing</NavLink>
        {isLoggedIn && <NavLink href="/videos">Your Videos</NavLink>}
      </div>
      <div className="flex lg:justify-end lg:flex-1">
        {isLoggedIn ? (
          <div className="flex items-center gap-2">
            <NavLink href="/upload">Upload a Video</NavLink>
            <div>Pro</div>
            <Button>User</Button>
          </div>
        ) : (
          <NavLink href="/sign-in">Sign In</NavLink>
        )}
      </div>
    </nav>
  );
}
