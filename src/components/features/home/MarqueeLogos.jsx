import React from "react";
import { motion } from "framer-motion";
import {
    BrandAachiMasalaImage,
    BrandAdnaAutomation,
    BrandAppliedControls,
    BrandECISys,
    BrandEfficaAutomation,
    BrandFasco,
    BrandFHSNS,
    BrandIAutoPrint,
    BrandISCAtselgi,
    BrandJanatics,
    BrandLGB,
    BrandLPT,
    BrandMAG,
    BrandMAK,
    BrandMegawin,
    BrandPinnacle,
    BrandPrintronics,
    BrandPropel,
    BrandRegrow,
    BrandTextro,
} from "@/assets/brands";

const MarqueeLogos = () => {
    const logos = [
        BrandAachiMasalaImage,
        BrandAdnaAutomation,
        BrandAppliedControls,
        BrandISCAtselgi,
        BrandIAutoPrint,
        BrandECISys,
        BrandEfficaAutomation,
        BrandFasco,
        BrandFHSNS,
        BrandJanatics,
        BrandLPT,
        BrandLGB,
        BrandMAG,
        BrandMAK,
        BrandMegawin,
        BrandPinnacle,
        BrandPrintronics,
        BrandPropel,
        BrandRegrow,
        BrandTextro,
    ];

    const logoStyles = {
        [BrandLPT]: {
            maxWidth: "60%"
        },
        [BrandTextro]: {
            maxWidth: "100%"
        },
        [BrandPrintronics]: {
            maxWidth: "90%",
            filter: "brightness(0) invert(0)",
        },
        [BrandAdnaAutomation]: {
            maxWidth: "60%",
            filter: "brightness(0) invert(0)",
        },
        [BrandMegawin]: {
            maxHeight: "90%",
            transform: "scale(1.1)",
        },
        [BrandRegrow]: {
            maxWidth: "60%"
        },
    };

    return (
        <section className="w-full py-[2px] bg-transparent overflow-hidden">
            <div className="relative w-full flex overflow-hidden">
                <motion.div
                    className="flex space-x-14"
                    animate={{ x: ["0%", "-30%"] }}
                    transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
                    style={{ display: "flex", whiteSpace: "nowrap" }}
                >
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center"
                            style={{
                                width: "150px",
                                height: "150px",
                                flex: "0 0 auto",
                            }}
                        >
                            <img
                                src={logo}
                                alt="Partner Logo"
                                style={{
                                    maxWidth: "80%",
                                    maxHeight: "80%",
                                    objectFit: "contain",
                                    filter: "drop-shadow(0 0 3px rgba(0,0,0,0.2))",
                                    ...(logoStyles[logo] || {}),
                                }}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default MarqueeLogos;
