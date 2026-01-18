import Image from "next/image";
import { ReactNode } from "react";
import { FadeIn } from "./fade-in";

// New interface for subheadings and their text
interface SubSection {
  title: string;
  content: string | ReactNode;
}

interface FeatureSectionProps {
  imageUrl?: string;
  imageAlt?: string;
  imageOnRight?: boolean;
  showLabel?: boolean;
  labelText?: string;
  showHeading?: boolean;
  headingText?: string;
  bodyText?: string | ReactNode;
  subSections?: SubSection[]; // New prop for multiple subheadings
  bgColor?: string;
  textColor?: string;
  labelColor?: string;
  id?: string;
  className?: string;
}

/**
 * FeatureSection - A reusable component for displaying image and text content
 *
 * @param {Object} props
 * @param {string} props.imageUrl - Path to the image
 * @param {string} props.imageAlt - Alt text for the image
 * @param {boolean} props.imageOnRight - Whether to display image on right side (default: false)
 * @param {boolean} props.showLabel - Whether to show the label button (default: true)
 * @param {string} props.labelText - Text for the label button (default: "하나")
 * @param {boolean} props.showHeading - Whether to show the heading (default: true)
 * @param {string} props.headingText - Text for the heading
 * @param {string|ReactNode} props.bodyText - Main text content
 * @param {SubSection[]} props.subSections - Array of subheadings and their content
 * @param {string} props.bgColor - Background color (default: "white")
 * @param {string} props.textColor - Text color (default: "black")
 * @param {string} props.labelColor - Label color (default: "#27AF58")
 * @param {string} props.id - Optional ID for the section
 * @param {string} props.className - Additional CSS classes
 */
export function FeatureSection({
  imageUrl,
  imageAlt,
  imageOnRight = false,
  showLabel = true,
  labelText = "하나",
  showHeading = true,
  headingText = "개척자 선발",
  bodyText = "우리는 다양한 외부전문가와 기관과 협력하여 개척자를 선발합니다. 선발된 개척자는 소정의 교육을 이수하도록 합니다. 개척자는 10명 이상에서 50명 미만의 개척멤버를 모아야 합니다.",
  subSections = [],
  bgColor = "white",
  textColor = "#231916",
  labelColor = "#27AF58",
  id,
  className = "",
}: FeatureSectionProps) {
  return (
    <section
      id={id}
      className={`w-full py-12 ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="container mx-auto max-w-screen-xl px-4">
        <div
          className={`flex flex-col ${
            imageOnRight ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-8 md:gap-16`}
        >
          {/* Image Container */}
          <div className="w-full md:w-1/2">
            <FadeIn>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src={imageUrl || "/placeholder-image.webp"}
                  alt={imageAlt || "Feature image"}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </FadeIn>
          </div>
          {/* Content Container */}
          <div className="flex w-full flex-col md:w-1/2">
            <FadeIn direction="right">
              {showLabel && (
                <div
                  className="mb-4 inline-block self-start rounded-full px-4 py-2 text-sm font-medium"
                  style={{
                    color: labelColor,
                    border: `1px solid ${labelColor}`,
                  }}
                >
                  {labelText}
                </div>
              )}
              {showHeading && (
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  {headingText}
                </h2>
              )}

              {/* Main body text */}
              {bodyText && (
                <div className="mb-6 text-base leading-relaxed md:text-lg">
                  {typeof bodyText === "string" ? <p>{bodyText}</p> : bodyText}
                </div>
              )}

              {/* Subsections */}
              {subSections.length > 0 && (
                <div className="mt-2 space-y-5">
                  {subSections.map((subsection, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="mb-2 text-xl font-bold">
                        {subsection.title}
                      </h3>
                      <div className="text-base leading-relaxed md:text-lg">
                        {typeof subsection.content === "string" ? (
                          <p>{subsection.content}</p>
                        ) : (
                          subsection.content
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
