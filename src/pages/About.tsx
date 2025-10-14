import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { Bamboo } from "../design/icons";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function About() {
  useDocumentTitle("about me | glocherian");

  return (
    <VerticalNavPageLayout>
      <div className="flex flex-col items-center justify-center min-h-full px-8 py-12">
        <div className="w-full max-w-4xl">
          {/* Header */}
          <div className="flex justify-center items-center mb-12">
            <Bamboo size="md" />
          </div>

          {/* Main Content */}
          <div className="flex p-20 lg:flex-row gap-8 items-start">
            {/* Content */}
            <div className="flex-1 font-sans text-md bg-paper-white text-brown-secondary leading-relaxed">
              hi, i'm gloria
              <br /><br />
              i'm currently based in the bay area but have lived in the seattle, the midwest, and virginia before
              <br /><br />
              i love being in the outdoors, reading, sewing, crocheting, sketching/painting, and currently relearning mandarin
              <br /><br />    
              i'm always looking for new adventure and craft buddies, book/podcast recommendations, and people to practice my mandarin with
              <br /><br />
              would love to hear from you
              <br /><br />
              ~{`(`}˘▾˘~{`)`}
            </div>

            {/* Right Side Brush Stroke */}
            <div className="lg:w-2 lg:h-96 flex-shrink-0">
              <div className="about-brush-stroke-right"></div>
            </div>
          </div>
        </div>
      </div>
    </VerticalNavPageLayout>
  );
}
