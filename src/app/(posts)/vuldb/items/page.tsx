import {
  Card,
  CardCoverImage,
  CardFooter,
  CardLinkButton,
  CardProps,
  CardSubTitle,
  CardTitle,
  CardTitleProps,
  CardTitleWrapper,
} from "@/components/ui/Card";
import Dashboard from "@/components/vulnerability-db/Dashboard";
import { vulnerabilityDBDatas } from "@/lib/dummy";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function VulnerabilityDBPage() {
  return (
    <div className="mx-auto mb-[1.188rem] mt-[1.688rem] flex w-[82.063rem] flex-col gap-[4.75rem]">
      <CardContainer />
      <Dashboard /> {/* 취약점 DB & 실시간 Topic */}
    </div>
  );
}

function CardContainer() {
  const topThreeVulnerabilityDatas = vulnerabilityDBDatas.slice(0, 3); // 카드에 넣을 상위 3개 데이터만 가져오기 (임시)
  const cardDatas = topThreeVulnerabilityDatas.map((item, index) => {
    const cardStyles = [
      {
        cardSize: "main",
        imageSrc: "/images/cardThumbnail1.png",
        titleSize: "big",
        subtitleSize: "default",
      },
      {
        cardSize: "sub",
        imageSrc: "/images/cardThumbnail2.png",
        titleSize: "xsmall",
        subtitleSize: "small",
      },
      {
        cardSize: "sub",
        imageSrc: "/images/cardThumbnail3.png",
        titleSize: "small",
        subtitleSize: "small",
      },
    ];

    return { ...item, ...cardStyles[index] };
  });

  return (
    <div className="flex gap-7">
      {cardDatas.map((cardData) => {
        return (
          <Card
            key={cardData.id}
            variant="image"
            size={cardData.cardSize as CardProps["size"]}
          >
            <CardCoverImage
              src={cardData.imageSrc}
              alt={`미리보기 이미지: ${cardData.title}`}
            />
            <CardFooter className="items-end">
              <CardTitleWrapper
                className={cn(
                  cardData.id === 1
                    ? "w-[27.5rem]"
                    : cardData.id === 2
                      ? "w-[8.5rem]"
                      : "w-[8.688rem]",
                )}
              >
                <CardTitle
                  size={cardData.titleSize as CardTitleProps["size"]}
                  weight="bold"
                  color="white"
                  className={cn(
                    "block overflow-visible text-clip whitespace-normal",
                    cardData.id === 1 && "leading-[2.118rem]",
                  )}
                >
                  {cardData.title}
                </CardTitle>
                <CardSubTitle
                  size={cardData.subtitleSize as CardTitleProps["size"]}
                >
                  {cardData.createdAt}
                </CardSubTitle>
              </CardTitleWrapper>
              <Link
                href={`/vuldb/items/${cardData.id}`}
                passHref
                legacyBehavior
              >
                <CardLinkButton />
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}