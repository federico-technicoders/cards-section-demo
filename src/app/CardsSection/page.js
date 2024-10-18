'use client'

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)


export const CardsSection = () => {
    
    const sectionRef = useRef(null)
    const leftSectionRef = useRef(null)
    const rightSectionsRef = useRef(null)

    useGSAP(() => {
        const section = sectionRef.current
        const leftSection = leftSectionRef.current
        const rightSections = rightSectionsRef.current.querySelectorAll('.right-section')

        gsap.set(section, { height: (rightSections.length * 100) + "vh" })
        
        ScrollTrigger.create({
            trigger: section,
            // start: "top top",
            start: "bottom bottom",
            end: "bottom bottom",
            pin: leftSection,
            pinSpacing: false
        })

        rightSections.forEach((sectionElement, index) => {
            ScrollTrigger.create({
                trigger: sectionElement,
                start: () => "top top",
                // end: () => "+=" + sectionElement.offsetHeight,
                pin: true, // Fija la sección en su lugar
                pinSpacing: false, 
                scrub: 6,
                // snap: 1 / (rightSections.length - 1),
                // invalidateOnRefresh: false
                // markers: true,
                
            })
        })      
    })

   


    return (
        <section 
            ref={sectionRef}
            className="relative flex w-full h-screen"
        >
            {/* Mitad izquierda fija */}
            <article className="w-1/2 bg-white sticky top-0 h-screen flex justify-center items-center">
                <h2 className="text-black text-4xl font-bold">Contenido Fijo</h2>
                
            </article>

            {/* Mitad derecha con múltiples secciones */}
            <aside 
                ref={rightSectionsRef} 
                className="w-1/2   bg-white -z-10"
            >
                <div className="right-section  h-screen flex justify-center items-center">
                    <div className="w-[300px] h-[300px] bg-green-500 flex justify-center items-center">
                        <h3 className="text-white text-2xl">Sección 1</h3>
                    </div>
                </div>
                <div className="right-section  h-screen flex justify-center items-center">
                    <div className="w-[300px] h-[300px] bg-red-500 flex justify-center items-center">
                        <h3 className="text-white text-2xl">Sección 2</h3>
                    </div>
                </div>
                <div className="right-section  h-screen flex justify-center items-center">
                    <div className="w-[300px] h-[300px] bg-yellow-500 flex justify-center items-center">
                        <h3 className="text-white text-2xl">Sección 3</h3>
                    </div>
                </div>
                <div className="right-section  h-screen flex justify-center items-center">
                    <div className="w-[300px] h-[300px] bg-purple-500 flex justify-center items-center">
                        <h3 className="text-white text-2xl">Sección 4</h3>
                    </div>
                </div>
            </aside>
        </section>
    )
}
