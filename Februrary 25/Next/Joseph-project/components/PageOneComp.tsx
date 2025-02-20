import React from 'react'
import JosephPhot from "../assets/c7a020be-f777-4b65-bfa0-bea31fe2f37c.png";
import whatsApp from "../assets/whatsapp.png";
import backGroundSecuirityPhoto from "../assets/Building-security-systems-1030x687.jpg"; // Your background image path
import Image from 'next/image';

const PageOneComp = () => {
    return (
        <div
            className="text-black min-h-screen flex flex-col items-center justify-center p-4"
            style={{
                backgroundImage: `url(${backGroundSecuirityPhoto.src})`, // Applying the background image
                backgroundSize: "cover", // Ensure the image covers the whole screen
                backgroundPosition: "center", // Center the background image
            }}
        >
            <header className="text-center mb-8">
                <h1 className="text-5xl font-bold text-green-500">יוסף מזרחי - אבטחת מבנים ומוסדות</h1>
                <p className="text-xl font-bold mt-2">הגנה מוחלטת למבנים ומוסדות מפני איומים פיזיים ודיגיטליים</p>
            </header>

            <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-green-500 mb-6">
                <Image

                    src={JosephPhot.src}
                    alt="יוסף מזרחי"
                    className="w-full h-full object-cover"
                />
            </div>

            <section className="text-center max-w-2xl">
                <p className="text-xl font-bold mb-6">
                    אנו מציעים פתרונות אבטחה מתקדמים למבנים ומוסדות, כולל מערכות ניטור, מצלמות אבטחה ושירותי שמירה מקצועיים.
                </p>
                <a href="tel:0587262280">
                    <button className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-6 rounded-lg text-lg shadow-lg transition-all">
                        צור קשר עכשיו
                    </button>
                </a>

            </section>

            <a
                id="whatsapp-button"
                href={`https://wa.me/972587262280`}
                target="_blank"
                rel="noopener noreferrer"
                className="z-10 fixed bottom-4 left-4 p-6 rounded-full bg-transparent hover:bg-green-700 text-black shadow-lg transition-all flex items-center justify-center"
            >
                <Image

                    src={whatsApp.src}
                    alt="WhatsApp"
                    className="w-10 h-10"
                />
            </a>
        </div>
    )
}

export default PageOneComp
