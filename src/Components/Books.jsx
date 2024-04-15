// import React from 'react';
import { FaStar } from "react-icons/fa";

const books = () => {
    return (
        <div>
            <h3 className="text-5xl font-bold text-center mt-5">Books</h3>
            <div className="grid grid-cols-3 gap-5 mt-10 ml-5">
                {/* 1 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/VVB8DKC/th.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <div className="badge badge-outline text-[16px]">Suspense</div>
                            <div className="badge badge-outline text-[16px]">Psychological</div>
                        </div>
                        <h2 className="card-title text-xl font-semibold">
                            Shadows of the Past
                        </h2>
                        <p className="text-lg font-semibold">By: Elena Blackwood</p>
                        <hr />
                        <div className="flex flex-row gap-5 justify-around">
                            <p className="text-lg font-bold">Mystery</p>
                            <div className="flex flex-row gap-5 items-center">
                                <FaStar />
                                <p className="text-lg font-medium"> 4.5</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/mtNZ07d/OIP.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <div className="badge badge-outline text-[16px]">Drama</div>
                            <div className="badge badge-outline text-[16px]">Family</div>
                        </div>
                        <h2 className="card-title text-xl font-semibold">
                            Echoes of Silence
                        </h2>
                        <p className="text-lg font-semibold">By: Alexander Frost</p>
                        <hr />
                        <div className="flex flex-row gap-5 justify-around">
                            <p className="text-lg font-bold">Literary Fiction</p>
                            <div className="flex flex-row gap-5 items-center">
                                <FaStar />
                                <p className="text-lg font-medium"> 4.2</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/6tQSVvR/OIP-1.jpge" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <div className="badge badge-outline text-[16px]">Quest</div>
                            <div className="badge badge-outline text-[16px]">Fantasy</div>
                        </div>
                        <h2 className="card-title text-xl font-semibold">
                            Beyond the Horizon
                        </h2>
                        <p className="text-lg font-semibold">By: Isabel Rivers</p>
                        <hr />
                        <div className="flex flex-row gap-5 justify-around">
                            <p className="text-lg font-bold">Adventure</p>
                            <div className="flex flex-row gap-5 items-center">
                                <FaStar />
                                <p className="text-lg font-medium"> 4.8</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 4 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/jhk83kZ/download.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <div className="badge badge-outline text-[16px]">Suspense</div>
                            <div className="badge badge-outline text-[16px]">Crime</div>
                        </div>
                        <h2 className="card-title text-xl font-semibold">
                            Whispers in the Dark
                        </h2>
                        <p className="text-lg font-semibold">By: Lucas Nightingale</p>
                        <hr />
                        <div className="flex flex-row gap-5 justify-around">
                            <p className="text-lg font-bold">Thriller</p>
                            <div className="flex flex-row gap-5 items-center">
                                <FaStar />
                                <p className="text-lg font-medium"> 4.4</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 5 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/HHvxshq/OIP-x-XKub-LNU1-O53-Rb72-SGUIDAHa-EK-w-301-h-180-c-7-r-0-o-5-pid-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <div className="badge badge-outline text-[16px]">Suspense</div>
                            <div className="badge badge-outline text-[16px]">Psychological</div>
                        </div>
                        <h2 className="card-title text-xl font-semibold">
                            Serenade of Stars
                        </h2>
                        <p className="text-lg font-semibold">By: Aria Sky</p>
                        <hr />
                        <div className="flex flex-row gap-5 justify-around">
                            <p className="text-lg font-bold">Science Fiction</p>
                            <div className="flex flex-row gap-5 items-center">
                                <FaStar />
                                <p className="text-lg font-medium"> 4.4</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 6 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/nzz1f0t/download-6.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <div className="badge badge-outline text-[16px]">Time Travel</div>
                            <div className="badge badge-outline text-[16px]">Historical</div>
                        </div>
                        <h2 className="card-title text-xl font-semibold">
                            Whispers of the Past
                        </h2>
                        <p className="text-lg font-semibold">By: Olivia Nightingale</p>
                        <hr />
                        <div className="flex flex-row gap-5 justify-around">
                            <p className="text-lg font-bold">Romance</p>
                            <div className="flex flex-row gap-5 items-center">
                                <FaStar />
                                <p className="text-lg font-medium"> 4.7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default books;