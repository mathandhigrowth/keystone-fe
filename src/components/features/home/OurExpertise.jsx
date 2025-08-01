import { Gallery6 } from "@/components/blocks/Gallery6"

const demoData = {
    heading: "Our Expertise",
    demoUrl: "https://www.shadcnblocks.com",
    items: [
        {
            id: "item-1",
            title: "Terminal Blocks & Industrial Connectors",
            url: "#",
            image: "https://www.pennarindia.com/assets/images/bu/Hydraulics.jpeg",
        },
        {
            id: "item-2",
            title: "PLCs, Relays & Automation Systems",
            url: "#",
            image: "https://www.pennarindia.com/assets/images/bu/Aerospace%20Products.jpeg",
        },
        {
            id: "item-3",
            title: "Automation Software",
            url: "#",
            image: "https://www.pennarindia.com/assets/images/bu/Automotive%20and%20Manufacturing%20Engineering.jpeg",
        },
        {
            id: "item-4",
            title: "Textile & Printing",
            url: "#",
            image: "https://www.pennarindia.com/assets/images/bu/industrial-automation.webp",
        },
        {
            id: "item-5",
            title: "Process & Chemical Industries",
            summary:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            url: "#",
            image: "https://www.pennarindia.com/assets/images/boilers.jpg",
        },
    ],
};

function OurExpertise() {
    return <Gallery6 {...demoData} />;
}

export default OurExpertise;