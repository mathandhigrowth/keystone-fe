import { Gallery6 } from "@/components/blocks/Gallery6"
import { OurExpertiseImage1, OurExpertiseImage2, OurExpertiseImage3, OurExpertiseImage4, OurExpertiseImage5 } from "@/assets/images"
const demoData = {
    heading: "Our Expertise",
    demoUrl: "https://www.shadcnblocks.com",
    items: [
        {
            id: "item-1",
            title: "Terminal Blocks & Industrial Connectors",
            url: "#",
            image: OurExpertiseImage1,
        },
        {
            id: "item-2",
            title: "PLCs, Relays & Automation Systems",
            url: "#",
            image: OurExpertiseImage2,
        },
        {
            id: "item-3",
            title: "Automation Software",
            url: "#",
            image: OurExpertiseImage3,
        },
        {
            id: "item-4",
            title: "Textile & Printing",
            url: "#",
            image: OurExpertiseImage4,
        },
        {
            id: "item-5",
            title: "Process & Chemical Industries",
            summary:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            url: "#",
            image: OurExpertiseImage5,
        },
    ],
};

function OurExpertise() {
    return <Gallery6 {...demoData} />;
}

export default OurExpertise;