import React from 'react';
import techData from './techData';
import TechIcon from './TechIcon';

export default function SmallTechIcons({ labels, path_, size = 60 }) 
{
    // console.log(labels);
  const orderedTechs = labels.map(label => techData.find(tech => tech.label === label)).filter(Boolean);
    
  return (
    <div className="tech-icons-container">
      {orderedTechs.map((tech, index) => (
        <TechIcon
          key={index}
          icon={React.cloneElement(tech.icon, { size })}
          label={tech.label}
          path={path_}
        />
      ))}
    </div>
  );
}
