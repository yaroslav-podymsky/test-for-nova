import { createSlice } from '@reduxjs/toolkit';
import frameImg1 from '../resources/images/frame-block-1.png'
import frameImg2 from '../resources/images/frame-block-2.png'
import frameImg3 from '../resources/images/frame-block-3.png'
import frameImg4 from '../resources/images/frame-block-4.png'
import frameImg5 from '../resources/images/frame-block-5.png'
import { StaticImageData } from 'next/image';

type TImage = {
    img: StaticImageData;
}

type ImagesStore = {
    images: TImage[];
}

const initialState: ImagesStore = {
    images: [
        {
            img: frameImg1,
        },
        {
            img: frameImg2,
        },
        {
            img: frameImg3,
        },
        {
            img: frameImg4,
        },
        {
            img: frameImg5,
        },
    ],
};

const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        addImage: (state) => {
            const randomNumber = Math.floor(Math.random() * 4);
            state.images.push(state.images[randomNumber]);
        },
    },
});

export const { addImage } = imagesSlice.actions;
export default imagesSlice.reducer;
