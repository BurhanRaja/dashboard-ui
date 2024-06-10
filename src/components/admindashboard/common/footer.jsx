import { cn } from "lib/utils";
import { Link } from "react-router-dom";

export function Footer({ theme }) {
  return (
    <div
      className={cn(
        "z-20 w-full shadow backdrop-blur",
        theme == "dark"
          ? "bg-slate-950"
          : "supports-[backdrop-filter]:bg-white/60"
      )}
    >
      <div className="mx-4 md:mx-8 flex h-14 items-center justify-center">
        <p
          className={cn(
            "text-xs md:text-sm leading-loose text-muted-foreground text-center",
            theme == "dark" ? "text-lightactive" : ""
          )}
        >
          Copyright 2024{" "}
          <Link to="/" className="text-primary">
            Techysquad
          </Link>
          . All rights Reserved
        </p>
      </div>
    </div>
  );
}
