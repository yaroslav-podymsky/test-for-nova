'use client';

import React, { FC, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import "./SlickSlider.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StaticImageData } from "next/image";
import SliderCard from "../SliderCard/SliderCard";
import SliderArrow from "../SliderArrow/SliderArrow";
import Scale from "../Scale/Scale";
import useBreakpoint from "@/app/hooks/useBreakpoint";

export type TCardData = {
    img: StaticImageData;
    title: string;
    subTitle: string;
    description: string;
}
export type TCardsData = TCardData[]

type TProps = {
    cardsData: TCardsData
}

const SlickSlider: FC<TProps> = ({ cardsData }) => {
    const breakpoint = useBreakpoint()
    const slidesToShow = useMemo(() => {
        if (breakpoint === 1440) return 4
        if (breakpoint === 768) return 3
        if (breakpoint === 500) return 2
        if (breakpoint === 360) return 1.2
        else return 4
    }, [breakpoint])
    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(slidesToShow);

    const sliderRef = useRef(null);

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        initialSlide: 0,
        afterChange: () => setUpdateCount(updateCount + 1),
        beforeChange: (current: number, next: number) => {
            setSlideIndex(next)
            setVisibleSlides((slidesToShow || 0) + next)
        }
        ,
        nextArrow: <SliderArrow disabled={!!(visibleSlides === cardsData.length)} />,
        prevArrow: <SliderArrow disabled={!!(slideIndex === 0)} type="prev" />,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: slidesToShow,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: slidesToShow,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    return (
        <div className="slider">
            <Scale className={"scale"} value={visibleSlides || 0} />
            <Slider ref={sliderRef} {...settings}>
                {cardsData.map((el, index) => (
                    <SliderCard
                        key={index} // in this case, you can use index
                        img={el.img}
                        title={el.title}
                        subTitle={el.subTitle}
                        description={el.description}
                    />
                ))}
            </Slider>
        </div>
    );
}

export default SlickSlider;