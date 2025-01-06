import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  export default function Projects() {
    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem>ONE</CarouselItem>
                <CarouselItem>TWO</CarouselItem>
                <CarouselItem>THRE</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
