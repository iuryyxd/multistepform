import ArcadeImg from '../assets/icon-arcade.svg';
import AdvancedImg from '../assets/icon-advanced.svg';
import ProImg from '../assets/icon-pro.svg';

export const plans = [
    {
        img: ArcadeImg,
        name: "Arcade",
        price: {
            monthly: 9,
            yearly: 90
        }
    },
    {
        img: AdvancedImg,
        name: "Advanced",
        price: {
            monthly: 12,
            yearly: 120
        }
    },
    {
        img: ProImg,
        name: "Pro",
        price: {
            monthly: 15,
            yearly: 150
        }
    }
]