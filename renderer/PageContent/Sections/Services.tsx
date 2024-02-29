import communication from '../../png/pen.png'
import humanitarian from '../../png/heart.png'
import marketing from '../../png/black-arrow.png'
import partyEntertainment from '../../png/blue-sparkles.png'

export function Services() {

    const services: ServiceCardTypes[] = [
        {
          image: marketing,
          title: "Marketing",
          description:
            "Olivia Nolan excels in marketing, leveraging her strategic communication skills to create impactful campaigns. With extensive experience in both Singapore and South Africa, Olivia has a global perspective that allows her to tailor marketing strategies to diverse markets. Her campaigns not only drive business success but also reflect a deep understanding of cultural nuances."
        },
        {
          image: communication,
          title: "Communication",
          description:
            "In the realm of communication, Olivia Nolan stands out as a seasoned professional. Having worked in both Singapore and South Africa, Olivia's communication expertise extends to various channels, ensuring clear and effective messaging that resonates with diverse audiences. Whether it's internal communication strategies or external outreach, Olivia ensures a cohesive and impactful approach."
        },
        {
          image: partyEntertainment,
          title: "Party Entertainment Services",
          description:
            "In addition to her marketing and communication prowess, Olivia Nolan brings a unique offering to the table – party entertainment services. With creativity and flair, Olivia turns events into unforgettable experiences. From corporate gatherings to private celebrations, Olivia's entertainment services add a touch of magic, making every occasion a truly special one."
        },
        {
          image: humanitarian,
          title: "Humanitarian Collaboration",
          description:
            "Beyond traditional services, Olivia Nolan is deeply committed to social good. With a strong passion for humanitarian causes, she actively collaborates to make a positive impact on society. Having worked in Singapore and South Africa, Olivia brings a diverse perspective to her humanitarian initiatives, contributing her skills for the greater good to create a better world."
        }
      ];
      

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