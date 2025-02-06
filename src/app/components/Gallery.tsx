"use client";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination,Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Gallery = () => {
    const Images = Array(6).fill("/pexels-myersmc16-919278.jpg");
    return (
        <div>
            <section id= "Gallery" className="py-12">
                <div className="container mx-auto mb-12">
                    <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable:true}}
                    autoplay={{delay:10000}}
                    breakpoints={{
                        640:{
                            slidesPerView:2,
                        },
                        1024:{
                            slidesPerView:1,
                        }
                    }}
                    className="w-full"
                    >
                    {Images.map((src,index) =>(
                        <SwiperSlide key={index}>
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <img src={src} alt={`Slides ${index+1}`}  
                        className="w-full object-cover" 
                        style={{height:"600px"}} />
                    </div>
                    </SwiperSlide>

                    ))
                    }
                    </Swiper>
                </div>

                <h2 className="text-3xl text-center font-bold text-black mb-6 ">Image Gallery</h2>
                <div className="container mx-auto grid grid-cols-1 gap-4 sm:grig-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {Images.map((src,index) =>(
                        <div key={index}>
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <img src={src} alt={`Slides ${index+1}`} 
                        className="w-full h-48 object-cover transiton-transform duration-300 hover:scale-105" 
                        />
                        </div>
                </div>
                    ))
                    }
                </div>
            </section>

        </div>
    )
}

export default Gallery;