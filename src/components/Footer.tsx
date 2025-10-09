import { Button } from "@heroui/react";
import { Bonsai, Fish } from "../design/icons";

export function Footer() {
  const handleAboutClick = () => {
    // Navigate to about page when implemented
    console.log("About Me clicked");
  };

  const handleContactClick = () => {
    // Navigate to contact page when implemented
    console.log("Contact Me clicked");
  };

  return (
    <footer className="bg-brown-tertiary">
      <div className="flex flex-col items-center justify-center px-8 py-6">
        <div className="flex flex-row gap-16">
          <Button
            className="hover:bg-brown-secondary/25 transition-colors duration-200 rounded-md p-0 min-w-0 w-20 h-28 flex flex-col items-center justify-center gap-0.5"
            onPress={handleAboutClick}
          >
            <Bonsai size="md" />
            <span className="text-blue-primary font-lxgw-wenkai-tc text-xs">
              我是誰
            </span>
            <span className="text-brown-secondary font-sans text-xs">about me</span>
          </Button>
          <Button
            className="hover:bg-brown-secondary/25 transition-colors duration-200 rounded-md p-0 min-w-0 w-20 h-28 flex flex-col items-center justify-center gap-0.5"
            onPress={handleContactClick}
          >
            <Fish size="md" />
            <span className="text-blue-primary font-lxgw-wenkai-tc text-xs">
              敲我一下
            </span>
            <span className="text-brown-secondary font-sans text-xs">contact me</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}
