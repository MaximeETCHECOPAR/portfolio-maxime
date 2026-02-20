import * as React from "react"
import { motion } from "framer-motion"
import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const { t } = useContext(LanguageContext)
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [api, setApi] = React.useState(null)

  React.useEffect(() => {
    if (!api) return

    const updateActiveIndex = () => {
      setActiveIndex(api.selectedScrollSnap())
    }

    api.on("select", updateActiveIndex)
    updateActiveIndex()

    return () => {
      api.off("select", updateActiveIndex)
    }
  }, [api])

  const images = [
    {
      src: "/portfolio-maxime/bayonne1.jpg",
      alt: "Photo de Bayonne 1",
    },
    {
      src: "/portfolio-maxime/bayonne2.jpg",
      alt: "Photo de Bayonne 2",
    },
    {
      src: "/portfolio-maxime/bayonne3.jpg",
      alt: "Photo de Bayonne 3",
    },

  ]

  return (
    <section id="contact" className="py-20 text-center flex flex-col items-center">
      <div className="flex items-center gap-4 mb-16 w-full justify-center">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-transparent to-[#64ffda]"
        />
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#64ffda] font-mono text-sm tracking-widest"
          >
            {t('stayInTouch')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-[#e6f1ff] mt-2"
          >
            {t('contactMe')}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-[#64ffda] to-blue-400 mx-auto mt-4"
          />
        </div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="h-1 bg-gradient-to-l from-transparent to-[#64ffda]"
        />
      </div>

      <div className="w-full max-w-5xl mb-12 px-4 md:px-12"> 
        <div className="overflow-hidden rounded-2xl">
          <Carousel className="w-full" opts={{ loop: true, align: "center", slidesToScroll: 1 }} setApi={setApi}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                  <Card className="overflow-hidden border-none bg-transparent">
                    <CardContent className="relative flex aspect-video items-center justify-center p-0 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                      />
                      {index === 0 && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center pb-8">
                          <div className="bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
                            <span className="text-white font-bold text-xl tracking-wide drop-shadow-2xl block">
                              {t('basedInContact')}
                            </span>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Les boutons de navigation */}
            <CarouselPrevious className="left-2 md:left-0 text-[#64ffda] border-2 border-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 w-10 h-10 md:w-12 md:h-12" />
            <CarouselNext className="right-2 md:right-0 text-[#64ffda] border-2 border-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 w-10 h-10 md:w-12 md:h-12" />
          </Carousel>
        </div>
        
        {/* Indicateurs de pagination */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === activeIndex
                  ? 'bg-[#64ffda] w-8'
                  : 'bg-[#64ffda]/30 w-2 hover:bg-[#64ffda]/60'
              }`}
            />
          ))}
        </div>
      </div>

      <a
        href="mailto:metchecopar0@gmail.com"
        className="inline-block px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] font-mono rounded-lg hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 font-semibold"
      >
        {t('sendEmail')}
      </a>
    </section>
  )
}