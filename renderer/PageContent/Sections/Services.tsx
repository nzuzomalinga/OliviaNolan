import communication from '../../png/pen.png'
import humanitarian from '../../png/cloud.png'
import marketing from '../../png/speach.png'

export function Services() {

    const services: ServiceCardTypes[] = [
        { 
            image: marketing, 
            title: "Marketing", 
            description: "Olivia Nolan excels in marketing, leveraging her strategic communication skills to create impactful campaigns. With a keen understanding of market dynamics, she crafts compelling messages that resonate with target audiences, driving success for businesses and brands." 
        },
        { 
            image: communication, 
            title: "Communication", 
            description: "In the realm of communication, Olivia Nolan stands out as a seasoned professional. Her expertise extends to various communication channels, ensuring clear and effective messaging. Whether it's internal communication strategies or external outreach, Olivia ensures a cohesive and impactful approach." 
        },
        { 
            image: humanitarian, 
            title: "Humanitarian Collaboration", 
            description: "Beyond traditional services, Olivia Nolan is deeply committed to social good. With a strong passion for humanitarian causes, she actively collaborates to make a positive impact on society. Willing to contribute her skills for the greater good, Olivia supports and engages with humanitarian initiatives to create a better world." 
        },
        { 
            image: humanitarian, 
            title: "Humanitarian Collaboration", 
            description: "Beyond traditional services, Olivia Nolan is deeply committed to social good. With a strong passion for humanitarian causes, she actively collaborates to make a positive impact on society. Willing to contribute her skills for the greater good, Olivia supports and engages with humanitarian initiatives to create a better world." 
        }
    ]

    return (
        <div className="services">
            <div className="service-cards">
                {
                    services.map((card) => {
                        return <ServiceCard title={card.title} image={card.image} description={card.description} />
                    })
                }
            </div>
        </div>
    )
}

function ServiceCard({ title, image, description }: ServiceCardTypes) {
    return (
        <div className='service-card'>
            <img src={image}
                alt="service icons" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

type ServiceCardTypes = {
    title: string;
    image: string;
    description: string;
}