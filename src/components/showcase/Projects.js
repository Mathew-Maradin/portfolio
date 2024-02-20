import React, { useState } from 'react'; 
import mirrorImage from '../../resources/mirror.png';
import skate from '../../resources/skateboard.png';
import ufc from '../../resources/ufc.jpeg';
import NHL from '../../resources/NHL.png';
import nexum from '../../resources/nexum.png';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

    const projectsData = [
        {
            id: 4,
            title: 'UFC Fight Prediction Model',
            description: 'Random forest model trained on UFC fight data procured with custom web scraper',
            category: 'AI',
            link: 'https://github.com/Mathew-Maradin/UFC-AI-Fight-Predictor',
            image: ufc,
        },
        {
            id: 3,
            title: 'Nexum',
            description: 'DeFi marketplace for datasets to train AI models on the Ethereum blockchain',
            category: 'Crypto',
            link: 'https://devpost.com/software/nexum-g6siu0',
            image: nexum,
        },
        {
            id: 5,
            title: 'NHL & Rogers parterned fan experience',
            description: 'Hackathon project turned velocity backed endeavour to build a fan experience for Sportsnet and the NHL',
            category: 'Fullstack',
            link: 'https://uwaterloo.ca/news/hacking-hockey-future',
            image: NHL,
        },
        {
            id: 1,
            title: 'Smart Mirror',
            description: 'Raspberry Pi powered smart mirror built on magic mirror 2',
            category: 'Hardware',
            link: 'https://github.com/Mathew-Maradin/Smart-Mirror',
            image: mirrorImage,
        },
        {
            id: 2,
            title: 'Electric Skateboard',
            description: 'Powered by a custom 18650 cell battery pack that goes 30 km/hr',
            category: 'Hardware',
            link: 'https://github.com/Mathew-Maradin/Electric-Skateboard',
            image: skate,
        }];

    const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <div id='projects' className="bg-gray-100 py-20">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
            <div className="flex justify-center mb-8 flex-wrap pt-5">
                <button
                className={`mr-4 py-2 px-4 rounded-full ${selectedCategory === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setSelectedCategory('All')}
                >
                All
                </button>
                <button
                className={`mr-4 py-2 px-4 rounded-full ${selectedCategory === 'AI' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setSelectedCategory('AI')}
                >
                AI
                </button>
                <button
                className={`mr-4 py-2 px-4 rounded-full ${selectedCategory === 'Fullstack' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setSelectedCategory('Fullstack')}
                >
                Fullstack
                </button>
                <button
                className={`py-2 px-4 rounded-full ${selectedCategory === 'Hardware' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setSelectedCategory('Hardware')}
                >
                Hardware
                </button>
                <button
                className={`py-2 px-4 rounded-full ${selectedCategory === 'Crypto' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setSelectedCategory('Crypto')}
                >
                Crypto
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => (
                    <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-contain pt-5" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                                <p className="text-sm mb-4">{project.description}</p>
                                <span className="bg-blue-500 text-white font-bold py-1 px-2 rounded-full">{project.category}</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Projects;

