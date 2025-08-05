import servicesGrid1 from "@/assets/images/servicesgrid1.jpg"
import servicesimg1 from "@/assets/images/card1title1.jpg"
import servicesimg2 from "@/assets/images/card1title2.jpg"
import servicesimg3 from "@/assets/images/card1title3.jpg"
import servicesimg4 from "@/assets/images/card1title4.jpg"
import serviceGrid2 from "@/assets/images/servicesGrid2.jpeg"
import servicesimg5 from "@/assets/images/card2title1.jpg"
import servicesimg6 from "@/assets/images/card2title2.jpg"
import servicesimg7 from "@/assets/images/card2title3.jpg"
import servicesimg8 from "@/assets/images/card2title4.jpg"
import servicesGrid3 from "@/assets/images/servicesGrid3.jpeg"
import servicesimg9 from "@/assets/images/card3title1.jpg"
import servicesimg10 from "@/assets/images/card3title2.jpg"
import servicesimg11 from "@/assets/images/card3title3.jpg"
import servicesimg12 from "@/assets/images/card3title4.jpg"
import servicesGrid4 from "@/assets/images/servicesGrid4.jpeg"
import servicesimg13 from "@/assets/images/card4title1.jpg"
import servicesimg14 from "@/assets/images/card4title2.jpg"
import servicesimg15 from "@/assets/images/card4title3.jpg"
import servicesimg16 from "@/assets/images/card4title4.jpg"
import servicesGrid5 from "@/assets/images/servicesGrid5.jpeg"
import servicesimg17 from "@/assets/images/card5title1.jpg"
import servicesimg18 from "@/assets/images/card5title2.jpg"
import servicesimg19 from "@/assets/images/card5title3.jpg"
import servicesimg20 from "@/assets/images/card5title4.jpg"
import servicesGrid6 from "@/assets/images/servicesGrid6.jpeg"
import servicesimg21 from "@/assets/images/card6title1.jpg"
import servicesimg22 from "@/assets/images/card6title2.jpg"
import servicesimg23 from "@/assets/images/card6title3.jpg"
import servicesimg24 from "@/assets/images/card6title4.jpg"
import serivicesGrid7 from "@/assets/images/servicesGrid7.jpeg"
import servicesimg25 from "@/assets/images/card7title1.jpg"
import servicesimg26 from "@/assets/images/card7title2.jpg"
import servicesimg27 from "@/assets/images/card7title3.jpg"
import servicesimg28 from "@/assets/images/card7title4.jpg"
import servicesGrid8 from "@/assets/images/servicesGrid8.jpeg"
import servicesimg29 from "@/assets/images/card8title1.jpg"
import servicesimg30 from "@/assets/images/card8title2.jpg"
import servicesimg31 from "@/assets/images/card8title3.jpg"
import servicesimg32 from "@/assets/images/card8title4.jpg"








