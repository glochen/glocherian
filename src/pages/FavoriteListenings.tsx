import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { Record } from "../design/icons/GeneralIcons";

export function FavoriteListenings() {
  return (
    <VerticalNavPageLayout>
      <div className="py-12 px-8">
        <div className="flex justify-center items-center">
          <Record size="md" />
        </div>
      </div>

      {/* Horizontal brush stroke */}
      <div className="px-8">
        <div className="brush-stroke-line"></div>
      </div>

      <div className="flex-grow shrink-0 px-8 pb-12 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/5NyN6AN8aO5TdW7pQlphlC?utm_source=generator"
              width="100%"
              height="800"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>

          <div>
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/3nGZ7oYwxJ914ziX6Tfvlq?utm_source=generator"
              width="100%"
              height="800"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </VerticalNavPageLayout>
  );
}
