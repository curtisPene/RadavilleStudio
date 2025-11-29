import { closeNav } from "@/stores/navSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef, type FC, type MouseEventHandler } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";

gsap.registerPlugin(SplitText);

const navLinks = ["Home", "About", "Curation", "Contact"];

type NavItemProps = {
  children: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const NavItem: FC<NavItemProps> = ({ children, onClick }) => {
  let path = `${(children as string).toLowerCase()}`;
  path = path === "home" ? "/" : path;

  return (
    <Link
      data-nav-item
      className="font-playfair text-4xl text-white"
      to={path}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export const NavigationLinks = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const isClickingRef = useRef(true);
  const splitCharsMapRef = useRef<Map<HTMLElement, SplitText>>(new Map());

  const dispatch = useDispatch();

  useGSAP(
    () => {
      if (!navRef.current) return;

      const links = Array.from(
        navRef.current.querySelectorAll<HTMLElement>("[data-nav-item]")
      );

      // Map each link to its SplitText instance

      links.forEach((link) => {
        const splitChars = new SplitText(link, {
          type: "chars",
          mask: "chars",
        });
        splitCharsMapRef.current.set(link, splitChars);
      });

      // Initial line animation
      const splitLines = new SplitText(links, {
        type: "lines",
        mask: "lines",
      });
      gsap.fromTo(
        splitLines.lines,
        { y: 100 },
        { y: 0, duration: 1.2, ease: "power4.inOut", stagger: 0.1 }
      );

      // Hover handlers
      const handleEnter = (e: Event) => {
        if (isClickingRef.current) return;
        console.log("enter");
        const split = splitCharsMapRef.current.get(
          e.currentTarget as HTMLElement
        );
        if (!split) return;
        gsap.to(split.chars, {
          rotateY: 180,
          duration: 0.4,
          ease: "power4.inOut",
          stagger: 0.05,
        });
      };

      const handleLeave = (e: Event) => {
        console.log("leave");
        if (isClickingRef.current) return;
        const split = splitCharsMapRef.current.get(
          e.currentTarget as HTMLElement
        );
        if (!split) return;
        gsap.to(split.chars, {
          rotateY: 0,
          duration: 0.4,
          ease: "power4.inOut",
          stagger: 0.05,
        });
      };

      links.forEach((link) => {
        link.addEventListener("mouseenter", handleEnter);
        link.addEventListener("mouseleave", handleLeave);
      });

      return () => {
        // Cleanup
        splitLines.revert();
        splitCharsMapRef.current.forEach((split) => split.revert());
        links.forEach((link) => {
          link.removeEventListener("mouseenter", handleEnter);
          link.removeEventListener("mouseleave", handleLeave);
          gsap.killTweensOf(link);
        });
      };
    },
    { scope: navRef }
  );

  return (
    <div
      ref={navRef}
      data-navigation-links
      className="flex flex-col items-start justify-end"
    >
      {navLinks.map((link) => (
        <NavItem
          key={link}
          onClick={(e) => {
            e.preventDefault();
            isClickingRef.current = true;
            const splitChars = splitCharsMapRef.current.get(
              e.currentTarget as HTMLElement
            );
            let path = `/${e.currentTarget.innerText?.toLowerCase()}`;
            path = path === "/home" ? "/" : path;
            if (!splitChars) return;
            gsap
              .timeline()
              .to(splitChars.chars, {
                rotateY: 180,
                duration: 0.4,
                stagger: 0.05,
                ease: "power4.inOut",
              })
              .to(splitChars.chars, {
                rotateY: 0,
                duration: 0.4,
                stagger: 0.05,
                ease: "power4.inOut",
                onComplete: () => {
                  splitChars.revert();
                  isClickingRef.current = false;
                  navigate(path);
                  setTimeout(() => {
                    dispatch(closeNav());
                  }, 300);
                },
              });
          }}
        >
          {link}
        </NavItem>
      ))}
    </div>
  );
};