const services = [
    {
        title: 'Industrial Automation',
        slug: 'industrial-automation',
        shortDescription: 'Complete automation system design, integration, and commissioning for industrial sectors.',
        detailedDescription: 'We provide scalable and efficient industrial automation solutions, ranging from PLC programming and SCADA integration to motion control and field device networking. Our services help industries improve productivity, reduce human error, and optimize operations.',

        description: 'We offer end-to-end automation design, integration, and commissioning services tailored for industrial and process environments. Our solutions enhance operational efficiency, improve accuracy, and reduce downtime across industries.',

        image: servicesGrid1,

        highlights: [
            'Complete PLC & HMI programming for automated systems',
            'SCADA design and integration for process visibility',
            'Industrial communication networks like PROFINET, Modbus, and CANopen',
            'Customized motion control and machine interfacing solutions'
        ],

        keyFeatures: [
            'Siemens, Omron, and Phoenix PLC platforms',
            'Real-time SCADA dashboards and alarm systems',
            'Industrial Ethernet and fieldbus communication',
            'Integrated I/O and sensor compatibility'
        ],

        industriesServed: [
            'Manufacturing',
            'Food & Beverage',
            'Pharmaceuticals',
            'OEM Automation',
            'Packaging'
        ],
        cards: [
            {
                title: 'PLC & HMI Programming',
                image: servicesimg1,
                text: 'Development of reliable logic control systems with intuitive HMI interfaces using Siemens, Omron, and other platforms.'
            },
            {
                title: 'SCADA Integration',
                image: servicesimg2,
                text: 'Design and deployment of SCADA systems for remote monitoring, alarm management, and process optimization.'
            },
            {
                title: 'Field Device Connectivity',
                image: servicesimg3,
                text: 'Seamless integration of sensors, drives, and IO modules using industrial protocols and modular wiring.'
            },
            {
                title: 'Motion Control Systems',
                image: servicesimg4,
                text: 'Customized servo and VFD solutions for precise motion control in automated machinery.'
            }
        ]
    },

    {
        title: 'Control Panel Design & Assembly',
        slug: 'control-panel-design',
        shortDescription: 'Custom-built electrical control panels tailored to your application — from layout to commissioning.',
        detailedDescription: 'We specialize in designing and assembling electrical control panels for diverse applications including machine control, process automation, and OEMs. Using globally trusted brands and smart layout practices, our panels ensure safety, reliability, and future scalability.',

        description: 'From single-loop controllers to multi-tier MCCs, our panels are engineered to perform. We focus on neat wiring, functional layout, and full lifecycle support — from design to installation and beyond.',

        image: serviceGrid2,

        highlights: [
            '3D panel layout and enclosure planning',
            'Wiring, DIN mounting, and cable management',
            'IP-rated panels with field wiring options',
            'Pre-dispatch testing and documentation'
        ],

        keyFeatures: [
            'Custom panel enclosures (wall/floor mount)',
            'Integration with PLCs, sensors, and drives',
            'Use of Siemens, Rittal, Trinity Touch, etc.',
            'Ready-to-install design with site support'
        ],

        industriesServed: [
            'OEMs',
            'Manufacturing',
            'Energy & Utilities',
            'Food Processing',
            'Infrastructure'
        ],

        cards: [
            {
                title: 'MCC & PCC Panel Design',
                image: servicesimg5,
                text: 'Motor control and power distribution panels with overload protection, contactors, and metering.'
            },
            {
                title: 'PLC Control Panels',
                image: servicesimg6,
                text: 'Complete PLC-based panels with I/O wiring, HMI mounting, and expansion readiness.'
            },
            {
                title: 'Wiring & Cable Routing',
                image: servicesimg7,
                text: 'Neatly laid-out wiring with labeled terminals, cable ducts, ferrules, and DIN mounting.'
            },
            {
                title: 'Panel Testing & QC',
                image: servicesimg8,
                text: 'Rigorous in-house testing for continuity, insulation, labeling accuracy, and voltage drops.'
            }
        ]
    },
    {
        title: 'Cable Management & Accessories',
        slug: 'cable-management',
        shortDescription: 'Structured wiring, gland sealing, labeling, and routing for efficient panel and machine layout.',
        detailedDescription: 'We provide high-performance cable management solutions using products like cable glands, conduits, markers, ducts, and cable ties. Whether in panels or shop floor installations, our solutions improve safety, reduce downtime, and simplify troubleshooting.',

        description: 'Proper cable management not only improves aesthetics but also ensures compliance, safety, and long-term reliability. We support OEMs and system integrators with globally approved cable routing systems.',

        image: servicesGrid3,

        highlights: [
            'Flame-retardant and IP-rated cable glands',
            'Halogen-free wiring ducts and trunking',
            'Printed and engraved cable labeling',
            'Complete gland plate and routing kits'
        ],

        keyFeatures: [
            'Trinity Touch, LAPP, and Rittal systems',
            'Snap-fit & screw-mount ducts in multiple sizes',
            'UL/CE certified cable glands and conduit fittings',
            'Preconfigured kits for panel builders and OEMs'
        ],

        industriesServed: [
            'OEM Automation',
            'Electrical Panels',
            'Food Processing',
            'Machine Tools',
            'Textile & Packaging'
        ],

        cards: [
            {
                title: 'Cable Glands & Conduits',
                image: servicesimg9,
                text: 'Wide range of polyamide and metal cable glands with IP ratings and EMC shielding options.'
            },
            {
                title: 'Wiring Ducts & Trunking',
                image: servicesimg10,
                text: 'Structured wiring layout using halogen-free ducts with multiple cross-sections and covers.'
            },
            {
                title: 'Labeling & Ferruling',
                image: servicesimg11,
                text: 'Preprinted markers, heat-shrink sleeves, ferrules, and cable ID solutions for clean labeling.'
            },
            {
                title: 'Gland Plates & Accessories',
                image: servicesimg12,
                text: 'Custom-cut gland plates, fittings, and sealing kits to complete your panel or field box build.'
            }
        ]
    },

    {
        title: 'Sensors & Field Devices Integration',
        slug: 'sensors-field-devices',
        shortDescription: 'Seamless integration of industrial sensors and actuators into automation systems.',
        detailedDescription: 'We supply and integrate a wide range of sensors and field devices to provide accurate feedback and control in automation applications. From proximity and photoelectric sensors to temperature and level measurement devices, our solutions ensure real-time data acquisition and precision.',

        description: 'Whether you’re monitoring pressure, proximity, light, or motion, our sensor integration services ensure your machines respond accurately and reliably in real time.',

        image: servicesGrid4,

        highlights: [
            'Proximity, photoelectric, and capacitive sensors',
            'Temperature, pressure, and level transducers',
            'Analog/digital feedback wiring and diagnostics',
            'High-accuracy signal processing and protection'
        ],

        keyFeatures: [
            'Omron, Baumer, and Autonics integration',
            'Plug-and-play sensor modules and brackets',
            'Shielded cabling and sensor fusion options',
            'Complete sensor mapping and documentation'
        ],

        industriesServed: [
            'Food & Beverage',
            'OEM Machinery',
            'Pharma & Clean Rooms',
            'Packaging',
            'Textiles'
        ],

        cards: [
            {
                title: 'Proximity & Photoelectric Sensors',
                image: servicesimg13,
                text: 'Detection of object presence or absence with precise digital feedback in fast-moving processes.'
            },
            {
                title: 'Level & Pressure Sensors',
                image: servicesimg14,
                text: 'Reliable measurement of fluid levels, pressure, and flow for process control.'
            },
            {
                title: 'Signal Conditioning & Wiring',
                image: servicesimg15,
                text: 'Analog-to-digital converters, isolators, and shielded wiring for interference-free signals.'
            },
            {
                title: 'Mounting & Sensor Mapping',
                image: servicesimg16,
                text: 'Custom sensor mounting with full documentation of sensor points and signal routing.'
            }
        ]
    },
    {
        title: 'Power Supply & Energy Management',
        slug: 'power-supply-energy',
        shortDescription: 'Reliable, efficient power supply and protection systems for your automation and electrical needs.',
        detailedDescription: 'We provide industrial-grade power supplies, energy meters, surge protection devices, and braking resistors to ensure your control systems run safely and efficiently. Our products meet international standards for power quality and protection.',

        description: 'Powering your systems with the right components prevents downtime, ensures safety, and keeps you compliant. We help you manage energy more intelligently.',

        image: servicesGrid5,

        highlights: [
            'SMPS and DIN-rail power supplies from trusted brands',
            'Surge protection for sensitive devices',
            'Braking resistors for motor energy dissipation',
            'Energy meters for load monitoring and audits'
        ],

        keyFeatures: [
            'Compact DIN-mount SMPS (12V/24V/48V)',
            'SPD devices for power lines and communication ports',
            'Braking resistors for drives and motors',
            'Digital and analog energy meters'
        ],

        industriesServed: [
            'Automation & Robotics',
            'EV Charging',
            'Panel Builders',
            'OEMs',
            'Power Systems'
        ],

        cards: [
            {
                title: 'Power Supplies (SMPS)',
                image: servicesimg17,
                text: 'High-efficiency SMPS from Degson and Siemens with short circuit protection and voltage regulation.'
            },
            {
                title: 'Surge Protection Devices',
                image: servicesimg18,
                text: 'Protect your systems from voltage spikes with certified SPD modules for mains and control lines.'
            },
            {
                title: 'Braking Resistors',
                image: servicesimg19,
                text: 'Handle regenerative energy in motor drives with high-power braking resistors from Smisen.'
            },
            {
                title: 'Energy Monitoring',
                image: servicesimg20,
                text: 'Track and optimize your energy consumption using real-time digital energy meters.'
            }
        ]
    },


    {
        title: 'Enclosure & Cabinet Solutions',
        slug: 'enclosure-cabinet-solutions',
        shortDescription: 'Standard and custom enclosures for control panels, field installations, and industrial equipment.',
        detailedDescription: 'We offer a wide range of Rittal and Trinity Touch enclosures — wall-mounted, floor-standing, and modular cabinets. From IP-rated protection to pre-cut gland plates and accessories, our enclosure solutions support panel builders and OEMs in every industry.',

        description: 'Your electrical infrastructure is only as safe as the enclosure that protects it. Our enclosure systems are designed for harsh industrial environments, ensuring safety, accessibility, and longevity.',

        image: servicesGrid6,

        highlights: [
            'Wall-mount, floor-mount, and compact enclosures',
            'Modular cabinets for PLCs and MCCs',
            'IP-rated and EMC-protected designs',
            'Accessories including fans, locks, and plates'
        ],

        keyFeatures: [
            'Enclosures in mild steel, stainless steel, and polycarbonate',
            'Standard and customized cutouts',
            'Integrated mounting plates and DIN rails',
            'Support for cable entry systems and ventilation'
        ],

        industriesServed: [
            'OEMs',
            'Panel Builders',
            'Pharma & Clean Rooms',
            'Automation Integrators',
            'Energy Sector'
        ],

        cards: [
            {
                title: 'Wall-Mount Enclosures',
                image: servicesimg21,
                text: 'Compact and IP-protected enclosures for small-scale applications and distribution panels.'
            },
            {
                title: 'Modular Floor Cabinets',
                image: servicesimg22,
                text: 'Robust enclosures for automation, MCCs, and instrumentation — with modular panel support.'
            },
            {
                title: 'Gland Plates & Mounting Kits',
                image: servicesimg23,
                text: 'Custom gland plates, door locks, mounting panels, and airflow accessories.'
            },
            {
                title: 'Stainless Steel IP Enclosures',
                image: servicesimg24,
                text: 'For cleanroom and corrosive environments — with seamless sealing and durable finishes.'
            }
        ]
    },
    {
        title: 'Electrical Components Supply',
        slug: 'electrical-components-supply',
        shortDescription: 'Reliable supply of control panel components from global automation and electrical brands.',
        detailedDescription: 'We supply essential electrical and automation components — relays, timers, terminal blocks, contactors, and more — from brands like Siemens, Degson, Omron, and Trinity Touch. With local stock and technical expertise, we support OEMs and panel builders at every stage.',

        description: 'We simplify procurement for your control panel needs — providing quality-assured components backed by application knowledge and fast availability.',

        image: serivicesGrid7,

        highlights: [
            'Fast-moving control panel components',
            'Relay modules, timers, and interface relays',
            'Terminal blocks, contactors, and surge protectors',
            'Verified compatibility across platforms'
        ],

        keyFeatures: [
            'Degson terminal blocks and relays',
            'Siemens timers and miniature circuit breakers',
            'Trinity Touch wiring accessories',
            'Omron signal relays and sockets'
        ],

        industriesServed: [
            'OEMs',
            'Panel Builders',
            'Automation Integrators',
            'Machinery',
            'Utilities'
        ],

        cards: [
            {
                title: 'Relays & Timers',
                image: servicesimg25,
                text: 'Interface and signal relays with socket mounting, delay timers, and multi-function settings.'
            },
            {
                title: 'Terminal Blocks',
                image: servicesimg26,
                text: 'Screw and push-in type terminal blocks with accessories for modular wiring.'
            },
            {
                title: 'Breakers & Surge Protection',
                image: servicesimg27,
                text: 'Miniature and motor protection breakers with Type 2 surge protectors for sensitive loads.'
            },
            {
                title: 'Wiring Accessories',
                image: servicesimg28,
                text: 'Ferrules, markers, sockets, and end clamps to complete your panel wiring kit.'
            }
        ]
    },
    {
        title: 'OEM & Custom Engineering Solutions',
        slug: 'oem-custom-engineering',
        shortDescription: 'Tailored engineering and automation support for OEMs and system integrators.',
        detailedDescription: 'We partner with OEMs to provide turnkey engineering solutions — including product integration, control systems, and panel development. From concept to commissioning, our expertise bridges the gap between design and real-world implementation.',

        description: 'When off-the-shelf doesn’t fit, our custom engineering service fills the gap — with prototyping, sourcing, and solution engineering that fits your product.',

        image: servicesGrid8,

        highlights: [
            'Custom-built panels and sub-assemblies',
            'Multi-brand product sourcing and integration',
            'Application-based selection and layout',
            'Dedicated support for high-volume OEMs'
        ],

        keyFeatures: [
            'Tailored design support for industrial machines',
            'Cross-platform component compatibility',
            'Build-to-print and prototyping capabilities',
            'System-level validation and documentation'
        ],

        industriesServed: [
            'OEM Machinery',
            'EV & Automotive',
            'HVAC & Appliances',
            'Renewable Energy',
            'Electrical Contractors'
        ],

        cards: [
            {
                title: 'Application Engineering',
                image: servicesimg29,
                text: 'Design assistance and feasibility studies to define the right control and panel architecture.'
            },
            {
                title: 'Product Customization',
                image: servicesimg30,
                text: 'Engineering support to adapt products to unique specifications or integration constraints.'
            },
            {
                title: 'Component Sourcing',
                image: servicesimg31,
                text: 'Efficient sourcing of global brands with technical validation and delivery tracking.'
            },
            {
                title: 'Prototyping & Build-to-Print',
                image: servicesimg32,
                text: 'Rapid development of pilot units, test jigs, and repeatable panel builds for scale.'
            }
        ]
    }

]

export default services
