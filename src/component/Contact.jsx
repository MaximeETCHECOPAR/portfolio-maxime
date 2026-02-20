import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const images = [
    {
      src: "/bayonne1.jpg",
      alt: "Photo de Bayonne",
    },

  ]

  return (
    <section id="contact" className="py-20 text-center flex flex-col items-center">
      <h3 className="text-[#64ffda] font-mono mb-4 text-sm">Et après ?</h3>
      <h2 className="text-4xl font-bold text-[#e6f1ff] mb-6">Me contacter</h2>

      <div className="w-full max-w-md mb-10 px-12"> 
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden border-none bg-transparent">
                  <CardContent className="relative flex aspect-video items-center justify-center p-0 rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-white font-bold text-xl tracking-wide">
                        Basé à Bayonne.
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Les boutons de navigation */}
          <CarouselPrevious className="left-0 text-[#64ffda] border-[#64ffda] hover:bg-[#64ffda]/10" />
          <CarouselNext className="right-0 text-[#64ffda] border-[#64ffda] hover:bg-[#64ffda]/10" />
        </Carousel>
      </div>

      <a
        href="mailto:metchecopar0@gmail.com"
        className="inline-block px-8 py-4 border border-[#64ffda] text-[#64ffda] font-mono rounded hover:bg-[#64ffda]/10 transition-colors"
      >
        Envoyer un mail ici
      </a>
    </section>
  )
}