import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { Music } from "../design/icons/GeneralIcons";

export function CurrentListenings() {
  return (
    <VerticalNavPageLayout>
      <div className="py-12 px-8">
        <div className="flex justify-center items-center">
          <Music size="md" />
        </div>
      </div>

      {/* Horizontal brush stroke */}
      <div className="px-8">
        <div className="brush-stroke-line"></div>
      </div>

      <div className="flex-grow shrink-0 px-8 pb-12 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/3DvQyxBQHqzSVVm6prWNHT?utm_source=generator&theme=0"
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
              src="https://open.spotify.com/embed/playlist/0Xk0CcjZni7Nq2zkOPsSEn?utm_source=generator&theme=1"
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
              src="https://open.spotify.com/embed/playlist/3l9mNVbiCW01efNtujtX2q?utm_source=generator"
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
