'use client'

import {useQuery} from "@tanstack/react-query";
import {components} from "@/api/strapi";
import {useId, useState} from "react";
import {getCdnUrl} from "@/helpers/strapi";
import Image from "next/image";
import classNames from "classnames";
import { FaChevronLeft } from "react-icons/fa6";

const LandingPage: React.FC = () => {
    const { data } = useQuery<components["schemas"]["LandingPage"]>({
        queryKey: ['landingPage']
    })

    const keyPointDescriptionSectionId = useId() // can be some human-readable string

    const [selectedKeyPoint, setSelectedKeyPoint] = useState<components["schemas"]['WhyChooseUsSectionKeyPointComponent'] | null>(data?.whyChooseUs?.keyPoints?.[0] ?? null)

    return (
        <section className="py-16">
            <div className="flex flex-col text-center justify-center gap-4 mb-12 text-gray-800">
                <h3 className="uppercase text-sm tracking-wide">{data?.whyChooseUs?.title}</h3>
                <h1 className="text-3xl font-bold">{data?.whyChooseUs?.headline}</h1>
                <p className="max-w-3xl mx-auto">
                    {data?.whyChooseUs?.description}
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-y-10 items-center justify-between max-w-5xl mx-auto">

                <div id={keyPointDescriptionSectionId} className="relative w-full md:w-1/2 h-72 md:h-72 order-2 md:order-1">
                    <div className="absolute right-0 top-0 rounded-full overflow-hidden w-3/5 md:w-auto h-auto md:h-full aspect-square">
                        <Image
                            className="rounded-lg shadow-lg object-cover"
                            src={getCdnUrl(selectedKeyPoint?.image?.url) ?? ''}
                            alt={selectedKeyPoint?.image?.alternativeText ?? selectedKeyPoint?.title ?? ''}
                            width={400}
                            height={400}
                        />
                    </div>
                    <div
                        className="absolute left-0 top-0 bg-[#ad273f] text-white rounded-full w-3/5 md:w-auto h-auto md:h-full aspect-square flex items-center justify-center p-6 bg-opacity-80 overflow-hidden">
                        <div>
                            <h2 className="text-sm font-bold">{selectedKeyPoint?.title}</h2>
                            <p className="text-xs mt-3 line-clamp-3">
                                {selectedKeyPoint?.description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex md:w-1/3 flex-col gap-3 order-1 md:order-2">
                    {data?.whyChooseUs?.keyPoints?.map(point => (
                        <a
                            key={point.id}
                            className={classNames(
                                'flex justify-center md:justify-between items-center bg-[#e2e6f0] text-black py-2 px-4 shadow-md text-center md:text-right rounded-full md:rounded-none md:rounded-l-full hover:bg-[#ad273f] hover:text-white',
                                {
                                '!bg-[#ad273f] !text-white': selectedKeyPoint?.id === point.id
                                }
                            )}
                            href={`#${keyPointDescriptionSectionId}`}
                            onClick={() => setSelectedKeyPoint(point)}
                        >
                            <FaChevronLeft className="hidden md:inline-block" />
                            {point.title}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LandingPage;
