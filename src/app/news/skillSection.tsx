"use client";
const features = [
    {
        label: "Frontend",
        names: ['Flutter', 'Swift', 'Kotlin', 'React', 'next.js'],
    },
    {
        label: "Backend",
        names: ['PHP', 'Python', 'node.js'],
    },
    {
        label: "Infra",
        names: ['AWS', 'GCP', 'node.js'],
    },
    {
        label: "Tools",
        names: ['PHP', 'Python', 'node.js'],
    },
]


export const skillSection = <section id="skill" className="max-w-4xl mx-auto mb-8">
    <div>
    <p className="text-4xl font-bold text-gray-800 mb-6 border-b-2 border-indigo-400 pb-2">
        Skill
    </p>
    <div className="mx-auto">
        {features.map((feature) => (
            <div className="mb-8 border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-3">
                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-indigo-600 mr-5"></div>
                    <p className="text-xl font-bold text-gray-900"> {feature.label}</p>
                </div>
                <ul className="flex gap-x-4 flex-wrap">
                    {feature.names?.map((skillName) =>
                        <li className="text-base text-gray-700 mr-3 mb-2">
                            {skillName}
                        </li>)}
                </ul>
            </div>
        ))}
    </div>
</div>

</section>;
