'use client'

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger, ScrollToPlugin } from "gsap/all"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const MySection = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                pinSpacing: true,
                start: 'top top',
                end: '+=2000',
                scrub: 1,
            },
        });

        timeline.addLabel('card1');

        timeline.from(card1Ref.current, {
            yPercent: 75,
            opacity: 0,
        })
        timeline.to(card1Ref.current, {
            xPercent: 0,
            opacity: 1,
        });

        timeline.from(card2Ref.current, {
            yPercent: 75,
            opacity: 0,
        });
        timeline.addLabel('card2');

        timeline.to(
            card1Ref.current,
            {
                scale: 0.95,
                xPercent: -0.5,
                opacity: 0.5,
            },
            '-=0.3'
        );

        timeline.to(card2Ref.current, {
            xPercent: 0,
            opacity: 1,
        });

        timeline.from(card3Ref.current, {
            yPercent: 75,
            opacity: 0,
        });
        timeline.addLabel('card3');

        timeline.to(
            card2Ref.current,
            {
                scale: 0.98,
                xPercent: -0.4,
                opacity: 0.6,
            },
            '-=0.3'
        );

        timeline.to(card3Ref.current, {
            xPercent: 0,
            opacity: 1,
        });
    })

    return (
        <section ref={sectionRef} className="relative flex justify-start items-start w-full  text-white bg-[#0E1629] -z-0">
            <div className="flex justify-center items-start w-full text-white px-[5%] ">
                {/* Mitad izquierda fija */}
                <article className="w-1/2 bg-blue fixed top-0 left-0 h-screen flex justify-center items-center">
                    <h2 className="text-white text-4xl font-bold">Nuestras soluciones</h2>
                </article>

                {/* Mitad derecha con múltiples secciones */}
                <aside className="bg-blue text-[#ff98a2] font-slussen w-1/2 min-h-screen ml-[50%]">
                    <div
                        ref={cardsRef}
                        className="h-screen w-full m-auto relative flex justify-start items-center"
                    >
                        <div
                            ref={card1Ref}
                            className="absolute w-[60%] h-[50vh] bg-[#f1f1f1] flex justify-center items-center rounded-[7px] mb-[50px] left-20 top-[30%]"
                        >
                            <h2 className="text-[80px] font-black uppercase text-[#ff98a2]">
                                01
                            </h2>
                        </div>
                        <div
                            ref={card2Ref}
                            className="absolute w-[60%] h-[50vh] bg-[#f1f1f1] flex justify-center items-center rounded-[7px] mb-[50px] left-20 top-[35%]"
                        >
                            <h2 className="text-[80px] font-black uppercase text-[#ff98a2]">
                                02
                            </h2>
                        </div>
                        <div
                            ref={card3Ref}
                            className="absolute w-[60%] h-[50vh] bg-[#f1f1f1] flex justify-center items-center rounded-[7px] mb-[50px] left-20 top-[40%]"
                        >
                            <h2 className="text-[80px] font-black uppercase text-[#ff98a2]">
                                03
                            </h2>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    )
}
