import React from 'react';

const Skills = () => {
    const skills = [
        {
            id: 1,
            name: "HTML",
            year: "2024",
            logo: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"
        },
        {
            id: 2,
            name: "CSS",
            year: "2024",
            logo: "https://cdn-icons-png.flaticon.com/128/919/919826.png"
        },
        {
            id: 3,
            name: "React",
            year: "2024",
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        },
        {
            id: 4,
            name: "JavaScript",
            year: "2024",
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        },
        {
            id: 5,
            name: "GitHub",
            year: "2024",
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
        },
        {
            id: 5,
            name: "",
            year: "2024",
            logo: "https://btihen.dev/posts/ruby/rails_6_1_tailwind_2_0_alpinejs/featured_hu433a55fe148527a16c05c1bced7ccba5_22627_720x2500_fit_q75_h2_lanczos_3.webp"
        }
    ];

    return (
        <div id='skills' className="py-10 bg-white-100 relative ">
            <h1 className="text-center text-2xl lg:text-4xl font-bold mb-6 mt-5">Skills & Technologies</h1>
            <div className="max-w-6xl mx-auto px-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill) => (
                        <div key={skill.id} className="flex flex-col items-center border border-gray-400 shadow-md rounded-lg p-4 duration-500 hover:scale-110">
                            <img src={skill.logo} alt={skill.name} className="w-20 h-20 mb-4" />
                            <h3 className="text-lg font-semibold">{skill.name}</h3>
                            <p className="text-sm text-gray-500 mt-2">Year: {skill.year}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
